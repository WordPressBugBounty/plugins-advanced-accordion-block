/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/accordion/deprecated.js":
/*!*************************************!*\
  !*** ./src/accordion/deprecated.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);


/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-lonely-if */

const {
  Fragment
} = wp.element;
const {
  select
} = wp.data;
const saveDep = ({
  attributes
}) => {
  const {
    uniqueId,
    makeActive,
    border,
    margins,
    paddings,
    borderRadius,
    qIconColor,
    qIconText,
    qIconBg,
    aIconColor,
    aIconBg,
    aIconText,
    heading,
    headingTag,
    headingColor,
    anchorPosition,
    anchorLinkShow,
    showIcon,
    iconClass,
    iconPosition,
    iconColor,
    iconFontSize,
    iconBackground,
    headerBg,
    bodyBg,
    id,
    linkedAccordion,
    link,
    tab,
    disableAccordion,
    feedbackShow,
    feedbacLabel,
    yesBtn,
    noBtn,
    counterShow,
    uniqueKey,
    styledQA,
    faqSchema
  } = attributes;
  const activeClass = makeActive ? `aab__accordion_body--show active__accordion_${uniqueId}` : '';
  // initial accordion stage
  let currentIconClass;
  if (makeActive === false) {
    currentIconClass = iconClass;
  } else {
    if (iconClass === 'plus-alt2') {
      currentIconClass = 'minus';
    } else if (iconClass === 'arrow-down') {
      currentIconClass = 'arrow-up';
    } else if (iconClass === 'arrow-down-alt2') {
      currentIconClass = 'arrow-up-alt2';
    } else if (iconClass === 'plus-alt') {
      currentIconClass = 'dismiss';
    } else if (iconClass === 'insert') {
      currentIconClass = 'remove';
    }
  }

  // Check if aab_premium is true
  const aab_premium = aagb_local_object.licensing;
  const voting_checked = aab_premium !== null && aab_premium !== void 0 ? aab_premium : 'false';
  const noProClass = aab_premium ? '' : 'no-pro-plan';
  const FeedBackBtn = () => {
    // Get the current page ID

    return feedbackShow && voting_checked && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
      className: "feedback-btn-wrap",
      "data-id": uniqueKey
    }, feedbacLabel && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", null, feedbacLabel), yesBtn && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("button", {
      className: "feedback-btn",
      "data-value": "yes",
      "data-id": uniqueKey
    }, yesBtn, counterShow && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
      className: "count"
    }, "0")), noBtn && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("button", {
      className: "feedback-btn",
      "data-value": "no",
      "data-id": uniqueKey
    }, noBtn, counterShow && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
      className: "count"
    }, "0")));
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save({
    className: `aab__accordion_container separate-accordion ${disableAccordion ? 'aab__accordion_disabled' : ''} ${makeActive ? `active__accordion_container_${uniqueId}` : ''} ${noProClass}`
  }), {
    id: id !== '' ? id : ''
  }, faqSchema ? {
    itemScope: true,
    itemprop: "mainEntity",
    itemType: "https://schema.org/Question"
  } : {}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", faqSchema ? {
    itemScope: true,
    itemType: "https://schema.org/FAQPage"
  } : {}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: `aab__accordion_head ${iconPosition} ${makeActive ? "active" : ""} `,
    "data-active": makeActive,
    style: {
      color: headingColor ? headingColor : '#333333',
      backgroundColor: headerBg ? headerBg : 'transparent'
      // padding: `${paddings.top} ${paddings.left} ${paddings.bottom} ${paddings.right}`,
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: `aab__accordion_heading ${iconPosition} ${anchorPosition || ''}`
  }, aab_premium && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "icon-container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "icon-q",
    style: {
      color: qIconColor,
      backgroundColor: qIconBg
    }
  }, qIconText), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "icon-a",
    style: {
      color: aIconColor,
      backgroundColor: aIconBg
    }
  }, aIconText)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    className: "aab__accordion_title",
    tagName: headingTag,
    value: heading,
    style: {
      margin: 0,
      color: headingColor ? headingColor : '#333333'
    },
    itemprop: "name"
  })), showIcon && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: `aab__accordion_icon`,
    style: {
      color: iconColor ? iconColor : '#333333',
      backgroundColor: iconBackground ? iconBackground : 'transparent'
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
    className: `aab__icon dashicons dashicons-${currentIconClass}`,
    style: {
      fontSize: iconFontSize ? iconFontSize + 'px' : ''
    }
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, faqSchema ? {
    itemScope: true,
    itemprop: "acceptedAnswer",
    itemType: "https://schema.org/Answer"
  } : {}, {
    className: `aab__accordion_body ${activeClass}`,
    role: "region",
    style: {
      backgroundColor: bodyBg ? bodyBg : 'transparent'
      // borderTop: `${border.width} ${border.style} ${border.color}`,
      // padding: `${paddings.top} ${paddings.left} ${paddings.bottom} ${paddings.right}`,
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    itemProp: "text"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.Content, null)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(FeedBackBtn, null)), anchorLinkShow === true && aab_premium && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("script", null, `
								jQuery(document).ready(function($) {
									if ($('.aab__accordion_heading').length) {
										$(document).ready(function() {
											var Anchor1 = new AnchorJS();
											Anchor1.add('.aab__accordion_heading');
										});
									}
								});
							`))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (saveDep);

