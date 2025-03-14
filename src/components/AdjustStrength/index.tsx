import { Box, FormField, ImageCard, NumberInput, Rows, Slider, Text } from "@canva/app-ui-kit";
import React, { useContext, useEffect, useState } from "react";
import { IEffectData } from "../ListEffect";
import * as styles from "styles/components.css";
import { useIntl } from "react-intl";
import blurImage from 'assets/images/blurImage.png';
import originImage from 'assets/images/origin.png';
import AppContext from "src/context/AppProvider";
import { applyEffect } from "src/hooks/effect/genEffect";

export const AdjustStrength: React.FC = () => {
    const { formatMessage } = useIntl();
    const {
        selectedEffect,
        previewImage,
        resizeImage,
        originImage,
        setPreviewImage,
        setStrength,
        strength,

    } = useContext(AppContext)
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

    return (
        <FormField
            label={formatMessage({
                id: "effect_strength",
                defaultMessage: "Effect strength",
                description: "Adjust the effect strength",
            })}
            control={(props) => (
                <Box paddingStart="2u">
                    <Slider
                        max={2}
                        defaultValue={1}
                        min={0.1}
                        step={0.1}
                        onChangeComplete={handleChangeStrength}
                    />
                </Box>
            )}
        />
    );
};
