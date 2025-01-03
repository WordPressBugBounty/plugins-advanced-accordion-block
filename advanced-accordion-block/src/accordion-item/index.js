import { registerBlockType } from '@wordpress/blocks';
import './style.scss';

import metadata from './block.json';

/**
 * Internal dependencies
 */
import Edit from './edit';
import Save from './save';
import saveDep from './deprecated';

/**
 * Block Registration
 */

registerBlockType(metadata, {
	icon: {
		src: 'minus',
		foreground: '#77b5f7',
	},
	usesContext: [ "aagb/accordion-hasQaStyle", "aagb/accordion-faqSchema", "aagb/accordion-step", "aagb/accordion-stepText", "aagb/accordion-checkList", "aagb/accordion-anchorLinksShow", "aagb/accordion-buttonShow", "aagb/accordion-readMoreText" ,"aagb/accordion-border" ,"aagb/accordion-margins" ,"aagb/accordion-paddings","aagb/accordion-borderRadius","aagb/accordion-headingColor","aagb/accordion-showIcon","aagb/accordion-iconColor","aagb/accordion-iconBackground","aagb/accordion-headerBg","aagb/accordion-bodyBg","aagb/accordion-styledQA","aagb/accordion-qIconText","aagb/accordion-qIconColor" ,"aagb/accordion-qIconBg","aagb/accordion-aIconText","aagb/accordion-aIconColor","aagb/accordion-aIconBg","aagb/accordion-contentCount"],
	edit: Edit,
	save: Save,
	deprecated: [
		{
			"attributes": {
			"border": {
				"type": "object",
				"default": {
					"width": "1px",
					"color": "#cccccc",
					"style": "solid"
				}
			},
			"paddings": {
				"type": "object",
				"default": {
					"top": "10px",
					"left": "15px",
					"right": "15px",
					"bottom": "10px"
				}
			},
			"margins": {
				"type": "object",
				"default": {
					"top": "0px",
					"bottom": "15px"
				}
			},
			"borderRadius": {
				"type": "number",
				"default": 0
			},
			"heading": {
				"type": "string",
				"default": "Accordion Heading"
			},
			"headingTag": {
				"type": "string",
				"default": "h4"
			},
			"headingColor": {
				"type": "string"
			},
			"headerBg": {
				"type": "string"
			},
			"showIcon": {
				"type": "boolean",
				"default": true
			},
			"iconClass": {
				"type": "string",
				"default": "plus-alt2"
			},
			"iconPosition": {
				"type": "string",
				"default": "aab_right_icon"
			},
			"iconColor": {
				"type": "string"
			},
			"iconBackground": {
				"type": "string"
			},
			"bodyBg": {
				"type": "string"
			},
			"makeActive": {
				"type": "boolean",
				"default": false
			},
			"uniqueId": {
				"type": "string"
			},
			"buttonShow":{
				"type": "boolean",
				"default": false
			},
			"anchorLinkShow":{
				"type": "boolean"
			},
			"anchorPosition": {
				"type": "string",
				"default": "aagb_right_link"
			},
			"contentCount": {
				"type": "number",
				"default": 1
			},
			"readMoreText":{
				"type": "string"
			},
			"styledQA":{
				"type": "boolean"
			},
			"qIconText": {
				"type": "string",
				"default": "Q"
			},
			"qIconColor": {
				"type": "string",
				"default": "#fff"
			},
			"qIconBg": {
				"type": "string",
				"default": "#505050"
			},
			"aIconText": {
				"type": "string",
				"default": "A"
			},
			"aIconColor": {
				"type": "string",
				"default": "#fff"
			},
			"aIconBg": {
				"type": "string",
				"default": "#f5a623"
			},
			"faqSchema":{
				"type": "boolean"
			},
			"step":{
				"type": "boolean"
			},
			"stepText": {
				"type": "string"
			},
			"checkList":{
				"type": "boolean"
			},
			"button_show": {
				"type": "boolean"
			}
			},
			save: saveDep,
		},
	]
});