/***/ }),

/***/ "./src/accordion/edit.js":
/*!*******************************!*\
  !*** ./src/accordion/edit.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../colors */ "./src/colors.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icons */ "./src/accordion/icons.js");
/* harmony import */ var _tags__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../tags */ "./src/tags.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./editor.scss */ "./src/accordion/editor.scss");


/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-shadow */
/* eslint-disable @wordpress/no-unsafe-wp-apis */

const {
  Fragment
} = wp.element;



const {
  __
} = wp.i18n;




// include editor styles

const iconPositions = [{
  label: 'Right',
  value: 'aab_right_icon'
}, {
  label: 'Left',
  value: 'aab_left_icon'
}];
const anchorPositions = [{
  label: 'Left',
  value: 'aab_left_link'
}, {
  label: 'Right',
  value: 'aab_right_link'
}];
const {
  select
} = wp.data;
let uniqueCounter = 0;
const Edit = ({
  attributes,
  setAttributes,
  clientId,
  isSelected
}) => {
  const {
    uniqueId,
    makeActive,
    feedbackShow,
    border,
    margins,
    borderRadius,
    qIconText,
    qIconColor,
    qIconBg,
    aIconText,
    aIconColor,
    aIconBg,
    heading,
    subheading,
    headingTag,
    anchorLinkShow,
    anchorPosition,
    headingColor,
    showIcon,
    iconClass,
    iconPosition,
    iconColor,
    iconFontSize,
    iconBackground,
    headerBg,
    bodyBg,
    id,
    linkedAccordion,
    link,
    tab,
    disableAccordion,
    feedbacLabel,
    yesBtn,
    noBtn,
    counterShow,
    uniqueKey,
    faqSchema
  } = attributes;
  const numericClientId = clientId.replace(/\D/g, '').slice(0, 5);

  // Ensure numericClientId contains exactly 5 characters
  while (numericClientId.length < 5) {
    numericClientId = '0' + numericClientId;
  }

  // set unique ID
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!uniqueId) {
      const newUniqueId = `${clientId.slice(0, 8)}_${uniqueCounter++}`;
      setAttributes({
        uniqueId: newUniqueId
      });
    }
  }, []);

  // Check if aab_premium is true
  const aab_premium = aagb_local_object.licensing;
  const is_disable = aab_premium ? '' : 'disabled';
  const voting_checked = aab_premium ? feedbackShow : 'false';
  const anchor_link_checked = aab_premium ? anchorLinkShow : 'false';
  const counter_checked = aab_premium ? counterShow : 'false';
  const has_disabled_class = aab_premium ? '' : 'aab-pro-element';
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)();
  const qaStyle = blockProps.className.includes('is-style-qa');
  const [hasQaStyle, setHasQaStyle] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setHasQaStyle(qaStyle);
  }, [qaStyle]);
  const noProClass = aab_premium ? '' : 'no-pro-plan';
  if (!aab_premium) {
    const observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (mutation.addedNodes.length) {
          mutation.addedNodes.forEach(node => {
            // Find the button for the "Q A" style and disable it
            jQuery('.block-editor-block-styles__variants button[aria-label=aab-style-pro-checked]').attr('disabled', 'disabled');
            // add class parent .components-panel__body.is-opened
            jQuery('.block-editor-block-styles__variants button[aria-label=aab-style-pro-checked]').closest('.components-panel__body').addClass('aab-pro-element');
          });
        }
      });
    });

    // Start observing the editor for changes
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, {
    group: "styles",
    class: "testdd"
  }, hasQaStyle && aab_premium && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: __('Q/A Icons Styles', 'advanced-accordion-block'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", {
    className: "aab__label"
  }, __('Q Icon Color', 'advanced-accordion-block')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ColorPalette, {
    colors: _colors__WEBPACK_IMPORTED_MODULE_5__["default"],
    value: qIconColor,
    onChange: qIconColor => setAttributes({
      qIconColor
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", {
    className: "aab__label"
  }, __('Q Icon Background Color', 'advanced-accordion-block')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ColorPalette, {
    colors: _colors__WEBPACK_IMPORTED_MODULE_5__["default"],
    value: qIconBg,
    onChange: qIconBg => setAttributes({
      qIconBg
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", {
    className: "aab__label"
  }, __('A Icon Color', 'advanced-accordion-block')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ColorPalette, {
    colors: _colors__WEBPACK_IMPORTED_MODULE_5__["default"],
    value: aIconColor,
    onChange: aIconColor => setAttributes({
      aIconColor
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", {
    className: "aab__label"
  }, __('A Icon Background Color', 'advanced-accordion-block')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ColorPalette, {
    colors: _colors__WEBPACK_IMPORTED_MODULE_5__["default"],
    value: aIconBg,
    onChange: aIconBg => setAttributes({
      aIconBg
    })
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    initialOpen: false,
    title: __('Accordion Styles', 'advanced-accordion-block')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalBoxControl, {
    values: margins,
    label: __('Accordion Margin', 'advanced-accordion-block'),
    sides: ['top', 'bottom'],
    units: [],
    allowReset: false,
    onChange: newValue => setAttributes({
      ...margins,
      margins: {
        top: newValue.top,
        bottom: newValue.bottom
      }
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "aa-custom-spacer"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", null, __('Set Accordion Border', 'advanced-accordion-block')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalBorderControl, {
    colors: _colors__WEBPACK_IMPORTED_MODULE_5__["default"],
    onChange: value => setAttributes({
      border: value
    }),
    value: border,
    withSlider: true
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "aa-custom-spacer"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: __('Border Radius', 'advanced-accordion-block'),
    value: borderRadius,
    onChange: borderRadius => setAttributes({
      borderRadius
    }),
    min: 0,
    max: 50
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    initialOpen: false,
    title: __('Accordion Head', 'advanced-accordion-block')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", {
    className: "aab__label"
  }, __('Header Color', 'advanced-accordion-block')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ColorPalette, {
    colors: _colors__WEBPACK_IMPORTED_MODULE_5__["default"],
    value: headingColor,
    onChange: headingColor => setAttributes({
      headingColor
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", {
    className: "aab__label"
  }, __('Header Background', 'advanced-accordion-block')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ColorPalette, {
    colors: _colors__WEBPACK_IMPORTED_MODULE_5__["default"],
    value: headerBg,
    onChange: headerBg => setAttributes({
      headerBg
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    initialOpen: false,
    title: __('Accordion Icon', 'advanced-accordion-block')
  }, !showIcon && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", null, "To change font size you must select Show Icon in settings tab."), showIcon && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: "Font Size",
    value: iconFontSize,
    onChange: value => setAttributes({
      iconFontSize: value
    }),
    min: 20,
    max: 50
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", {
    className: "aab__label"
  }, __('Icon Color', 'advanced-accordion-block')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ColorPalette, {
    colors: _colors__WEBPACK_IMPORTED_MODULE_5__["default"],
    value: iconColor,
    onChange: iconColor => setAttributes({
      iconColor
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", {
    className: "aab__label"
  }, __('Icon Background', 'advanced-accordion-block')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ColorPalette, {
    colors: _colors__WEBPACK_IMPORTED_MODULE_5__["default"],
    value: iconBackground,
    onChange: iconBackground => setAttributes({
      iconBackground
    })
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: __('Accordion Body', 'advanced-accordion-block'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", {
    className: "aab__label"
  }, __('Background Color', 'advanced-accordion-block')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ColorPalette, {
    colors: _colors__WEBPACK_IMPORTED_MODULE_5__["default"],
    value: bodyBg,
    onChange: bodyBg => setAttributes({
      bodyBg
    })
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    initialOpen: false,
    title: __('Accordion ID', 'advanced-accordion-block')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: __('Set Accordion ID', 'advanced-accordion-block'),
    value: id,
    onChange: id => setAttributes({
      id
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    initialOpen: false,
    title: __('Accordion Status', 'advanced-accordion-block')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: __('Make it Active on Load', 'advanced-accordion-block'),
    checked: makeActive,
    onChange: () => setAttributes({
      makeActive: !makeActive
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: __('Make it a Disable Accordion?', 'advanced-accordion-block'),
    checked: disableAccordion,
    onChange: () => setAttributes({
      disableAccordion: !disableAccordion
    }),
    help: __('No click event works. This feature is for the frontend only!', 'advanced-accordion-block')
  })), (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)().className.includes('is-style-qa') && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    initialOpen: false,
    title: __('Q/A Icons', 'advanced-accordion-block')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", {
    className: "aab__label"
  }, __('Q Icon Text', 'advanced-accordion-block')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: __('Set Q Icon Text', 'advanced-accordion-block'),
    value: qIconText,
    onChange: value => setAttributes({
      qIconText: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", {
    className: "aab__label"
  }, __('A Icon Text', 'advanced-accordion-block')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: __('Set A Icon Text', 'advanced-accordion-block'),
    value: aIconText,
    onChange: value => setAttributes({
      aIconText: value
    })
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    initialOpen: false,
    title: __('Accordion Head', 'advanced-accordion-block')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: __('Select Heading Tag', 'advanced-accordion-block'),
    options: _tags__WEBPACK_IMPORTED_MODULE_7__["default"],
    onChange: headingTag => setAttributes({
      headingTag
    }),
    value: headingTag
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: __('Anchor Link', 'advanced-accordion-block'),
    initialOpen: false,
    className: has_disabled_class
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: __('Anchor Link', 'advanced-accordion-block'),
    disabled: is_disable,
    checked: anchor_link_checked,
    onChange: () => setAttributes({
      anchorLinkShow: !anchorLinkShow
    })
  }), anchorLinkShow && !hasQaStyle && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: __('Anchor Icon Position', 'advanced-accordion-block'),
    disabled: is_disable,
    options: anchorPositions,
    onChange: anchorPosition => setAttributes({
      anchorPosition
    }),
    value: anchorPosition
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: __('Accordion Icon', 'advanced-accordion-block'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: __('Show Icon', 'advanced-accordion-block'),
    checked: showIcon,
    onChange: () => setAttributes({
      showIcon: !showIcon
    })
  }), showIcon && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: __('Select Icon Type', 'advanced-accordion-block'),
    options: _icons__WEBPACK_IMPORTED_MODULE_6__["default"],
    onChange: iconClass => {
      setAttributes({
        iconClass
      });
    },
    value: iconClass
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: __('Icon Position', 'advanced-accordion-block'),
    options: iconPositions,
    onChange: iconPosition => {
      setAttributes({
        iconPosition
      });
    },
    value: iconPosition
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: __('Feedback', 'advanced-accordion-block'),
    initialOpen: false,
    className: has_disabled_class
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: __('Enable / Disable', 'advanced-accordion-block'),
    disabled: is_disable,
    checked: voting_checked,
    onChange: () => setAttributes({
      feedbackShow: !feedbackShow
    })
  }), feedbackShow == 1 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: __('Label', 'advanced-accordion-block'),
    disabled: is_disable,
    value: feedbacLabel,
    onChange: feedbacLabel => setAttributes({
      feedbacLabel
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: __('Yes', 'advanced-accordion-block'),
    disabled: is_disable,
    value: yesBtn,
    onChange: yesBtn => setAttributes({
      yesBtn
    }),
    className: "bbpc-control-half yes-btn"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: __('No', 'advanced-accordion-block'),
    disabled: is_disable,
    value: noBtn,
    onChange: noBtn => setAttributes({
      noBtn
    }),
    className: "bbpc-control-half no-btn"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: __('Counter', 'advanced-accordion-block'),
    disabled: is_disable,
    checked: counter_checked,
    onChange: () => setAttributes({
      counterShow: !counterShow
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: __('ID', 'advanced-accordion-block'),
    value: uniqueKey,
    onChange: uniqueKey => setAttributes({
      uniqueKey
    }),
    help: "This ID is required to ensure unique voting options"
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    initialOpen: false,
    title: __('FAQ Schema', 'advanced-accordion-block')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: __('Make it enable', 'advanced-accordion-block'),
    checked: faqSchema,
    onChange: () => setAttributes({
      faqSchema: !faqSchema
    })
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)({
    className: `aab__accordion_container ${makeActive ? `active__accordion_container_${uniqueId}` : ''} ${noProClass}`
  }), {
    style: {
      border: `${border.width} ${border.style} ${border.color}`,
      marginTop: `${margins.top}`,
      marginBottom: `${margins.bottom}`,
      borderRadius: `${borderRadius}px`
    },
    id: id !== '' ? id : '',
    role: "button",
    "aria-expanded": makeActive,
    tabIndex: "0"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    tabIndex: "0",
    className: `aab__accordion_head ${iconPosition} ${makeActive ? 'active' : ''} `,
    style: {
      color: headingColor ? headingColor : '#333333',
      backgroundColor: headerBg ? headerBg : 'transparent'
      // padding: `${paddings.top} ${paddings.left} ${paddings.bottom} ${paddings.right}`,
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: `aab__accordion_heading ${iconPosition} ${anchorPosition}`,
    tabIndex: "0"
  }, hasQaStyle && aab_premium && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "icon-container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "icon-q",
    style: {
      color: qIconColor,
      backgroundColor: qIconBg
    }
  }, qIconText), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "icon-a",
    style: {
      color: aIconColor,
      backgroundColor: aIconBg
    }
  }, aIconText)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
    tabIdex: "0",
    tagName: headingTag,
    value: heading,
    className: "aab__accordion_title",
    onChange: heading => setAttributes({
      heading
    }),
    style: {
      margin: 0,
      color: headingColor ? headingColor : '#333333'
    }
  }), anchorLinkShow && aab_premium && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("a", {
    className: "anchorjs-link",
    href: "#"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("i", {
    className: "dashicons dashicons-admin-links"
  }))), showIcon && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: `aab__accordion_icon`,
    style: {
      color: iconColor ? iconColor : '#333333',
      backgroundColor: iconBackground ? iconBackground : 'transparent'
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
    className: `aab__icon dashicons dashicons-${iconClass}`,
    style: {
      fontSize: iconFontSize ? iconFontSize + 'px' : ''
    }
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    tabIndex: "0",
    className: `aab__accordion_body ${makeActive ? `aab__accordion_body--show` : ``}  ${makeActive ? `active__accordion_${uniqueId}` : ''}`,
    role: "region",
    style: {
      backgroundColor: bodyBg ? bodyBg : 'transparent',
      borderTop: `${border.width} ${border.style} ${border.color}`,
      // padding: `${paddings.top} ${paddings.right} ${paddings.bottom} ${paddings.left}`,
      display: makeActive ? 'block' : 'none'
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks, {
    allowedBlocks: true,
    template: [['core/paragraph', {
      placeholder: 'Write your content or add any block here...'
    }]]
  }), feedbackShow == 1 && aab_premium && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
    className: 'feedback-btn-wrap'
  }, feedbacLabel && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", null, feedbacLabel), yesBtn && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("button", {
    className: "feedback-btn",
    "data-value": "yes",
    "data-id": uniqueKey
  }, yesBtn, counterShow && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
    className: "count"
  }, "--")), noBtn && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("button", {
    className: "feedback-btn",
    "data-value": "no",
    "data-id": uniqueKey
  }, noBtn, counterShow && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
    className: "count"
  }, "--")))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/accordion/icon.js":
/*!*******************************!*\
  !*** ./src/accordion/icon.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const icon = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "16px",
  height: "16px",
  viewBox: "0 0 16 16",
  version: "1.1"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "#3E58E1",
  d: "M0 4v8h16v-8h-16zM15 11h-14v-4h14v4z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "#3E58E1",
  d: "M0 0h16v3h-16v-3z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "#3E58E1",
  d: "M0 13h16v3h-16v-3z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (icon);

/***/ }),

/***/ "./src/accordion/icons.js":
/*!********************************!*\
  !*** ./src/accordion/icons.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const icons = [{
  label: 'Plus Minus',
  value: 'plus-alt2'
}, {
  label: 'Arrow Up Down',
  value: 'arrow-down'
}, {
  label: 'Arrow Up Down Alt',
  value: 'arrow-down-alt2'
}, {
  label: 'Open Close',
  value: 'plus-alt'
}, {
  label: 'Insert Remove',
  value: 'insert'
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (icons);

/***/ }),

