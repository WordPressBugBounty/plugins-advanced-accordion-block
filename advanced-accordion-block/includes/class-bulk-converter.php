<?php
/**
 * Bulk Accordion Converter Engine for Advanced Accordion Block
 *
 * Scans the entire website for WordPress default accordions, details blocks,
 * and Rank Math FAQ blocks and converts them to Advanced Accordion Blocks.
 *
 * @package Advanced_Accordion_Block
 */

if ( ! defined( "ABSPATH" ) ) {
	exit;
}

class AAB_Bulk_Converter {

	/**
	 * Instance of this class.
	 *
	 * @var AAB_Bulk_Converter|null
	 */
	private static $instance = null;

	/**
	 * Get singleton instance.
	 *
	 * @return AAB_Bulk_Converter
	 */
	public static function get_instance() {
		if ( null === self::$instance ) {
			self::$instance = new self();
		}
		return self::$instance;
	}

	/**
	 * Constructor.
	 */
	public function __construct() {
		add_action( "wp_ajax_aab_scan_site_accordions", [ $this, "ajax_scan_site_accordions" ] );
		add_action( "wp_ajax_aab_bulk_convert_accordions", [ $this, "ajax_bulk_convert_accordions" ] );
	}

	/**
	 * Static initializer.
	 */
	public static function init() {
		self::get_instance();
	}

	/**
	 * Supported target post types for scanning.
	 *
	 * @return array
	 */
	public function get_supported_post_types() {
		$post_types = get_post_types( [ "public" => true ], "objects" );
		$supported  = [];

		$excluded = [ "attachment", "revision", "nav_menu_item", "custom_css", "customize_changeset", "oembed_cache", "user_request", "wp_block", "wp_template", "wp_template_part", "wp_navigation" ];

		foreach ( $post_types as $pt => $obj ) {
			if ( ! in_array( $pt, $excluded, true ) ) {
				$supported[ $pt ] = [
					"name"  => $pt,
					"label" => $obj->labels->singular_name ?: $obj->label,
				];
			}
		}

		return $supported;
	}

