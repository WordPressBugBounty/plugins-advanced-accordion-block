<?php
// Stop Direct Access
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Class AAB_Enqueue_Block_Assets
 *
 * This class is responsible for enqueuing the necessary assets (JavaScript and CSS)
 * for both the frontend and the block editor in the plugin.
 */
class AAB_Enqueue_Block_Assets {
	/**
	 * Constructor.
	 *
	 * Hooks into the enqueue_block_assets and enqueue_block_editor_assets actions.
	 */
	public function __construct() {
		add_action( 'enqueue_block_assets', [ $this, 'external_libraries' ] );
		add_action( 'enqueue_block_editor_assets', [ $this, 'block_editor_assets' ] );
		// Print before the editor's scripts run so the guard is in place first.
		add_action( 'admin_head', [ $this, 'floating_ui_crash_guard' ], 0 );
	}

	/**
	 * Guard against a fatal floating-ui crash in the block editor.
	 *
	 * WordPress positions Popovers/Tooltips with floating-ui, whose `autoUpdate`
	 * loop calls `window.getComputedStyle( anchor )`. When an anchored element is
	 * removed from the DOM a tick before autoUpdate's cleanup runs (block insert,
	 * removal, or programmatic recovery), the anchor resolves to `null` and
	 * `getComputedStyle( null )` throws "parameter 1 is not of type 'Element'",
	 * which the editor's error boundary turns into a full white-screen.
	 *
	 * A non-Element argument is always a bug in the caller — valid code never
	 * passes one — so it is safe to fall back to <body> and let that stray
	 * positioning pass be a harmless no-op instead of crashing the editor.
	 *
	 * Printed in <head> on block-editor screens so it runs before the editor JS.
	 */
	public function floating_ui_crash_guard() {
		if ( ! function_exists( 'get_current_screen' ) ) {
			return;
		}
		$screen = get_current_screen();
		if ( ! $screen || ! method_exists( $screen, 'is_block_editor' ) || ! $screen->is_block_editor() ) {
			return;
		}

		$js = <<<'JS'
( function () {
	if ( window.__aabFloatingUiGuard ) { return; }
	window.__aabFloatingUiGuard = true;
	var native = window.getComputedStyle;
	if ( typeof native !== 'function' ) { return; }
	window.getComputedStyle = function ( element, pseudoElt ) {
		if ( ! ( element instanceof Element ) ) {
			return native.call( window, document.body, pseudoElt || undefined );
		}
		return native.call( window, element, pseudoElt );
	};
} )();
JS;

		if ( function_exists( 'wp_print_inline_script_tag' ) ) {
			wp_print_inline_script_tag( $js );
		} else {
			echo '<script>' . $js . '</script>'; // phpcs:ignore
		}
	}

	/**
	 * Enqueue Block FrontEnd Assets
	 */
	public function external_libraries() {
		if ( ! is_admin() ) {
			wp_enqueue_style( 'dashicons' );
		}

		wp_register_script(
			'anchor',
			AAGB_ASSETS . 'js/anchor.js',
			[ 'jquery' ],
			'5.0.0',
			true
		);

		wp_register_script(
			'aagb-separate-accordion',
			AAGB_ASSETS . 'js/separate-accordion.js',
			[ 'jquery' ],
			AAGB_VERSION,
			true
		);

		wp_register_script(
			'aahb-horizontal-accordion',
			AAGB_ASSETS . 'js/horizontal-accordion.js',
			[ 'jquery' ],
			AAGB_VERSION,
			true
		);

		wp_register_script(
			'aagb-separate-accordion-feedback',
			AAGB_ASSETS . 'js/feedback.js',
			[ 'jquery' ],
			AAGB_VERSION,
			true
		);

		wp_localize_script( 'aagb-separate-accordion-feedback', 'aab_feedbackAjax', [
			'ajaxurl' => admin_url( 'admin-ajax.php' ),
			'nonce'   => wp_create_nonce( 'my_ajax_nonce' ),
			'user_id' => get_current_user_id(), // Pass user ID to JS (0 if not logged in)
		] );


		wp_register_script(
			'aagb-accordion-group',
			AAGB_ASSETS . 'js/group-accordion.js',
			[ 'jquery' ],
			AAGB_VERSION,
			true
		);

		wp_register_script(
			'aagb-group-accordion-frontend',
			AAGB_ASSETS . 'js/group-accordion-frontend.js',
			[ 'jquery' ],
			AAGB_VERSION,
			true
		);

		wp_register_script(
			'mark',
			AAGB_ASSETS . 'js/jquery.mark.min.js',
			[ 'jquery' ],
			AAGB_VERSION,
			true
		);

		$this->localize_for_handles( [
			'jquery',
			'aagb-accordion-single',
			'aagb-accordion-group',
			'aahb-horizontal-accordion',
		] );
	}

	/**
	 * Localize scripts for given handles.
	 *
	 * @param array $handles List of script handles.
	 */
	private function localize_for_handles( array $handles ) {
		static $localized = false;
		if ( $localized ) {
			return;
		}

		$data = [
			'ajax_url'  => admin_url( 'admin-ajax.php' ),
			'nonce'     => wp_create_nonce( 'aagb_accordion_nonce' ),
			'licensing' => aab_fs()->can_use_premium_code(),
			'assets'    => AAGB_ASSETS,
		];

		foreach ( $handles as $handle ) {
			if ( wp_script_is( $handle, 'registered' ) ) {

				wp_localize_script(
					$handle,
					'aagb_local_object',
					$data
				);

				$localized = true;
				break;
			}
		}
	}

	/**
	 * Enqueue Block Editor Assets
	 */
	public function block_editor_assets() {
		wp_register_style(
			'aagb-separate-accordion',
			AAGB_URL . 'build/accordion/style-index.css',
			[],
			'initial'
		);

		wp_register_style(
			'aagb-group-accordion-item',
			AAGB_URL . 'build/accordion-item/style-index.css',
			[],
			'initial'
		);

		wp_register_style(
			'aahb-horizontal-accordion',
			AAGB_URL . 'build/horizontal-accordion/style-index.css',
			[],
			'initial'
		);

		wp_register_style(
			'aahb-horizontal-accordion-item',
			AAGB_URL . 'build/horizontal-accordion-item/style-index.css',
			[],
			'initial'
		);

		wp_register_style(
			'aagb-toolbar',
			AAGB_URL . 'build/accordion-toolbar/index.css',
			[],
			'initial'
		);

		wp_enqueue_script(
			'aab-block_deletion_tracker',
			AAGB_ASSETS . 'js/block-deletion-tracker.js',
			[ 'wp-blocks', 'wp-editor', 'wp-data' ], // Dependencies
			AAGB_VERSION,
			true
		);

		wp_enqueue_script(
			'aab-attempt-recovery-all',
			AAGB_ASSETS . 'js/attempt-recovery-all.js',
			[ 'wp-blocks', 'wp-element', 'wp-editor', 'wp-components', 'wp-data' ],
			AAGB_VERSION,
			true
		);
	}

}
