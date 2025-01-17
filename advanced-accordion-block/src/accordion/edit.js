/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-shadow */
/* eslint-disable @wordpress/no-unsafe-wp-apis */
import React from "react";
import Editor from 'react-simple-code-editor';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css'; // For syntax highlighting style
import {
    InnerBlocks,
    InspectorControls,
    RichText,
    useBlockProps,
    MediaUpload,
    MediaUploadCheck,
    __experimentalBorderRadiusControl as BorderRadiusControl
    ,
    BlockControls
} from '@wordpress/block-editor';
import {useEffect, useState} from "@wordpress/element";
import {
    __experimentalBorderBoxControl as BorderBoxControl,
    __experimentalBoxControl as BoxControl,
    __experimentalBorderControl as BorderControl,
    ColorPalette,
    PanelBody,
    RangeControl,
    SelectControl,
    TextControl,
    ToggleControl,
    Button
} from '@wordpress/components';
import colors from '../colors';
import icons from './icons';
import tags from '../tags';

// include editor styles
import './editor.scss';

const {Fragment} = wp.element;

const {__} = wp.i18n;

const iconPositions = [
    {
        label: 'Right',
        value: 'aab_right_icon',
    },
    {
        label: 'Left',
        value: 'aab_left_icon',
    }
];
const anchorPositions = [
    {
        label: 'Left',
        value: 'aab_left_link',
    },
    {
        label: 'Right',
        value: 'aab_right_link',
    },
];

const {select} = wp.data;

let uniqueCounter = 0;

