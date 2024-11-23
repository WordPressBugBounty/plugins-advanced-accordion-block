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
