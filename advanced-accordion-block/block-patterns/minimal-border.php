<?php

register_block_pattern_category(
	'advanced-accordion-block-category',
	['label' => __('Advance Accordion Block', 'advanced-accordion-block')]
);


register_block_pattern(
	'advanced-accordion-block/pattern-minimal-border',
	[
		'title'       => __( 'Minimal Border Style', 'advanced-accordion-block' ),
		'description' => __( 'A description of Pattern Four.', 'advanced-accordion-block' ),
		'content'     => '<!-- wp:aab/group-accordion {"uniqueId":"fd7bbf55_0","activeAccordionBorder":{"color":"#f1f8f6","width":"1px"},"border":{"color":"#036f4b","style":"solid","width":"1px"},"paddings":{"top":"25px","left":"45px","right":"45px","bottom":"25px"},"margins":{"top":"0px","bottom":"22px"},"borderRadius":8,"headingColor":"#00483d","headerBg":"","iconColor":"#00483d","customCSS":"\n.aagb__accordion_body{\n  padding-top:5px !important;\n}","bodyBorder":{"top":{"style":"none","width":"0px"}},"activeBackground":"#f1f8f6"} -->
<div class="custom-css-block"><style>.aagb_accordion_fd7bbf55_0 { 
.aagb__accordion_body{
  padding-top:5px !important;
} }</style></div><div class="wp-block-aab-group-accordion searchable aagb_accordion_fd7bbf55_0 click false" id="group-accordion-fd7bbf55_0"><!-- wp:aab/accordion-item {"border":{"color":"#036f4b","style":"solid","width":"1px"},"bodyBorder":{"top":{"style":"none","width":"0px"}},"paddings":{"top":"25px","left":"45px","right":"45px","bottom":"25px"},"margins":{"top":"0px","bottom":"22px"},"borderRadius":8,"heading":"What is Krushi?","headingColor":"#00483d","headerBg":"","iconClass":"arrow-down-alt2","iconColor":"#00483d","anchorLinkShow":false,"readMoreText":"Read More","faqSchema":false,"step":false,"stepText":"Continue","checkList":false,"button_show":false} -->
<style>.aagb__accordion_container.no-pro-plan .aagb__accordion_body { padding:  10px !important; }</style><div class="wp-block-aab-accordion-item aagb__accordion_container panel" style="border:1px solid #036f4b;margin-top:0px;margin-bottom:22px;border-radius:8px"><div class="aagb__accordion_head aab_right_icon  " data-active="false" style="padding:25px 45px 25px 45px;border-top:none;border-right:none;border-bottom:none;border-left:none"><div class="aagb__accordion_heading aab_right_icon aagb_right_link"><div class="head_content_wrapper"><div class="title_wrapper"><h5 class="aagb__accordion_title" style="margin:0;color:#00483d">What is Krushi?</h5></div></div></div><div class="aagb__accordion_icon" style="color:#00483d"><div class="aagb__icon_dashicons_box"><span class="aagb__icon dashicons dashicons-arrow-down-alt2"></span></div></div></div><div class="aagb__accordion_body   " role="region" style="border-top:0px none undefined;border-right:none;border-bottom:none;border-left:none;padding:25px 45px 25px 45px"><div class="aagb__accordion_component "><!-- wp:paragraph -->
<p>Krushi is a Public Charitable Trust designed to carry out farming on an extensive scale using Natural &amp; Sustainable methods.</p>
<!-- /wp:paragraph --></div></div></div>
<!-- /wp:aab/accordion-item -->

<!-- wp:aab/accordion-item {"border":{"color":"#036f4b","style":"solid","width":"1px"},"bodyBorder":{"top":{"style":"none","width":"0px"}},"paddings":{"top":"25px","left":"45px","right":"45px","bottom":"25px"},"margins":{"top":"0px","bottom":"22px"},"borderRadius":8,"heading":"How does it work?","headingColor":"#00483d","headerBg":"","iconClass":"arrow-down-alt2","iconColor":"#00483d","anchorLinkShow":false,"readMoreText":"Read More","faqSchema":false,"step":false,"stepText":"Continue","checkList":false,"button_show":false} -->
<style>.aagb__accordion_container.no-pro-plan .aagb__accordion_body { padding:  10px !important; }</style><div class="wp-block-aab-accordion-item aagb__accordion_container panel" style="border:1px solid #036f4b;margin-top:0px;margin-bottom:22px;border-radius:8px"><div class="aagb__accordion_head aab_right_icon  " data-active="false" style="padding:25px 45px 25px 45px;border-top:none;border-right:none;border-bottom:none;border-left:none"><div class="aagb__accordion_heading aab_right_icon aagb_right_link"><div class="head_content_wrapper"><div class="title_wrapper"><h5 class="aagb__accordion_title" style="margin:0;color:#00483d">How does it work?</h5></div></div></div><div class="aagb__accordion_icon" style="color:#00483d"><div class="aagb__icon_dashicons_box"><span class="aagb__icon dashicons dashicons-arrow-down-alt2"></span></div></div></div><div class="aagb__accordion_body   " role="region" style="border-top:0px none undefined;border-right:none;border-bottom:none;border-left:none;padding:25px 45px 25px 45px"><div class="aagb__accordion_component "><!-- wp:paragraph -->
<p>Krushi operates by combining traditional farming practices with modern sustainable technologies. This includes eco-friendly techniques like organic farming, crop rotation, and efficient water management</p>
<!-- /wp:paragraph --></div></div></div>
<!-- /wp:aab/accordion-item -->

<!-- wp:aab/accordion-item {"border":{"color":"#036f4b","style":"solid","width":"1px"},"bodyBorder":{"top":{"style":"none","width":"0px"}},"paddings":{"top":"25px","left":"45px","right":"45px","bottom":"25px"},"margins":{"top":"0px","bottom":"22px"},"borderRadius":8,"heading":"What are the major challenges of current agriculture?","headingColor":"#00483d","headerBg":"","iconClass":"arrow-down-alt2","iconColor":"#00483d","anchorLinkShow":false,"readMoreText":"Read More","faqSchema":false,"step":false,"stepText":"Continue","checkList":false,"button_show":false} -->
<style>.aagb__accordion_container.no-pro-plan .aagb__accordion_body { padding:  10px !important; }</style><div class="wp-block-aab-accordion-item aagb__accordion_container panel" style="border:1px solid #036f4b;margin-top:0px;margin-bottom:22px;border-radius:8px"><div class="aagb__accordion_head aab_right_icon  " data-active="false" style="padding:25px 45px 25px 45px;border-top:none;border-right:none;border-bottom:none;border-left:none"><div class="aagb__accordion_heading aab_right_icon aagb_right_link"><div class="head_content_wrapper"><div class="title_wrapper"><h5 class="aagb__accordion_title" style="margin:0;color:#00483d">What are the major challenges of current agriculture?</h5></div></div></div><div class="aagb__accordion_icon" style="color:#00483d"><div class="aagb__icon_dashicons_box"><span class="aagb__icon dashicons dashicons-arrow-down-alt2"></span></div></div></div><div class="aagb__accordion_body   " role="region" style="border-top:0px none undefined;border-right:none;border-bottom:none;border-left:none;padding:25px 45px 25px 45px"><div class="aagb__accordion_component "><!-- wp:paragraph -->
<p>Current agriculture faces challenges like soil degradation, water scarcity, climate change, and overuse of chemical fertilizers and pesticides. These issues threaten long-term productivity and sustainability.</p>
<!-- /wp:paragraph --></div></div></div>
<!-- /wp:aab/accordion-item -->

<!-- wp:aab/accordion-item {"border":{"color":"#036f4b","style":"solid","width":"1px"},"bodyBorder":{"top":{"style":"none","width":"0px"}},"paddings":{"top":"25px","left":"45px","right":"45px","bottom":"25px"},"margins":{"top":"0px","bottom":"22px"},"borderRadius":8,"heading":"How does Krushi address the above challenges?","headingColor":"#00483d","headerBg":"","iconClass":"arrow-down-alt2","iconColor":"#00483d","anchorLinkShow":false,"readMoreText":"Read More","faqSchema":false,"step":false,"stepText":"Continue","checkList":false,"button_show":false} -->
<style>.aagb__accordion_container.no-pro-plan .aagb__accordion_body { padding:  10px !important; }</style><div class="wp-block-aab-accordion-item aagb__accordion_container panel" style="border:1px solid #036f4b;margin-top:0px;margin-bottom:22px;border-radius:8px"><div class="aagb__accordion_head aab_right_icon  " data-active="false" style="padding:25px 45px 25px 45px;border-top:none;border-right:none;border-bottom:none;border-left:none"><div class="aagb__accordion_heading aab_right_icon aagb_right_link"><div class="head_content_wrapper"><div class="title_wrapper"><h5 class="aagb__accordion_title" style="margin:0;color:#00483d">How does Krushi address the above challenges?</h5></div></div></div><div class="aagb__accordion_icon" style="color:#00483d"><div class="aagb__icon_dashicons_box"><span class="aagb__icon dashicons dashicons-arrow-down-alt2"></span></div></div></div><div class="aagb__accordion_body   " role="region" style="border-top:0px none undefined;border-right:none;border-bottom:none;border-left:none;padding:25px 45px 25px 45px"><div class="aagb__accordion_component "><!-- wp:paragraph -->
<p>Krushi addresses these challenges by promoting sustainable farming techniques, conserving resources, and supporting farmers with training, tools, and eco-friendly practices to ensure long-term agricultural health.</p>
<!-- /wp:paragraph --></div></div></div>
<!-- /wp:aab/accordion-item --></div>
<!-- /wp:aab/group-accordion -->',
		'categories'  => [ 'advanced-accordion-block-category' ],
	]
);