const Edit = ({attributes, setAttributes, clientId, isSelected}) => {
    const {
        uniqueId,
        makeActive,
        feedbackShow,
        border,
        margins,
        paddings,
        borderRadius,
        qIconText,
        qIconColor,
        qIconBg,
        aIconText,
        aIconColor,
        aIconBg,
        heading,
        subheading,
        subheadingColor,
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
        disableAccordion,
        feedbacLabel,
        yesBtn,
        noBtn,
        counterShow,
        faqSchema,
        headingIconImageUrl,
        headingIconAlt,
        showHeadingIcon,
        iconBorder,
        iconBorderRadius,
        QaStyle,
        customCSS
    } = attributes;

    let numericClientId = clientId.replace(/\D/g, '').slice(0, 5);

    // Ensure numericClientId contains exactly 5 characters
    while (numericClientId.length < 5) {
        numericClientId = '0' + numericClientId;
    }

    // set unique ID
    useEffect(() => {
        if (!uniqueId) {
            const newUniqueId = `${clientId.slice(0, 8)}_${uniqueCounter++}`;
            setAttributes({uniqueId: newUniqueId});
        }
    }, []);

    // Check if aab_premium is true
    const aab_premium = aagb_local_object.licensing;

    const is_disable = aab_premium ? '' : 'disabled';
    const voting_checked = aab_premium ? feedbackShow : 'false';
    const anchor_link_checked = aab_premium ? anchorLinkShow : 'false';
    const counter_checked = aab_premium ? counterShow : 'false';
    const has_disabled_class = aab_premium ? '' : 'aab-pro-element';

    const blockProps = useBlockProps();
    const hasQaStyle = blockProps.className.includes('is-style-qa');

    useEffect(() => {
        setAttributes({QaStyle: hasQaStyle})
    }, [hasQaStyle])


    const noProClass = aab_premium ? '' : 'no-pro-plan';

    if (!aab_premium) {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.addedNodes.length) {
                    mutation.addedNodes.forEach((node) => {
                        // Find the button for the "Q A" style and disable it
                        jQuery('.block-editor-block-styles__variants button[aria-label=aab-style-pro-checked]').attr('disabled', 'disabled');
                        // add class parent .components-panel__body.is-opened
                        jQuery('.block-editor-block-styles__variants button[aria-label=aab-style-pro-checked]').closest('.components-panel__body').addClass('aab-pro-element');
                    });
                }
            });
        });

        // Start observing the editor for changes
        observer.observe(document.body, {childList: true, subtree: true});
    }


    // Initialize border value if not already set
    const [borders, setBorders] = useState(border);

    const onChangeBorder = (newBorders) => {
        setBorders(newBorders); // Update local state
        setAttributes({border: newBorders}); // Save to attributes
    };

    const getBorderStyle = (border) => {
        if (!border) {
            return {};
        }
        // Check for shorthand condition: if all width, style, and color are present
        if (border.width && border.style && border.color) {
            return {border: `${border.width} ${border.style} ${border.color}`};
        }

        // Construct 4-axis styles if shorthand condition is not met
        return {
            borderTop: border.top
                ? `${border.top.width} ${border.top.style} ${border.top.color}`
                : "none",
            borderRight: border.right
                ? `${border.right.width} ${border.right.style} ${border.right.color}`
                : "none",
            borderBottom: border.bottom
                ? `${border.bottom.width} ${border.bottom.style} ${border.bottom.color}`
                : "none",
            borderLeft: border.left
                ? `${border.left.width} ${border.left.style} ${border.left.color}`
                : "none",
        };
    };

    const borderStyle = getBorderStyle(border);


    const handleImageSelect = (media) => {
        setAttributes({
            headingIconImageUrl: media.url,
            headingIconAlt: media.alt,
        });
    };


    return (
        <Fragment>

            <InspectorControls group="styles" class="testdd">

                {QaStyle && aab_premium && (
                    <>

                        <PanelBody
                            title={__('Q/A Icons Styles', 'advanced-accordion-block')}
                            initialOpen={false}
                        >
                            <p className="aab__label">
                                {__('Q Icon Color', 'advanced-accordion-block')}
                            </p>
                            <ColorPalette
                                colors={colors}
                                value={qIconColor}
                                onChange={(qIconColor) =>
                                    setAttributes({qIconColor})
                                }
                            />

                            <p className="aab__label">
                                {__('Q Icon Background Color', 'advanced-accordion-block')}
                            </p>
                            <ColorPalette
                                colors={colors}
                                value={qIconBg}
                                onChange={(qIconBg) =>
                                    setAttributes({qIconBg})
                                }
                            />

                            {/*<PanelRow>*/}
                            {/*	<fieldset>*/}
                            {/*		<ToggleControl label="ttt Show an heading before" />*/}
                            {/*	</fieldset>*/}
                            {/*</PanelRow>*/}

                            <p className="aab__label">
                                {__('A Icon Color', 'advanced-accordion-block')}
                            </p>
                            <ColorPalette
                                colors={colors}
                                value={aIconColor}
                                onChange={(aIconColor) =>
                                    setAttributes({aIconColor})
                                }
                            />


                            <p className="aab__label">
                                {__('A Icon Background Color', 'advanced-accordion-block')}
                            </p>
                            <ColorPalette
                                colors={colors}
                                value={aIconBg}
                                onChange={(aIconBg) =>
                                    setAttributes({aIconBg})
                                }
                            />


                        </PanelBody>
                    </>
                )}


                <PanelBody
                    initialOpen={false}
                    title={__('Accordion Styles', 'advanced-accordion-block')}
                >
                    <BoxControl
                        values={margins}
                        label={__(
                            'Accordion Margin',
                            'advanced-accordion-block'
                        )}
                        sides={['top', 'bottom']}
                        units={[]}
                        allowReset={false}
                        onChange={(newValue) =>
                            setAttributes({
                                ...margins,
                                margins: {
                                    top: newValue.top,
                                    bottom: newValue.bottom,
                                },
                            })
                        }
                    />
                    <div className="aa-custom-spacer"></div>
                    <BoxControl
                        values={paddings}
                        label={__(
                            'Content Padding',
                            'advanced-accordion-block'
                        )}
                        units={[]}
                        splitOnAxis
                        allowReset={false}
                        onChange={(newValue) =>
                            setAttributes({
                                ...paddings,
                                paddings: {
                                    top: newValue.top,
                                    left: newValue.left,
                                    right: newValue.right,
                                    bottom: newValue.bottom,
                                },
                            })
                        }
                    />
                    <div className="aa-custom-spacer"></div>
                    <p>{__(
                        'Set Accordion Border',
                        'advanced-accordion-block'
                    )}</p>
                    <BorderBoxControl
                        colors={colors}
                        label={__('Borders')}
                        onChange={onChangeBorder}
                        value={borders}
                    />
                    <div className="aa-custom-spacer"></div>
                    <RangeControl
                        label={__('Border Radius', 'advanced-accordion-block')}
                        value={borderRadius}
                        onChange={(borderRadius) =>
                            setAttributes({borderRadius})
                        }
                        min={0}
                        max={50}
                    />
                </PanelBody>

                <PanelBody
                    initialOpen={false}
                    title={__('Accordion Head', 'advanced-accordion-block')}
                >
                    <p className="aab__label">
                        {__('Header Color', 'advanced-accordion-block')}
                    </p>
                    <ColorPalette
                        colors={colors}
                        value={headingColor}
                        onChange={(headingColor) =>
                            setAttributes({headingColor})
                        }
                    />
                    <p className="aab__label">
                        {__('Header Background', 'advanced-accordion-block')}
                    </p>
                    <ColorPalette
                        colors={colors}
                        value={headerBg}
                        onChange={(headerBg) => setAttributes({headerBg})}
                    />

                    <p className="aab__label">
                        {__('Sub Heading Color', 'advanced-accordion-block')}
                    </p>
                    <ColorPalette
                        colors={colors}
                        value={subheadingColor}
                        onChange={(subheadingColor) =>
                            setAttributes({subheadingColor})
                        }
                    />

                </PanelBody>

                <PanelBody
                    initialOpen={false}
                    title={__('Accordion Icon', 'advanced-accordion-block')}
                >
                    {!showIcon && <p>To change font size you must select Show Icon in settings tab.</p>}

                    {showIcon && (
                        <Fragment>
                            <RangeControl
                                label="Font Size"
                                value={iconFontSize}
                                onChange={(value) =>
                                    setAttributes({iconFontSize: value})
                                }
                                min={20}
                                max={50}
                            />

                            <p className="aab__label">
                                {__('Icon Color', 'advanced-accordion-block')}
                            </p>
                            <ColorPalette
                                colors={colors}
                                value={iconColor}
                                onChange={(iconColor) =>
                                    setAttributes({iconColor})
                                }
                            />
                            <p className="aab__label">
                                {__(
                                    'Icon Background',
                                    'advanced-accordion-block'
                                )}
                            </p>
                            <ColorPalette
                                colors={colors}
                                value={iconBackground}
                                onChange={(iconBackground) =>
                                    setAttributes({iconBackground})
                                }
                            />

                            <p className="aab__label">
                                {__('Border', 'advanced-accordion-block')}
                            </p>
                            <BorderControl
                                colors={colors}
                                value={iconBorder}
                                onChange={(value) => {
                                    setAttributes({iconBorder: value})
                                }}
                                withSlider={true}
                            />

                            <div className="aa-custom-spacer"></div>

                            <BorderRadiusControl
                                values={iconBorderRadius}
                                onChange={(value) => {
                                    setAttributes({iconBorderRadius: value})
                                }}
                            />
                        </Fragment>
                    )}

                </PanelBody>


                <PanelBody
                    title={__('Accordion Body', 'advanced-accordion-block')}
                    initialOpen={false}
                >
                    <p className="aab__label">
                        {__('Background Color', 'advanced-accordion-block')}
                    </p>
                    <ColorPalette
                        colors={colors}
                        value={bodyBg}
                        onChange={(bodyBg) => setAttributes({bodyBg})}
                    />
                </PanelBody>
                <PanelBody
                    title={__('Custom CSS', 'advanced-accordion-block')}
                    initialOpen={false}
                    className={has_disabled_class}
                >

                    <label className='custom-css-notice' htmlFor="custom-css">Add your own CSS code here to
                        customize the accordion as per your expectations.</label>
                    <Editor
                        value={customCSS}
                        disabled={is_disable}
                        onValueChange={(value) => setAttributes({customCSS: value})}
                        highlight={(code) => Prism.highlight(code, Prism.languages.css, 'css')}
                        padding={10}
                        style={{
                            fontFamily: 'monospace',
                            fontSize: '14px',
                            border: '1px solid #ccc',
                            borderRadius: '4px',
                            minHeight: '100px',
                            backgroundColor: '#f9f9f9',
                            color: '#333',
                            outline: 'none',
                            boxSizing: 'border-box',
                            marginTop: '7px'
                        }}
                    />
                </PanelBody>
            </InspectorControls>
            <div className="custom-css-block">
                <style>{`#aab_accordion_${uniqueId} { ${customCSS} }`}</style>
            </div>
            <InspectorControls>
                <PanelBody
                    initialOpen={false}
                    title={__('Accordion ID', 'advanced-accordion-block')}
                >
                    <TextControl
                        label={__(
                            'Set Accordion ID',
                            'advanced-accordion-block'
                        )}
                        value={`aab_accordion_${uniqueId}`}
                        onChange={function (uniqueId) {
                            if (uniqueId !== "aab_accordion") {
                                const slicedWOrd = uniqueId.replace("aab_accordion_", "");
                                setAttributes({uniqueId: slicedWOrd});
                            }
                        }}
                    />
                </PanelBody>
                <PanelBody
                    initialOpen={false}
                    title={__('Accordion Status', 'advanced-accordion-block')}
                >
                    <ToggleControl
                        label={__(
                            'Make it Active on Load',
                            'advanced-accordion-block'
                        )}
                        checked={makeActive}
                        onChange={() =>
                            setAttributes({makeActive: !makeActive})
                        }
                    />

                    <ToggleControl
                        label={__(
                            'Make it a Disable Accordion?',
                            'advanced-accordion-block'
                        )}
                        checked={disableAccordion}
                        onChange={() =>
                            setAttributes({
                                disableAccordion: !disableAccordion,
                            })
                        }
                        help={__(
                            'No click event works. This feature is for the frontend only!',
                            'advanced-accordion-block'
                        )}
                    />
                </PanelBody>

                {useBlockProps().className.includes('is-style-qa') && (
                    <>


                        <PanelBody
                            initialOpen={false}
                            title={__('Q/A Icons', 'advanced-accordion-block')}
                        >

                            <p className="aab__label">
                                {__('Q Icon Text', 'advanced-accordion-block')}
                            </p>
                            <TextControl
                                label={__(
                                    'Set Q Icon Text',
                                    'advanced-accordion-block'
                                )}
                                value={qIconText}
                                onChange={(value) => setAttributes({qIconText: value})}
                            />


                            <p className="aab__label">
                                {__('A Icon Text', 'advanced-accordion-block')}
                            </p>
                            <TextControl
                                label={__(
                                    'Set A Icon Text',
                                    'advanced-accordion-block'
                                )}
                                value={aIconText}
                                onChange={(value) => setAttributes({aIconText: value})}
                            />

                        </PanelBody>

                    </>
                )}

                <PanelBody
                    initialOpen={false}
                    title={__('Accordion Head', 'advanced-accordion-block')}
                >

                    <SelectControl
                        label={__(
                            'Select Heading Tag',
                            'advanced-accordion-block'
                        )}
                        options={tags}
                        onChange={(headingTag) => setAttributes({headingTag})}
                        value={headingTag}
                    />
                    {aab_premium && !QaStyle && (
                        <ToggleControl
                            label={__('Show Heading Icon', 'advanced-accordion-block')}
                            checked={showHeadingIcon}
                            onChange={() => setAttributes({showHeadingIcon: !showHeadingIcon})}
                        />
                    )}
                    {showHeadingIcon && !QaStyle && (
                        <MediaUploadCheck>
                            <MediaUpload
                                onSelect={handleImageSelect}
                                allowedTypes={['image']}
                                render={({open}) => (
                                    <Button
                                        onClick={open}
                                        variant="secondary"
                                        icon="format-image"
                                    >
                                        {headingIconImageUrl
                                            ? __('Change Heading Icon', 'advanced-accordion-block')
                                            : __('Add Heading Icon', 'advanced-accordion-block')}
                                    </Button>
                                )}
                            />
                        </MediaUploadCheck>
                    )}

                    {showHeadingIcon && headingIconImageUrl && !QaStyle && (
                        <img
                            src={headingIconImageUrl}
                            alt={headingIconAlt || __('Heading Icon', 'advanced-accordion-block')}
                            style={{
                                maxWidth: '100%',
                                marginTop: '10px',
                            }}
                        />
                    )}
                </PanelBody>
                <PanelBody
                    title={__('Anchor Link', 'advanced-accordion-block')}
                    initialOpen={false}
                    className={has_disabled_class}
                >
                    <ToggleControl
                        label={__(
                            'Anchor Link',
                            'advanced-accordion-block'
                        )}
                        disabled={is_disable}
                        checked={anchor_link_checked}
                        onChange={() =>
                            setAttributes({anchorLinkShow: !anchorLinkShow})
                        }
                    />


                    {anchorLinkShow && !QaStyle && (

                        <Fragment>
                            <SelectControl
                                label={__(
                                    'Anchor Icon Position',
                                    'advanced-accordion-block'
                                )}
                                disabled={is_disable}
                                options={anchorPositions}
                                onChange={(anchorPosition) =>
                                    setAttributes({
                                        anchorPosition,
                                    })
                                }
                                value={anchorPosition}
                            />
                        </Fragment>
                    )}
                </PanelBody>
                <PanelBody
                    title={__('Accordion Icon', 'advanced-accordion-block')}
                    initialOpen={false}
                >
                    <ToggleControl
                        label={__('Show Icon', 'advanced-accordion-block')}
                        checked={showIcon}
                        onChange={() => setAttributes({showIcon: !showIcon})}
                    />
                    {showIcon && (
                        <Fragment>

                            <SelectControl
                                label={__(
                                    'Select Icon Type',
                                    'advanced-accordion-block'
                                )}
                                options={icons}
                                onChange={(iconClass) => {
                                    setAttributes({iconClass});
                                }}
                                value={iconClass}
                            />
                            <SelectControl
                                label={__(
                                    'Icon Position',
                                    'advanced-accordion-block'
                                )}
                                options={iconPositions}
                                onChange={(iconPosition) => {
                                    setAttributes({iconPosition});
                                }}
                                value={iconPosition}
                            />

                        </Fragment>
                    )}
                </PanelBody>

                <PanelBody
                    title={__('Feedback', 'advanced-accordion-block')}
                    initialOpen={false}
                    className={has_disabled_class}
                >
                    <ToggleControl
                        label={__(
                            'Enable / Disable',
                            'advanced-accordion-block'
                        )}
                        disabled={is_disable}
                        checked={voting_checked}
                        onChange={() =>
                            setAttributes({feedbackShow: !feedbackShow})
                        }
                    />
                    {feedbackShow == 1 && (
                        <Fragment>
                            <TextControl
                                label={__('Label', 'advanced-accordion-block')}
                                disabled={is_disable}
                                value={feedbacLabel}
                                onChange={(feedbacLabel) =>
                                    setAttributes({feedbacLabel})
                                }
                            />
                            <TextControl
                                label={__('Yes', 'advanced-accordion-block')}
                                disabled={is_disable}
                                value={yesBtn}
                                onChange={(yesBtn) => setAttributes({yesBtn})}
                                className="bbpc-control-half yes-btn"
                            />

                            <TextControl
                                label={__('No', 'advanced-accordion-block')}
                                disabled={is_disable}
                                value={noBtn}
                                onChange={(noBtn) => setAttributes({noBtn})}
                                className="bbpc-control-half no-btn"
                            />
                            <ToggleControl
                                label={__(
                                    'Counter',
                                    'advanced-accordion-block'
                                )}
                                disabled={is_disable}
                                checked={counter_checked}
                                onChange={() =>
                                    setAttributes({counterShow: !counterShow})
                                }
                            />
                        </Fragment>
                    )}
                </PanelBody>

                <PanelBody
                    initialOpen={false}
                    title={__('FAQ Schema', 'advanced-accordion-block')}
                >
                    <ToggleControl
                        label={__(
                            'Make it enable',
                            'advanced-accordion-block'
                        )}
                        checked={faqSchema}
                        onChange={() =>
                            setAttributes({faqSchema: !faqSchema})
                        }
                    />


                </PanelBody>
            </InspectorControls>


            <div
                {...useBlockProps({
                    className: `aab__accordion_container ${
                        makeActive
                            ? `active__accordion_container_${uniqueId}`
                            : ''
                    } ${noProClass}`

                })}
                style={{
                    marginTop: margins.top || '0px',
                    marginBottom: margins.bottom || '0px',
                    borderRadius: `${borderRadius}px`,
                    ...borderStyle, // Spread shorthand or individual border values
                }}
                id={`aab_accordion_${uniqueId}`}
                role="button"
                aria-expanded={makeActive}
                tabIndex="0"
            >
                <Fragment>
                    <div
                        tabIndex="0"
                        className={`aab__accordion_head ${iconPosition} ${makeActive ? 'active' : ''} `}
                        style={{
                            backgroundColor: headerBg
                                ? headerBg
                                : 'transparent',
                            padding: `${paddings.top} ${paddings.right} ${paddings.bottom} ${paddings.left}`,
                        }}
                    >
                        {/* Heading Icon Image Upload */}


                        <div
                            className={`aab__accordion_heading ${iconPosition} ${anchorPosition}`}
                            tabIndex="0"
                        >

                            {showHeadingIcon && headingIconImageUrl && !QaStyle && (
                                <div className="heading-icon">
                                    <img
                                        src={headingIconImageUrl}
                                        alt={headingIconAlt || __('Heading Icon', 'advanced-accordion-block')}

                                    />
                                </div>
                            )}

                            {QaStyle && aab_premium && (
                                <div className="icon-container">
                                    <div className="icon-q"
                                         style={{
                                             color: qIconColor,
                                             backgroundColor: qIconBg
                                         }}
                                    >{qIconText}</div>
                                    <div className="icon-a"

                                         style={{
                                             color: aIconColor,
                                             backgroundColor: aIconBg,
                                         }}>{aIconText}</div>
                                </div>
                            )}
                            <div className="head_content_wrapper">
                                <div className="title_wrapper">
                                    <RichText
                                        tabIdex="0"
                                        tagName={headingTag}
                                        value={heading}
                                        className="aab__accordion_title"
                                        onChange={(heading) =>
                                            setAttributes({heading})
                                        }
                                        style={{
                                            margin: 0,
                                            color: headingColor
                                                ? headingColor
                                                : '#333333',
                                        }}
                                    />
                                    {anchorLinkShow && aab_premium && (
                                        <a className="anchorjs-link" href="#">
                                            <i className="dashicons dashicons-admin-links"></i>
                                        </a>
                                    )}
                                </div>
                                <RichText
                                    className="aab__accordion_subheading"
                                    tagName="p"
                                    placeholder={aab_premium ? "Write some subheading" : "Subheading Available on Pro"}
                                    value={aab_premium ? subheading : ''}
                                    onChange={(value) => {
                                        setAttributes({subheading: value});
                                    }}
                                    onFocus={(e) => {
                                        if (!aab_premium) {
                                            e.target.blur(); // Prevent focus if aab_premium is false
                                        }
                                    }}
                                    style={{
                                        margin: 0,
                                        color: subheadingColor
                                            ? subheadingColor
                                            : '#333333',
                                    }}
                                />
                            </div>

                        </div>
                        {showIcon && (
                            <div
                                className={`aab__accordion_icon`}
                                style={{
                                    color: iconColor ? iconColor : '#333333',
                                    border: iconBorder ? `${iconBorder.width} ${iconBorder.style} ${iconBorder.color}` : '',
                                    borderRadius: iconBorderRadius ? iconBorderRadius : '',
                                    backgroundColor: iconBackground
                                        ? iconBackground
                                        : 'transparent',
                                }}
                            >
								<span
                                    className={`aab__icon dashicons dashicons-${iconClass}`}
                                    style={{
                                        fontSize: iconFontSize
                                            ? iconFontSize + 'px'
                                            : '',
                                    }}
                                ></span>
                            </div>
                        )}
                    </div>
                    <div
                        tabIndex="0"
                        className={`aab__accordion_body ${makeActive ? `aab__accordion_body--show` : ``}  ${
                            makeActive ? `active__accordion_${uniqueId}` : ''
                        }`}
                        role="region"
                        style={{
                            backgroundColor: bodyBg ? bodyBg : 'transparent',
                            display: makeActive ? 'block' : 'none',

                            ...(!QaStyle
                                    ? {
                                        borderTop: `${border.width || '1px'} ${border.style || 'solid'} ${border.color || 'transparent'}`,

                                        padding: `${paddings.top} ${paddings.right} ${paddings.bottom} ${paddings.left}`
                                    }
                                    : QaStyle && iconPosition === "aab_left_icon"
                                        ? {
                                            borderTop: `0`,
                                            paddingTop: `0`,
                                            paddingBottom: `${paddings.bottom}`,
                                            paddingRight: `${paddings.right}`,
                                            paddingLeft: `calc(${paddings.left} + 140px)`
                                        }
                                        : {
                                            borderTop: `0`,
                                            paddingTop: `0`,
                                            paddingBottom: `${paddings.bottom}`,
                                            paddingRight: `${paddings.right}`,
                                            paddingLeft: `calc(${paddings.left} + 90px)`
                                        }
                            ),
                        }}
                    >
                        <InnerBlocks
                            allowedBlocks={true}
                            template={[
                                [
                                    'core/paragraph',
                                    {
                                        placeholder:
                                            'Write your content or add any block here...',
                                    },
                                ],
                            ]}
                        />
                        {feedbackShow == 1 && aab_premium && (
                            <span className={'feedback-btn-wrap'}>
								{feedbacLabel && <span>{feedbacLabel}</span>}

                                {yesBtn && (
                                    <button
                                        className="feedback-btn"
                                        data-value="yes"
                                        data-id={uniqueId}
                                    >
                                        {yesBtn}
                                        {counterShow && (
                                            <span className="count">--</span>
                                        )}
                                    </button>
                                )}

                                {noBtn && (
                                    <button
                                        className="feedback-btn"
                                        data-value="no"
                                        data-id={uniqueId}
                                    >
                                        {noBtn}
                                        {counterShow && (
                                            <span className="count">--</span>
                                        )}
                                    </button>
                                )}
							</span>
                        )}
                    </div>
                </Fragment>
            </div>
        </Fragment>
    );
};

export default Edit;