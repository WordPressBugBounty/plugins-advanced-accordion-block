/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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

/***/ "./src/group-accordion/deprecated.js":
/*!*******************************************!*\
  !*** ./src/group-accordion/deprecated.js ***!
  \*******************************************/
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




const saveDep = ({
  attributes
}) => {
  const {
    uniqueId,
    searchShow,
    showAllbtn,
    placeholderText,
    closeText,
    openText,
    activetorClass,
    faqSchema,
    step,
    contentCount
  } = attributes;
  const aab_premium = aagb_local_object.licensing;
  const activetorClassEvent = aab_premium ? activetorClass : 'click';
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, searchShow && aab_premium && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "aagb_form_inner",
    id: "aagb-search-form"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "aagb_form_group"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("input", {
    id: "aagb-search-id",
    type: "text",
    className: "aagb_form_control noEnterSubmit",
    placeholder: placeholderText || 'Search for FAQ'
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
    id: "aagb-search-help-block",
    className: "help-block"
  })), showAllbtn && aab_premium && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "aagb_accordion_wrapper_btn"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("a", {
    href: "#",
    className: "content-accordion__close-all"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
    class: "svg-inline--fa fa-compress-alt fa-w-14",
    role: "presentation",
    "aria-hidden": "true",
    focusable: "false",
    "data-prefix": "fas",
    "data-icon": "compress-alt",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 448 512",
    "data-fa-i2svg": ""
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
    fill: "currentColor",
    d: "M4.686 427.314L104 328l-32.922-31.029C55.958 281.851 66.666 256 88.048 256h112C213.303 256 224 266.745 224 280v112c0 21.382-25.803 32.09-40.922 16.971L152 376l-99.314 99.314c-6.248 6.248-16.379 6.248-22.627 0L4.686 449.941c-6.248-6.248-6.248-16.379 0-22.627zM443.314 84.686L344 184l32.922 31.029c15.12 15.12 4.412 40.971-16.97 40.971h-112C234.697 256 224 245.255 224 232V120c0-21.382 25.803-32.09 40.922-16.971L296 136l99.314-99.314c6.248-6.248 16.379-6.248 22.627 0l25.373 25.373c6.248 6.248 6.248 16.379 0 22.627z"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    value: closeText,
    style: {
      margin: 0
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("a", {
    href: "#",
    className: "content-accordion__show-all"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
    class: "svg-inline--fa fa-expand-alt fa-w-14",
    role: "presentation",
    "aria-hidden": "true",
    focusable: "false",
    "data-prefix": "fas",
    "data-icon": "expand-alt",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 448 512",
    "data-fa-i2svg": ""
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
    fill: "currentColor",
    d: "M212.686 315.314L120 408l32.922 31.029c15.12 15.12 4.412 40.971-16.97 40.971h-112C10.697 480 0 469.255 0 456V344c0-21.382 25.803-32.09 40.922-16.971L72 360l92.686-92.686c6.248-6.248 16.379-6.248 22.627 0l25.373 25.373c6.249 6.248 6.249 16.378 0 22.627zm22.628-118.628L328 104l-32.922-31.029C279.958 57.851 290.666 32 312.048 32h112C437.303 32 448 42.745 448 56v112c0 21.382-25.803 32.09-40.922 16.971L376 152l-92.686 92.686c-6.248 6.248-16.379 6.248-22.627 0l-25.373-25.373c-6.249-6.248-6.249-16.378 0-22.627z"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    value: openText,
    style: {
      margin: 0
    }
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save({
    className: `searchable aagb_accordion_${uniqueId} ${activetorClassEvent}`
  }), faqSchema ? {
    itemScope: true,
    itemType: "https://schema.org/FAQPage"
  } : {}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.Content, null)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    dangerouslySetInnerHTML: {
      __html: `
				<script>
				let aagb_group_accordion_text_max = ${contentCount}					
				 </script>
				`
    }
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (saveDep);

/***/ }),

/***/ "./src/group-accordion/edit.js":
/*!*************************************!*\
  !*** ./src/group-accordion/edit.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor.scss */ "./src/group-accordion/editor.scss");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../colors */ "./src/colors.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__);

/* eslint-disable @wordpress/no-unsafe-wp-apis */
// import editor style







let uniqueCounter = 0;
const Edit = ({
  attributes,
  setAttributes,
  clientId
}) => {
  const {
    uniqueId,
    activeAccordionBorder,
    searchShow,
    showAllbtn,
    placeholderText,
    closeText,
    openText,
    spanTag,
    hasQaStyle,
    faqSchema,
    step,
    stepText,
    stepCmpltText,
    checkList,
    anchorLinksShow,
    buttonShow,
    contentCount,
    readText,
    border,
    margins,
    paddings,
    borderRadius,
    headingColor,
    showIcon,
    iconColor,
    iconBackground,
    headerBg,
    bodyBg,
    styledQA,
    qIconText,
    qIconColor,
    qIconBg,
    aIconColor,
    aIconBg,
    aIconText
  } = attributes;
  const [activetorClass, setActivetorClass] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('click');

  // set unique ID
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!uniqueId) {
      const newUniqueId = `${clientId.slice(0, 8)}_${uniqueCounter++}`;
      setAttributes({
        uniqueId: newUniqueId
      });
    }
  }, []);
  const handleActivetorChange = value => {
    setActivetorClass(value);
    setAttributes({
      activetorClass: value
    });
  };

  // Check if aab_premium is true
  const aab_premium = aagb_local_object.licensing;
  const is_disable = aab_premium ? '' : 'disabled';
  const search_checked = aab_premium ? searchShow : 'false';
  const show_close_btn_checked = aab_premium ? showAllbtn : 'false';
  const has_disabled_class = aab_premium ? '' : 'aab-pro-element';
  const anchor_link_checked = aab_premium ? anchorLinksShow : 'false';
  const read_more_checked = aab_premium ? buttonShow : 'false';
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.useBlockProps)();
  const qaStyle = blockProps.className.includes('is-style-qa');
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setAttributes({
      hasQaStyle: qaStyle
    });
  }, [qaStyle]);
  let optionsName;
  if (step) {
    optionsName = "step";
  } else if (checkList) {
    optionsName = "checkList";
  } else {
    optionsName = "none";
  }
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", null, `.aagb_accordion_${uniqueId} .aagb__accordion_active { border: ${activeAccordionBorder.width} ${activeAccordionBorder.style} ${activeAccordionBorder.color} !important; }`, `.aagb_accordion_${uniqueId} .aagb__accordion_body { border-top: ${activeAccordionBorder.width} ${activeAccordionBorder.style} ${activeAccordionBorder.color} !important; }`), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.InspectorControls, {
    group: "styles"
  }, hasQaStyle && aab_premium && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Q/A Icons Styles', 'advanced-accordion-block'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "aab__label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Q Icon Color', 'advanced-accordion-block')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPalette, {
    colors: _colors__WEBPACK_IMPORTED_MODULE_4__["default"],
    value: qIconColor,
    onChange: qIconColor => setAttributes({
      qIconColor
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "aab__label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Q Icon Background Color', 'advanced-accordion-block')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPalette, {
    colors: _colors__WEBPACK_IMPORTED_MODULE_4__["default"],
    value: qIconBg,
    onChange: qIconBg => setAttributes({
      qIconBg
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "aab__label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('A Icon Color', 'advanced-accordion-block')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPalette, {
    colors: _colors__WEBPACK_IMPORTED_MODULE_4__["default"],
    value: aIconColor,
    onChange: aIconColor => setAttributes({
      aIconColor
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "aab__label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('A Icon Background Color', 'advanced-accordion-block')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPalette, {
    colors: _colors__WEBPACK_IMPORTED_MODULE_4__["default"],
    value: aIconBg,
    onChange: aIconBg => setAttributes({
      aIconBg
    })
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    initialOpen: false,
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Active Accordion Style', 'advanced-accordion-block')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "aab__label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Border', 'advanced-accordion-block')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalBorderControl, {
    colors: _colors__WEBPACK_IMPORTED_MODULE_4__["default"],
    onChange: value => setAttributes({
      activeAccordionBorder: value
    }),
    value: activeAccordionBorder,
    withSlider: true
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "aa-custom-spacer"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    initialOpen: false,
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Accordion Styles', 'advanced-accordion-block')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalBoxControl, {
    values: margins,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Accordion Margin', 'advanced-accordion-block'),
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
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "aa-custom-spacer"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalBoxControl, {
    values: paddings,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Content Padding', 'advanced-accordion-block'),
    sides: ['horizontal', 'vertical'],
    units: [],
    splitOnAxis: true,
    allowReset: false,
    onChange: newValue => setAttributes({
      ...paddings,
      paddings: {
        top: newValue.top,
        left: newValue.left,
        right: newValue.right,
        bottom: newValue.bottom
      }
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "aa-custom-spacer"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Set Accordion Border', 'advanced-accordion-block')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalBorderControl, {
    colors: _colors__WEBPACK_IMPORTED_MODULE_4__["default"],
    onChange: value => setAttributes({
      border: value
    }),
    value: border,
    withSlider: true
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "aa-custom-spacer"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Border Radius', 'advanced-accordion-block'),
    value: borderRadius,
    onChange: borderRadius => setAttributes({
      borderRadius
    }),
    min: 0,
    max: 50
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    initialOpen: false,
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Accordion Head', 'advanced-accordion-block')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "aagb__label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Header Color', 'advanced-accordion-block')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPalette, {
    colors: _colors__WEBPACK_IMPORTED_MODULE_4__["default"],
    value: headingColor,
    onChange: headingColor => setAttributes({
      headingColor
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "aagb__label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Header Background', 'advanced-accordion-block')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPalette, {
    colors: _colors__WEBPACK_IMPORTED_MODULE_4__["default"],
    value: headerBg,
    onChange: headerBg => setAttributes({
      headerBg
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Accordion Icon', 'advanced-accordion-block'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Show Icon', 'advanced-accordion-block'),
    checked: showIcon,
    onChange: () => setAttributes({
      showIcon: !showIcon
    })
  }), showIcon && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "aagb__label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Icon Color', 'advanced-accordion-block')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPalette, {
    colors: _colors__WEBPACK_IMPORTED_MODULE_4__["default"],
    value: iconColor,
    onChange: iconColor => setAttributes({
      iconColor
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "aagb__label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Icon Background', 'advanced-accordion-block')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPalette, {
    colors: _colors__WEBPACK_IMPORTED_MODULE_4__["default"],
    value: iconBackground,
    onChange: iconBackground => setAttributes({
      iconBackground
    })
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Accordion Body', 'advanced-accordion-block'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "aagb__label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Background Color', 'advanced-accordion-block')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPalette, {
    colors: _colors__WEBPACK_IMPORTED_MODULE_4__["default"],
    value: bodyBg,
    onChange: bodyBg => setAttributes({
      bodyBg
    })
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Accordion Search', 'advanced-accordion-block'),
    initialOpen: false,
    className: has_disabled_class
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Show Accordion Search', 'advanced-accordion-block'),
    disabled: is_disable,
    checked: search_checked // Use the state variable here
    ,
    onChange: () => setAttributes({
      searchShow: !searchShow
    })
  }), searchShow && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "label-d-block"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Placeholder Text', 'advanced-accordion-block')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    className: "widefat",
    disabled: is_disable,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Enter placeholder text', 'advanced-accordion-block'),
    value: placeholderText,
    onChange: e => setAttributes({
      placeholderText: e.target.value
    })
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Open/Close All', 'advanced-accordion-block'),
    initialOpen: false,
    className: has_disabled_class
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Open All & Close All', 'advanced-accordion-block'),
    disabled: is_disable,
    checked: show_close_btn_checked // Use the state variable here
    ,
    onChange: () => setAttributes({
      showAllbtn: !showAllbtn
    })
  }), showAllbtn && aab_premium && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
    __nextHasNoMarginBottom: true,
    id: "closeText",
    label: "Close All Text"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    id: "closeText",
    type: "text",
    disabled: is_disable,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Enter text', 'advanced-accordion-block'),
    value: closeText,
    onChange: e => setAttributes({
      closeText: e.target.value
    }),
    style: {
      display: 'block',
      width: '100%'
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
    __nextHasNoMarginBottom: true,
    id: "openText",
    label: "Show All Text"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    id: "openText",
    type: "text",
    disabled: is_disable,
    value: openText,
    onChange: e => setAttributes({
      openText: e.target.value
    }),
    style: {
      display: 'block',
      width: '100%'
    }
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Activetor Event', 'advanced-accordion-block'),
    initialOpen: false,
    className: has_disabled_class
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalToggleGroupControl, {
    label: "Activetor Event",
    value: activetorClass,
    onChange: handleActivetorChange
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalToggleGroupControlOption, {
    value: "click",
    label: "Click",
    disabled: is_disable,
    showTooltip: true
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalToggleGroupControlOption, {
    value: "hover",
    disabled: is_disable,
    label: "Hover"
  }))), !step && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Anchors Link', 'advanced-accordion-block'),
    initialOpen: false,
    className: has_disabled_class
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Anchor Link', 'advanced-accordion-block')
    // pass disable variable here
    ,
    disabled: is_disable,
    checked: anchor_link_checked // Use the state variable here
    ,
    onChange: () => setAttributes({
      anchorLinksShow: !anchorLinksShow
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    initialOpen: false,
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('FAQ Schema', 'advanced-accordion-block')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Make it enable', 'advanced-accordion-block'),
    checked: faqSchema,
    onChange: () => setAttributes({
      faqSchema: !faqSchema
    })
  })), aab_premium && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    initialOpen: false,
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Steps or Checklist', 'advanced-accordion-block')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RadioControl, {
    label: "Options",
    help: "Please select a option.",
    selected: optionsName,
    options: [{
      label: 'Steps',
      value: "step"
    }, {
      label: 'Checklist',
      value: "checkList"
    }, {
      label: 'None',
      value: "none"
    }],
    onChange: value => {
      if (value === 'step') {
        setAttributes({
          checkList: false
        });
        setAttributes({
          step: true
        });
      } else if (value === 'checkList') {
        setAttributes({
          step: false
        });
        setAttributes({
          checkList: true
        });
      } else {
        setAttributes({
          step: false
        });
        setAttributes({
          checkList: false
        });
      }
    }
  }), aab_premium && step && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl // New TextControl
  , {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Step Text', 'advanced-accordion-block'),
    value: stepText // State variable to hold the text value
    ,
    onChange: value => setAttributes({
      stepText: value
    }),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Enter the text you want to display on the step.', 'advanced-accordion-block')
  }), aab_premium && step && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl // New TextControl
  , {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Step Complete Text', 'advanced-accordion-block'),
    value: stepCmpltText // State variable to hold the text value
    ,
    onChange: value => setAttributes({
      stepCmpltText: value
    }),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Enter the text you want to display when the step is completed.', 'advanced-accordion-block')
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Read More Button', 'advanced-accordion-block'),
    initialOpen: false,
    className: has_disabled_class
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Button Show/Hide', 'advanced-accordion-block'),
    disabled: is_disable,
    checked: read_more_checked,
    onChange: () => setAttributes({
      buttonShow: !buttonShow
    })
  }), buttonShow && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Content Count', 'advanced-accordion-block'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Total Number of Characters you want to display on accordion body', 'advanced-accordion-block'),
    disabled: is_disable,
    value: contentCount,
    onChange: value => setAttributes({
      contentCount: value
    }),
    min: 1,
    max: 300
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Read More Text', 'advanced-accordion-block'),
    value: readText // State variable to hold the text value
    ,
    onChange: value => setAttributes({
      readText: value
    }),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Enter the text you want to display on Read more button.', 'advanced-accordion-block')
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.useBlockProps)({
    className: `aagb_accordion_${uniqueId}`
  }), searchShow && aab_premium && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "aagb_form_inner",
    id: "aagb-search-form-" + uniqueId
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "aagb_form_group"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    "data-searchTarget": uniqueId,
    type: "search",
    className: "aagb-search-control aagb_form_control noEnterSubmit",
    disabled: is_disable,
    placeholder: placeholderText || 'Search for FAQ',
    value: placeholderText,
    onChange: e => setAttributes({
      placeholderText: e.target.value
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    id: "aagb-search-help-block",
    className: "help-block"
  })), showAllbtn && aab_premium && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "aagb_accordion_wrapper_btn"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "#",
    "data-closeTarget": uniqueId,
    className: "content-accordion__close-all"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    class: "svg-inline--fa fa-compress-alt fa-w-14",
    role: "presentation",
    "aria-hidden": "true",
    focusable: "false",
    "data-prefix": "fas",
    "data-icon": "compress-alt",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 448 512",
    "data-fa-i2svg": ""
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "currentColor",
    d: "M4.686 427.314L104 328l-32.922-31.029C55.958 281.851 66.666 256 88.048 256h112C213.303 256 224 266.745 224 280v112c0 21.382-25.803 32.09-40.922 16.971L152 376l-99.314 99.314c-6.248 6.248-16.379 6.248-22.627 0L4.686 449.941c-6.248-6.248-6.248-16.379 0-22.627zM443.314 84.686L344 184l32.922 31.029c15.12 15.12 4.412 40.971-16.97 40.971h-112C234.697 256 224 245.255 224 232V120c0-21.382 25.803-32.09 40.922-16.971L296 136l99.314-99.314c6.248-6.248 16.379-6.248 22.627 0l25.373 25.373c6.248 6.248 6.248 16.379 0 22.627z"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.RichText.Content, {
    value: closeText,
    style: {
      margin: 0
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "#",
    "data-openTarget": uniqueId,
    className: "content-accordion__show-all"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    class: "svg-inline--fa fa-expand-alt fa-w-14",
    role: "presentation",
    "aria-hidden": "true",
    focusable: "false",
    "data-prefix": "fas",
    "data-icon": "expand-alt",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 448 512",
    "data-fa-i2svg": ""
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "currentColor",
    d: "M212.686 315.314L120 408l32.922 31.029c15.12 15.12 4.412 40.971-16.97 40.971h-112C10.697 480 0 469.255 0 456V344c0-21.382 25.803-32.09 40.922-16.971L72 360l92.686-92.686c6.248-6.248 16.379-6.248 22.627 0l25.373 25.373c6.249 6.248 6.249 16.378 0 22.627zm22.628-118.628L328 104l-32.922-31.029C279.958 57.851 290.666 32 312.048 32h112C437.303 32 448 42.745 448 56v112c0 21.382-25.803 32.09-40.922 16.971L376 152l-92.686 92.686c-6.248 6.248-16.379 6.248-22.627 0l-25.373-25.373c-6.249-6.248-6.249-16.378 0-22.627z"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.RichText.Content, {
    value: openText,
    style: {
      margin: 0
    }
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.InnerBlocks, {
    allowedBlocks: ['aab/accordion-item'],
    template: [['aab/accordion-item']]
  }), step && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "step-result"
  }, stepCmpltText)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/group-accordion/icon.js":
/*!*************************************!*\
  !*** ./src/group-accordion/icon.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const icon = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "17px",
  height: "17px",
  viewBox: "0 0 17 17",
  version: "1.1"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M0 0v17h17v-17h-17zM16 1v9h-15v-9h15zM16 11v2h-15v-2h15zM1 16v-2h15v2h-15z",
  fill: "#77b5f7"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (icon);

/***/ }),

