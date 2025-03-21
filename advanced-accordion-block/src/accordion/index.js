import {registerBlockType,createBlock} from '@wordpress/blocks';
import './style.scss';

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
        foreground: '#3E58E1',
    },
    edit: Edit,
    save: Save,
    deprecated: [
        {
            "attributes": {
                "style": {
                    "type": "object",
                    "default": {
                        "border": {
                            "color": "#CFCABE",
                            "radius": "3px",
                            "style": "dash",
                            "width": "1px"
                        }
                    }
                },
                "uniqueId": {
                    "type": "string"
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
                        "left": "20px",
                        "right": "20px",
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
                "heading": {
                    "type": "string",
                    "default": "Accordion Heading"
                },
                "subheading": {
                    "type": "string",
                    "default": ""
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
                "anchorLinkShow": {
                    "type": "boolean",
                    "default": false
                },
                "iconClass": {
                    "type": "string",
                    "default": "plus-alt2"
                },
                "iconPosition": {
                    "type": "string",
                    "default": "aab_right_icon"
                },
                "iconFontSize": {
                    "type": "string",
                    "default": "25"
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
                "id": {
                    "type": "string"
                },
                "linkedAccordion": {
                    "type": "boolean",
                    "default": false
                },
                "link": {
                    "type": "string",
                    "default": "#"
                },
                "tab": {
                    "type": "boolean",
                    "default": false
                },
                "disableAccordion": {
                    "type": "boolean",
                    "default": false
                },
                "feedbackShow": {
                    "type": "boolean",
                    "default": false
                },
                "feedbacLabel": {
                    "type": "string",
                    "default": "Was this answer helpful?"
                },
                "yesBtn": {
                    "type": "string",
                    "default": "Yes"
                },
                "noBtn": {
                    "type": "string",
                    "default": "No"
                },
                "counterShow": {
                    "type": "boolean",
                    "default": false
                },
                "incNumber": {
                    "type": "number",
                    "default": 1
                },
                "anchorPosition": {
                    "type": "string",
                    "default": "aab_right_link"
                },
                "uniqueKey": {
                    "type": "string"
                },
                "faqSchema": {
                    "type": "boolean",
                    "default": false
                },
                "subheadingColor": {
                    "type": "string"
                },
                "headingIconImageUrl": {
                    "type": "string",
                    "default": ""
                },
                "headingIconAlt": {
                    "type": "string",
                    "default": ""
                },
                "showHeadingIcon": {
                    "type": "boolean",
                    "default": false
                },
                "iconBorder": {
                    "type": "object",
                    "default": {
                        "width": "1px",
                        "style": "solid",
                        "color": "transparent"
                    }
                },
                "iconBorderRadius": {
                    "type": "number",
                    "default": 50
                },
                "hasQaStyle": {
                    "type": "boolean",
                    "default": false
                },
                "customCSS": {
                    "type": "string",
                    "default": ""
                }
            },
            save: saveDep,
        },
    ]

    ,

    transforms: {
        from: [
            {
                type: "block",
                blocks: ["aab/accordion-block"], // Replace with your block name
                transform: (attributes) => {
                    // Convert the old flat border structure to the new nested structure
                    const oldBorder = attributes.border || {};
                    const newBorder = {
                        top: { color: oldBorder.color, style: oldBorder.style, width: oldBorder.width },
                        right: { color: oldBorder.color, style: oldBorder.style, width: oldBorder.width },
                        bottom: { color: oldBorder.color, style: oldBorder.style, width: oldBorder.width },
                        left: { color: oldBorder.color, style: oldBorder.style, width: oldBorder.width },
                    };

                    return createBlock("aab/accordion-block", {
                        ...attributes,
                        border: newBorder,
                    });
                },
            },
        ],
    },
});