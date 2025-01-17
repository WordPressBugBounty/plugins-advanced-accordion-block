/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-shadow */
/* eslint-disable @wordpress/no-unsafe-wp-apis */
import React from "react";

const {Fragment} = wp.element;
import {
    InnerBlocks,
    InspectorControls,
    RichText,
    useBlockProps,
    MediaUpload,
    MediaUploadCheck,
} from '@wordpress/block-editor';
import {
    ColorPalette,
    PanelBody,
    RangeControl,
    SelectControl,
    ToggleControl,
    TextControl,
    Button,
    __experimentalBoxControl as BoxControl,
    __experimentalBorderControl as BorderControl,
} from '@wordpress/components';

const {__} = wp.i18n;
import {useContext, useEffect} from '@wordpress/element';

import colors from '../colors';
import icons from './icons';
import tags from '../tags';

// include editor styles
import './editor.scss';

const iconPositions = [
    {
        label: 'Right',
        value: 'aagb_right_icon',
    },
    {
        label: 'Left',
        value: 'aagb_left_icon',
    }
];
const anchorPositions = [
    {
        label: 'Left',
        value: 'aagb_left_link',
    },
    {
        label: 'Right',
        value: 'aagb_right_link',
    },
];

const Edit = ({attributes, setAttributes, context}) => {
    const {
        QaStyle,
        singleAcdId,
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
        qIconText,
        qIconColor,
        qIconBg,
        aIconColor,
        aIconBg,
        aIconText,
        step,
        stepText,
        checkList,
        anchorLinkShow,
        button_show,
        readMoreText,
        headingIconImageUrl,
        headingIconAlt,
        showHeadingIcon,
        subheading,
        subheadingColor
    } = attributes;

    // Generate the template for InnerBlocks based on contentCount
    const innerBlocksTemplate = Array.from(
        {length: 1},
        (_, index) => [
            'core/paragraph',
            {
                content: `Content ${index + 1}`,
            },
        ]
    );

    // Check if aab_premium is true
    const aab_premium = aagb_local_object.licensing;

    const is_disable = aab_premium ? '' : 'disabled';
    const anchor_link_checked = aab_premium ? anchorLinkShow : 'false';
    const read_more_checked = aab_premium ? buttonShow : 'false';
    const has_disabled_class = aab_premium ? '' : 'aab-pro-element';

    const hasQaStyle = context["aagb/accordion-QaStyle"];
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
    const hasQIconText = context["aagb/accordion-qIconText"];
    const hasQIconColor = context["aagb/accordion-qIconColor"];
    const hasQIconBg = context["aagb/accordion-qIconBg"];
    const hasAIconText = context["aagb/accordion-aIconText"];
    const hasAIconColor = context["aagb/accordion-aIconColor"];
    const hasAIconBg = context["aagb/accordion-aIconBg"];
    const hasContentCount = context["aagb/accordion-contentCount"];
    const hasSubheadingColor = context["aagb/accordion-subheadingColor"];

    useEffect(() => {
        setAttributes({QaStyle: hasQaStyle});
    }, [hasQaStyle]);

    useEffect(() => {
        setAttributes({faqSchema: hasFaqSchema});
    }, [hasFaqSchema]);

    useEffect(() => {
        setAttributes({step: hasStep});
    }, [hasStep]);

    useEffect(() => {
        setAttributes({stepText: hasStepText});
    }, [hasStepText]);

    useEffect(() => {
        setAttributes({stepCmpltText: hasStepCmpltText});
    }, [hasStepCmpltText]);

    useEffect(() => {
        setAttributes({checkList: hasCheckList});
    }, [hasCheckList]);

    useEffect(() => {
        setAttributes({anchorLinkShow: anchorLinksShow});
    }, [anchorLinksShow]);
    useEffect(() => {
        setAttributes({button_show: buttonShowContext});
    }, [buttonShowContext]);
    useEffect(() => {
        setAttributes({readMoreText: readMoreTxt});
    }, [readMoreTxt]);
    useEffect(() => {
        setAttributes({border: hasBorder});
    }, [hasBorder]);
    useEffect(() => {
        setAttributes({margins: hasMargins});
    }, [hasMargins]);
    useEffect(() => {
        setAttributes({paddings: hasPaddings});
    }, [hasPaddings]);
    useEffect(() => {
        setAttributes({borderRadius: hasBorderRadius});
    }, [hasBorderRadius]);
    useEffect(() => {
        setAttributes({headingColor: hasHeadingColor});
    }, [hasHeadingColor]);
    useEffect(() => {
        setAttributes({showIcon: hasShowIcon});
    }, [hasShowIcon]);
    useEffect(() => {
        setAttributes({iconColor: hasIconColor});
    }, [hasIconColor]);
    useEffect(() => {
        setAttributes({iconBackground: hasIconBackground});
    }, [hasIconBackground]);
    useEffect(() => {
        setAttributes({headerBg: hasHeaderBg});
    }, [hasHeaderBg]);
    useEffect(() => {
        setAttributes({bodyBg: hasBodyBg});
    }, [hasBodyBg]);
    useEffect(() => {
        setAttributes({qIconText: hasQIconText});
    }, [hasQIconText]);
    useEffect(() => {
        setAttributes({qIconColor: hasQIconColor});
    }, [hasQIconColor]);
    useEffect(() => {
        setAttributes({qIconBg: hasQIconBg});
    }, [hasQIconBg]);
    useEffect(() => {
        setAttributes({aIconText: hasAIconText});
    }, [hasAIconText]);
    useEffect(() => {
        setAttributes({aIconColor: hasAIconColor});
    }, [hasAIconColor]);
    useEffect(() => {
        setAttributes({aIconBg: hasAIconBg});
    }, [hasAIconBg]);

    useEffect(() => {
        setAttributes({contentCount: hasContentCount});
    }, [hasContentCount]);

    useEffect(() => {
        setAttributes({subheadingColor: hasSubheadingColor});
    }, [hasSubheadingColor]);


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

    const handleImageSelect = (media) => {
        setAttributes({
            headingIconImageUrl: media.url,
            headingIconAlt: media.alt,
        });
    };

    return (
        <Fragment>

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
                        value={singleAcdId}
                        onChange={(singleAcdId) => setAttributes({singleAcdId})}
                    />
                </PanelBody>
                <PanelBody
                    initialOpen={false}
                    title={__('Accordion Status', 'advanced-accordion-block')}
                >
                    <ToggleControl
                        label={__(
                            'Make it active on load',
                            'advanced-accordion-block'
                        )}
                        checked={makeActive}
                        onChange={() =>
                            setAttributes({makeActive: !makeActive})
                        }
                    />
                </PanelBody>

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

                    {showHeadingIcon && headingIconImageUrl && !QaStyle && (
                        <>
                            <img
                                src={headingIconImageUrl}
                                alt={headingIconAlt || __('Heading Icon', 'advanced-accordion-block')}
                                style={{
                                    maxWidth: '100%',
                                    marginTop: '10px',
                                }}
                            />
                            <br/>
                        </>
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

                </PanelBody>
                {anchorLinkShow && !step && !QaStyle && (
                    <PanelBody
                        title={__('Anchor Link', 'advanced-accordion-block')}
                        initialOpen={false}
                        className={has_disabled_class}
                    >

                        {anchorLinkShow && (
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
                )}

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

                            {!QaStyle && (
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
                            )}

                        </Fragment>
                    )}
                </PanelBody>
            </InspectorControls>

            <div
                {...useBlockProps({

                    className: `aagb__accordion_container ${step ? 'step' : ''} ${checkList ? 'check-list' : ''} ${makeActive ? 'aagb__accordion_active' : ''} ${QaStyle ? 'style-qa' : ''}`,
                })}
                style={{
                    border: `${border.width} ${border.style} ${border.color}`,
                    marginTop: `${margins.top}`,
                    marginBottom: `${margins.bottom}`,
                    borderRadius: `${borderRadius}px`,
                }}

                id={singleAcdId !== '' ? singleAcdId : ''}
            >
                <div
                    className={`aagb__accordion_head ${iconPosition} ${makeActive ? 'active' : ''} `}
                    style={{
                        color: headingColor ? headingColor : '#333333',
                        backgroundColor: headerBg ? headerBg : 'transparent',
                        padding: `${paddings.top} ${paddings.left} ${paddings.bottom} ${paddings.right}`,

                    }}
                >
                    <div
                        className={`aagb__accordion_heading ${iconPosition} ${
                            anchorPosition || ''
                        }`}
                    >

                        {aab_premium && checkList && (
                            <label className="checklist-label">
                                <input type='checkbox' className='checklist-box'></input>
                                <span></span>
                            </label>
                        )}


                        {/* Heading Icon Image Upload */}

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
                                > {qIconText} </div>
                                <div className="icon-a"

                                     style={{
                                         color: aIconColor,
                                         backgroundColor: aIconBg,
                                     }}> {aIconText} </div>
                            </div>
                        )}


                        <div className="head_content_wrapper">
                            <div className="title_wrapper">
                                <RichText
                                    tagName={headingTag}
                                    value={heading}
                                    className="aagb__accordion_title"
                                    onChange={(heading) => setAttributes({heading})}
                                    style={{
                                        margin: 0,
                                        color: headingColor ? headingColor : '#333333',
                                    }}
                                />
                                {anchorLinkShow && aab_premium && !step && (
                                    <a className="anchorjs-link" href="#">
                                        <i className="dashicons dashicons-admin-links"></i>
                                    </a>
                                )}
                            </div>
                            <RichText
                                className="aagb__accordion_subheading"
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
                            className={`aagb__accordion_icon`}
                            style={{
                                color: iconColor ? iconColor : '#333333',
                                backgroundColor: iconBackground
                                    ? iconBackground
                                    : 'transparent',
                            }}
                        >
                            <div className="aagb__icon_dashicons_box">
                                <span
                                    className={`aagb__icon dashicons dashicons-${iconClass}`}
                                ></span>
                            </div>
                        </div>
                    )}
                </div>
                <div
                    className={`aagb__accordion_body ${
                        makeActive ? 'aagb__accordion_body--show' : ''
                    }`}
                    role="region"
                    style={{
                        backgroundColor: bodyBg ? bodyBg : 'transparent',

                        ...(!QaStyle
                                ? {
                                    borderTop: `${border.width} ${border.style} ${border.color}`,
                                    padding: `${paddings.top} ${paddings.left} ${paddings.bottom} ${paddings.right}`
                                }
                                : QaStyle && hasCheckList
                                    ? {
                                        paddingBottom: `${paddings.bottom}`,
                                        paddingRight: `${paddings.right}`,
                                        paddingLeft: `calc(${paddings.left} + 140px)`
                                    }
                                    : {
                                        paddingBottom: `${paddings.bottom}`,
                                        paddingRight: `${paddings.right}`,
                                        paddingLeft: `calc(${paddings.left} + 90px)`
                                    }
                        ),

                    }}
                >
                    <div className='aagb__accordion_component'>
                        <InnerBlocks
                            allowedBlocks={true}
                            template={innerBlocksTemplate}
                        />
                    </div>
                    {button_show && aab_premium && (
                        <button className="aagb_button_toggle">
                            <RichText
                                value={readMoreText}
                                onChange={(readMoreText) =>
                                    setAttributes({readMoreText})
                                }
                                style={{
                                    margin: 0,
                                }}
                            />
                        </button>
                    )}

                    {step && (
                        <div className="continue">
                            <span className="step-text">{stepText}</span>
                            {/*<span className="step-down-icon">&#8595;</span>*/}

                            <span className="step-down-icon">
								<svg
                                    width="32"
                                    height="32"
                                    viewBox="0 0 32 32"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    fill="#ffffff"
                                >
									<g>
										<path
                                            d="M 17,2C 8.716,2, 2,8.716, 2,17S 8.716,32, 17,32S 32,25.284, 32,17S 25.284,2, 17,2z M 23.724,15.92l-6.11,7.714 c-0.008,0.012-0.012,0.028-0.022,0.040c-0.34,0.434-0.894,0.434-1.234,0L 10.236,15.92c-0.34-0.434-0.34-1.138,0-1.572L 10.24,14.352 C 10.398,14.138, 10.62,14, 10.87,14l 12.22,0 c 0.246,0, 0.466,0.13, 0.624,0.338c 0.004,0.004, 0.008,0.004, 0.010,0.008 C 24.066,14.782, 24.066,15.486, 23.724,15.92z"
                                        ></path>
									</g>
								</svg>
							</span>

                        </div>
                    )}

                </div>
            </div>
        </Fragment>
    );
};
export default Edit;