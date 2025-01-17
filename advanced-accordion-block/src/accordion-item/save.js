/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-lonely-if */
import {InnerBlocks, RichText, useBlockProps} from '@wordpress/block-editor';
import React from "react";

const Save = ({attributes}) => {
    const {
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
        contentCount,
        QaStyle,
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
        readMoreText,
        headingIconImageUrl,
        headingIconAlt,
        showHeadingIcon,
        subheading,
        subheadingColor
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

    function hexToRgb(hex) {
        if (!hex || hex === "transparent") {
            // Default to white (255, 255, 255)
            return {r: 255, g: 255, b: 255};
        }

        hex = hex.replace(/^#/, '');

        let r = parseInt(hex.substring(0, 2), 16);
        let g = parseInt(hex.substring(2, 4), 16);
        let b = parseInt(hex.substring(4, 6), 16);

        return {r, g, b};
    }

    const renderContent = () => {
        const innerBlocksContent = (
            <InnerBlocks.Content
                key={0}
                className="aagb__accordion_inner_content"
            />
        );

        return (
            <>
                <div className={`aagb__accordion_component ${button_show ? "read-more-btn" : ""}`}
                     data-contentCount={button_show ? contentCount : null}    {...(faqSchema ? {itemprop: "text"} : {})}>
                    {innerBlocksContent}
                    {button_show && (
                        <div className="aagb_overlay"
                             style={{
                                 background: `linear-gradient(to bottom, rgba(${hexToRgb(bodyBg).r}, ${hexToRgb(bodyBg).g}, ${hexToRgb(bodyBg).b}, 0), rgba(${hexToRgb(bodyBg).r}, ${hexToRgb(bodyBg).g}, ${hexToRgb(bodyBg).b}, 0.9))`
                             }}
                        ></div>
                    )}
                </div>


            </>
        );
    };

    // Check if aab_premium is true
    const aab_premium = aagb_local_object.licensing;
    const noProClass = aab_premium ? '' : 'no-pro-plan';


    return (
        <React.Fragment>
            <style>
                {`.aagb__accordion_container.no-pro-plan .aagb__accordion_body { padding:  10px !important; }`}
            </style>

            <div
                {...useBlockProps.save({

                    className: `aagb__accordion_container panel ${step ? 'step' : ''} ${checkList ? 'check-list' : ''} ${makeActive ? 'aagb__accordion_active' : ''} ${QaStyle ? 'style-qa' : ''}`,
                })}
                style={{
                    border: `${border.width} ${border.style} ${border.color}`,
                    marginTop: `${margins.top}`,
                    marginBottom: `${margins.bottom}`,
                    borderRadius: `${borderRadius}px`
                }}

                id={singleAcdId !== '' ? singleAcdId : ''}
                {...(faqSchema ? {
                    itemScope: true,
                    itemprop: "mainEntity",
                    itemType: "https://schema.org/Question"
                } : {})}
            >
                <div
                    className={`aagb__accordion_head ${iconPosition} ${subheading && aab_premium ? 'hasSubHeading' : ''} ${makeActive ? 'aagb__accordion_active' : ''}`}
                    data-active={makeActive}
                    style={{
                        backgroundColor: headerBg ? headerBg : 'transparent',
                        padding: `${paddings.top} ${paddings.left} ${paddings.bottom} ${paddings.right}`,
                    }}
                >


                    <div
                        className={`aagb__accordion_heading ${iconPosition} ${
                            anchorPosition || ''
                        }`}
                    >

                        {/* Heading Icon Image Upload */}
                        {showHeadingIcon && headingIconImageUrl && aab_premium && !QaStyle && (
                            <div className="heading-icon">
                                <img
                                    src={headingIconImageUrl}
                                    alt={headingIconAlt || 'Heading Icon'}
                                />
                            </div>
                        )}

                        {aab_premium && QaStyle && (
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
                                <RichText.Content
                                    className="aagb__accordion_title"
                                    tagName={headingTag}
                                    value={heading}
                                    style={{
                                        margin: 0,
                                        color: headingColor ? headingColor : '#333333',
                                    }}
                                    {...(faqSchema ? {itemprop: "name"} : {})}
                                />
                            </div>
                            <RichText.Content
                                    className="aagb__accordion_subheading"
                                    tagName="p"
                                    value={aab_premium ? subheading : ''}
                                    style={{
                                        margin: 0,
                                        color: subheadingColor
                                            ? subheadingColor
                                            : '#333333',
                                    }}
                            />

                        </div>
                    </div>

                    {!showIcon && step && (
                        <span class="complete-sign">&#10003;</span>
                    )}

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
                                {step && (
                                    <span class="complete-sign">&#10003;</span>
                                )}
                                <span
                                    className={`aagb__icon dashicons dashicons-${currentIconClass}`}
                                ></span>
                            </div>

                        </div>
                    )}
                </div>
                <div
                    className={`aagb__accordion_body ${activeClass} ${expandClass} `}
                    role="region"
                    style={{
                        backgroundColor: bodyBg ? bodyBg : 'transparent',
                        // Conditionally add borderTop if border.width, border.style, and border.color are defined


                        ...(!QaStyle
                                ? {
                                    borderTopColor: `${border.width} ${border.style} ${border.color}`,
                                    padding: `${paddings.top} ${paddings.left} ${paddings.bottom} ${paddings.right}`
                                }
                                : QaStyle && checkList
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
                    {...(faqSchema ? {
                        itemScope: true,
                        itemprop: "acceptedAnswer",
                        itemType: "https://schema.org/Answer"
                    } : {})}
                >

                    {renderContent()}

                    {step && (
                        <div className="continue">
                            <span className="step-text">{stepText}</span>
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

                    {button_show && aab_premium && (
                        <>
                            <button className="aagb_button_toggle">
                                <RichText.Content
                                    value={readMoreText}
                                    style={{
                                        margin: 0,
                                    }}
                                />
                            </button>
                        </>
                    )}
                </div>
            </div>


        </React.Fragment>
    );
};
export default Save;