/***/ "./src/group-accordion/save.js":
/*!*************************************!*\
  !*** ./src/group-accordion/save.js ***!
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);





const Save = ({
  attributes
}) => {
  const {
    uniqueId,
    searchShow,
    showAllbtn,
    placeholderText,
    closeText,
    openText,
    activetorClass,
    faqSchema,
    step,
    stepCmpltText,
    contentCount
  } = attributes;
  const aab_premium = aagb_local_object.licensing;
  const activetorClassEvent = aab_premium ? activetorClass : 'click';
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, searchShow && aab_premium && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "aagb_form_inner",
    id: "aagb-search-form-" + uniqueId
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "aagb_form_group"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("input", {
    type: "search",
    "data-searchTarget": uniqueId,
    className: "aagb-search-control aagb_form_control noEnterSubmit",
    placeholder: placeholderText || 'Search for FAQ'
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
    id: "aagb-search-help-block",
    className: "help-block"
  })), showAllbtn && aab_premium && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "aagb_accordion_wrapper_btn"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("a", {
    href: "#",
    "data-closeTarget": 'aagb_accordion_' + uniqueId,
    className: "content-accordion__close-all"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
    class: "svg-inline--fa fa-compress-alt fa-w-14",
    role: "presentation",
    "aria-hidden": "true",
    focusable: "false",
    "data-prefix": "fas",
    "data-icon": "compress-alt",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 448 512",
    "data-fa-i2svg": ""
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
    fill: "currentColor",
    d: "M4.686 427.314L104 328l-32.922-31.029C55.958 281.851 66.666 256 88.048 256h112C213.303 256 224 266.745 224 280v112c0 21.382-25.803 32.09-40.922 16.971L152 376l-99.314 99.314c-6.248 6.248-16.379 6.248-22.627 0L4.686 449.941c-6.248-6.248-6.248-16.379 0-22.627zM443.314 84.686L344 184l32.922 31.029c15.12 15.12 4.412 40.971-16.97 40.971h-112C234.697 256 224 245.255 224 232V120c0-21.382 25.803-32.09 40.922-16.971L296 136l99.314-99.314c6.248-6.248 16.379-6.248 22.627 0l25.373 25.373c6.248 6.248 6.248 16.379 0 22.627z"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    value: closeText,
    style: {
      margin: 0
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("a", {
    href: "#",
    "data-openTarget": 'aagb_accordion_' + uniqueId,
    className: "content-accordion__show-all"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("svg", {
    class: "svg-inline--fa fa-expand-alt fa-w-14",
    role: "presentation",
    "aria-hidden": "true",
    focusable: "false",
    "data-prefix": "fas",
    "data-icon": "expand-alt",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 448 512",
    "data-fa-i2svg": ""
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("path", {
    fill: "currentColor",
    d: "M212.686 315.314L120 408l32.922 31.029c15.12 15.12 4.412 40.971-16.97 40.971h-112C10.697 480 0 469.255 0 456V344c0-21.382 25.803-32.09 40.922-16.971L72 360l92.686-92.686c6.248-6.248 16.379-6.248 22.627 0l25.373 25.373c6.249 6.248 6.249 16.378 0 22.627zm22.628-118.628L328 104l-32.922-31.029C279.958 57.851 290.666 32 312.048 32h112C437.303 32 448 42.745 448 56v112c0 21.382-25.803 32.09-40.922 16.971L376 152l-92.686 92.686c-6.248 6.248-16.379 6.248-22.627 0l-25.373-25.373c-6.249-6.248-6.249-16.378 0-22.627z"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    value: openText,
    style: {
      margin: 0
    }
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save({
    className: `searchable aagb_accordion_${uniqueId} ${activetorClassEvent}`
  }), faqSchema ? {
    itemScope: true,
    itemType: "https://schema.org/FAQPage"
  } : {}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.Content, null), step && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
    className: "step-result"
  }, stepCmpltText)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Save);

/***/ }),

