/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/accordion-item/deprecated.js":
/*!******************************************!*\
  !*** ./src/accordion-item/deprecated.js ***!
  \******************************************/
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
    heading,
    headingTag,
    headingColor,
    showIcon,
    iconClass,
    iconPosition,
    iconColor,
    iconBackground,
    headerBg,
    bodyBg,
    buttonShow,
    anchorPosition,
    anchorLinkShow,
    contentCount,
    readText,
    styledQA,
    qIconText,
    qIconColor,
    qIconBg,
    aIconColor,
    aIconBg,
    aIconText,
    faqSchema,
    step,
    stepText,
    checkList,
    button_show,
    readMoreText
  } = attributes;
  const activeClass = makeActive ? `aagb__accordion_body--show` : '';
  const expandClass = buttonShow ? 'expand' : '';

  // set unique ID
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
  const renderContent = () => {
    const innerBlocksContent = Array.from({
      length: contentCount
    }, (_, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.Content, {
      key: index,
      className: "aagb__accordion_inner_content"
    }));
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      className: `aagb__accordion_component ${button_show ? "read-more-btn" : ""}`
    }, faqSchema ? {
      itemprop: "text"
    } : {}), innerBlocksContent);
  };

  // Check if aab_premium is true
  const aab_premium = aagb_local_object.licensing;
  const noProClass = aab_premium ? '' : 'no-pro-plan';
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(React.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("style", null, `.aagb__accordion_container.no-pro-plan .aagb__accordion_body { padding:  10px !important; }`), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save({
    className: `aagb__accordion_container panel ${step ? 'step' : ''} ${checkList ? 'check-list' : ''} ${makeActive ? 'aagb__accordion_active' : ''} ${styledQA ? 'style-qa' : ''}`
  }), {
    style: {
      border: `${border.width} ${border.style} ${border.color}`,
      marginTop: `${margins.top}`,
      marginBottom: `${margins.bottom}`,
      borderRadius: `${borderRadius}px`
    }
  }, faqSchema ? {
    itemScope: true,
    itemprop: "mainEntity",
    itemType: "https://schema.org/Question"
  } : {}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: `aagb__accordion_head ${iconPosition}`,
    "data-active": makeActive,
    style: {
      color: headingColor ? headingColor : '#333333',
      backgroundColor: headerBg ? headerBg : 'transparent',
      padding: `${paddings.top} ${paddings.left} ${paddings.bottom} ${paddings.right}`
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: `aagb__accordion_heading ${iconPosition} ${anchorPosition || ''}`
  }, aab_premium && styledQA && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "icon-container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "icon-q",
    style: {
      color: qIconColor,
      backgroundColor: qIconBg
    }
  }, " ", qIconText, " "), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "icon-a",
    style: {
      color: aIconColor,
      backgroundColor: aIconBg
    }
  }, " ", aIconText, " ")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "aagb__accordion_title",
    tagName: headingTag,
    value: heading,
    style: {
      margin: 0,
      color: headingColor ? headingColor : '#333333'
    }
  }, faqSchema ? {
    itemprop: "name"
  } : {}))), !showIcon && step && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
    id: "complete-sign"
  }, "\u2713"), showIcon && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: `aagb__accordion_icon`,
    style: {
      color: iconColor ? iconColor : '#333333',
      backgroundColor: iconBackground ? iconBackground : 'transparent'
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "aagb__icon_dashicons_box"
  }, step && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
    id: "complete-sign"
  }, "\u2713"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
    className: `aagb__icon dashicons dashicons-${currentIconClass}`
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: `aagb__accordion_body ${activeClass} ${expandClass} `,
    role: "region",
    style: {
      backgroundColor: bodyBg ? bodyBg : 'transparent',
      // Conditionally add borderTop if border.width, border.style, and border.color are defined
      ...(!styledQA ? {
        borderTop: `${border.width} ${border.style} ${border.color}`
      } : {}),
      ...(!styledQA ? {
        padding: `${paddings.top} ${paddings.left} ${paddings.bottom} ${paddings.right}`
      } : {})
      //padding: `${paddings.top} ${paddings.left} ${paddings.bottom} ${paddings.right}`,
    }
  }, faqSchema ? {
    itemScope: true,
    itemprop: "acceptedAnswer",
    itemType: "https://schema.org/Answer"
  } : {}), renderContent(), step && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "continue"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
    className: "step-text"
  }, stepText), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
    className: "step-down-icon"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
    width: "32",
    height: "32",
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    fill: "#ffffff"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
    d: "M 17,2C 8.716,2, 2,8.716, 2,17S 8.716,32, 17,32S 32,25.284, 32,17S 25.284,2, 17,2z M 23.724,15.92l-6.11,7.714 c-0.008,0.012-0.012,0.028-0.022,0.040c-0.34,0.434-0.894,0.434-1.234,0L 10.236,15.92c-0.34-0.434-0.34-1.138,0-1.572L 10.24,14.352 C 10.398,14.138, 10.62,14, 10.87,14l 12.22,0 c 0.246,0, 0.466,0.13, 0.624,0.338c 0.004,0.004, 0.008,0.004, 0.010,0.008 C 24.066,14.782, 24.066,15.486, 23.724,15.92z"
  }))))), button_show && aab_premium && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "aagb_overlay"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("button", {
    className: "aagb_button_toggle"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    value: readMoreText,
    style: {
      margin: 0
    }
  }))))), anchorLinkShow === true && aab_premium && !step && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("script", null, `
						jQuery(document).ready(function($) {
							if ($('.aagb__accordion_heading').length) {
								$(document).ready(function() {
									var Anchor1 = new AnchorJS();
									Anchor1.add('.aagb__accordion_heading');
								});
							}
						});
								
					`), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("script", null, `
					jQuery(document).ready(function($) {
						var text_max = parseInt("${contentCount}"); // Parse contentCount as an integer

						$(".expand .aagb__accordion_component p").hide();
						$(".expand .aagb__accordion_component p").slice(0, text_max).show();
						
						$(".expand .aagb_button_toggle").click(function(e) {
							e.preventDefault();
							$(".expand .aagb__accordion_component p:hidden").slice(0, text_max).fadeIn("slow");
							if ($(".expand .aagb__accordion_component p:hidden").length === 0) {
								$(".aagb_button_toggle").fadeOut("slow");
								$(".aagb_overlay").fadeOut("slow");
							}
						});	
						
					});						
									
				`));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (saveDep);

