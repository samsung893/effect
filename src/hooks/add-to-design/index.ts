import { useState } from "react";
import { getBase64 } from "src/utils";
import { useAddElement } from "utils/use_add_element";

export const useAddImageToDesign = () => {
    const addElement = useAddElement();

    const [addImageElement] = useState(() => {
        return (data: string | null) => {
            if (!data) return;

            addElement({
                type: "image",
                dataUrl: getBase64(data),
                altText: undefined,
            })?.catch((error) => {
            });
        };
    });

    return addImageElement;
};