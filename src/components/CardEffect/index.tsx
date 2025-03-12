import { Box, ImageCard, Rows, Text } from "@canva/app-ui-kit";
import React, { useEffect, useState } from "react";
import { IEffectData } from "../ListEffect";
import * as styles from "styles/components.css";
import { useIntl } from "react-intl";
import blurImage from 'assets/images/blurImage.png';
import originImage from 'assets/images/origin.png';


interface CardEffectProps {
    effect?: IEffectData;
    onClick?: () => void;
    isSelected?: boolean;
    aspectRatio?: boolean;
    isNoneType?: boolean;
}

export const CardEffect: React.FC<CardEffectProps> = ({ effect, onClick, isNoneType, isSelected, aspectRatio }) => {
    const { formatMessage } = useIntl();
    const [imageLoaded, setImageLoaded] = useState(false);

    const imageUrl = effect?.image
        ? `https://cdnfile.mojo.vn/effects-image/${effect.image}`
        : blurImage;

    useEffect(() => {
        setImageLoaded(false);
        const img = new Image();
        img.src = imageUrl;
        img.onload = () => setImageLoaded(true);
    }, [imageUrl]);

    return (
        <Box className={styles.cursorPointer}>
            <Rows spacing="0.5u">
                    <ImageCard
                        onClick={onClick}
                        borderRadius="standard"
                        alt={formatMessage({
                            id: "alt_image_effect",
                            defaultMessage: "Image effect",
                            description: "Alt image"
                        })}
                        selectable
                        selected={isSelected}
                        thumbnailHeight={128}
                        thumbnailUrl={imageLoaded ? isNoneType ? originImage : imageUrl : blurImage}
                        loading={!imageLoaded}
                    />
                {/* <Text size="xsmall" alignment="center">
                    {effect?.label}
                </Text> */}
            </Rows>
        </Box>
    );
};