	/**
	 * AJAX Handler: Scan site for candidate accordion blocks.
	 */
	public function ajax_scan_site_accordions() {
		check_ajax_referer( "aab_plugin_action", "nonce" );

		if ( ! current_user_can( "manage_options" ) ) {
			wp_send_json_error( [ "message" => esc_html__( "Unauthorized access.", "advanced-accordion-block" ) ], 403 );
		}

		global $wpdb;

		$selected_post_types = isset( $_POST["post_types"] ) && is_array( $_POST["post_types"] )
			? array_map( "sanitize_text_field", $_POST["post_types"] )
			: array_keys( $this->get_supported_post_types() );

		if ( empty( $selected_post_types ) ) {
			$selected_post_types = [ "post", "page" ];
		}

		$selected_convert_types = isset( $_POST["convert_types"] ) && is_array( $_POST["convert_types"] )
			? array_map( "sanitize_text_field", $_POST["convert_types"] )
			: [ "rank_math", "core_accordion", "core_details" ];

		if ( empty( $selected_convert_types ) ) {
			$selected_convert_types = [ "rank_math", "core_accordion", "core_details" ];
		}

		$needle_map = [
			"rank_math"      => [ "<!-- wp:rank-math/faq-block" ],
			"core_details"   => [ "<!-- wp:details", "<!-- wp:core/details" ],
			"core_accordion" => [ "<!-- wp:accordion", "<!-- wp:core/accordion" ],
		];

		$needles = [];
		foreach ( $selected_convert_types as $type ) {
			if ( isset( $needle_map[ $type ] ) ) {
				$needles = array_merge( $needles, $needle_map[ $type ] );
			}
		}

		if ( empty( $needles ) ) {
			$needles = [
				"<!-- wp:rank-math/faq-block",
				"<!-- wp:details",
				"<!-- wp:core/details",
				"<!-- wp:accordion",
				"<!-- wp:core/accordion",
			];
		}

		// Build WHERE conditions
		$pt_placeholders = implode( ",", array_fill( 0, count( $selected_post_types ), "%s" ) );
		$like_clauses    = [];
		$like_params     = [];

		foreach ( $needles as $needle ) {
			$like_clauses[] = "post_content LIKE %s";
			$like_params[]  = "%" . $wpdb->esc_like( $needle ) . "%";
		}

		$query_params = array_merge( $selected_post_types, $like_params );

		$sql = "
			SELECT ID, post_title, post_type, post_status, post_modified, post_content
			FROM {$wpdb->posts}
			WHERE post_status IN (\x27publish\x27, \x27draft\x27, \x27pending\x27, \x27future\x27, \x27private\x27)
			AND post_type IN ({$pt_placeholders})
			AND (" . implode( " OR ", $like_clauses ) . ")
			ORDER BY post_modified DESC
		";

		$prepared_sql = $wpdb->prepare( $sql, $query_params );
		$posts        = $wpdb->get_results( $prepared_sql );

		$matched_posts = [];
		$stats         = [
			"total_posts"           => 0,
			"total_blocks"          => 0,
			"rank_math_blocks"      => 0,
			"rank_math_questions"   => 0,
			"core_accordion_blocks" => 0,
			"core_details_blocks"   => 0,
			"by_post_type"          => [],
		];

		foreach ( $posts as $post ) {
			$blocks = parse_blocks( $post->post_content );
			$counts = [
				"rank_math"           => 0,
				"rank_math_questions" => 0,
				"core_accordion"      => 0,
				"core_details"        => 0,
			];

			$this->count_candidate_blocks_in_tree( $blocks, $counts, $selected_convert_types );

			$total_in_post = $counts["rank_math"] + $counts["core_accordion"] + $counts["core_details"];

			if ( $total_in_post > 0 ) {
				$stats["total_posts"]++;
				$stats["total_blocks"]          += $total_in_post;
				$stats["rank_math_blocks"]      += $counts["rank_math"];
				$stats["rank_math_questions"]   += $counts["rank_math_questions"];
				$stats["core_accordion_blocks"] += $counts["core_accordion"];
				$stats["core_details_blocks"]   += $counts["core_details"];

				$pt = $post->post_type;
				$stats["by_post_type"][ $pt ] = ( $stats["by_post_type"][ $pt ] ?? 0 ) + 1;

				$post_type_obj = get_post_type_object( $post->post_type );

				$matched_posts[] = [
					"id"                  => (int) $post->ID,
					"title"               => $post->post_title ? $post->post_title : sprintf( __( "#%d (No title)", "advanced-accordion-block" ), $post->ID ),
					"post_type"           => $post->post_type,
					"post_type_label"     => $post_type_obj ? $post_type_obj->labels->singular_name : $post->post_type,
					"status"              => $post->post_status,
					"edit_url"            => get_edit_post_link( $post->ID, "raw" ),
					"view_url"            => get_permalink( $post->ID ),
					"rank_math_count"     => $counts["rank_math"],
					"rank_math_questions" => $counts["rank_math_questions"],
					"core_accordion_count"=> $counts["core_accordion"],
					"core_details_count"  => $counts["core_details"],
					"total_accordions"    => $total_in_post,
				];
			}
		}

		wp_send_json_success( [
			"stats" => $stats,
			"posts" => $matched_posts,
		] );
	}

	/**
	 * Helper: Recursively count candidate blocks in a block tree.
	 *
	 * @param array $blocks
	 * @param array $counts
	 * @param array $convert_types
	 */
	private function count_candidate_blocks_in_tree( $blocks, &$counts, $convert_types = [] ) {
		if ( ! is_array( $blocks ) ) {
			return;
		}

		foreach ( $blocks as $block ) {
			$name = $block["blockName"] ?? "";

			if ( "rank-math/faq-block" === $name && ( empty( $convert_types ) || in_array( "rank_math", $convert_types, true ) ) ) {
				$counts["rank_math"]++;
				$questions = $block["attrs"]["questions"] ?? [];
				if ( is_array( $questions ) ) {
					$counts["rank_math_questions"] += count( $questions );
				} else {
					$counts["rank_math_questions"] += 1;
				}
			} elseif ( ( "core/accordion" === $name || "core/accordion-item" === $name ) && ( empty( $convert_types ) || in_array( "core_accordion", $convert_types, true ) ) ) {
				$counts["core_accordion"]++;
			} elseif ( "core/details" === $name && ( empty( $convert_types ) || in_array( "core_details", $convert_types, true ) ) ) {
				$counts["core_details"]++;
			}

			if ( ! empty( $block["innerBlocks"] ) && "core/accordion" !== $name ) {
				$this->count_candidate_blocks_in_tree( $block["innerBlocks"], $counts, $convert_types );
			}
		}
	}

