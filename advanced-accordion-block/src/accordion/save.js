/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-lonely-if */
import {InnerBlocks, RichText, useBlockProps} from '@wordpress/block-editor';
import React from "react";

const {Fragment} = wp.element;
const {select} = wp.data;

const Save = ({attributes}) => {
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
        subheading,
        subheadingColor,
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
        disableAccordion,
        feedbackShow,
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

    const activeClass = makeActive
        ? `aab__accordion_body--show active__accordion_${uniqueId}`
        : '';
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
    const voting_checked = aab_premium ?? 'false';
    const noProClass = aab_premium ? '' : 'no-pro-plan';


    const FeedBackBtn = () => {
        // Get the current page ID

        return (
            feedbackShow &&
            voting_checked && (
                <span className="feedback-btn-wrap" data-id={uniqueId}>
					{feedbacLabel && <span>{feedbacLabel}</span>}

                    {yesBtn && (
                        <button
                            className="feedback-btn"
                            data-value="yes"
                            data-id={uniqueId}
                        >
                            {yesBtn}
                            {counterShow && <span className="count">0</span>}
                        </button>
                    )}

                    {noBtn && (
                        <button
                            className="feedback-btn"
                            data-value="no"
                            data-id={uniqueId}
                        >
                            {noBtn}
                            {counterShow && <span className="count">0</span>}
                        </button>
                    )}
				</span>
            )
        );
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

    return (
        <>
            {customCSS && (
                <div className="custom-css-block">
                    <style>{`#aab_accordion_${uniqueId} { ${customCSS} }`}</style>
                </div>
            )}
            <div {...useBlockProps.save({
                className: `aab__accordion_container separate-accordion ${disableAccordion ? 'aab__accordion_disabled' : ''} ${makeActive ? `active__accordion_container_${uniqueId}` : ''} ${noProClass}`,
            })
                 }

                 style={{
                     ...borderStyle,
                     marginTop: `${margins.top}`,
                     marginBottom: `${margins.bottom}`,
                     borderRadius: `${borderRadius}px`,
                 }}
                 id={`aab_accordion_${uniqueId}`}
                 {...(faqSchema ? {
                     itemScope: true,
                     itemprop: "mainEntity",
                     itemType: "https://schema.org/Question"
                 } : {})}
            >
                <div
                    {...(faqSchema ? {itemScope: true, itemType: "https://schema.org/FAQPage"} : {})}
                >
                    <Fragment>
                        <div
                            className={`aab__accordion_head ${iconPosition} ${makeActive ? "active" : ""}  ${subheading && aab_premium ? 'hasSubHeading' : ''}`}
                            data-active={makeActive}
                            style={{
                                backgroundColor: headerBg
                                    ? headerBg
                                    : 'transparent',
                                padding: `${paddings.top} ${paddings.right} ${paddings.bottom} ${paddings.left}`,
                            }}

                        >

                            <div
                                className={`aab__accordion_heading ${iconPosition} ${
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
                                        <RichText.Content
                                            className="aab__accordion_title"
                                            tagName={headingTag}
                                            value={heading}
                                            style={{
                                                margin: 0,
                                                color: headingColor
                                                    ? headingColor
                                                    : '#333333',
                                            }}
                                            itemprop="name"
                                        />
                                    </div>
                                    <RichText.Content
                                        className="aab__accordion_subheading"
                                        tagName="p"
                                        placeholder="Write some subheading"
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
                                    className={`aab__icon dashicons dashicons-${currentIconClass}`}
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
                            {...(faqSchema ? {
                                itemScope: true,
                                itemprop: "acceptedAnswer",
                                itemType: "https://schema.org/Answer"
                            } : {})}
                            className={`aab__accordion_body ${activeClass}`}
                            role="region"
                            style={{
                                backgroundColor: bodyBg ? bodyBg : 'transparent',

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
                            <div itemProp="text">
                                <InnerBlocks.Content/>
                            </div>

                            <FeedBackBtn/>
                        </div>
                        {anchorLinkShow === true && aab_premium && (
                            <script>
                                {`
								
								 document.addEventListener("DOMContentLoaded", () => {
                                        var Anchor1 = new AnchorJS();
                                        Anchor1.add('#aab_accordion_${uniqueId} .aab__accordion_heading .title_wrapper');
                                 });
							`}
                            </script>
                        )}
                    </Fragment>

                </div>
            </div>
        </>
    );
};
export default Save;