/***/ }),

/***/ "./src/accordion-item/edit.js":
/*!************************************!*\
  !*** ./src/accordion-item/edit.js ***!
  \************************************/
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
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../colors */ "./src/colors.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icons */ "./src/accordion-item/icons.js");
/* harmony import */ var _tags__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../tags */ "./src/tags.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./editor.scss */ "./src/accordion-item/editor.scss");


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
  value: 'aagb_right_icon'
}, {
  label: 'Left',
  value: 'aagb_left_icon'
}];
const anchorPositions = [{
  label: 'Left',
  value: 'aagb_left_link'
}, {
  label: 'Right',
  value: 'aagb_right_link'
}];
const Edit = ({
  attributes,
  setAttributes,
  context
}) => {
  const {
    makeActive,
    border,
    margins,
    paddings,
    borderRadius,
    heading,
    headingTag,
    headingColor,
    showIcon,
    iconClass,
    iconPosition,
    iconColor,
    iconBackground,
    headerBg,
    bodyBg,
    buttonShow,
    anchorPosition,
    contentCount,
    styledQA,
    qIconText,
    qIconColor,
    qIconBg,
    aIconColor,
    aIconBg,
    aIconText,
    faqSchema,
    step,
    stepText,
    stepCmpltText,
    checkList,
    anchorLinkShow,
    button_show,
    readMoreText
  } = attributes;

  // Generate the template for InnerBlocks based on contentCount
  const innerBlocksTemplate = Array.from({
    length: 1
  }, (_, index) => ['core/paragraph', {
    content: `Content ${index + 1}`
  }]);

  // Check if aab_premium is true
  const aab_premium = aagb_local_object.licensing;
  const is_disable = aab_premium ? '' : 'disabled';
  const anchor_link_checked = aab_premium ? anchorLinkShow : 'false';
  const read_more_checked = aab_premium ? buttonShow : 'false';
  const has_disabled_class = aab_premium ? '' : 'aab-pro-element';
  const hasQaStyle = context["aagb/accordion-hasQaStyle"];
  const hasFaqSchema = context["aagb/accordion-faqSchema"];
  const hasStep = context["aagb/accordion-step"];
  const hasStepText = context["aagb/accordion-stepText"];
  const hasStepCmpltText = context["aagb/accordion-stepCmpltText"];
  const hasCheckList = context["aagb/accordion-checkList"];
  const anchorLinksShow = context["aagb/accordion-anchorLinksShow"];
  const buttonShowContext = context["aagb/accordion-buttonShow"];
  const readMoreTxt = context["aagb/accordion-readMoreText"];
  const hasBorder = context["aagb/accordion-border"];
  const hasMargins = context["aagb/accordion-margins"];
  const hasPaddings = context["aagb/accordion-paddings"];
  const hasBorderRadius = context["aagb/accordion-borderRadius"];
  const hasHeadingColor = context["aagb/accordion-headingColor"];
  const hasShowIcon = context["aagb/accordion-showIcon"];
  const hasIconColor = context["aagb/accordion-iconColor"];
  const hasIconBackground = context["aagb/accordion-iconBackground"];
  const hasHeaderBg = context["aagb/accordion-headerBg"];
  const hasBodyBg = context["aagb/accordion-bodyBg"];
  const hasStyledQA = context["aagb/accordion-styledQA"];
  const hasQIconText = context["aagb/accordion-qIconText"];
  const hasQIconColor = context["aagb/accordion-qIconColor"];
  const hasQIconBg = context["aagb/accordion-qIconBg"];
  const hasAIconText = context["aagb/accordion-aIconText"];
  const hasAIconColor = context["aagb/accordion-aIconColor"];
  const hasAIconBg = context["aagb/accordion-aIconBg"];
  const hasContentCount = context["aagb/accordion-contentCount"];
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setAttributes({
      styledQA: hasQaStyle
    });
  }, [hasQaStyle]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setAttributes({
      faqSchema: hasFaqSchema
    });
  }, [hasFaqSchema]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setAttributes({
      step: hasStep
    });
  }, [hasStep]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setAttributes({
      stepText: hasStepText
    });
  }, [hasStepText]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setAttributes({
      stepCmpltText: hasStepCmpltText
    });
  }, [hasStepCmpltText]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setAttributes({
      checkList: hasCheckList
    });
  }, [hasCheckList]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setAttributes({
      anchorLinkShow: anchorLinksShow
    });
  }, [anchorLinksShow]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setAttributes({
      button_show: buttonShowContext
    });
  }, [buttonShowContext]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setAttributes({
      readMoreText: readMoreTxt
    });
  }, [readMoreTxt]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setAttributes({
      border: hasBorder
    });
  }, [hasBorder]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setAttributes({
      margins: hasMargins
    });
  }, [hasMargins]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setAttributes({
      paddings: hasPaddings
    });
  }, [hasPaddings]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setAttributes({
      borderRadius: hasBorderRadius
    });
  }, [hasBorderRadius]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setAttributes({
      headingColor: hasHeadingColor
    });
  }, [hasHeadingColor]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setAttributes({
      showIcon: hasShowIcon
    });
  }, [hasShowIcon]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setAttributes({
      iconColor: hasIconColor
    });
  }, [hasIconColor]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setAttributes({
      iconBackground: hasIconBackground
    });
  }, [hasIconBackground]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setAttributes({
      headerBg: hasHeaderBg
    });
  }, [hasHeaderBg]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setAttributes({
      bodyBg: hasBodyBg
    });
  }, [hasBodyBg]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setAttributes({
      styledQA: hasStyledQA
    });
  }, [hasStyledQA]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setAttributes({
      qIconText: hasQIconText
    });
  }, [hasQIconText]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setAttributes({
      qIconColor: hasQIconColor
    });
  }, [hasQIconColor]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setAttributes({
      qIconBg: hasQIconBg
    });
  }, [hasQIconBg]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setAttributes({
      aIconText: hasAIconText
    });
  }, [hasAIconText]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setAttributes({
      aIconColor: hasAIconColor
    });
  }, [hasAIconColor]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setAttributes({
      aIconBg: hasAIconBg
    });
  }, [hasAIconBg]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setAttributes({
      contentCount: hasContentCount
    });
  }, [hasContentCount]);
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
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    initialOpen: false,
    title: __('Accordion Status', 'advanced-accordion-block')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: __('Make it active on load', 'advanced-accordion-block'),
    checked: makeActive,
    onChange: () => setAttributes({
      makeActive: !makeActive
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    initialOpen: false,
    title: __('Accordion Head', 'advanced-accordion-block')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: __('Select Heading Tag', 'advanced-accordion-block'),
    options: _tags__WEBPACK_IMPORTED_MODULE_6__["default"],
    onChange: headingTag => setAttributes({
      headingTag
    }),
    value: headingTag
  })), anchorLinkShow && !step && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: __('Anchor Link', 'advanced-accordion-block'),
    initialOpen: false,
    className: has_disabled_class
  }, anchorLinkShow && !hasQaStyle && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: __('Anchor Icon Position', 'advanced-accordion-block'),
    disabled: is_disable,
    options: anchorPositions,
    onChange: anchorPosition => setAttributes({
      anchorPosition
    }),
    value: anchorPosition
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: __('Accordion Icon', 'advanced-accordion-block'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: __('Show Icon', 'advanced-accordion-block'),
    checked: showIcon,
    onChange: () => setAttributes({
      showIcon: !showIcon
    })
  }), showIcon && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: __('Select Icon Type', 'advanced-accordion-block'),
    options: _icons__WEBPACK_IMPORTED_MODULE_5__["default"],
    onChange: iconClass => {
      setAttributes({
        iconClass
      });
    },
    value: iconClass
  }), !hasQaStyle && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: __('Icon Position', 'advanced-accordion-block'),
    options: iconPositions,
    onChange: iconPosition => {
      setAttributes({
        iconPosition
      });
    },
    value: iconPosition
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
    className: `aagb__accordion_container ${step ? 'step' : ''} ${checkList ? 'check-list' : ''} ${makeActive ? 'aagb__accordion_active' : ''} ${hasQaStyle ? 'style-qa' : ''}`
  }), {
    style: {
      border: `${border.width} ${border.style} ${border.color}`,
      marginTop: `${margins.top}`,
      marginBottom: `${margins.bottom}`,
      borderRadius: `${borderRadius}px`
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: `aagb__accordion_head ${iconPosition}`,
    style: {
      color: headingColor ? headingColor : '#333333',
      backgroundColor: headerBg ? headerBg : 'transparent',
      padding: `${paddings.top} ${paddings.left} ${paddings.bottom} ${paddings.right}`
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: `aagb__accordion_heading ${iconPosition} ${anchorPosition || ''}`
  }, aab_premium && checkList && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("label", {
    className: "checklist-label"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("input", {
    type: "checkbox",
    className: "checklist-box"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", null)), hasQaStyle && aab_premium && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "icon-container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "icon-q",
    style: {
      color: qIconColor,
      backgroundColor: qIconBg
    }
  }, " ", qIconText, " "), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "icon-a",
    style: {
      color: aIconColor,
      backgroundColor: aIconBg
    }
  }, " ", aIconText, " ")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: headingTag,
    value: heading,
    className: "aagb__accordion_title",
    onChange: heading => setAttributes({
      heading
    }),
    style: {
      margin: 0,
      color: headingColor ? headingColor : '#333333'
    }
  }), anchorLinkShow && aab_premium && !step && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("a", {
    className: "anchorjs-link",
    href: "#"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("i", {
    className: "dashicons dashicons-admin-links"
  }))), showIcon && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: `aagb__accordion_icon`,
    style: {
      color: iconColor ? iconColor : '#333333',
      backgroundColor: iconBackground ? iconBackground : 'transparent'
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
    className: `aagb__icon dashicons dashicons-${iconClass}`
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: `aagb__accordion_body ${makeActive ? 'aagb__accordion_body--show' : ''}`,
    role: "region",
    style: {
      backgroundColor: bodyBg ? bodyBg : 'transparent',
      ...(!hasQaStyle ? {
        borderTop: `${border.width} ${border.style} ${border.color}`
      } : {}),
      // ...(!hasQaStyle ? {
      //     padding: `${paddings.top} ${paddings.left} ${paddings.bottom} ${paddings.right}`,
      // } : {
      //     paddingBottom: `${paddings.bottom}`,
      //     paddingRight: `${paddings.right}`,
      //     paddingLeft: `calc(${paddings.left} + 90px)`,
      // }),

      ...(!hasQaStyle ? {
        padding: `${paddings.top} ${paddings.left} ${paddings.bottom} ${paddings.right}`
      } : hasQaStyle && hasCheckList ? {
        paddingBottom: `${paddings.bottom}`,
        paddingRight: `${paddings.right}`,
        paddingLeft: `calc(${paddings.left} + 140px)`
      } : {
        paddingBottom: `${paddings.bottom}`,
        paddingRight: `${paddings.right}`,
        paddingLeft: `calc(${paddings.left} + 90px)`
      }),
      ...(hasQaStyle && !aab_premium ? {
        padding: `${paddings.top} ${paddings.left} ${paddings.bottom} ${paddings.right}`
      } : {})
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks, {
    allowedBlocks: true,
    template: innerBlocksTemplate
  }), button_show && aab_premium && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("button", {
    className: "aagb_button_toggle"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    value: readMoreText,
    onChange: readMoreText => setAttributes({
      readMoreText
    }),
    style: {
      margin: 0
    }
  })), step && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "continue"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
    className: "step-text"
  }, stepText), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
    className: "step-down-icon"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
    width: "32",
    height: "32",
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    fill: "#ffffff"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
    d: "M 17,2C 8.716,2, 2,8.716, 2,17S 8.716,32, 17,32S 32,25.284, 32,17S 25.284,2, 17,2z M 23.724,15.92l-6.11,7.714 c-0.008,0.012-0.012,0.028-0.022,0.040c-0.34,0.434-0.894,0.434-1.234,0L 10.236,15.92c-0.34-0.434-0.34-1.138,0-1.572L 10.24,14.352 C 10.398,14.138, 10.62,14, 10.87,14l 12.22,0 c 0.246,0, 0.466,0.13, 0.624,0.338c 0.004,0.004, 0.008,0.004, 0.010,0.008 C 24.066,14.782, 24.066,15.486, 23.724,15.92z"
  }))))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/accordion-item/icons.js":
