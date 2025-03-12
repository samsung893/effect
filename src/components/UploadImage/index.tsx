import {
  Button,
  FileInput,
  FormField,
  ImageCard,
  Rows,
  TrashIcon
} from "@canva/app-ui-kit";
import { upload } from "@canva/asset";
import React, { useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { useIntl } from "react-intl";
import AppContext from "src/context/AppProvider";
import { applyEffect } from "src/hooks/effect/genEffect";
import { Area } from "src/interface";
import { getUrlImageSelected } from "src/utils/getUrlImageSelected";
import { resizeBase64Image } from "src/utils/resizeBase64Image";
import { useAddElement } from "utils/use_add_element";
import { useSelection } from "utils/use_selection_hook";
import * as styles from "styles/components.css";

export const UploadImage: React.FC = () => {
  const imageRef = useRef<any>();
  const [imageDimensions, setImageDimensions] = useState<Area>({
    width: 1,
    height: 1
  });
  const [isAddToDesign, setIsAddToDesign] = useState<boolean>(false);
  const [fieldError, setFieldError] = useState<string>();

  const {
    selectedEffect,
    strength,
    previewImage,
    setPreviewImage,
    uploadMethod,
    setUploadMethod,
    originImage,
    setOriginImage,
    resizeImage,
    setResizeImage,
    isUploading,
    setIsUploading,
    setSelectedEffect,
    setStrength
  } = useContext(AppContext);

  const intl = useIntl();
  const currentSelection = useSelection("image");
  const isSelection = currentSelection.count > 0;
  const MAX_SIZE = 20 * 1024 * 1024;

  const thumbnailHeight = useMemo(() => {
    const clientWidth = imageRef.current?.clientWidth || 0;
    const naturalHeight = clientWidth * (imageDimensions.height / imageDimensions.width);
    return Math.min(naturalHeight, 240);
  }, [imageDimensions, imageRef, previewImage]);
  useEffect(() => {
    if (isAddToDesign || uploadMethod === "file") return;

    if (isSelection) {

      setIsUploading?.(true)
      currentSelection.read().then(async (image) => {
        if (!image.contents?.length) return;


        const imageSelectedURL = await getUrlImageSelected(image.contents[0].ref);
        setPreviewImage?.(imageSelectedURL.url)
        const blobImage = await fetchImage(imageSelectedURL.url)
        const fileSize = blobImage.size;

        if (fileSize > MAX_SIZE) {
          setFieldError(
            intl.formatMessage({
              id: "file_too_large",
              defaultMessage: "File size must be under 20MB.",
              description: "Error message when file size exceeds limit",
            })
          );
          return;
        } else {
          setFieldError(undefined);
        }
        const base64 = await convertBlobToBase64(blobImage);

        setOriginImage?.(base64);

        const img = new Image();
        img.onload = async () => {
          if (img.width > 512 || img.height > 512) {
            const resizedBase64 = await resizeBase64Image(base64, 512);
            setPreviewImage?.(resizedBase64);
            setResizeImage?.(resizedBase64)
          } else {
            setPreviewImage?.(base64);
            setResizeImage?.(base64);
          }
        };
        img.src = base64;

      }).finally(() => {
        setIsUploading?.(false)
      });
    } else {
      handleRemoveImage()
    }
  }, [currentSelection, setPreviewImage, setResizeImage, setOriginImage]);

  const addElement = useAddElement();
  const onClickSaveImage = async () => {
    if (!previewImage) return;

    try {
      await upload({
        type: "image",
        mimeType: "image/png",
        url: previewImage,
        thumbnailUrl: previewImage,
        aiDisclosure: "none",
      });
    } catch {

    }
  };
  const fetchImage = async (url: string) => {
    const response = await fetch(url);
    return response.blob();
  }
  const convertBlobToBase64 = async (blob: Blob): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  };
  const convertImageUrlToBase64 = async (url: string): Promise<string> => {
    const response = await fetch(url);
    const blob = await response.blob();

    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  };
  const onClickAddToDesign = async () => {
    setIsAddToDesign(true)
    if (!originImage) return;

    let imageDataUrl = originImage;
    try {
      if (originImage.startsWith("blob:")) {
        const imageData = await currentSelection.read();
        if (!imageData.contents?.length) return;

        const selectedImageRef = imageData.contents[0].ref;
        const imageUrl = await getUrlImageSelected(selectedImageRef);

        imageDataUrl = await convertImageUrlToBase64(imageUrl.url);

        addElement({
          type: "image",
          dataUrl: imageDataUrl,
          altText: undefined,
        });
        return
      }
      if (selectedEffect) {
        imageDataUrl = await applyEffect(originImage, selectedEffect, strength || 1);
      }

      await addElement({
        type: "image",
        dataUrl: imageDataUrl,
        altText: undefined,
      });
    } finally {
      setIsAddToDesign(false)
    }
    // onClickSaveImage();
  };
  const handleFileUpload = useCallback(async (files: File[]) => {
    if (!files?.length) return;
    const [file] = files;
    if (file.size > MAX_SIZE) {
      setFieldError(
        intl.formatMessage({
          id: "file_too_large",
          defaultMessage: "File size must be under 20MB.",
          description: "Error message when file size exceeds limit",
        })
      );
      return;
    } else {
      setFieldError(undefined);
    }
    const reader = new FileReader();
    setIsUploading?.(true);

    reader.onloadend = async () => {
      const base64 = reader.result as string;
      setOriginImage?.(base64);

      const img = new Image();
      img.onload = async () => {
        if (img.width > 512 || img.height > 512) {
          const resizedBase64 = await resizeBase64Image(base64, 512);
          setPreviewImage?.(resizedBase64);
          setResizeImage?.(resizedBase64);
        } else {
          setPreviewImage?.(base64);
          setResizeImage?.(base64);
        }
        setIsUploading?.(false);
      };

      img.src = base64;
    };

    reader.onerror = () => {
      setIsUploading?.(false);
    };

    reader.readAsDataURL(file);
    setUploadMethod?.("file");
  }, [setPreviewImage, setUploadMethod, setOriginImage, setResizeImage]);




  const handleRemoveImage = useCallback(() => {
    setPreviewImage?.(undefined);
    setResizeImage?.(undefined)
    setOriginImage?.(undefined)
    setUploadMethod?.(undefined)
    setSelectedEffect?.('')
    setStrength?.(1)
  }, [setPreviewImage, setUploadMethod]);

  useEffect(() => {
    if (isUploading || !previewImage) return;

    const img = new Image();
    img.onload = function () {
      setImageDimensions({
        width: img.width,
        height: img.height
      });
    };
    img.src = previewImage;

  }, [previewImage, isUploading]);
  useEffect(() => {

    if (isUploading || !previewImage || !selectedEffect || !resizeImage) return;

    const applyEffectAsync = async () => {
      try {
        const newEffectImage = await applyEffect(resizeImage, selectedEffect, strength || 1);

        setPreviewImage?.(newEffectImage);
      } catch (error) {
        console.error("Error applying effect:", error);
      }
    };

    applyEffectAsync();

  }, [resizeImage, selectedEffect, strength, setPreviewImage, isUploading]);

  return (
    <div className={`${styles.stickyHeader} theme`}>
      <Rows spacing="3u">
        {previewImage || isUploading ? (
          <div ref={imageRef} className="theme">
            {previewImage && <ImageCard
              alt="Preview image"
              // borderRadius="standard"
              thumbnailUrl={previewImage}
              loading={isUploading}
              thumbnailHeight={thumbnailHeight}
              thumbnailAspectRatio={(imageDimensions?.width / imageDimensions?.height) || 1}
              thumbnailBackground="secondary"
            />}

          </div>
        ) : (
          <Rows spacing="1u">
            <FormField
              label={intl.formatMessage({
                id: "upload_image",
                defaultMessage: "Upload or select image from design",
                description: "Upload or select image"
              })}
              description={intl.formatMessage({
                id: "upload_image_description",
                defaultMessage: "Maximum file size: 20MB. Accepted file formats: JPEG, JPG, PNG, WEBP.",
                description: "Description about uploading limit"
              })}
              error={fieldError}
              control={() => (
                <FileInput
                  accept={["image/jpeg", "image/png", "image/webp", "image/jpg"]}
                  onDropAcceptedFiles={handleFileUpload}
                  stretchButton
                />
              )}
            />
          </Rows>
        )}

        {(previewImage || isUploading) && (
          <Button
            variant="primary"
            onClick={onClickAddToDesign}
            stretch
            loading={isAddToDesign}
            disabled={isUploading}
          >
            {intl.formatMessage({
              id: "add_to_design",
              defaultMessage: "Add to design",
              description: "Add to design",
            })}
          </Button>
        )}
      </Rows>
    </div>
  );
};