	/**
	 * AJAX Handler: Bulk convert a batch of posts.
	 */
	public function ajax_bulk_convert_accordions() {
		check_ajax_referer( "aab_plugin_action", "nonce" );

		if ( ! current_user_can( "manage_options" ) ) {
			wp_send_json_error( [ "message" => esc_html__( "Unauthorized access.", "advanced-accordion-block" ) ], 403 );
		}

		$post_ids = isset( $_POST["post_ids"] ) && is_array( $_POST["post_ids"] )
			? array_map( "intval", $_POST["post_ids"] )
			: [];

		if ( empty( $post_ids ) ) {
			wp_send_json_error( [ "message" => esc_html__( "No posts provided for conversion.", "advanced-accordion-block" ) ] );
		}

		$convert_types = isset( $_POST["convert_types"] ) && is_array( $_POST["convert_types"] )
			? array_map( "sanitize_text_field", $_POST["convert_types"] )
			: [ "rank_math", "core_accordion", "core_details" ];

		$enable_faq_schema = ! empty( $_POST["enable_faq_schema"] );

		$create_revision = ! empty( $_POST["create_revision"] );

		$results = [];

		foreach ( $post_ids as $post_id ) {
			$post = get_post( $post_id );
			if ( ! $post ) {
				$results[] = [
					"id"      => $post_id,
					"title"   => sprintf( __( "Post #%d", "advanced-accordion-block" ), $post_id ),
					"success" => false,
					"message" => esc_html__( "Post not found.", "advanced-accordion-block" ),
					"counts"  => [],
				];
				continue;
			}

			if ( ! current_user_can( "edit_post", $post_id ) ) {
				$results[] = [
					"id"      => $post_id,
					"title"   => $post->post_title,
					"success" => false,
					"message" => esc_html__( "Permission denied to edit this post.", "advanced-accordion-block" ),
					"counts"  => [],
				];
				continue;
			}

			$blocks           = parse_blocks( $post->post_content );
			$converted_counts = [
				"rank_math"      => 0,
				"core_accordion" => 0,
				"core_details"   => 0,
			];

			$options = [
				"convert_types"     => $convert_types,
				"enable_faq_schema" => $enable_faq_schema,
			];

			$transformed_blocks = $this->transform_blocks_tree( $blocks, $options, $converted_counts );
			$total_converted    = array_sum( $converted_counts );

			if ( $total_converted > 0 ) {
				if ( $create_revision ) {
					wp_save_post_revision( $post_id );
				}

				$new_content = serialize_blocks( $transformed_blocks );

				$kses_removed = false;
				if ( ! current_user_can( "unfiltered_html" ) ) {
					remove_filter( "content_save_pre", "wp_filter_post_kses" );
					remove_filter( "content_filtered_save_pre", "wp_filter_post_kses" );
					$kses_removed = true;
				}

				$update_result = wp_update_post( [
					"ID"           => $post_id,
					"post_content" => $new_content,
				], true );

				if ( $kses_removed ) {
					add_filter( "content_save_pre", "wp_filter_post_kses" );
					add_filter( "content_filtered_save_pre", "wp_filter_post_kses" );
				}

				if ( is_wp_error( $update_result ) ) {
					$results[] = [
						"id"      => $post_id,
						"title"   => $post->post_title,
						"success" => false,
						"message" => $update_result->get_error_message(),
						"counts"  => $converted_counts,
					];
				} else {
					$results[] = [
						"id"              => $post_id,
						"title"           => $post->post_title ? $post->post_title : sprintf( __( "#%d (No title)", "advanced-accordion-block" ), $post_id ),
						"success"         => true,
						"total_converted" => $total_converted,
						"counts"          => $converted_counts,
						"edit_url"        => get_edit_post_link( $post_id, "raw" ),
						"view_url"        => get_permalink( $post_id ),
					];
				}
			} else {
				$results[] = [
					"id"              => $post_id,
					"title"           => $post->post_title,
					"success"         => false,
					"total_converted" => 0,
					"counts"          => $converted_counts,
					"message"         => esc_html__( "No matching blocks found to convert.", "advanced-accordion-block" ),
				];
			}
		}

		wp_send_json_success( [
			"results" => $results,
		] );
	}

