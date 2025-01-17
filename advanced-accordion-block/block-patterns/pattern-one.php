<?php

register_block_pattern_category(
	'advanced-accordion-block-category',
	['label' => __('Advance Accordion Block', 'advanced-accordion-block')]
);


register_block_pattern(
	'advanced-accordion-block/pattern-one',
	[
		'title'       => __( 'Pattern One', 'advanced-accordion-block' ),
		'description' => __( 'A description of Pattern One.', 'advanced-accordion-block' ),
		'content'     => '<!-- wp:heading --><h2>AAB Pattern One Heading</h2><!-- /wp:heading -->',
		'categories'  => [ 'advanced-accordion-block-category' ],
	]
);


