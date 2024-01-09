import { REGION } from "@constants/Region.ts";

export const getRegionColor = (region: string): string => {
  if (region === REGION.BLUE_HOLE_SHALLOWS) {
    return "cyan";
  }

  if (region === REGION.BLUE_HOLE_MEDIUM_DEPTH) {
    return "blue";
  }

  if (region === REGION.BLUE_HOLE_DEPTH) {
    return "geekblue";
  }

  if (region === REGION.GLACIER_PASSAGE) {
    return "dimgrey";
  }

  if (region === REGION.GLACIER_ZONE) {
    return "deepskyblue";
  }

  if (region === REGION.HYDROTHERMAL_VENTS) {
    return "volcano";
  }

  if (region === REGION.ETC) {
    return "black";
  }

  return "";
};
