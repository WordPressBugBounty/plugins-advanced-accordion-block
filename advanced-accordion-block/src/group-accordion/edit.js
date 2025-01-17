/* eslint-disable @wordpress/no-unsafe-wp-apis */
// import editor style
import './editor.scss';
import React, {useState} from 'react';
import Editor from 'react-simple-code-editor';
import Prism from 'prismjs';
import {
    TextControl,
    BaseControl,
    RadioControl,
    __experimentalToggleGroupControl as ToggleGroupControl,
    __experimentalToggleGroupControlOption as ToggleGroupControlOption,
    ColorPalette,
    PanelBody,
    RangeControl,
    ToggleControl,
    __experimentalBoxControl as BoxControl,
    __experimentalBorderControl as BorderControl,
} from '@wordpress/components';
import colors from '../colors';
import {
    InnerBlocks,
    useBlockProps,
    InspectorControls,
    RichText,
} from '@wordpress/block-editor';
import {__} from '@wordpress/i18n';
import {Fragment, useEffect} from '@wordpress/element';

let uniqueCounter = 0;

const Edit = ({attributes, setAttributes, clientId}) => {
    const {
        uniqueId,
        activeAccordionBorder,
        searchShow,
        showAllbtn,
        placeholderText,
        closeText,
        openText,
        QaStyle,
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
        qIconColor,
        qIconBg,
        aIconColor,
        aIconBg,
        subheadingColor,
        customCSS
    } = attributes;

    const [activetorClass, setActivetorClass] = useState('click');

    // set unique ID
    useEffect(() => {
        if (!uniqueId) {
            const newUniqueId = `${clientId.slice(0, 8)}_${uniqueCounter++}`;
            setAttributes({uniqueId: newUniqueId});
        }
    }, []);

    const handleActivetorChange = (value) => {
        setActivetorClass(value);
        setAttributes({activetorClass: value});
    };

    // Check if aab_premium is true
    const aab_premium = aagb_local_object.licensing;
    const is_disable = aab_premium ? '' : 'disabled';
    const search_checked = aab_premium ? searchShow : 'false';
    const show_close_btn_checked = aab_premium ? showAllbtn : 'false';
    const has_disabled_class = aab_premium ? '' : 'aab-pro-element';
    const anchor_link_checked = aab_premium ? anchorLinksShow : 'false';
    const read_more_checked = aab_premium ? buttonShow : 'false';

    const blockProps = useBlockProps();
    const hasQaStyle = blockProps.className.includes('is-style-qa');

    useEffect(() => {
        setAttributes({QaStyle: hasQaStyle})
    }, [hasQaStyle])

    let optionsName;

    if (step) {
        optionsName = "step";
    } else if (checkList) {
        optionsName = "checkList";
    } else {
        optionsName = "none";
    }

    return (
        <Fragment>
            <style>
                {`.aagb_accordion_${uniqueId} .aagb__accordion_container.aagb__accordion_active { border: ${activeAccordionBorder.width} ${activeAccordionBorder.style} ${activeAccordionBorder.color} }`}
                {`.aagb_accordion_${uniqueId} .aagb__accordion_active .aagb__accordion_body  { border-top: ${activeAccordionBorder.width} ${activeAccordionBorder.style} ${activeAccordionBorder.color} }`}
            </style>
            <InspectorControls group="styles">
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
                    title={__(
                        'Active Accordion Style',
                        'advanced-accordion-block'
                    )}
                >

                    <p className="aab__label">
                        {__('Border', 'advanced-accordion-block')}
                    </p>

                    <BorderControl
                        colors={colors}
                        onChange={(value) =>
                            setAttributes({activeAccordionBorder: value})
                        }
                        value={activeAccordionBorder}
                        withSlider={true}
                    />
                    <p className="aab__label">
                        {__('(This style will only be visible in the frontend)', 'advanced-accordion-block')}
                    </p>
                </PanelBody>

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
                        sides={['horizontal', 'vertical']}
                        units={[]}
                        splitOnAxis={true}
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
                    <BorderControl
                        colors={colors}
                        onChange={(value) => setAttributes({border: value})}
                        value={border}
                        withSlider={true}
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
                    <p className="aagb__label">
                        {__('Header Color', 'advanced-accordion-block')}
                    </p>
                    <ColorPalette
                        colors={colors}
                        value={headingColor}
                        onChange={(headingColor) =>
                            setAttributes({headingColor})
                        }
                    />
                    <p className="aagb__label">
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

                            <p className="aagb__label">
                                {__('Icon Color', 'advanced-accordion-block')}
                            </p>
                            <ColorPalette
                                colors={colors}
                                value={iconColor}
                                onChange={(iconColor) =>
                                    setAttributes({iconColor})
                                }
                            />
                            <p className="aagb__label">
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
                        </Fragment>
                    )}
                </PanelBody>

                <PanelBody
                    title={__('Accordion Body', 'advanced-accordion-block')}
                    initialOpen={false}
                >
                    <p className="aagb__label">
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
                        onValueChange={(value) => setAttributes({customCSS: value})}
                        highlight={(code) => Prism.highlight(code, Prism.languages.css, 'css')}
                        padding={10}
                        disabled={is_disable}
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
                <style>{`.aagb_accordion_${uniqueId} { ${customCSS} }`}</style>
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
                        value={`group-accordion-${uniqueId}`}
                        onChange={function (uniqueId) {
                            if (uniqueId !== "group-accordion") {
                                const slicedWOrd = uniqueId.replace("group-accordion-", "");
                                setAttributes({uniqueId: slicedWOrd});
                            }
                        }}
                    />
                </PanelBody>

                <PanelBody
                    title={__('Accordion Search', 'advanced-accordion-block')}
                    initialOpen={false}
                    className={has_disabled_class}
                >
                    <ToggleControl
                        label={__(
                            'Show Accordion Search',
                            'advanced-accordion-block'
                        )}
                        disabled={is_disable}
                        checked={search_checked} // Use the state variable here
                        onChange={() =>
                            setAttributes({searchShow: !searchShow})
                        }
                    />
                    {searchShow && (
                        <div>
                            <label
                                className="label-d-block"
                            >
                                {__(
                                    'Placeholder Text',
                                    'advanced-accordion-block'
                                )}
                            </label>
                            <input
                                type="text"
                                className="widefat"
                                disabled={is_disable}
                                placeholder={__(
                                    'Enter placeholder text',
                                    'advanced-accordion-block'
                                )}
                                value={placeholderText}
                                onChange={(e) =>
                                    setAttributes({
                                        placeholderText: e.target.value,
                                    })
                                }
                            />
                        </div>
                    )}

                </PanelBody>

                <PanelBody
                    title={__(
                        'Open/Close All',
                        'advanced-accordion-block'
                    )}
                    initialOpen={false}
                    className={has_disabled_class}
                >
                    <ToggleControl
                        label={__(
                            'Open All & Close All',
                            'advanced-accordion-block'
                        )}
                        disabled={is_disable}
                        checked={show_close_btn_checked} // Use the state variable here
                        onChange={() =>
                            setAttributes({showAllbtn: !showAllbtn})
                        }
                    />
                    {showAllbtn && aab_premium && (
                        <div>

                            <BaseControl __nextHasNoMarginBottom id="openText" label="Show All Text">
                                <input
                                    id="openText"
                                    type="text"
                                    disabled={is_disable}
                                    value={openText}
                                    onChange={(e) =>
                                        setAttributes({openText: e.target.value})
                                    }
                                    style={{
                                        display: 'block',
                                        width: '100%'
                                    }}
                                />
                            </BaseControl>
                            <BaseControl __nextHasNoMarginBottom id="closeText" label="Close All Text">
                                <input
                                    id="closeText"
                                    type="text"
                                    disabled={is_disable}
                                    placeholder={__(
                                        'Enter text',
                                        'advanced-accordion-block'
                                    )}
                                    value={closeText}
                                    onChange={(e) =>
                                        setAttributes({closeText: e.target.value})
                                    }
                                    style={{
                                        display: 'block',
                                        width: '100%'
                                    }}
                                />
                            </BaseControl>
                        </div>
                    )}
                </PanelBody>

                <PanelBody
                    title={__('Activetor Event', 'advanced-accordion-block')}
                    initialOpen={false}
                    className={has_disabled_class}
                >
                    <ToggleGroupControl
                        value={activetorClass}
                        onChange={handleActivetorChange}
                    >
                        <ToggleGroupControlOption
                            value="click"
                            label="Click"
                            disabled={is_disable}
                            showTooltip={true}
                        />
                        <ToggleGroupControlOption value="hover" disabled={is_disable} label="Hover"/>

                    </ToggleGroupControl>
                </PanelBody>


                {!step && (


                    <PanelBody
                        title={__('Anchors Link', 'advanced-accordion-block')}
                        initialOpen={false}
                        className={has_disabled_class}
                    >

                        <ToggleControl
                            label={__(
                                'Anchor Link',
                                'advanced-accordion-block'
                            )}
                            // pass disable variable here
                            disabled={is_disable}
                            checked={anchor_link_checked} // Use the state variable here
                            onChange={() =>
                                setAttributes({anchorLinksShow: !anchorLinksShow})
                            }
                        />

                    </PanelBody>
                )}


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


                {aab_premium && (
                    <PanelBody
                        initialOpen={false}
                        title={__('Steps or Checklist', 'advanced-accordion-block')}
                    >

                        <RadioControl
                            label="Options"
                            help={__('Transform the accordions into interactive steps or a checklist for a streamlined user experience.', 'advanced-accordion-block')}
                            selected={optionsName}
                            options={[
                                {label: 'Steps', value: "step"},
                                {label: 'Checklist', value: "checkList"},
                                {label: 'None', value: "none"},
                            ]}

                            onChange={(value) => {
                                if (value === 'step') {
                                    setAttributes({checkList: false})
                                    setAttributes({step: true})
                                } else if (value === 'checkList') {
                                    setAttributes({step: false})
                                    setAttributes({checkList: true})
                                } else {
                                    setAttributes({step: false})
                                    setAttributes({checkList: false})
                                }
                            }}
                        />

                        {aab_premium && step && (
                            <TextControl // New TextControl
                                label={__('Step Text', 'advanced-accordion-block')}
                                value={stepText} // State variable to hold the text value
                                onChange={(value) => setAttributes({stepText: value})}
                                help={__('Enter the text you want to display on the step.', 'advanced-accordion-block')}
                            />

                        )}
                        {aab_premium && step && (
                            <TextControl // New TextControl
                                label={__('Step Complete Text', 'advanced-accordion-block')}
                                value={stepCmpltText} // State variable to hold the text value
                                onChange={(value) => setAttributes({stepCmpltText: value})}
                                help={__('Enter the text you want to display when the step is completed.', 'advanced-accordion-block')}
                            />

                        )}
                    </PanelBody>
                )}

                <PanelBody
                    title={__('Read More Button', 'advanced-accordion-block')}
                    initialOpen={false}
                    className={has_disabled_class}
                >
                    <ToggleControl
                        label={__(
                            'Button Show/Hide',
                            'advanced-accordion-block'
                        )}
                        disabled={is_disable}
                        checked={read_more_checked}
                        onChange={() =>
                            setAttributes({buttonShow: !buttonShow})
                        }
                    />
                    {buttonShow && (
                        <>
                            <RangeControl
                                label={__(
                                    'Content Count',
                                    'advanced-accordion-block'
                                )}
                                help={__('Total Number of Characters you want to display on accordion body', 'advanced-accordion-block')}
                                disabled={is_disable}
                                value={contentCount}
                                onChange={(value) =>
                                    setAttributes({contentCount: value})
                                }
                                min={1}
                                max={1000}
                            />

                            <TextControl
                                label={__('Read More Text', 'advanced-accordion-block')}
                                value={readText} // State variable to hold the text value
                                onChange={(value) => setAttributes({readText: value})}
                                help={__('Enter the text you want to display on Read more button.', 'advanced-accordion-block')}
                            />

                        </>
                    )}
                </PanelBody>


            </InspectorControls>


            <div
                {...useBlockProps({
                    className: `aagb_accordion_${uniqueId}`,
                    id: `group-accordion-${uniqueId}`
                })}
            >
                {searchShow && aab_premium && (
                    <div className="aagb_form_inner" id={"aagb-search-form-" + uniqueId}>
                        <div className="aagb_form_group">
                            <input
                                data-searchTarget={uniqueId}
                                type="search"
                                className="aagb-search-control aagb_form_control noEnterSubmit"
                                disabled={is_disable}
                                placeholder={
                                    placeholderText || 'Search for FAQ'
                                }
                                value={placeholderText}
                                onChange={(e) =>
                                    setAttributes({
                                        placeholderText: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <span
                            id="aagb-search-help-block"
                            className="help-block"
                        ></span>
                    </div>
                )}
                {showAllbtn && aab_premium && (
                    <div className="aagb_accordion_wrapper_btn">

                        <a href="#" data-openTarget={'aagb_accordion_' + uniqueId}
                           className="content-accordion__show-all">
                            <svg
                                className="svg-inline--fa fa-expand-alt fa-w-14"
                                role="presentation"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="expand-alt"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                                data-fa-i2svg=""
                            >
                                <path
                                    fill="currentColor"
                                    d="M212.686 315.314L120 408l32.922 31.029c15.12 15.12 4.412 40.971-16.97 40.971h-112C10.697 480 0 469.255 0 456V344c0-21.382 25.803-32.09 40.922-16.971L72 360l92.686-92.686c6.248-6.248 16.379-6.248 22.627 0l25.373 25.373c6.249 6.248 6.249 16.378 0 22.627zm22.628-118.628L328 104l-32.922-31.029C279.958 57.851 290.666 32 312.048 32h112C437.303 32 448 42.745 448 56v112c0 21.382-25.803 32.09-40.922 16.971L376 152l-92.686 92.686c-6.248 6.248-16.379 6.248-22.627 0l-25.373-25.373c-6.249-6.248-6.249-16.378 0-22.627z"
                                ></path>
                            </svg>
                            <RichText.Content
                                value={openText}
                                style={{
                                    margin: 0,
                                }}
                            />
                        </a>
                        <a href="#" data-closeTarget={uniqueId} className="content-accordion__close-all">
                            <svg
                                className="svg-inline--fa fa-compress-alt fa-w-14"
                                role="presentation"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="compress-alt"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                                data-fa-i2svg=""
                            >
                                <path
                                    fill="currentColor"
                                    d="M4.686 427.314L104 328l-32.922-31.029C55.958 281.851 66.666 256 88.048 256h112C213.303 256 224 266.745 224 280v112c0 21.382-25.803 32.09-40.922 16.971L152 376l-99.314 99.314c-6.248 6.248-16.379 6.248-22.627 0L4.686 449.941c-6.248-6.248-6.248-16.379 0-22.627zM443.314 84.686L344 184l32.922 31.029c15.12 15.12 4.412 40.971-16.97 40.971h-112C234.697 256 224 245.255 224 232V120c0-21.382 25.803-32.09 40.922-16.971L296 136l99.314-99.314c6.248-6.248 16.379-6.248 22.627 0l25.373 25.373c6.248 6.248 6.248 16.379 0 22.627z"
                                ></path>
                            </svg>
                            <RichText.Content
                                value={closeText}
                                style={{
                                    margin: 0,
                                }}
                            />
                        </a>
                    </div>
                )}

                <InnerBlocks
                    allowedBlocks={['aab/accordion-item']}
                    template={[['aab/accordion-item']]}
                />

                {step && (
                    <span className="step-result">{stepCmpltText}</span>
                )}

            </div>
        </Fragment>
    );
};
export default Edit;