/***/ "./src/accordion/index.js":
/*!********************************!*\
  !*** ./src/accordion/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/accordion/style.scss");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ "./src/accordion/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/accordion/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/accordion/save.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icon */ "./src/accordion/icon.js");
/* harmony import */ var _deprecated__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./deprecated */ "./src/accordion/deprecated.js");




/**
 * Internal dependencies
 */



// icon


/**
 * Block Registration
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_2__, {
  icon: {
    src: _icon__WEBPACK_IMPORTED_MODULE_5__["default"],
    foreground: '#3E58E1'
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"],
  deprecated: [{
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
          "left": "42px",
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
        "default": "Accordion Sub Heading"
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
      }
    },
    save: _deprecated__WEBPACK_IMPORTED_MODULE_6__["default"]
  }]
});

/***/ }),

/***/ "./src/accordion/save.js":
/*!*******************************!*\
  !*** ./src/accordion/save.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);


/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-lonely-if */

const {
  Fragment
} = wp.element;
const {
  select
} = wp.data;
const Save = ({
  attributes
}) => {
  const {
    uniqueId,
    makeActive,
    border,
    margins,
    borderRadius,
    qIconColor,
    qIconText,
    qIconBg,
    aIconColor,
    aIconBg,
    aIconText,
    heading,
    headingTag,
    headingColor,
    anchorPosition,
    anchorLinkShow,
    showIcon,
    iconClass,
    iconPosition,
    iconColor,
    iconFontSize,
    iconBackground,
    headerBg,
    bodyBg,
    id,
    linkedAccordion,
    link,
    tab,
    disableAccordion,
    feedbackShow,
    feedbacLabel,
    yesBtn,
    noBtn,
    counterShow,
    uniqueKey,
    styledQA,
    faqSchema
  } = attributes;
  const activeClass = makeActive ? `aab__accordion_body--show active__accordion_${uniqueId}` : '';
  // initial accordion stage
  let currentIconClass;
  if (makeActive === false) {
    currentIconClass = iconClass;
  } else {
    if (iconClass === 'plus-alt2') {
      currentIconClass = 'minus';
    } else if (iconClass === 'arrow-down') {
      currentIconClass = 'arrow-up';
    } else if (iconClass === 'arrow-down-alt2') {
      currentIconClass = 'arrow-up-alt2';
    } else if (iconClass === 'plus-alt') {
      currentIconClass = 'dismiss';
    } else if (iconClass === 'insert') {
      currentIconClass = 'remove';
    }
  }

  // Check if aab_premium is true
  const aab_premium = aagb_local_object.licensing;
  const voting_checked = aab_premium !== null && aab_premium !== void 0 ? aab_premium : 'false';
  const noProClass = aab_premium ? '' : 'no-pro-plan';
  const FeedBackBtn = () => {
    // Get the current page ID

    return feedbackShow && voting_checked && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
      className: "feedback-btn-wrap",
      "data-id": uniqueKey
    }, feedbacLabel && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", null, feedbacLabel), yesBtn && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("button", {
      className: "feedback-btn",
      "data-value": "yes",
      "data-id": uniqueKey
    }, yesBtn, counterShow && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
      className: "count"
    }, "0")), noBtn && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("button", {
      className: "feedback-btn",
      "data-value": "no",
      "data-id": uniqueKey
    }, noBtn, counterShow && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
      className: "count"
    }, "0")));
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save({
    className: `aab__accordion_container separate-accordion ${disableAccordion ? 'aab__accordion_disabled' : ''} ${makeActive ? `active__accordion_container_${uniqueId}` : ''} ${noProClass}`
  }), {
    style: {
      border: `${border.width} ${border.style} ${border.color}`,
      marginTop: `${margins.top}`,
      marginBottom: `${margins.bottom}`,
      borderRadius: `${borderRadius}px`
    },
    id: id !== '' ? id : ''
  }, faqSchema ? {
    itemScope: true,
    itemprop: "mainEntity",
    itemType: "https://schema.org/Question"
  } : {}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", faqSchema ? {
    itemScope: true,
    itemType: "https://schema.org/FAQPage"
  } : {}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: `aab__accordion_head ${iconPosition} ${makeActive ? "active" : ""} `,
    "data-active": makeActive,
    style: {
      color: headingColor ? headingColor : '#333333',
      backgroundColor: headerBg ? headerBg : 'transparent'
      // padding: `${paddings.top} ${paddings.left} ${paddings.bottom} ${paddings.right}`,
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: `aab__accordion_heading ${iconPosition} ${anchorPosition || ''}`
  }, aab_premium && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "icon-container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "icon-q",
    style: {
      color: qIconColor,
      backgroundColor: qIconBg
    }
  }, qIconText), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "icon-a",
    style: {
      color: aIconColor,
      backgroundColor: aIconBg
    }
  }, aIconText)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    className: "aab__accordion_title",
    tagName: headingTag,
    value: heading,
    style: {
      margin: 0,
      color: headingColor ? headingColor : '#333333'
    },
    itemprop: "name"
  })), showIcon && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: `aab__accordion_icon`,
    style: {
      color: iconColor ? iconColor : '#333333',
      backgroundColor: iconBackground ? iconBackground : 'transparent'
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
    className: `aab__icon dashicons dashicons-${currentIconClass}`,
    style: {
      fontSize: iconFontSize ? iconFontSize + 'px' : ''
    }
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, faqSchema ? {
    itemScope: true,
    itemprop: "acceptedAnswer",
    itemType: "https://schema.org/Answer"
  } : {}, {
    className: `aab__accordion_body ${activeClass}`,
    role: "region",
    style: {
      backgroundColor: bodyBg ? bodyBg : 'transparent',
      borderTop: `${border.width} ${border.style} ${border.color}`
      // padding: `${paddings.top} ${paddings.left} ${paddings.bottom} ${paddings.right}`,
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    itemProp: "text"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.Content, null)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(FeedBackBtn, null)), anchorLinkShow === true && aab_premium && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("script", null, `
								jQuery(document).ready(function($) {
									if ($('.aab__accordion_heading').length) {
										$(document).ready(function() {
											var Anchor1 = new AnchorJS();
											Anchor1.add('.aab__accordion_heading');
										});
									}
								});
							`))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Save);

