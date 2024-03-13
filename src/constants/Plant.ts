import { Option } from "@typings/Option.ts";

export enum PLANT_SOURCE {
  FARM = "텃밭",
  BLUE_HOLE = "0 ~ 130m",
  BLUE_HOLE_SHALLOWS = "0 ~ 50m",
  BLUE_HOLE_MEDIUM_DEPTH = "50 ~ 130m",
  CAVE = "종유동굴",
  GLACIAL = "빙하 지역",
  GLACIAL_SEAWEED = "빙하 해초 동굴",
  SEAWEED_FARM = "해초 농장",
  OTTO = "오토",
  DJANGO = "장고",
}

export const PLANT_SOURCE_OPTION: Option[] = [
  { label: PLANT_SOURCE.FARM, value: PLANT_SOURCE.FARM },
  { label: PLANT_SOURCE.BLUE_HOLE, value: PLANT_SOURCE.BLUE_HOLE },
  {
    label: PLANT_SOURCE.BLUE_HOLE_SHALLOWS,
    value: PLANT_SOURCE.BLUE_HOLE_SHALLOWS,
  },
  {
    label: PLANT_SOURCE.BLUE_HOLE_MEDIUM_DEPTH,
    value: PLANT_SOURCE.BLUE_HOLE_MEDIUM_DEPTH,
  },
  { label: PLANT_SOURCE.CAVE, value: PLANT_SOURCE.CAVE },
  { label: PLANT_SOURCE.GLACIAL, value: PLANT_SOURCE.GLACIAL },
  { label: PLANT_SOURCE.GLACIAL_SEAWEED, value: PLANT_SOURCE.GLACIAL_SEAWEED },
  { label: PLANT_SOURCE.SEAWEED_FARM, value: PLANT_SOURCE.SEAWEED_FARM },
  { label: PLANT_SOURCE.DJANGO, value: PLANT_SOURCE.DJANGO },
];
