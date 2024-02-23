import { REGION } from "@constants/Region.ts";
import { COLOR } from "@constants/Color.ts";

export const getRegionColor = (region?: string): string => {
  if (region === REGION.BLUE_HOLE_SHALLOWS) {
    return COLOR.CYAN;
  }

  if (region === REGION.BLUE_HOLE_MEDIUM_DEPTH) {
    return COLOR.BLUE;
  }

  if (region === REGION.BLUE_HOLE_DEPTH) {
    return COLOR.GEEK_BLUE;
  }

  if (region === REGION.GLACIER_PASSAGE) {
    return COLOR.DIM_GREY;
  }

  if (region === REGION.GLACIER_ZONE) {
    return COLOR.DEEP_SKY_BLUE;
  }

  if (region === REGION.HYDROTHERMAL_VENTS) {
    return COLOR.VOLCANO;
  }

  if (region === REGION.ETC) {
    return COLOR.BLACK;
  }

  return COLOR.NONE;
};
