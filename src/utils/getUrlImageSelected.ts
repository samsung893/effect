import { getTemporaryUrl } from "@canva/asset";
export const getUrlImageSelected = async (assetId) => {
  const response = await getTemporaryUrl({
    type: 'image',
    ref: assetId,
  }).catch((error) => {
    throw new Error("Failed to get temporary url");
  });
  return response;
};

