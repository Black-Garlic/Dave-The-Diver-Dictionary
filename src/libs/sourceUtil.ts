import { PLANT_SOURCE } from "@constants/Plant.ts";

export const getSourceColor = (region: string): string => {
  if (region === PLANT_SOURCE.FARM) {
    return "DarkGoldenRod";
  }

  if (region === PLANT_SOURCE.BLUE_HOLE) {
    return "geekblue";
  }

  if (region === PLANT_SOURCE.BLUE_HOLE_SHALLOWS) {
    return "cyan";
  }

  if (region === PLANT_SOURCE.BLUE_HOLE_MEDIUM_DEPTH) {
    return "blue";
  }

  if (region === PLANT_SOURCE.CAVE) {
    return "dimgrey";
  }

  if (region === PLANT_SOURCE.GLACIAL) {
    return "deepskyblue";
  }

  if (region === PLANT_SOURCE.GLACIAL_SEAWEED) {
    return "DodgerBlue";
  }

  return "";
};
