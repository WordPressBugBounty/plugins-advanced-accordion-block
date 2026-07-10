<?php
// Stop Direct Access
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Outputs FAQ Schema markup for accordion blocks.
 *
 * Extracts FAQ data from 'aab/accordion-block' and 'aab/group-accordion' blocks,
 * then generates structured JSON-LD schema for SEO.
 *
 * @return void
 */
if ( ! function_exists( 'aab_output_faq_schema' ) ) {
	function aab_output_faq_schema(): void {
		global $post;
		if ( ! is_singular() || empty( $post ) ) {
			return;
		}
		$blocks   = parse_blocks( $post->post_content );
		$faq_data = []; // Initialize once, outside the loop

		/**
		 * Recursive processor to walk blocks at any nesting depth and extract FAQ entries.
		 *
		 * @param array $block Block data.
		 */
		$process_block = function ( $block ) use ( & $faq_data, & $process_block ) {
			if ( empty( $block ) || ! is_array( $block ) ) {
				return;
			}

			// If this block is an accordion block, accordion item, or group-accordion, try to extract FAQ data
			$blockName = $block['blockName'] ?? '';
			$matches   = [
				'aab/accordion-block',
				'aab/group-accordion',
				'aab/accordion-item',
			];
			if ( in_array( $blockName, $matches, true ) ) {
				$attributes = $block['attrs'] ?? [];
				$faqSchema  = array_key_exists( 'faqSchema', $attributes )
					? $attributes['faqSchema']
					: ( $attributes['defaultStyles']['faqSchema'] ?? false );
				if ( $faqSchema === true && isset( $attributes['heading'] ) ) {
					// Build question text (heading + optional subheading)
					$question_text = wp_strip_all_tags( $attributes['heading'] );
					if ( ! empty( $attributes['subheading'] ) ) {
						$question_text .= ' - ' . wp_strip_all_tags( $attributes['subheading'] );
					}

					// Collect answer text from this block's innerBlocks
					$answer_text = '';
					foreach ( $block['innerBlocks'] ?? [] as $inner_block ) {
						$answer_text .= render_block( $inner_block );
					}

					// Clean up the answer text (strip unnecessary HTML tags)
					$answer_text = wp_strip_all_tags( $answer_text );

					$faq_data[] = [
						'question' => $question_text,
						'answer'   => $answer_text,
					];
				}
			}

			// Always recurse into innerBlocks to find nested accordions/groupings
			if ( ! empty( $block['innerBlocks'] ) && is_array( $block['innerBlocks'] ) ) {
				foreach ( $block['innerBlocks'] as $inner ) {
					$process_block( $inner );
				}
			}
		};

		// Walk all top-level blocks
		foreach ( $blocks as $block ) {
			$process_block( $block );
		}

		// Output the schema if any FAQ data exists
		if ( ! empty( $faq_data ) ) {
			$faq_schema = [
				'@context'   => 'https://schema.org',
				'@type'      => 'FAQPage',
				'mainEntity' => array_map( function ( $faq ) {
					return [
						'@type'          => 'Question',
						'name'           => $faq['question'],
						'acceptedAnswer' => [
							'@type' => 'Answer',
							'text'  => $faq['answer'],
						],
					];
				}, $faq_data ),
			];

			echo '<script type="application/ld+json">' . wp_json_encode( $faq_schema ) . '</script>';
		}
	};
}

add_action( 'wp_head', 'aab_output_faq_schema' );