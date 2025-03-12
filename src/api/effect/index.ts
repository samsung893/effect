import { ApiStyles } from "src/constants/api";
import { request } from "../request";

export const getEffects = async () => {
  return (await request("get", ApiStyles.GET, {})).data;
};
