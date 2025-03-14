import { Box, Button, Carousel, FileInputItem, FormField, NumberInput, Rows, Scrollable, Title, TrashIcon } from "@canva/app-ui-kit";
import { CardEffect } from "../CardEffect";
import { useCallback, useContext, useEffect, useMemo } from "react";
import AppContext from "src/context/AppProvider";
import { Effect, EffectsData } from "src/interface/effect";
import { applyEffect } from "src/hooks/effect/genEffect";
import { useIntl } from "react-intl";
import { useData } from "src/hooks/useData";
import { AdjustStrength } from "../AdjustStrength";
export interface IEffectData {
    group?: string,
    image?: string,
    label?: string,
    value?: string
}
export const ListEffect = () => {
    const {
        effects,
        setEffects,
        selectedImage,
        selectedEffect,
        previewImage,
        resizeImage,
        originImage,
        setPreviewImage,
        setStrength,
        strength,
        isUploading,
        setSelectedEffect,
        setResizeImage,
        setOriginImage,
        setUploadMethod,
    } = useContext(AppContext)
    const { formatMessage } = useIntl();
    const effectsData = useData();

    const loadImage = (value: string) => {
        return (`${value}.png`);
    };
    const onChangeEffect = useCallback(async (value: string) => {
        setSelectedEffect?.(value);
        // setStrength?.(1)
        if (!previewImage) return;
        const imageToUse = resizeImage || originImage;

        if (!imageToUse) return;
        try {
            const newEffectImage = await applyEffect(imageToUse, value, strength || 1);
            setPreviewImage?.(newEffectImage);
        } catch (error) {
            console.error("Error applying effect:", error);
        }
    }, [setPreviewImage, resizeImage, setSelectedEffect, strength, previewImage]);

    const onChangeEffectNone = useCallback(() => {
        setPreviewImage?.(resizeImage ? resizeImage : originImage);
        setStrength?.(1)
        setSelectedEffect?.(undefined)
    }, [resizeImage, originImage, setStrength, setSelectedEffect, setPreviewImage])

    const getAllEffectsWithImages = (effectsData: EffectsData) => {
        const allEffects = Object.entries(effectsData)
            .reduce((acc, [groupName, group]) => {
                const groupEffects = group.map((effect) => ({
                    ...effect,
                    image: loadImage(effect.value),
                    group: groupName,
                }));
                return acc.concat(groupEffects);
            }, [] as Effect[]);

        return allEffects;
    };
    useEffect(() => {
        if (!effects || effects.length === 0) {
            const effectsWithImages = getAllEffectsWithImages(effectsData);
            if (effectsWithImages && effectsWithImages.length) {
                setEffects?.(effectsWithImages)
            }
        }
    }, [setEffects]);

    const groupedEffects = useMemo(() => {
        if (!effects || !Array.isArray(effects)) return {};
        return effects.reduce((acc, effect) => {
            const group = effect.group || "Others";
            if (!acc[group]) acc[group] = [];
            acc[group].push(effect);
            return acc;
        }, {});
    }, [effects]);
    const handleChangeStrength = async (value: number) => {
        setStrength?.(value);

        if (!previewImage || !selectedEffect) return;

        const imageToUse = resizeImage || originImage;
        if (!imageToUse) return;

        try {
            const newEffectImage = await applyEffect(imageToUse, selectedEffect, value || 1);
            setPreviewImage?.(newEffectImage);
        } catch (error) {
            console.error("Error applying effect:", error);
        }
    };
    const handleRemoveImage = useCallback(() => {
        setPreviewImage?.(undefined);
        setResizeImage?.(undefined)
        setOriginImage?.(undefined)
        setUploadMethod?.(undefined)
        setSelectedEffect?.(undefined)
    }, [setPreviewImage, setUploadMethod]);
    return (
        // <div
        //     style={{
        //         flex: 1,
        //         position: "relative",
        //     }}
        // >
        //     <div
        //         style={{
        //             position: "absolute",
        //             top: 0,
        //             right: 0,
        //             bottom: 0,
        //             left: 0,
        //         }}
        //     >
        //         <Scrollable >
        // <Box height="full">
        <Rows spacing="2u">
            {previewImage && (
                <>
                    <FileInputItem
                        label={selectedImage?.name || formatMessage({
                            id: "selected_file",
                            defaultMessage: "Selected image",
                            description: "Selected file item",
                        })}
                        onDeleteClick={handleRemoveImage}
                        disabled={isUploading}
                    />
                    {/* <Button
                        variant="secondary"
                        onClick={handleRemoveImage}
                        stretch
                        icon={() => <TrashIcon />}
                        disabled={isUploading}
                    >
                        {formatMessage({
                            id: "remove_image",
                            defaultMessage: "Remove image",
                            description: "Remove image",
                        })}
                    </Button> */}
                    {/* <FormField
                        label={formatMessage({
                            id: "effect_strength",
                            defaultMessage: "Effect strength",
                            description: "Adjust the effect strength",
                        })}
                        control={(props) => (
                            <Rows spacing="2u">
                                <NumberInput
                                    decrementAriaLabel="Decrease number"
                                    max={2}
                                    // defaultValue={1}
                                    min={0.1}
                                    value={strength}
                                    hasSpinButtons
                                    incrementAriaLabel="Increase number"
                                    step={0.1}
                                    onChangeComplete={handleChangeStrength}
                                />
                            </Rows>
                        )}
                    /> */}
                    <Button
                        variant="secondary"
                        onClick={onChangeEffectNone}
                        stretch
                        disabled={!selectedEffect}
                    >
                        {formatMessage({
                            id: "reset_effects",
                            defaultMessage: "Reset effects",
                            description: "Reset effects",
                        })}
                    </Button>
                </>
            )}
            <Rows spacing="3u">
                <Rows spacing="1u">
                    <Title size="xsmall">
                        {formatMessage({
                            id: "category_brightness_and_color",
                            defaultMessage: "Brightness and color",
                            description: "Category label for brightness and color",
                        })}
                    </Title>
                    <Carousel>
                        {(groupedEffects["Brightness and color adjustments"] || []).map((item, index) => (
                            <CardEffect
                                isSelected={item.value === selectedEffect}
                                onClick={() => onChangeEffect(item.value)}
                                effect={item}
                                key={index}
                            />
                        ))}
                    </Carousel>
                </Rows>
                {groupedEffects["Brightness and color adjustments"]?.some(item => item.value === selectedEffect) && (
                    <AdjustStrength />
                )}
            </Rows>
            <Rows spacing="3u">
                <Rows spacing="1u">
                    <Title size="xsmall">
                        {formatMessage({
                            id: "category_blues_and_speckled_effects",
                            defaultMessage: "Blues and speckled effects",
                            description: "Category label for blues and speckled effects",
                        })}
                    </Title>
                    <Carousel>
                        {(groupedEffects["Blues and speckled effects"] || []).map((item, index) => (
                            <CardEffect
                                isSelected={item.value === selectedEffect}
                                onClick={() => onChangeEffect(item.value)}
                                effect={item}
                                key={index}
                            />
                        ))}
                    </Carousel>
                </Rows>
                {groupedEffects["Blues and speckled effects"]?.some(item => item.value === selectedEffect) && (
                    <AdjustStrength />
                )}
            </Rows>
            <Rows spacing="3u">
                <Rows spacing="1u">
                    <Title size="xsmall">
                        {formatMessage({
                            id: "category_geometric_and_offset_effects",
                            defaultMessage: "Geometric and offset effects",
                            description: "Category label for geometric and offset effects",
                        })}
                    </Title>
                    <Carousel>
                        {(groupedEffects["Geometric and offset effects"] || []).map((item, index) => (
                            <CardEffect
                                isSelected={item.value === selectedEffect}
                                onClick={() => onChangeEffect(item.value)}
                                effect={item}
                                key={index}
                            />
                        ))}
                    </Carousel>
                </Rows>
                {groupedEffects["Geometric and offset effects"]?.some(item => item.value === selectedEffect) && (
                    <AdjustStrength />
                )}
            </Rows>
            <Rows spacing="3u">
                <Rows spacing="1u">
                    <Title size="xsmall">
                        {formatMessage({
                            id: "category_lines_and_colors_effects",
                            defaultMessage: "Lines and colors",
                            description: "Category label for lines and colors effects",
                        })}
                    </Title>
                    <Carousel>
                        {(groupedEffects["Lines and colors"] || []).map((item, index) => (
                            <CardEffect
                                isSelected={item.value === selectedEffect}
                                onClick={() => onChangeEffect(item.value)}
                                effect={item}
                                key={index}
                            />
                        ))}
                    </Carousel>
                </Rows>
                {groupedEffects["Lines and colors"]?.some(item => item.value === selectedEffect) && (
                    <AdjustStrength />
                )}
            </Rows>
            <Rows spacing="3u">
                <Rows spacing="1u">
                    <Title size="xsmall">
                        {formatMessage({
                            id: "category_matrix_and_noise_effects",
                            defaultMessage: "Matrix and noise effects",
                            description: "Category label for matrix and noise effects",
                        })}
                    </Title>
                    <Carousel>
                        {(groupedEffects["Matrix and noise effects"] || []).map((item, index) => (
                            <CardEffect
                                isSelected={item.value === selectedEffect}
                                onClick={() => onChangeEffect(item.value)}
                                effect={item}
                                key={index}
                            />
                        ))}
                    </Carousel>
                </Rows>
                {groupedEffects["Matrix and noise effects"]?.some(item => item.value === selectedEffect) && (
                    <AdjustStrength />
                )}
            </Rows>
            <Rows spacing="3u">
                <Rows spacing="1u">
                    <Title size="xsmall">
                        {formatMessage({
                            id: "category_mood_and_solange",
                            defaultMessage: "Mood and solange",
                            description: "Category label for mood and solange effects",
                        })}
                    </Title>
                    <Carousel>
                        {(groupedEffects["Mood and solange"] || []).map((item, index) => (
                            <CardEffect
                                isSelected={item.value === selectedEffect}
                                onClick={() => onChangeEffect(item.value)}
                                effect={item}
                                key={index}
                            />
                        ))}
                    </Carousel>
                </Rows>
                {groupedEffects["Mood and solange"]?.some(item => item.value === selectedEffect) && (
                    <AdjustStrength />
                )}
            </Rows>
            <Rows spacing="3u">
                <Rows spacing="1u" >
                    <Title size="xsmall">
                        {formatMessage({
                            id: "category_pixel_and_grayscale_effects",
                            defaultMessage: "Pixel and grayscale effects",
                            description: "Category label for pixel and grayscale effects",
                        })}
                    </Title>
                    <Carousel>
                        {(groupedEffects["Pixel and grayscale effects"] || []).map((item, index) => (
                            <CardEffect
                                isSelected={item.value === selectedEffect}
                                onClick={() => onChangeEffect(item.value)}
                                effect={item}
                                key={index} />
                        ))}
                    </Carousel>
                </Rows>
                {groupedEffects["Pixel and grayscale effects"]?.some(item => item.value === selectedEffect) && (
                    <AdjustStrength />
                )}
            </Rows>
            <Rows spacing="3u">
                <Rows spacing="1u" >
                    <Title size="xsmall">
                        {formatMessage({
                            id: "category_texture_vintage_effects",
                            defaultMessage: "Texture and vintage effects",
                            description: "Category for texture and vintage effects that add an artistic, retro vibe to your design",
                        })}
                    </Title>
                    <Carousel>
                        {(groupedEffects["Texture and vintage effects"] || []).map((item, index) => (
                            <CardEffect
                                isSelected={item.value === selectedEffect}
                                onClick={() => onChangeEffect(item.value)}
                                effect={item}
                                key={index} />
                        ))}
                    </Carousel>
                </Rows>
                {groupedEffects["Texture and vintage effects"]?.some(item => item.value === selectedEffect) && (
                    <AdjustStrength />
                )}
            </Rows>
            <Rows spacing="3u">
                <Rows spacing="1u" >
                    <Title size="xsmall">
                        {formatMessage({
                            id: "category_purple_and_red_effects",
                            defaultMessage: "Purple and red effects",
                            description: "Category label for purple and red effects",
                        })}
                    </Title>
                    <Carousel>
                        {(groupedEffects["Purple and red effects"] || []).map((item, index) => (
                            <CardEffect
                                isSelected={item.value === selectedEffect}
                                onClick={() => onChangeEffect(item.value)}
                                effect={item}
                                key={index} />
                        ))}
                    </Carousel>
                </Rows>
                {groupedEffects["Purple and red effects"]?.some(item => item.value === selectedEffect) && (
                    <AdjustStrength />
                )}
            </Rows>
            <Rows spacing="3u">
                <Rows spacing="1u" >
                    <Title size="xsmall">
                        {formatMessage({
                            id: "category_speckles_rgb_effects",
                            defaultMessage: "Speckles and RGB effects",
                            description: "Category label for effects that add speckles and rgb style visual enhancements",
                        })}
                    </Title>
                    <Carousel>
                        {(groupedEffects["Speckles and RGB effects"] || []).map((item, index) => (
                            <CardEffect
                                isSelected={item.value === selectedEffect}
                                onClick={() => onChangeEffect(item.value)}
                                effect={item}
                                key={index} />
                        ))}
                    </Carousel>
                </Rows>
                {groupedEffects["Speckles and RGB effects"]?.some(item => item.value === selectedEffect) && (
                    <AdjustStrength />
                )}
            </Rows>
        </Rows >
        // </Box>
        //         </Scrollable>
        //     </div>
        // </div>
    );
};