/*!*************************************!*\
  !*** ./src/accordion-item/icons.js ***!
  \*************************************/
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

/***/ "./src/accordion-item/index.js":
/*!*************************************!*\
  !*** ./src/accordion-item/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/accordion-item/style.scss");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ "./src/accordion-item/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/accordion-item/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/accordion-item/save.js");
/* harmony import */ var _deprecated__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./deprecated */ "./src/accordion-item/deprecated.js");




/**
 * Internal dependencies
 */




/**
 * Block Registration
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_2__, {
  icon: {
    src: 'minus',
    foreground: '#77b5f7'
  },
  usesContext: ["aagb/accordion-hasQaStyle", "aagb/accordion-faqSchema", "aagb/accordion-step", "aagb/accordion-stepText", "aagb/accordion-checkList", "aagb/accordion-anchorLinksShow", "aagb/accordion-buttonShow", "aagb/accordion-readMoreText", "aagb/accordion-border", "aagb/accordion-margins", "aagb/accordion-paddings", "aagb/accordion-borderRadius", "aagb/accordion-headingColor", "aagb/accordion-showIcon", "aagb/accordion-iconColor", "aagb/accordion-iconBackground", "aagb/accordion-headerBg", "aagb/accordion-bodyBg", "aagb/accordion-styledQA", "aagb/accordion-qIconText", "aagb/accordion-qIconColor", "aagb/accordion-qIconBg", "aagb/accordion-aIconText", "aagb/accordion-aIconColor", "aagb/accordion-aIconBg", "aagb/accordion-contentCount"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"],
  deprecated: [{
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
      "buttonShow": {
        "type": "boolean",
        "default": false
      },
      "anchorLinkShow": {
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
      "readMoreText": {
        "type": "string"
      },
      "styledQA": {
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
      "faqSchema": {
        "type": "boolean"
      },
      "step": {
        "type": "boolean"
      },
      "stepText": {
        "type": "string"
      },
      "checkList": {
        "type": "boolean"
      },
      "button_show": {
        "type": "boolean"
      }
    },
    save: _deprecated__WEBPACK_IMPORTED_MODULE_5__["default"]
  }]
});

/***/ }),

