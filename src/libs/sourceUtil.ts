import { PLANT_SOURCE } from "@constants/Plant.ts";
import { COLOR } from "@constants/Color.ts";
import { SEASONING_SOURCE } from "@constants/Seasoning.ts";

export const getSourceColor = (region: string): string => {
  if (region === PLANT_SOURCE.FARM) {
    return COLOR.DARK_GOLDEN_ROD;
  }

  if (region === PLANT_SOURCE.BLUE_HOLE) {
    return COLOR.GEEK_BLUE;
  }

  if (region === PLANT_SOURCE.BLUE_HOLE_SHALLOWS) {
    return COLOR.CYAN;
  }

  if (region === PLANT_SOURCE.BLUE_HOLE_MEDIUM_DEPTH) {
    return COLOR.BLUE;
  }

  if (region === PLANT_SOURCE.CAVE) {
    return COLOR.DIM_GREY;
  }

  if (region === PLANT_SOURCE.GLACIAL) {
    return COLOR.DEEP_SKY_BLUE;
  }

  if (region === PLANT_SOURCE.GLACIAL_SEAWEED) {
    return COLOR.DODGER_BLUE;
  }

  if (region === PLANT_SOURCE.SEAWEED_FARM) {
    return COLOR.FOREST_GREEN;
  }

  if (region === SEASONING_SOURCE.DISPATCH) {
    return COLOR.DARK_BLUE;
  }

  if (region === SEASONING_SOURCE.DJANGO) {
    return COLOR.BLACK;
  }

  return COLOR.NONE;
};
