import { registerBlockType } from '@wordpress/blocks';
import metadata from './block.json';

/**
 * Internal dependencies
 */
import Edit from './edit';
import Save from './save';

// icon
import icon from './icon';
import saveDep from './deprecated';

/**
 * Block Registration
 */

registerBlockType(metadata, {
	icon: {
		src: icon,
		foreground: '#77b5f7',
	},
	edit: Edit,
	save: Save,
	deprecated: [
		{
			"attributes": {
				"anchorLinksShow":{
					"type": "boolean",
					"default": false
				},
				"hasQaStyle": {
					"type": "boolean",
					"default": false
				},
				"uniqueId": {
					"type": "string"
				},
				"activeAccordionBorder": {
					"type": "object",
					"default": {
						"width": "1px",
						"color": "#000000",
						"style": "solid"
					}
				},
				"searchShow":{
					"type": "boolean",
					"default": false
				},
				"showAllbtn":{
					"type": "boolean",
					"default": false
				},
				"closeText":{
					"type": "string",
					"default": "Close all"
				},
				"openText":{
					"type": "string",
					"default": "Show all"
				},
				"heading": {
					"type": "string",
					"default": "Accordion Heading"
				},
				"activetorClass": {
					"type": "string",
					"default": "click"
				},
				"faqSchema": {
					"type": "boolean",
					"default": false
				},
				"step": {
					"type": "boolean",
					"default": false
				},
				"stepText": {
					"type": "string",
					"default": "Continue"
				},
				"stepCmpltText": {
					"type": "string",
					"default": "Congratulations, you are done!"
				},
				"checkList": {
					"type": "boolean",
					"default": false
				},
				"buttonShow":{
					"type": "boolean",
					"default": false
				},
				"contentCount": {
					"type": "number",
					"default": 100
				},
				"readText":{
					"type": "string",
					"default": "Read More"
				},
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
				},"headingColor": {
					"type": "string"
				},
				"headerBg": {
					"type": "string"
				},"iconColor": {
					"type": "string"
				},
				"iconBackground": {
					"type": "string"
				},
				"bodyBg": {
					"type": "string"
				},"showIcon": {
					"type": "boolean",
					"default": true
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
				"customCSS": {
					"type": "string",
					"default": ""
				}
			},
			"styles": [
				{
					"name": "default",
					"label": "Default",
					"isDefault": true
				},
				{
					"name": "qa",
					"label": "Q A"
				},
				{
					"name": "aab-style-pro-checked",
					"label": "aab-style-pro-checked"
				}
			],
			save: saveDep,
		},
	]
});