/***/ "./src/group-accordion/editor.scss":
/*!*****************************************!*\
  !*** ./src/group-accordion/editor.scss ***!
  \*****************************************/
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

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

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

/***/ "./src/group-accordion/block.json":
/*!****************************************!*\
  !*** ./src/group-accordion/block.json ***!
  \****************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"apiVersion":2,"name":"aab/group-accordion","version":"0.1.0","title":"Group Accordion","category":"accordion-block","description":"Build Accordion and FAQs Easily.","supports":{"html":false,"anchor":true},"example":{"attributes":{"heading":"Accordion Heading"}},"providesContext":{"aagb/accordion-step":"step","aagb/accordion-hasQaStyle":"hasQaStyle","aagb/accordion-faqSchema":"faqSchema","aagb/accordion-stepText":"stepText","aagb/accordion-stepCmpltText":"stepCmpltText","aagb/accordion-checkList":"checkList","aagb/accordion-anchorLinksShow":"anchorLinksShow","aagb/accordion-buttonShow":"buttonShow","aagb/accordion-readMoreText":"readText","aagb/accordion-border":"border","aagb/accordion-margins":"margins","aagb/accordion-paddings":"paddings","aagb/accordion-borderRadius":"borderRadius","aagb/accordion-headingColor":"headingColor","aagb/accordion-showIcon":"showIcon","aagb/accordion-iconColor":"iconColor","aagb/accordion-iconBackground":"iconBackground","aagb/accordion-headerBg":"headerBg","aagb/accordion-bodyBg":"bodyBg","aagb/accordion-styledQA":"styledQA","aagb/accordion-qIconText":"qIconText","aagb/accordion-qIconColor":"qIconColor","aagb/accordion-qIconBg":"qIconBg","aagb/accordion-aIconText":"aIconText","aagb/accordion-aIconColor":"aIconColor","aagb/accordion-aIconBg":"aIconBg","aagb/accordion-contentCount":"contentCount"},"attributes":{"anchorLinksShow":{"type":"boolean","default":false},"hasQaStyle":{"type":"boolean","default":false},"uniqueId":{"type":"string"},"activeAccordionBorder":{"type":"object","default":{"width":"1px","color":"#000000","style":"solid"}},"searchShow":{"type":"boolean","default":false},"showAllbtn":{"type":"boolean","default":false},"closeText":{"type":"string","default":"Close all"},"openText":{"type":"string","default":"Show all"},"heading":{"type":"string","default":"Accordion Heading"},"activetorClass":{"type":"string","default":"click"},"faqSchema":{"type":"boolean","default":false},"step":{"type":"boolean","default":false},"stepText":{"type":"string","default":"Continue"},"stepCmpltText":{"type":"string","default":"Congratulations, you are done!"},"checkList":{"type":"boolean","default":false},"buttonShow":{"type":"boolean","default":false},"contentCount":{"type":"number","default":100},"readText":{"type":"string","default":"Read More"},"border":{"type":"object","default":{"width":"1px","color":"#cccccc","style":"solid"}},"paddings":{"type":"object","default":{"top":"10px","left":"15px","right":"15px","bottom":"10px"}},"margins":{"type":"object","default":{"top":"0px","bottom":"15px"}},"borderRadius":{"type":"number","default":0},"headingColor":{"type":"string"},"headerBg":{"type":"string"},"iconColor":{"type":"string"},"iconBackground":{"type":"string"},"bodyBg":{"type":"string"},"showIcon":{"type":"boolean","default":true},"styledQA":{"type":"boolean"},"qIconText":{"type":"string","default":"Q"},"qIconColor":{"type":"string","default":"#fff"},"qIconBg":{"type":"string","default":"#505050"},"aIconText":{"type":"string","default":"A"},"aIconColor":{"type":"string","default":"#fff"},"aIconBg":{"type":"string","default":"#f5a623"}},"styles":[{"name":"default","label":"Default","isDefault":true},{"name":"qa","label":"Q A"},{"name":"aab-style-pro-checked","label":"aab-style-pro-checked"}],"textdomain":"advanced-accordion-block","editorScript":["file:./index.js","aagb-anchor","aagb-separate-accordion","aagb-accordion-group"],"editorStyle":"file:./index.css","style":["aagb-group-accordion"],"viewScript":["aagb-anchor","aagb-separate-accordion","aagb-accordion-group","aagb-group-accordion-frontend"]}');

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
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**************************************!*\
  !*** ./src/group-accordion/index.js ***!
  \**************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/group-accordion/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/group-accordion/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/group-accordion/save.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icon */ "./src/group-accordion/icon.js");
