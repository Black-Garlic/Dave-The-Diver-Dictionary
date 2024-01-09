import { Option } from "@typings/Option.ts";

export enum RANK {
  ONE = "1",
  TWO = "2",
  THREE = "3",
  FOUR = "4",
  FIVE = "5",
  SIX = "6",
  SEVEN = "7",
  EIGHT = "8",
  NINE = "9",
  MAX = "99",
}

export const RANK_OPTION: Option[] = [
  {
    label: RANK.ONE,
    value: RANK.ONE,
  },
  {
    label: RANK.TWO,
    value: RANK.TWO,
  },
  {
    label: RANK.THREE,
    value: RANK.THREE,
  },
  {
    label: RANK.FOUR,
    value: RANK.FOUR,
  },
  {
    label: RANK.FIVE,
    value: RANK.FIVE,
  },
  {
    label: RANK.SIX,
    value: RANK.SIX,
  },
  {
    label: RANK.SEVEN,
    value: RANK.SEVEN,
  },
  {
    label: RANK.EIGHT,
    value: RANK.EIGHT,
  },
  {
    label: RANK.NINE,
    value: RANK.NINE,
  },
];