	/**
	 * Recursively transform blocks tree.
	 *
	 * @param array $blocks
	 * @param array $options
	 * @param array $converted_counts
	 * @return array Transformed blocks
	 */
	public function transform_blocks_tree( $blocks, $options, &$converted_counts ) {
		if ( ! is_array( $blocks ) ) {
			return $blocks;
		}

		$transformed = [];
		$i           = 0;
		$count       = count( $blocks );
		$convert_types = $options["convert_types"] ?? [ "rank_math", "core_accordion", "core_details" ];

		while ( $i < $count ) {
			$block = $blocks[ $i ];
			$name  = $block["blockName"] ?? "";

			// 1. Rank Math FAQ Block -> AAB Group Accordion
			if ( "rank-math/faq-block" === $name && in_array( "rank_math", $convert_types, true ) ) {
				$aab_group = $this->convert_rank_math_faq_to_aab( $block, $options );
				$transformed[] = $aab_group;
				$converted_counts["rank_math"]++;
				$i++;
				continue;
			}

			// 2. Core Accordion parent -> one Separate Accordion per item
			if ( "core/accordion" === $name && in_array( "core_accordion", $convert_types, true ) ) {
				foreach ( $this->convert_core_accordion_to_separate_blocks( $block ) as $separate ) {
					$transformed[] = $separate;
					$converted_counts["core_accordion"]++;
				}
				$i++;
				continue;
			}

			// 3. Core Details Block -> Separate Accordion (standalone)
			if ( "core/details" === $name && in_array( "core_details", $convert_types, true ) ) {
				$transformed[] = $this->convert_details_to_separate( $block );
				$converted_counts["core_details"]++;
				$i++;
				continue;
			}

			// 4. Standalone Core Accordion Item -> Separate Accordion
			if ( "core/accordion-item" === $name && in_array( "core_accordion", $convert_types, true ) ) {
				$transformed[] = $this->convert_core_item_to_separate( $block );
				$converted_counts["core_accordion"]++;
				$i++;
				continue;
			}

			// Process nested inner blocks for containers (Columns, Groups, etc.)
			if ( ! empty( $block["innerBlocks"] ) ) {
				$block["innerBlocks"] = $this->transform_blocks_tree( $block["innerBlocks"], $options, $converted_counts );
			}

			$transformed[] = $block;
			$i++;
		}

		return $transformed;
	}

	/**
	 * Generate a uniqueId in the same shape the editor uses: 8 hex chars + "_0".
	 *
	 * @return string
	 */
	private function generate_unique_id() {
		return substr( md5( uniqid( (string) wp_rand(), true ) ), 0, 8 ) . "_0";
	}

	/**
	 * Normalize a heading string.
	 *
	 * @param string $heading
	 * @param string $fallback
	 * @return string
	 */
	private function clean_heading( $heading, $fallback = "Accordion Item" ) {
		$heading = trim( wp_strip_all_tags( (string) $heading ) );
		$heading = preg_replace( '/[\s\+\-\x{2715}\x{25BC}\x{25B6}\x{25C0}\x{25B2}\x{002B}\x{2212}]+$/u', '', $heading );
		return $heading !== "" ? $heading : $fallback;
	}

	/**
	 * Normalize a heading tag.
	 *
	 * @param string $heading_tag
	 * @return string
	 */
	private function normalize_heading_tag( $heading_tag ) {
		return ( ! empty( $heading_tag ) && preg_match( "/^h[1-6]$/i", $heading_tag ) )
			? strtolower( $heading_tag )
			: "h5";
	}

	/**
	 * Build a core/paragraph block.
	 *
	 * @param string $content Inner HTML (not wrapped in <p>).
	 * @return array
	 */
	private function make_paragraph_block( $content = "" ) {
		$content = (string) $content;
		$inner   = "<p>" . $content . "</p>";
		$attrs   = ( "" === $content ) ? [] : [ "content" => $content ];

		return [
			"blockName"    => "core/paragraph",
			"attrs"        => $attrs,
			"innerBlocks"  => [],
			"innerHTML"    => $inner,
			"innerContent" => [ $inner ],
		];
	}

	/**
	 * Pull image id + URL from a Rank Math FAQ question object.
	 *
	 * @param array $question
	 * @return array{id:int,url:string,alt:string}
	 */
	private function extract_rank_math_question_image( $question ) {
		$id  = 0;
		$url = "";
		$alt = "";

		if ( ! empty( $question["imageID"] ) && is_numeric( $question["imageID"] ) ) {
			$id = (int) $question["imageID"];
		} elseif ( ! empty( $question["imageId"] ) && is_numeric( $question["imageId"] ) ) {
			$id = (int) $question["imageId"];
		} elseif ( isset( $question["image"] ) && ( is_numeric( $question["image"] ) || ( is_string( $question["image"] ) && ctype_digit( $question["image"] ) ) ) ) {
			$id = (int) $question["image"];
		} elseif ( is_array( $question["image"] ?? null ) ) {
			if ( ! empty( $question["image"]["id"] ) ) {
				$id = (int) $question["image"]["id"];
			}
			$url = $question["image"]["url"] ?? ( $question["image"]["src"] ?? ( $question["image"]["source_url"] ?? "" ) );
			$alt = $question["image"]["alt"] ?? "";
		}

		if ( empty( $url ) ) {
			if ( ! empty( $question["imageUrl"] ) ) {
				$url = $question["imageUrl"];
			} elseif ( ! empty( $question["imageURL"] ) ) {
				$url = $question["imageURL"];
			} elseif ( ! empty( $question["imageSrc"] ) ) {
				$url = $question["imageSrc"];
			} elseif ( ! empty( $question["image"] ) && is_string( $question["image"] ) && ! ctype_digit( $question["image"] ) ) {
				$url = $question["image"];
			}
		}

		$url = $url ? esc_url_raw( $url ) : "";

		if ( ! $url && $id ) {
			$resolved = wp_get_attachment_image_url( $id, "full" );
			if ( $resolved ) {
				$url = $resolved;
			}
		}

		if ( $id && ! $alt ) {
			$alt = (string) get_post_meta( $id, "_wp_attachment_image_alt", true );
		}

		return [
			"id"  => $id,
			"url" => $url,
			"alt" => $alt,
		];
	}

