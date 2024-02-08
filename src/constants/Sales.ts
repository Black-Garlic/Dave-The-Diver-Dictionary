import { SalesCount } from "@typings/Sales.ts";
import { Option } from "@typings/Option.ts";

export enum COOK_STAR {
  NONE = "NONE",
  BRONZE = "BRONZE",
  SILVER = "SILVER",
  GOLD = "GOLD",
  PLATINUM = "PLATINUM",
  DIA = "DIA",
}

export const SALES_MAX_COUNT: SalesCount = {
  NONE: 10,
  BRONZE: 14,
  SILVER: 20,
  GOLD: 28,
  PLATINUM: 36,
  DIA: 45,
};

export const SALES_NIGHT_MAX_COUNT: SalesCount = {
  GOLD: 19,
  PLATINUM: 25,
  DIA: 27,
};

export const SALES_OPTIONS: Option[] = [
  { label: "기본", value: String(SALES_MAX_COUNT[COOK_STAR.NONE]) },
  { label: "브론즈", value: String(SALES_MAX_COUNT[COOK_STAR.BRONZE]) },
  { label: "실버", value: String(SALES_MAX_COUNT[COOK_STAR.SILVER]) },
  { label: "골드", value: String(SALES_MAX_COUNT[COOK_STAR.GOLD]) },
  { label: "골드(야간)", value: String(SALES_NIGHT_MAX_COUNT[COOK_STAR.GOLD]) },
  { label: "플래티넘", value: String(SALES_MAX_COUNT[COOK_STAR.PLATINUM]) },
  {
    label: "플래티넘(야간)",
    value: String(SALES_NIGHT_MAX_COUNT[COOK_STAR.PLATINUM]),
  },
  { label: "다이아", value: String(SALES_MAX_COUNT[COOK_STAR.DIA]) },
  {
    label: "다이아(야간)",
    value: String(SALES_NIGHT_MAX_COUNT[COOK_STAR.DIA]),
  },
];
