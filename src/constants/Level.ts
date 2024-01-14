import { Option } from "@typings/Option.ts";

export enum LEVEL {
  ONE = 1,
  TWO = 2,
  THREE = 3,
  FOUR = 4,
  FIVE = 5,
  SIX = 6,
  SEVEN = 7,
  EIGHT = 8,
  NINE = 9,
  TEN = 10,
}

export const LEVEL_LABEL: string[] = [
  "Level 1",
  "Level 2",
  "Level 3",
  "Level 4",
  "Level 5",
  "Level 6",
  "Level 7",
  "Level 8",
  "Level 9",
  "Level Max",
];

export const LEVEL_OPTION: Option[] = [
  { label: LEVEL_LABEL[0], value: String(LEVEL.ONE) },
  { label: LEVEL_LABEL[1], value: String(LEVEL.TWO) },
  { label: LEVEL_LABEL[2], value: String(LEVEL.THREE) },
  { label: LEVEL_LABEL[3], value: String(LEVEL.FOUR) },
  { label: LEVEL_LABEL[4], value: String(LEVEL.FIVE) },
  { label: LEVEL_LABEL[5], value: String(LEVEL.SIX) },
  { label: LEVEL_LABEL[6], value: String(LEVEL.SEVEN) },
  { label: LEVEL_LABEL[7], value: String(LEVEL.EIGHT) },
  { label: LEVEL_LABEL[8], value: String(LEVEL.NINE) },
  { label: LEVEL_LABEL[9], value: String(LEVEL.TEN) },
];