	/**
	 * Collect image URLs from Rank Math FAQ saved markup, in question order.
	 *
	 * @param string $html
	 * @return array
	 */
	private function extract_rank_math_markup_images( $html ) {
		if ( "" === trim( (string) $html ) ) {
			return [];
		}

		$urls = [];
		if ( preg_match_all( '/<img[^>]+src=["\']([^"\']+)["\']/i', $html, $matches ) ) {
			foreach ( $matches[1] as $src ) {
				$src = esc_url_raw( $src );
				if ( $src ) {
					$urls[] = $src;
				}
			}
		}

		return $urls;
	}

	/**
	 * Build a core/image block whose saved HTML matches Gutenberg's current save().
	 *
	 * @param int    $id
	 * @param string $url
	 * @param string $alt
	 * @return array|null
	 */
	private function make_core_image_block( $id, $url, $alt = "" ) {
		$url = esc_url_raw( (string) $url );
		if ( ! $url ) {
			return null;
		}

		$id  = absint( $id );
		$alt = (string) $alt;

		$attrs = [
			"url"             => $url,
			"alt"             => $alt,
			"sizeSlug"        => "full",
			"linkDestination" => "none",
		];
		if ( $id ) {
			$attrs["id"] = $id;
		}

		$img_class = $id ? ' class="wp-image-' . $id . '"' : "";
		$figure    = '<figure class="wp-block-image size-full"><img src="' . esc_url( $url ) . '" alt="' . esc_attr( $alt ) . '"' . $img_class . "/></figure>";

		return [
			"blockName"    => "core/image",
			"attrs"        => $attrs,
			"innerBlocks"  => [],
			"innerHTML"    => $figure,
			"innerContent" => [ $figure ],
		];
	}

	/**
	 * Convert HTML (or already-serialized blocks) into a Gutenberg inner-block list.
	 *
	 * @param string $html
	 * @return array
	 */
	private function html_to_blocks( $html ) {
		$html = trim( (string) $html );
		if ( "" === $html ) {
			return [ $this->make_paragraph_block( "" ) ];
		}

		if ( false !== strpos( $html, "<!-- wp:" ) ) {
			return $this->normalize_inner_blocks( parse_blocks( $html ) );
		}

		$autop = wpautop( $html );
		if ( preg_match_all( "/<p\b[^>]*>.*?<\/p>/is", $autop, $matches ) && ! empty( $matches[0] ) ) {
			$blocks = [];
			foreach ( $matches[0] as $p_html ) {
				$inner    = preg_replace( "/^<p\b[^>]*>|<\/p>$/is", "", $p_html );
				$blocks[] = $this->make_paragraph_block( $inner );
			}
			return $blocks;
		}

		return [ $this->make_paragraph_block( $html ) ];
	}

	/**
	 * Drop empty freeform chunks and convert leftover HTML into paragraph blocks.
	 *
	 * @param array $blocks
	 * @return array
	 */
	private function normalize_inner_blocks( $blocks ) {
		if ( empty( $blocks ) || ! is_array( $blocks ) ) {
			return [ $this->make_paragraph_block( "" ) ];
		}

		$out = [];
		foreach ( $blocks as $block ) {
			if ( ! is_array( $block ) ) {
				continue;
			}

			$name = $block["blockName"] ?? "";
			if ( empty( $name ) ) {
				$html = trim( $block["innerHTML"] ?? "" );
				if ( "" === $html ) {
					continue;
				}
				$out = array_merge( $out, $this->html_to_blocks( $html ) );
				continue;
			}

			$out[] = $block;
		}

		return ! empty( $out ) ? $out : [ $this->make_paragraph_block( "" ) ];
	}

	/**
	 * Pack innerContent around inner blocks for serialize_blocks().
	 *
	 * @param string $open_html
	 * @param string $close_html
	 * @param array  $inner_blocks
	 * @return array
	 */
	private function wrap_inner_content( $open_html, $close_html, $inner_blocks ) {
		return array_merge(
			[ $open_html ],
			array_fill( 0, count( $inner_blocks ), null ),
			[ $close_html ]
		);
	}

