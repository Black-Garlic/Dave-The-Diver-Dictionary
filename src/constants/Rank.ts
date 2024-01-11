import { Option } from "@typings/Option.ts";

export enum RANK {
  ONE = 1,
  TWO = 2,
  THREE = 3,
  FOUR = 4,
  FIVE = 5,
  SIX = 6,
  SEVEN = 7,
  EIGHT = 8,
  NINE = 9,
  MAX = 99,
}

export const RANK_OPTION: Option[] = [
  {
    label: RANK.ONE.toString(),
    value: RANK.ONE.toString(),
  },
  {
    label: RANK.TWO.toString(),
    value: RANK.TWO.toString(),
  },
  {
    label: RANK.THREE.toString(),
    value: RANK.THREE.toString(),
  },
  {
    label: RANK.FOUR.toString(),
    value: RANK.FOUR.toString(),
  },
  {
    label: RANK.FIVE.toString(),
    value: RANK.FIVE.toString(),
  },
  {
    label: RANK.SIX.toString(),
    value: RANK.SIX.toString(),
  },
  {
    label: RANK.SEVEN.toString(),
    value: RANK.SEVEN.toString(),
  },
  {
    label: RANK.EIGHT.toString(),
    value: RANK.EIGHT.toString(),
  },
  {
    label: RANK.NINE.toString(),
    value: RANK.NINE.toString(),
  },
];