/***/ "./src/accordion-item/save.js":
/*!************************************!*\
  !*** ./src/accordion-item/save.js ***!
  \************************************/
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

const Save = ({
  attributes
}) => {
  const {
    uniqueId,
    makeActive,
    border,
    margins,
    paddings,
    borderRadius,
    heading,
    headingTag,
    headingColor,
    showIcon,
    iconClass,
    iconPosition,
    iconColor,
    iconBackground,
    headerBg,
    bodyBg,
    buttonShow,
    anchorPosition,
    anchorLinkShow,
    contentCount,
    readText,
    styledQA,
    qIconText,
    qIconColor,
    qIconBg,
    aIconColor,
    aIconBg,
    aIconText,
    faqSchema,
    step,
    stepText,
    checkList,
    button_show,
    readMoreText
  } = attributes;
  const activeClass = makeActive ? `aagb__accordion_body--show` : '';
  const expandClass = buttonShow ? 'expand' : '';

  // set unique ID
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
  const renderContent = () => {
    const innerBlocksContent = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.Content, {
      key: 0,
      className: "aagb__accordion_inner_content"
    });
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      className: `aagb__accordion_component ${button_show ? "read-more-btn aagb_overlay" : ""}`,
      "data-contentCount": button_show ? contentCount : null
    }, faqSchema ? {
      itemprop: "text"
    } : {}), innerBlocksContent);
  };

  // Check if aab_premium is true
  const aab_premium = aagb_local_object.licensing;
  const noProClass = aab_premium ? '' : 'no-pro-plan';
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(React.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("style", null, `.aagb__accordion_container.no-pro-plan .aagb__accordion_body { padding:  10px !important; }`), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save({
    className: `aagb__accordion_container panel ${step ? 'step' : ''} ${checkList ? 'check-list' : ''} ${makeActive ? 'aagb__accordion_active' : ''} ${styledQA ? 'style-qa' : ''}`
  }), {
    style: {
      border: `${border.width} ${border.style} ${border.color}`,
      marginTop: `${margins.top}`,
      marginBottom: `${margins.bottom}`,
      borderRadius: `${borderRadius}px`
    }
  }, faqSchema ? {
    itemScope: true,
    itemprop: "mainEntity",
    itemType: "https://schema.org/Question"
  } : {}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: `aagb__accordion_head ${iconPosition}`,
    "data-active": makeActive,
    style: {
      color: headingColor ? headingColor : '#333333',
      backgroundColor: headerBg ? headerBg : 'transparent',
      padding: `${paddings.top} ${paddings.left} ${paddings.bottom} ${paddings.right}`
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: `aagb__accordion_heading ${iconPosition} ${anchorPosition || ''}`
  }, aab_premium && styledQA && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "icon-container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "icon-q",
    style: {
      color: qIconColor,
      backgroundColor: qIconBg
    }
  }, " ", qIconText, " "), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "icon-a",
    style: {
      color: aIconColor,
      backgroundColor: aIconBg
    }
  }, " ", aIconText, " ")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "aagb__accordion_title",
    tagName: headingTag,
    value: heading,
    style: {
      margin: 0,
      color: headingColor ? headingColor : '#333333'
    }
  }, faqSchema ? {
    itemprop: "name"
  } : {}))), !showIcon && step && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
    id: "complete-sign"
  }, "\u2713"), showIcon && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: `aagb__accordion_icon`,
    style: {
      color: iconColor ? iconColor : '#333333',
      backgroundColor: iconBackground ? iconBackground : 'transparent'
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "aagb__icon_dashicons_box"
  }, step && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
    id: "complete-sign"
  }, "\u2713"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
    className: `aagb__icon dashicons dashicons-${currentIconClass}`
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: `aagb__accordion_body ${activeClass} ${expandClass} `,
    role: "region",
    style: {
      backgroundColor: bodyBg ? bodyBg : 'transparent',
      // Conditionally add borderTop if border.width, border.style, and border.color are defined
      ...(!styledQA ? {
        borderTop: `${border.width} ${border.style} ${border.color}`
      } : {}),
      // ...( ! styledQA ? {
      // 	padding: `${paddings.top} ${paddings.left} ${paddings.bottom} ${paddings.right}`,
      // } : {
      // 	paddingBottom: `${paddings.bottom}`,
      // 	paddingRight: `${paddings.right}`,
      // 	paddingLeft: `calc(${paddings.left} + 90px)`,
      // }),

      ...(!styledQA ? {
        padding: `${paddings.top} ${paddings.left} ${paddings.bottom} ${paddings.right}`
      } : styledQA && checkList ? {
        paddingBottom: `${paddings.bottom}`,
        paddingRight: `${paddings.right}`,
        paddingLeft: `calc(${paddings.left} + 140px)`
      } : {
        paddingBottom: `${paddings.bottom}`,
        paddingRight: `${paddings.right}`,
        paddingLeft: `calc(${paddings.left} + 90px)`
      })
    }
  }, faqSchema ? {
    itemScope: true,
    itemprop: "acceptedAnswer",
    itemType: "https://schema.org/Answer"
  } : {}), renderContent(), step && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "continue"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
    className: "step-text"
  }, stepText), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
    className: "step-down-icon"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
    width: "32",
    height: "32",
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    fill: "#ffffff"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
    d: "M 17,2C 8.716,2, 2,8.716, 2,17S 8.716,32, 17,32S 32,25.284, 32,17S 25.284,2, 17,2z M 23.724,15.92l-6.11,7.714 c-0.008,0.012-0.012,0.028-0.022,0.040c-0.34,0.434-0.894,0.434-1.234,0L 10.236,15.92c-0.34-0.434-0.34-1.138,0-1.572L 10.24,14.352 C 10.398,14.138, 10.62,14, 10.87,14l 12.22,0 c 0.246,0, 0.466,0.13, 0.624,0.338c 0.004,0.004, 0.008,0.004, 0.010,0.008 C 24.066,14.782, 24.066,15.486, 23.724,15.92z"
  }))))), button_show && aab_premium && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("button", {
    className: "aagb_button_toggle"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    value: readMoreText,
    style: {
      margin: 0
    }
  }))))), anchorLinkShow === true && aab_premium && !step && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("script", null, `
						jQuery(document).ready(function($) {
							if ($('.aagb__accordion_heading').length) {
								$(document).ready(function() {
									var Anchor1 = new AnchorJS();
									Anchor1.add('.aagb__accordion_heading');
								});
							}
						});
								
					`));
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