	/**
	 * Build an aab/accordion-item child that matches the current Gutenberg save() output
	 * for a closed item with default attributes.
	 *
	 * @param string $heading
	 * @param string $heading_tag
	 * @param array  $panel_inner_blocks
	 * @return array
	 */
	public function build_aab_accordion_item_block( $heading, $heading_tag = "h5", $panel_inner_blocks = [] ) {
		$heading     = $this->clean_heading( $heading );
		$heading_tag = $this->normalize_heading_tag( $heading_tag );
		$inner       = $this->normalize_inner_blocks( $panel_inner_blocks );
		$item_uid    = $this->generate_unique_id();
		$safe_title  = esc_html( $heading );

		$item_attrs = [
			"uniqueId" => $item_uid,
			"heading"  => $heading,
		];
		if ( "h5" !== $heading_tag ) {
			$item_attrs["headingTag"] = $heading_tag;
		}

		$open_html = "<div class=\"wp-block-aab-accordion-item aagb__accordion_container panel\">"
			. "<div class=\"aagb__accordion_head\">"
			. "<div class=\"aagb__accordion_heading\">"
			. "<div class=\"head_content_wrapper\"><div class=\"title_wrapper\">"
			. "<" . $heading_tag . " class=\"aagb__accordion_title\">" . $safe_title . "</" . $heading_tag . ">"
			. "</div></div></div>"
			. "<div class=\"aagb__accordion_icon\"><div class=\"aagb__icon_dashicons_box\">"
			. "<span class=\"aagb__icon dashicons dashicons-plus-alt2\"></span>"
			. "</div></div></div>"
			. "<div class=\"aagb__accordion_body  \" role=\"region\">"
			. "<div class=\"aagb__accordion_component\">";

		$close_html = "</div></div></div>";

		return [
			"blockName"    => "aab/accordion-item",
			"attrs"        => $item_attrs,
			"innerBlocks"  => $inner,
			"innerHTML"    => $open_html . $close_html,
			"innerContent" => $this->wrap_inner_content( $open_html, $close_html, $inner ),
		];
	}

	/**
	 * Build a standalone aab/accordion-block that matches the current Gutenberg save() output
	 * for a closed item with default attributes.
	 *
	 * @param string $heading
	 * @param string $heading_tag
	 * @param array  $panel_inner_blocks
	 * @return array
	 */
	public function build_aab_separate_accordion_block( $heading, $heading_tag = "h5", $panel_inner_blocks = [] ) {
		$heading     = $this->clean_heading( $heading );
		$heading_tag = $this->normalize_heading_tag( $heading_tag );
		$inner       = $this->normalize_inner_blocks( $panel_inner_blocks );
		$uid         = $this->generate_unique_id();
		$safe_title  = esc_html( $heading );

		$attrs = [
			"uniqueId" => $uid,
			"heading"  => $heading,
		];
		if ( "h5" !== $heading_tag ) {
			$attrs["headingTag"] = $heading_tag;
		}

		// Must match accordion/output save() with default attrs, including empty
		// inline styles React still serializes (border:"", font-size:"").
		$open_html = "<div class=\"wp-block-aab-accordion-block aab__accordion_container  accessibilityOn\" style=\"margin-top:0px;margin-bottom:15px;border:1px solid #e3dfdf38\" id=\"aab_accordion_" . $uid . "\" role=\"button\" aria-expanded=\"false\" tabindex=\"0\">"
			. "<div class=\"aab__accordion_head aab_right_icon \" style=\"border-top:none;border-right:none;border-bottom:none;border-left:none\">"
			. "<div class=\"aab__accordion_heading aab_right_icon aab_right_link\">"
			. "<div class=\"head_content_wrapper\"><div class=\"title_wrapper\">"
			. "<" . $heading_tag . " class=\"aab__accordion_title\" style=\"margin:0\">" . $safe_title . "</" . $heading_tag . ">"
			. "</div></div></div>"
			. "<div class=\"aab__accordion_icon\" style=\"border:\"><span class=\"aab__icon dashicons dashicons-plus-alt2\" style=\"font-size:\"></span></div>"
			. "</div>"
			. "<div class=\"aab__accordion_body  \" role=\"region\" style=\"display:none\">"
			. "<div class=\"aab__accordion_component\">";

		$close_html = "</div></div></div>";

		return [
			"blockName"    => "aab/accordion-block",
			"attrs"        => $attrs,
			"innerBlocks"  => $inner,
			"innerHTML"    => $open_html . $close_html,
			"innerContent" => $this->wrap_inner_content( $open_html, $close_html, $inner ),
		];
	}