/***/ }),

/***/ "./src/colors.js":
/*!***********************!*\
  !*** ./src/colors.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const {
  __
} = wp.i18n;
const colors = [{
  name: __('Black', 'advanced-accordion-block'),
  color: '#000000'
}, {
  name: __('White', 'advanced-accordion-block'),
  color: '#ffffff'
}, {
  name: __('Red', 'advanced-accordion-block'),
  color: '#ff0000'
}, {
  name: __('Green', 'advanced-accordion-block'),
  color: '#00ff00'
}, {
  name: __('Blue', 'advanced-accordion-block'),
  color: '#0000ff'
}, {
  name: __('Yellow', 'advanced-accordion-block'),
  color: '#ffff00'
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (colors);

/***/ }),

/***/ "./src/tags.js":
/*!*********************!*\
  !*** ./src/tags.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const tags = [{
  label: 'h1',
  value: 'h1'
}, {
  label: 'h2',
  value: 'h2'
}, {
  label: 'h3',
  value: 'h3'
}, {
  label: 'h4',
  value: 'h4'
}, {
  label: 'h5',
  value: 'h5'
}, {
  label: 'h6',
  value: 'h6'
}, {
  label: 'p',
  value: 'p'
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tags);

/***/ }),

/***/ "./src/accordion/editor.scss":
/*!***********************************!*\
  !*** ./src/accordion/editor.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/accordion/style.scss":
/*!**********************************!*\
  !*** ./src/accordion/style.scss ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}


/***/ }),

