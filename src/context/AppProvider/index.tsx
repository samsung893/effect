import type { ReactNode } from "react";
import React, { createContext, useState } from "react";
import { Effect } from "src/interface/effect";
import { Style } from "src/interface/style";

type TAppContext = {
    selectedImage?: File;
    setSelectedImage?: (file?: File) => void;
    strength?: number;
    uploadMethod?: "file" | "design"
    setUploadMethod?: (method?: "file" | "design") => void;
    setStrength?: (value: number) => void;
    selectedEffect?: string;
    setSelectedEffect?: (value?: string) => void;
    message?: string;
    setMessage?: (message: string) => void;
    effects?: Array<Effect>;
    setEffects?: (value: Array<Effect>) => void;
    styles?: Array<Style>;
    setStyles?: (value: Array<Style>) => void;
    previewImage?: string
    setPreviewImage?: (url?: string) => void;
    originImage?: string
    setOriginImage?: (url?: string) => void;
    resizeImage?: string
    setResizeImage?: (url?: string) => void;
    isUploading?: boolean
    setIsUploading?: (isUpload: boolean) => void;
};

const AppContext = createContext<TAppContext>({});

type AppProviderProps = {
    children: ReactNode;
};

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    const [selectedImage, setSelectedImage] = useState<File>();
    const [previewImage, setPreviewImage] = useState<string>();
    const [originImage, setOriginImage] = useState<string>();
    const [resizeImage, setResizeImage] = useState<string>();
    const [isUploading, setIsUploading] = useState<boolean>(false);

    const [effects, setEffects] = useState<Effect[]>([]);
    const [message, setMessage] = useState<string>();
    const [uploadMethod, setUploadMethod] = useState<"file" | "design">();
    const [selectedEffect, setSelectedEffect] = useState<string>();
    const [strength, setStrength] = useState<number>(1)

    return (
        <AppContext.Provider
            value={{
                isUploading,
                setIsUploading,
                selectedImage,
                setSelectedImage,
                effects,
                setEffects,
                uploadMethod,
                setUploadMethod,
                message,
                setMessage,
                previewImage,
                setPreviewImage,
                strength,
                setStrength,
                selectedEffect,
                setSelectedEffect,
                originImage,
                setOriginImage,
                resizeImage,
                setResizeImage
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export default AppContext;