	/**
	 * Build an aab/group-accordion wrapper that matches the current Gutenberg save() output.
	 *
	 * @param array $aab_items
	 * @param bool  $faq_schema
	 * @return array
	 */
	public function build_aab_group_accordion_block( $aab_items, $faq_schema = false ) {
		if ( empty( $aab_items ) ) {
			$aab_items = [
				$this->build_aab_accordion_item_block( "Accordion Heading", "h5", [] ),
			];
		}

		$group_uid = $this->generate_unique_id();
		$open_html  = "<div class=\"wp-block-aab-group-accordion searchable aagb_accordion_" . $group_uid . " click\" id=\"group-accordion-" . $group_uid . "\">";
		$close_html = "</div>";

		$attrs = [
			"uniqueId" => $group_uid,
		];
		if ( $faq_schema ) {
			$attrs["faqSchema"] = true;
		}

		return [
			"blockName"    => "aab/group-accordion",
			"attrs"        => $attrs,
			"innerBlocks"  => $aab_items,
			"innerHTML"    => $open_html . $close_html,
			"innerContent" => $this->wrap_inner_content( $open_html, $close_html, $aab_items ),
		];
	}

	/**
	 * Convert Rank Math FAQ block to AAB Group Accordion block.
	 *
	 * @param array $block
	 * @param array $options
	 * @return array
	 */
	public function convert_rank_math_faq_to_aab( $block, $options ) {
		$attrs        = $block["attrs"] ?? [];
		$questions    = $attrs["questions"] ?? [];
		$titleWrapper = ! empty( $attrs["titleWrapper"] ) && preg_match( "/^h[1-6]$/i", $attrs["titleWrapper"] )
			? strtolower( $attrs["titleWrapper"] )
			: "h5";

		$faq_schema = ! empty( $options["enable_faq_schema"] );
		$aab_items  = [];
		$markup_images = $this->extract_rank_math_markup_images( $block["innerHTML"] ?? "" );
		$image_index   = 0;

		if ( is_array( $questions ) && ! empty( $questions ) ) {
			foreach ( $questions as $q ) {
				$title   = $q["title"] ?? ( $q["question"] ?? "" );
				$content = $q["content"] ?? ( $q["answer"] ?? "" );

				$item_inner_blocks = $this->html_to_blocks( $content );

				$image     = $this->extract_rank_math_question_image( $q );
				$image_id  = $image["id"];
				$image_url = $image["url"];
				$image_alt = $image["alt"] ? $image["alt"] : wp_strip_all_tags( $title );

				if ( ! $image_url && isset( $markup_images[ $image_index ] ) ) {
					$image_url = $markup_images[ $image_index ];
					$image_index++;
				}

				$already_has_image = false;
				foreach ( $item_inner_blocks as $inner ) {
					if ( ( $inner["blockName"] ?? "" ) === "core/image" ) {
						$already_has_image = true;
						break;
					}
				}

				if ( ! $already_has_image ) {
					$image_block = $this->make_core_image_block( $image_id, $image_url, $image_alt );
					if ( $image_block ) {
						$item_inner_blocks[] = $image_block;
					}
				}

				$aab_items[] = $this->build_aab_accordion_item_block(
					$title,
					$titleWrapper,
					$item_inner_blocks
				);
			}
		}

		return $this->build_aab_group_accordion_block( $aab_items, $faq_schema );
	}

	/**
	 * Convert a Core Accordion parent into separate AAB accordion blocks.
	 *
	 * @param array $block
	 * @return array
	 */
	public function convert_core_accordion_to_separate_blocks( $block ) {
		$separated = [];
		foreach ( $block["innerBlocks"] ?? [] as $child ) {
			if ( ( $child["blockName"] ?? "" ) === "core/accordion-item" ) {
				$separated[] = $this->convert_core_item_to_separate( $child );
			}
		}
		return $separated;
	}

	/**
	 * Convert a Core Accordion Item into a standalone AAB accordion.
	 *
	 * @param array $item_block
	 * @return array
	 */
	public function convert_core_item_to_separate( $item_block ) {
		$parts = $this->extract_core_accordion_item_parts( $item_block );
		return $this->build_aab_separate_accordion_block(
			$parts["heading"],
			$parts["heading_tag"],
			$parts["inner_blocks"]
		);
	}