/***/ "./src/accordion/block.json":
/*!**********************************!*\
  !*** ./src/accordion/block.json ***!
  \**********************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"apiVersion":2,"name":"aab/accordion-block","version":"0.1.0","title":"Separate Accordion","category":"accordion-block","description":"Build Accordion and FAQs Easily.","attributes":{"style":{"type":"object","default":{"border":{"color":"#CFCABE","radius":"3px","style":"dash","width":"1px"}}},"uniqueId":{"type":"string"},"border":{"type":"object","default":{"width":"1px","color":"#cccccc","style":"solid"}},"paddings":{"type":"object","default":{"top":"10px","left":"42px","right":"15px","bottom":"10px"}},"margins":{"type":"object","default":{"top":"0px","bottom":"15px"}},"borderRadius":{"type":"number","default":0},"qIconText":{"type":"string","default":"Q"},"qIconColor":{"type":"string","default":"#fff"},"qIconBg":{"type":"string","default":"#505050"},"aIconText":{"type":"string","default":"A"},"aIconColor":{"type":"string","default":"#fff"},"aIconBg":{"type":"string","default":"#f5a623"},"heading":{"type":"string","default":"Accordion Heading"},"subheading":{"type":"string","default":"Accordion Sub Heading"},"headingTag":{"type":"string","default":"h4"},"headingColor":{"type":"string"},"headerBg":{"type":"string"},"showIcon":{"type":"boolean","default":true},"anchorLinkShow":{"type":"boolean","default":false},"iconClass":{"type":"string","default":"plus-alt2"},"iconPosition":{"type":"string","default":"aab_right_icon"},"iconFontSize":{"type":"string","default":"25"},"iconColor":{"type":"string"},"iconBackground":{"type":"string"},"bodyBg":{"type":"string"},"makeActive":{"type":"boolean","default":false},"id":{"type":"string"},"linkedAccordion":{"type":"boolean","default":false},"link":{"type":"string","default":"#"},"tab":{"type":"boolean","default":false},"disableAccordion":{"type":"boolean","default":false},"feedbackShow":{"type":"boolean","default":false},"feedbacLabel":{"type":"string","default":"Was this answer helpful?"},"yesBtn":{"type":"string","default":"Yes"},"noBtn":{"type":"string","default":"No"},"counterShow":{"type":"boolean","default":false},"incNumber":{"type":"number","default":1},"anchorPosition":{"type":"string","default":"aab_right_link"},"uniqueKey":{"type":"string"},"faqSchema":{"type":"boolean","default":false}},"editorScript":["file:./index.js","aagb-anchor","aagb-separate-accordion","aagb-accordion-group"],"editorStyle":"file:./index.css","style":["aagb-separate-accordion"],"viewScript":["aagb-anchor","aagb-separate-accordion","aagb-accordion-group"]}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"accordion/index": 0,
/******/ 			"accordion/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkaccordion"] = globalThis["webpackChunkaccordion"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["accordion/style-index"], () => (__webpack_require__("./src/accordion/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map