/***/ "./src/accordion-item/editor.scss":
/*!****************************************!*\
  !*** ./src/accordion-item/editor.scss ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/accordion-item/style.scss":
/*!***************************************!*\
  !*** ./src/accordion-item/style.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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

/***/ "./src/accordion-item/block.json":
/*!***************************************!*\
  !*** ./src/accordion-item/block.json ***!
  \***************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"apiVersion":2,"name":"aab/accordion-item","version":"0.1.0","title":"Single Accordion","category":"accordion-block","description":"Single Accordion for Group Accordion","parent":["aab/group-accordion"],"supports":{"html":false,"anchor":true},"example":{"attributes":{"heading":"Accordion Heading"}},"attributes":{"border":{"type":"object","default":{"width":"1px","color":"#cccccc","style":"solid"}},"paddings":{"type":"object","default":{"top":"10px","left":"15px","right":"15px","bottom":"10px"}},"margins":{"type":"object","default":{"top":"0px","bottom":"15px"}},"borderRadius":{"type":"number","default":0},"heading":{"type":"string","default":"Accordion Heading"},"headingTag":{"type":"string","default":"h4"},"headingColor":{"type":"string"},"headerBg":{"type":"string"},"showIcon":{"type":"boolean","default":true},"iconClass":{"type":"string","default":"plus-alt2"},"iconPosition":{"type":"string","default":"aab_right_icon"},"iconColor":{"type":"string"},"iconBackground":{"type":"string"},"bodyBg":{"type":"string"},"makeActive":{"type":"boolean","default":false},"uniqueId":{"type":"string"},"buttonShow":{"type":"boolean","default":false},"anchorLinkShow":{"type":"boolean"},"anchorPosition":{"type":"string","default":"aagb_right_link"},"contentCount":{"type":"number","default":100},"readMoreText":{"type":"string"},"styledQA":{"type":"boolean"},"qIconText":{"type":"string","default":"Q"},"qIconColor":{"type":"string","default":"#fff"},"qIconBg":{"type":"string","default":"#505050"},"aIconText":{"type":"string","default":"A"},"aIconColor":{"type":"string","default":"#fff"},"aIconBg":{"type":"string","default":"#f5a623"},"faqSchema":{"type":"boolean"},"step":{"type":"boolean"},"stepText":{"type":"string"},"stepCmpltText":{"type":"string","default":"Congratulations, you are done!"},"checkList":{"type":"boolean"},"button_show":{"type":"boolean"}},"textdomain":"advanced-accordion-block","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","viewScript":["aagb-anchor","aagb-separate-accordion","aagb-accordion-group"]}');

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
/******/ 			"accordion-item/index": 0,
/******/ 			"accordion-item/style-index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["accordion-item/style-index"], () => (__webpack_require__("./src/accordion-item/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map