	/**
	 * Convert a Core Details block into a standalone AAB accordion.
	 *
	 * @param array $details
	 * @return array
	 */
	public function convert_details_to_separate( $details ) {
		$summary = $details["attrs"]["summary"] ?? "";
		if ( empty( $summary ) && ! empty( $details["innerHTML"] ) ) {
			if ( preg_match( "/<summary[^>]*>(.*?)<\/summary>/is", $details["innerHTML"], $matches ) ) {
				$clean_sum = preg_replace( '/<(?:span|i|div|svg)[^>]*class="[^"]*(?:icon|toggle|indicator|plus|dashicon)[^"]*"[^>]*>.*?<\/(?:span|i|div|svg)>/is', "", $matches[1] );
				$summary   = trim( wp_strip_all_tags( $clean_sum ) );
			}
		}

		return $this->build_aab_separate_accordion_block(
			$this->clean_heading( $summary, "Details" ),
			"h5",
			$details["innerBlocks"] ?? []
		);
	}

	/**
	 * Pull heading + panel content from a core/accordion-item block.
	 *
	 * @param array $item_block
	 * @return array{heading:string,heading_tag:string,inner_blocks:array}
	 */
	private function extract_core_accordion_item_parts( $item_block ) {
		$heading_block = null;
		$panel_block   = null;

		foreach ( $item_block["innerBlocks"] ?? [] as $b ) {
			$name = $b["blockName"] ?? "";
			if ( in_array( $name, [ "core/accordion-heading", "accordion-heading" ], true ) ) {
				$heading_block = $b;
			} elseif ( in_array( $name, [ "core/accordion-panel", "accordion-panel" ], true ) ) {
				$panel_block = $b;
			}
		}

		$heading = $this->extract_plain_title(
			$heading_block["attrs"]["title"] ?? ( $heading_block["attrs"]["content"] ?? ( $item_block["attrs"]["title"] ?? ( $item_block["attrs"]["heading"] ?? "" ) ) )
		);

		if ( empty( $heading ) && ! empty( $heading_block["innerBlocks"] ) ) {
			$first_inner = $heading_block["innerBlocks"][0];
			$heading     = $this->extract_plain_title( $first_inner["attrs"]["content"] ?? ( $first_inner["attrs"]["title"] ?? "" ) );
		}

		// WP 6.9 stores the title in .wp-block-accordion-heading__toggle-title (rich-text source).
		if ( empty( $heading ) ) {
			$heading = $this->extract_core_accordion_title_from_html( $heading_block["innerHTML"] ?? "" );
		}
		if ( empty( $heading ) ) {
			$heading = $this->extract_core_accordion_title_from_html( $item_block["innerHTML"] ?? "" );
		}

		$heading_tag = "h5";
		$html_for_tag = $heading_block["innerHTML"] ?? ( $item_block["innerHTML"] ?? "" );
		if ( preg_match( "/<(h[1-6])\b/i", $html_for_tag, $tag_match ) ) {
			$heading_tag = strtolower( $tag_match[1] );
		} elseif ( ! empty( $heading_block["attrs"]["level"] ) ) {
			$heading_tag = "h" . max( 1, min( 6, (int) $heading_block["attrs"]["level"] ) );
		}

		$panel_inner_blocks = $panel_block["innerBlocks"] ?? [];
		if ( empty( $panel_inner_blocks ) && ! empty( $item_block["innerBlocks"] ) ) {
			$panel_inner_blocks = array_values( array_filter( $item_block["innerBlocks"], function( $b ) {
				return ! in_array( $b["blockName"] ?? "", [ "core/accordion-heading", "accordion-heading" ], true );
			} ) );
		}

		return [
			"heading"      => $this->clean_heading( $heading ),
			"heading_tag"  => $heading_tag,
			"inner_blocks" => $panel_inner_blocks,
		];
	}

	/**
	 * Coerce a title attribute that may be a string or a rich-text object.
	 *
	 * @param mixed $value
	 * @return string
	 */
	private function extract_plain_title( $value ) {
		if ( is_string( $value ) ) {
			return trim( wp_strip_all_tags( $value ) );
		}
		if ( is_array( $value ) ) {
			if ( ! empty( $value["text"] ) && is_string( $value["text"] ) ) {
				return trim( wp_strip_all_tags( $value["text"] ) );
			}
			if ( ! empty( $value["originalHTML"] ) && is_string( $value["originalHTML"] ) ) {
				return trim( wp_strip_all_tags( $value["originalHTML"] ) );
			}
		}
		return "";
	}

	/**
	 * Read the WP 6.9 accordion heading title from saved markup.
	 *
	 * @param string $html
	 * @return string
	 */
	private function extract_core_accordion_title_from_html( $html ) {
		if ( "" === trim( (string) $html ) ) {
			return "";
		}

		if ( preg_match( '/class="[^"]*accordion-heading__toggle-title[^"]*"[^>]*>(.*?)<\/span>/is', $html, $m ) ) {
			return trim( wp_strip_all_tags( $m[1] ) );
		}

		return "";
	}

}

// Auto-initialize
AAB_Bulk_Converter::init();
