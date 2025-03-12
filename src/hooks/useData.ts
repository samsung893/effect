import { useState } from "react";
import { useIntl } from "react-intl";
import { getBase64 } from "src/utils";
import { useAddElement } from "utils/use_add_element";

export const useData = () => {
    const { formatMessage } = useIntl()
    const data = {
        "Lines and colors": [
            {
                // "label": formatMessage({
                    // id: "lines_effects",
                    // defaultMessage: "Lines effects",
                    // description: "Effect for lines"
                // }),
                "value": "horizontal_lines"
            },
            {
                // "label": formatMessage({
                    // id: "strong_blue",
                    // defaultMessage: "Strong blue",
                    // description: "Effect strong blue"
                // }),
                "value": "extreme_offset_blue"
            },
            {
                // "label": formatMessage({
                    // id: "ocean_tones",
                    // defaultMessage: "Ocean tones",
                    // description: "Effect ocean tones"
                // }),
                "value": "ocean"
            },
            {
                // "label": formatMessage({
                    // id: "strong_green",
                    // defaultMessage: "Strong green",
                    // description: "Effect strong green"
                // }),
                "value": "extreme_offset_green"
            },
            {
                // "label": formatMessage({
                    // id: "green_offset",
                    // defaultMessage: "Green offset",
                    // description: "Effect green offset"
                // }),
                "value": "offset_green"
            },
            {
                // "label": formatMessage({
                    // id: "extra_blue",
                    // defaultMessage: "Extra blue",
                    // description: "Effect extra blue"
                // }),
                "value": "extra_offset_blue"
            },
            {
                // "label": formatMessage({
                    // id: "extra_red",
                    // defaultMessage: "Extra red",
                    // description: "Effect extra red"
                // }),
                "value": "extra_offset_red"
            },
            {
                // "label": formatMessage({
                    // id: "extra_green",
                    // defaultMessage: "Extra green",
                    // description: "Effect extra green"
                // }),
                "value": "extra_offset_green"
            },
            {
                // "label": formatMessage({
                    // id: "strong_red",
                    // defaultMessage: "Strong red",
                    // description: "Effect strong red"
                // }),
                "value": "extreme_offset_red"
            }
        ],
        "Texture and vintage effects": [
            {
                // "label": formatMessage({
                    // id: "red_specks",
                    // defaultMessage: "Red specks",
                    // description: "Effect with red specks"
                // }),
                "value": "specks_redscale"
            },
            {
                // "label": formatMessage({
                    // id: "vintage_look",
                    // defaultMessage: "Vintage look",
                    // description: "Effect with vintage appearance"
                // }),
                "value": "vintage"
            },
            {
                // "label": formatMessage({
                    // id: "perfumed",
                    // defaultMessage: "Perfumed",
                    // description: "Effect with a soft perfumed look"
                // }),
                "value": "perfume"
            },
            {
                // "label": formatMessage({
                    // id: "serene_tone",
                    // defaultMessage: "Serene tone",
                    // description: "Effect with a calming serene tone"
                // }),
                "value": "serenity"
            },
            {
                // "label": formatMessage({
                    // id: "eclectic",
                    // defaultMessage: "Eclectic",
                    // description: "Effect with an eclectic mix"
                // }),
                "value": "eclectic"
            },
            {
                // "label": formatMessage({
                    // id: "diagonal_lines",
                    // defaultMessage: "Diagonal",
                    // description: "Effect with diagonal lines"
                // }),
                "value": "diagonal_lines"
            },
            {
                // "label": formatMessage({
                    // id: "green_speckled",
                    // defaultMessage: "Green speckled",
                    // description: "Effect with green speckles"
                // }),
                "value": "green_specks"
            },
            {
                // "label": formatMessage({
                    // id: "warm_vibes",
                    // defaultMessage: "Warm vibes",
                    // description: "Effect with a warm color tone"
                // }),
                "value": "warmth"
            },
            {
                // "label": formatMessage({
                    // id: "casino_inspired",
                    // defaultMessage: "Casino inspired",
                    // description: "Effect inspired by casino aesthetics"
                // }),
                "value": "casino"
            }
        ],
        "Geometric and offset effects": [
            {
                // "label": formatMessage({
                    // id: "green_diagonal",
                    // defaultMessage: "Green diagonal",
                    // description: "Effect with green diagonal lines"
                // }),
                "value": "green_diagonal_lines"
            },
            {
                // "label": formatMessage({
                    // id: "basic_offset",
                    // defaultMessage: "Basic offset",
                    // description: "Basic offset effect"
                // }),
                "value": "offset"
            },
            {
                // "label": formatMessage({
                    // id: "blue_offset",
                    // defaultMessage: "Blue offset",
                    // description: "Effect with blue color offset"
                // }),
                "value": "offset_blue"
            },
            {
                // "label": formatMessage({
                    // id: "neue_style",
                    // defaultMessage: "Neue style",
                    // description: "Modern neue style effect"
                // }),
                "value": "neue"
            },
            {
                // "label": formatMessage({
                    // id: "sunset_effect",
                    // defaultMessage: "Sunset effect",
                    // description: "Effect inspired by sunset colors"
                // }),
                "value": "sunset"
            },
            {
                // "label": formatMessage({
                    // id: "speckled_effect",
                    // defaultMessage: "Speckled effect",
                    // description: "Effect with speckled texture"
                // }),
                "value": "specks"
            },
            {
                // "label": formatMessage({
                    // id: "wooden_texture",
                    // defaultMessage: "Wooden texture",
                    // description: "Effect resembling wood texture"
                // }),
                "value": "wood"
            },
            {
                // "label": formatMessage({
                    // id: "lix_style",
                    // defaultMessage: "Lix style",
                    // description: "Effect with Lix aesthetic"
                // }),
                "value": "lix"
            },
            {
                // "label": formatMessage({
                    // id: "ryo_aesthetic",
                    // defaultMessage: "Ryo aesthetic",
                    // description: "Effect inspired by Ryo aesthetics"
                // }),
                "value": "ryo"
            }
        ],
        "Blues and speckled effects": [
            {
                // "label": formatMessage({
                    // id: "blue_tones",
                    // defaultMessage: "Blue tones",
                    // description: "Effect with blue tones"
                // }),
                "value": "bluescale"
            },
            {
                // "label": formatMessage({
                    // id: "solange_inspired",
                    // defaultMessage: "Solange inspired",
                    // description: "Effect inspired by Solange's aesthetics"
                // }),
                "value": "solange"
            },
            {
                // "label": formatMessage({
                    // id: "evening_glow",
                    // defaultMessage: "Evening glow",
                    // description: "Effect with a warm evening glow"
                // }),
                "value": "evening"
            },
            {
                // "label": formatMessage({
                    // id: "crimson_shade",
                    // defaultMessage: "Crimson shade",
                    // description: "Effect with deep crimson colors"
                // }),
                "value": "crimson"
            },
            {
                // "label": formatMessage({
                    // id: "teal_noise",
                    // defaultMessage: "Teal noise",
                    // description: "Effect with teal-colored noise"
                // }),
                "value": "teal_min_noise"
            },
            {
                // "label": formatMessage({
                    // id: "phase_effect",
                    // defaultMessage: "Phase effect",
                    // description: "Effect with phase shifting colors"
                // }),
                "value": "phase"
            },
            {
                // "label": formatMessage({
                    // id: "dark_purple_noise",
                    // defaultMessage: "Dark purple",
                    // description: "Effect with dark purple noise"
                // }),
                "value": "dark_purple_min_noise"
            },
            {
                // "label": formatMessage({
                    // id: "coral_tone",
                    // defaultMessage: "Coral tone",
                    // description: "Effect with soft coral hues"
                // }),
                "value": "coral"
            },
            {
                // "label": formatMessage({
                    // id: "darkened_look",
                    // defaultMessage: "Darkened look",
                    // description: "Effect with a moody darkened appearance"
                // }),
                "value": "darkify"
            }
        ],
        "Brightness and color adjustments": [
            {
                // "label": formatMessage({
                    // id: "increase_brightness",
                    // defaultMessage: "Increase brightness",
                    // description: "Effect that increases brightness"
                // }),
                "value": "incbrightness"
            },
            {
                // "label": formatMessage({
                    // id: "brightness_boost",
                    // defaultMessage: "Brightness boost",
                    // description: "Effect that significantly boosts brightness"
                // }),
                "value": "incbrightness2"
            },
            {
                // "label": formatMessage({
                    // id: "yellow_casino",
                    // defaultMessage: "Yellow casino",
                    // description: "Effect with yellow-toned casino theme"
                // }),
                "value": "yellow_casino"
            },
            {
                // "label": formatMessage({
                    // id: "inverted_colors",
                    // defaultMessage: "Inverted colors",
                    // description: "Effect that inverts all colors"
                // }),
                "value": "invert"
            },
            {
                // "label": formatMessage({
                    // id: "saturation",
                    // defaultMessage: "Saturation",
                    // description: "Effect that adjusts color saturation"
                // }),
                "value": "sat_adj"
            },
            {
                // "label": formatMessage({
                    // id: "lemon_shade",
                    // defaultMessage: "Lemon shade",
                    // description: "Effect with a yellowish lemon tone"
                // }),
                "value": "lemon"
            },
            {
                // "label": formatMessage({
                    // id: "pink_noise",
                    // defaultMessage: "Pink noise",
                    // description: "Effect with a pink noise texture"
                // }),
                "value": "pink_min_noise"
            },
            {
                // "label": formatMessage({
                    // id: "frontward_motion",
                    // defaultMessage: "Frontward motion",
                    // description: "Effect that simulates forward movement"
                // }),
                "value": "frontward"
            },
            {
                // "label": formatMessage({
                    // id: "pink_aura",
                    // defaultMessage: "Pink aura",
                    // description: "Effect with a soft pink aura"
                // }),
                "value": "pink_aura"
            }
        ],
        "Mood and solange": [
            {
                // "label": formatMessage({
                    // "id": "hazy_effect",
                    // "defaultMessage": "Hazy effect",
                    // "description": "Effect with a hazy, soft look"
                // }),
                "value": "haze"
            },
            {
                // "label": formatMessage({
                    // "id": "twilight_coolness",
                    // "defaultMessage": "Twilight coolness",
                    // "description": "Effect with a cool twilight feel"
                // }),
                "value": "cool_twilight"
            },
            {
                // "label": formatMessage({
                    // "id": "blues_tone",
                    // "defaultMessage": "Blues tone",
                    // "description": "Effect with blue-toned mood"
                // }),
                "value": "blues"
            },
            {
                // "label": formatMessage({
                    // "id": "horizon_line",
                    // "defaultMessage": "Horizon line",
                    // "description": "Effect inspired by horizon visuals"
                // }),
                "value": "horizon"
            },
            {
                // "label": formatMessage({
                    // "id": "mellow_vibes",
                    // "defaultMessage": "Mellow vibes",
                    // "description": "Effect that gives off mellow, relaxing vibes"
                // }),
                "value": "mellow"
            },
            {
                // "label": formatMessage({
                    // "id": "solange_dark",
                    // "defaultMessage": "Solange dark",
                    // "description": "Effect inspired by Solange with dark tones"
                // }),
                "value": "solange_dark"
            },
            {
                // "label": formatMessage({
                    // "id": "solange_grey",
                    // "defaultMessage": "Solange grey",
                    // "description": "Effect inspired by Solange with grey tones"
                // }),
                "value": "solange_grey"
            },
            {
                // "label": formatMessage({
                    // "id": "zapt_effect",
                    // "defaultMessage": "Zapt effect",
                    // "description": "Effect named Zapt with a unique aesthetic"
                // }),
                "value": "zapt"
            },
            {
                // "label": formatMessage({
                    // "id": "eon_aesthetic",
                    // "defaultMessage": "Eon aesthetic",
                    // "description": "Effect with an Eon-inspired aesthetic"
                // }),
                "value": "eon"
            }
        ],
        "Matrix and noise effects": [
            {
                // "label": formatMessage({
                    // "id": "aeon_effect",
                    // "defaultMessage": "Aeon effect",
                    // "description": "Effect inspired by Aeon aesthetic"
                // }),
                "value": "aeon"
            },
            {
                // "label": formatMessage({
                    // "id": "matrix_look",
                    // "defaultMessage": "Matrix look",
                    // "description": "Effect with a digital Matrix-inspired look"
                // }),
                "value": "matrix"
            },
            {
                // "label": formatMessage({
                    // "id": "cosmic_vibes",
                    // "defaultMessage": "Cosmic vibes",
                    // "description": "Effect with a cosmic, space-like aesthetic"
                // }),
                "value": "cosmic"
            },
            {
                // "label": formatMessage({
                    // "id": "minimal_noise",
                    // "defaultMessage": "Minimal noise",
                    // "description": "Effect with minimal noise texture"
                // }),
                "value": "min_noise"
            },
            {
                // "label": formatMessage({
                    // "id": "red_noise",
                    // "defaultMessage": "Red noise",
                    // "description": "Effect with red-toned noise texture"
                // }),
                "value": "red_min_noise"
            },
            {
                // "label": formatMessage({
                    // "id": "matrix_style",
                    // "defaultMessage": "Matrix style",
                    // "description": "Another variation of the Matrix-inspired effect"
                // }),
                "value": "matrix2"
            },
            {
                // "label": formatMessage({
                    // "id": "purplescale_effect",
                    // "defaultMessage": "Purplescale effect",
                    // "description": "Effect with purple color grading"
                // }),
                "value": "purplescale"
            },
            {
                // "label": formatMessage({
                    // "id": "radio_aesthetic",
                    // "defaultMessage": "Radio aesthetic",
                    // "description": "Effect inspired by vintage radio visuals"
                // }),
                "value": "radio"
            },
            {
                // "label": formatMessage({
                    // "id": "twenties_style",
                    // "defaultMessage": "Twenties style",
                    // "description": "Effect with a 1920s-inspired aesthetic"
                // }),
                "value": "twenties"
            }
        ],
        "Pixel and grayscale effects": [
            {
                // "label": formatMessage({
                    // "id": "pixel_blue",
                    // "defaultMessage": "Pixelated blue",
                    // "description": "Effect with a pixelated blue appearance"
                // }),
                "value": "pixel_blue"
            },
            {
                // "label": formatMessage({
                    // "id": "greyscale_effect",
                    // "defaultMessage": "Grayscale effect",
                    // "description": "Effect converting image to grayscale"
                // }),
                "value": "greyscale"
            },
            {
                // "label": formatMessage({
                    // "id": "grime_look",
                    // "defaultMessage": "Grime look",
                    // "description": "Effect with a dirty, gritty aesthetic"
                // }),
                "value": "grime"
            },
            {
                // "label": formatMessage({
                    // "id": "red_greyscale",
                    // "defaultMessage": "Red greyscale",
                    // "description": "Grayscale effect with a red tint"
                // }),
                "value": "redgreyscale"
            },
            {
                // "label": formatMessage({
                    // "id": "green_greyscale",
                    // "defaultMessage": "Green greyscale",
                    // "description": "Grayscale effect with a green tint"
                // }),
                "value": "greengreyscale"
            },
            {
                // "label": formatMessage({
                    // "id": "green_medium_noise",
                    // "defaultMessage": "Green medium",
                    // "description": "Effect with medium green noise"
                // }),
                "value": "green_med_noise"
            },
            {
                // "label": formatMessage({
                    // "id": "green_min_noise",
                    // "defaultMessage": "Green min noise",
                    // "description": "Effect with minimal green noise"
                // }),
                "value": "green_min_noise"
            },
            {
                // "label": formatMessage({
                    // "id": "blue_min_noise",
                    // "defaultMessage": "Blue min noise",
                    // "description": "Effect with minimal blue noise"
                // }),
                "value": "blue_min_noise"
            },
            {
                // "label": formatMessage({
                    // "id": "rosetint_effect",
                    // "defaultMessage": "Rosetint effect",
                    // "description": "Effect with a soft rose tint"
                // }),
                "value": "rosetint"
            }
        ],
        "Purple and red effects": [
            {
                // "label": formatMessage({
                    // "id": "purple_noise",
                    // "defaultMessage": "Purple noise",
                    // "description": "Effect with minimal purple noise"
                // }),
                "value": "purple_min_noise"
            },
            {
                // "label": formatMessage({
                    // "id": "red_tone_effect",
                    // "defaultMessage": "Red tone effect",
                    // "description": "Effect that enhances red tones"
                // }),
                "value": "red_effect"
            },
            {
                // "label": formatMessage({
                    // "id": "gamma_effect",
                    // "defaultMessage": "Gamma effect",
                    // "description": "Effect that adjusts gamma levels"
                // }),
                "value": "gamma"
            },
            {
                // "label": formatMessage({
                    // "id": "teal_gamma",
                    // "defaultMessage": "Teal gamma",
                    // "description": "Gamma effect with teal tones"
                // }),
                "value": "teal_gamma"
            },
            {
                // "label": formatMessage({
                    // "id": "purple_gamma",
                    // "defaultMessage": "Purple gamma",
                    // "description": "Gamma effect with purple tones"
                // }),
                "value": "purple_gamma"
            },
            {
                // "label": formatMessage({
                    // "id": "bluered_gamma",
                    // "defaultMessage": "Blue-red gamma",
                    // "description": "Gamma effect with blue and red tones"
                // }),
                "value": "bluered_gamma"
            },
            {
                // "label": formatMessage({
                    // "id": "green_gamma",
                    // "defaultMessage": "Green gamma",
                    // "description": "Gamma effect with green tones"
                // }),
                "value": "green_gamma"
            },
            {
                // "label": formatMessage({
                    // "id": "red_gamma",
                    // "defaultMessage": "Red gamma",
                    // "description": "Gamma effect with red tones"
                // }),
                "value": "red_gamma"
            }
        ],
        "Speckles and RGB effects": [
            {
                // "label": formatMessage({
                    // "id": "black_speckles",
                    // "defaultMessage": "Black speckles",
                    // "description": "Effect with black speckles"
                // }),
                "value": "black_specks"
            },
            {
                // "label": formatMessage({
                    // "id": "white_speckles",
                    // "defaultMessage": "White speckles",
                    // "description": "Effect with white speckles"
                // }),
                "value": "white_specks"
            },
            {
                // "label": formatMessage({
                    // "id": "salt_and_pepper",
                    // "defaultMessage": "Salt and pepper",
                    // "description": "Effect with salt-and-pepper noise"
                // }),
                "value": "salt_and_pepper"
            },
            {
                // "label": formatMessage({
                    // "id": "rgb_split",
                    // "defaultMessage": "RGB split",
                    // "description": "Effect with RGB channel separation"
                // }),
                "value": "rgbSplit"
            },
            {
                // "label": formatMessage({
                    // "id": "threshold_effect",
                    // "defaultMessage": "Threshold effect",
                    // "description": "Basic threshold effect"
                // }),
                "value": "threshold"
            },
            {
                // "label": formatMessage({
                    // "id": "threshold_75",
                    // "defaultMessage": "Threshold 75%",
                    // "description": "Threshold effect set to 75%"
                // }),
                "value": "threshold75"
            },
            {
                // "label": formatMessage({
                    // "id": "threshold_125",
                    // "defaultMessage": "Threshold 125%",
                    // "description": "Threshold effect set to 125%"
                // }),
                "value": "threshold125"
            },
            {
                // "label": formatMessage({
                    // "id": "pixelation",
                    // "defaultMessage": "Pixelation",
                    // "description": "Effect that applies pixelation"
                // }),
                "value": "pixelate16"
            }
        ]

    } as any

    return data;
};