/* harmony import */ var _deprecated__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./deprecated */ "./src/group-accordion/deprecated.js");



/**
 * Internal dependencies
 */



// icon



/**
 * Block Registration
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_1__, {
  icon: {
    src: _icon__WEBPACK_IMPORTED_MODULE_4__["default"],
    foreground: '#77b5f7'
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"],
  deprecated: [{
    "attributes": {
      "anchorLinksShow": {
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
      "searchShow": {
        "type": "boolean",
        "default": false
      },
      "showAllbtn": {
        "type": "boolean",
        "default": false
      },
      "closeText": {
        "type": "string",
        "default": "Close all"
      },
      "openText": {
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
      "buttonShow": {
        "type": "boolean",
        "default": false
      },
      "contentCount": {
        "type": "number",
        "default": 100
      },
      "readText": {
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
      },
      "headingColor": {
        "type": "string"
      },
      "headerBg": {
        "type": "string"
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
      "showIcon": {
        "type": "boolean",
        "default": true
      }
    },
    "styles": [{
      "name": "default",
      "label": "Default",
      "isDefault": true
    }, {
      "name": "qa",
      "label": "Q A"
    }, {
      "name": "aab-style-pro-checked",
      "label": "aab-style-pro-checked"
    }],
    save: _deprecated__WEBPACK_IMPORTED_MODULE_5__["default"]
  }]
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map