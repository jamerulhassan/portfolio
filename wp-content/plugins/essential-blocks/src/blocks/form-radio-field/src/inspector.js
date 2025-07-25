/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useState } from "@wordpress/element";
import {
    ToggleControl,
    TextControl,
    Button,
    RangeControl,
    ButtonGroup,
} from "@wordpress/components";

/**
 * Internal dependencies
 */
import {
    ColorControl,
    ResponsiveRangeController,
    ResponsiveDimensionsControl,
    TypographyDropdown,
    DynamicInputControl,
    DynamicFormFieldControl,
    InspectorPanel,
    FormConditionalLogics
} from "@essential-blocks/controls";

import objAttributes from "./attributes";

import {
    WRAPPER_MARGIN,
    WRAPPER_PADDING,
    WRAPPER_BORDER_SHADOW,
    WRAPPER_BG,
    LABEL_MARGIN,
    RADIO_SIZE,
    RADIO_SPACING,
    NORMAL_CHECKED,
} from "./constants";

import {
    LABEL_TYPOGRAPHY,
    RADIO_TEXT,
} from "./constants/typographyPrefixConstants";

function Inspector(props) {
    const { attributes, setAttributes, clientId } = props;
    const {
        resOption,
        showLabel,
        labelText,
        options,
        fieldName,
        defaultValue,
        placeholderText,
        isRequired,
        validationMessage,
        labelColor,
        requiredColor,
        radioType,
        radioColor,
        radioBgColor,
        radioBrColor,
        radioBrCheckedColor,
        radioBorder,
        dynamicValue,
        dynamicOptionType,
        dynamicValueLoader,
        parentBlockId
    } = attributes;

    return (
        <>
            <InspectorPanel advancedControlProps={{
                marginPrefix: WRAPPER_MARGIN,
                paddingPrefix: WRAPPER_PADDING,
                backgroundPrefix: WRAPPER_BG,
                borderPrefix: WRAPPER_BORDER_SHADOW,
                hasMargin: true,
            }}>
                <InspectorPanel.General>
                    <InspectorPanel.PanelBody
                        title={__(
                            "General",
                            "essential-blocks"
                        )}
                        initialOpen={true}
                    >
                        <ToggleControl
                            label={__(
                                "Show Label?",
                                "essential-blocks"
                            )}
                            checked={showLabel}
                            onChange={() =>
                                setAttributes({
                                    showLabel: !showLabel,
                                })
                            }
                        />

                        {showLabel && (
                            <DynamicInputControl
                                label={__(
                                    "Label Text",
                                    "essential-blocks"
                                )}
                                attrName="labelText"
                                inputValue={labelText}
                                setAttributes={setAttributes}
                                onChange={(text) =>
                                    setAttributes({
                                        labelText: text,
                                    })
                                }
                            />
                        )}
                        <DynamicFormFieldControl
                            type="radio"
                            options={options}
                            dynamicValue={dynamicValue}
                            dynamicOptionType={dynamicOptionType}
                            dynamicValueLoader={dynamicValueLoader}
                            setAttributes={setAttributes}
                        />
                        <ToggleControl
                            label={__(
                                "Required?",
                                "essential-blocks"
                            )}
                            checked={isRequired}
                            onChange={() =>
                                setAttributes({
                                    isRequired: !isRequired,
                                })
                            }
                        />
                    </InspectorPanel.PanelBody>
                    <InspectorPanel.PanelBody
                        title={__(
                            "Advanced Settings",
                            "essential-blocks"
                        )}
                        initialOpen={true}
                    >
                        <TextControl
                            label={__(
                                "Default Value",
                                "essential-blocks"
                            )}
                            value={defaultValue}
                            onChange={(text) =>
                                setAttributes({
                                    defaultValue: text,
                                })
                            }
                            help={__("Leave empty if no default value.", "essential-blocks")}
                        />
                        <TextControl
                            label={__(
                                "Field Custom Name Attribute",
                                "essential-blocks"
                            )}
                            value={fieldName}
                            onChange={(text) =>
                                setAttributes({
                                    fieldName: text,
                                })
                            }
                            help={__("This is for the name attributes which is used to submit form data, Name must be unique.", "essential-blocks")}
                        />

                        {isRequired && (
                            <TextControl
                                label={__(
                                    "Custom Validation Message",
                                    "essential-blocks"
                                )}
                                value={validationMessage}
                                onChange={(text) =>
                                    setAttributes({
                                        validationMessage: text,
                                    })
                                }
                            />
                        )}
                    </InspectorPanel.PanelBody>
                    <FormConditionalLogics clientId={clientId} parentBlockId={parentBlockId} />
                </InspectorPanel.General>
                <InspectorPanel.Style>
                    <InspectorPanel.PanelBody
                        title={__("Label", "essential-blocks")}
                        initialOpen={true}
                    >
                        <TypographyDropdown
                            baseLabel={__(
                                "Typography",
                                "essential-blocks"
                            )}
                            typographyPrefixConstant={
                                LABEL_TYPOGRAPHY
                            }
                        />
                        <ColorControl
                            label={__(
                                "Color",
                                "essential-blocks"
                            )}
                            color={labelColor}
                            attributeName={'labelColor'}
                        />
                        <ColorControl
                            label={__(
                                "Requied Color",
                                "essential-blocks"
                            )}
                            color={requiredColor}
                            attributeName={'requiredColor'}
                        />
                        <ResponsiveDimensionsControl
                            controlName={LABEL_MARGIN}
                            baseLabel={__(
                                "Margin",
                                "essential-blocks"
                            )}
                        />
                    </InspectorPanel.PanelBody>
                    <InspectorPanel.PanelBody
                        title={__(
                            "Radio Fields",
                            "essential-blocks"
                        )}
                        initialOpen={false}
                    >
                        <>
                            <TypographyDropdown
                                baseLabel={__(
                                    "Typography",
                                    "essential-blocks"
                                )}
                                typographyPrefixConstant={
                                    RADIO_TEXT
                                }
                            />

                            <ColorControl
                                label={__(
                                    "Color",
                                    "essential-blocks"
                                )}
                                color={radioColor}
                                attributeName={'radioColor'}
                            />
                            <ColorControl
                                label={__(
                                    "Background",
                                    "essential-blocks"
                                )}
                                color={radioBgColor}
                                attributeName={'radioBgColor'}
                            />
                            <ResponsiveRangeController
                                baseLabel={__(
                                    "Size (PX)",
                                    "essential-blocks"
                                )}
                                controlName={RADIO_SIZE}
                                min={1}
                                max={100}
                                step={1}
                                noUnits
                            />
                            <RangeControl
                                label={__(
                                    "Border Width",
                                    "essential-blocks"
                                )}
                                value={radioBorder}
                                onChange={(radioBorder) =>
                                    setAttributes({
                                        radioBorder,
                                    })
                                }
                                min={1}
                                max={5}
                                step={1}
                                allowReset={true}
                            />

                            <ButtonGroup className="eb-inspector-btn-group">
                                {NORMAL_CHECKED.map(
                                    (item, index) => (
                                        <Button
                                            key={index}
                                            isPrimary={
                                                radioType ===
                                                item.value
                                            }
                                            isSecondary={
                                                radioType !==
                                                item.value
                                            }
                                            onClick={() =>
                                                setAttributes({
                                                    radioType:
                                                        item.value,
                                                })
                                            }
                                        >
                                            {item.label}
                                        </Button>
                                    )
                                )}
                            </ButtonGroup>

                            {radioType === "normal" && (
                                <>
                                    <ColorControl
                                        label={__(
                                            "Border Color",
                                            "essential-blocks"
                                        )}
                                        color={radioBrColor}
                                        attributeName={'radioBrColor'}
                                    />
                                </>
                            )}
                            {radioType === "checked" && (
                                <>
                                    <ColorControl
                                        label={__(
                                            "Border Color",
                                            "essential-blocks"
                                        )}
                                        color={
                                            radioBrCheckedColor
                                        }
                                        attributeName={'radioBrCheckedColor'}
                                    />
                                </>
                            )}

                            <ResponsiveRangeController
                                baseLabel={__(
                                    "Spacing (PX)",
                                    "essential-blocks"
                                )}
                                controlName={RADIO_SPACING}
                                min={1}
                                max={100}
                                step={1}
                                noUnits
                            />
                        </>
                    </InspectorPanel.PanelBody>
                </InspectorPanel.Style>
            </InspectorPanel>
        </>
    );
}
export default Inspector;
