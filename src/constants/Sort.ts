import { Option } from "@typings/Option.ts";

export enum SORT_DIRECTION {
  ASC = "ASC",
  DESC = "DESC",
}

export enum FISH_SORT {
  RANK = "RANK",
  NAME = "NAME",
}

export const FISH_SORT_OPTION: Option[] = [
  { label: "랭크 오름차순", value: `${FISH_SORT.RANK}-${SORT_DIRECTION.ASC}` },
  { label: "랭크 내림차순", value: `${FISH_SORT.RANK}-${SORT_DIRECTION.DESC}` },
  { label: "이름 오름차순", value: `${FISH_SORT.NAME}-${SORT_DIRECTION.ASC}` },
  { label: "이름 내림차순", value: `${FISH_SORT.NAME}-${SORT_DIRECTION.DESC}` },
];

export enum DISH_SORT {
  NAME = "NAME",
  COST = "PRICE",
  SCORE = "SCORE",
  COUNT = "COUNT",
}

export const DISH_SORT_OPTION: Option[] = [
  { label: "이름 오름차순", value: `${DISH_SORT.NAME}-${SORT_DIRECTION.ASC}` },
  { label: "이름 내림차순", value: `${DISH_SORT.NAME}-${SORT_DIRECTION.DESC}` },
  { label: "가격 오름차순", value: `${DISH_SORT.COST}-${SORT_DIRECTION.ASC}` },
  { label: "가격 내림차순", value: `${DISH_SORT.COST}-${SORT_DIRECTION.DESC}` },
  {
    label: "맛점수 오름차순",
    value: `${DISH_SORT.SCORE}-${SORT_DIRECTION.ASC}`,
  },
  {
    label: "맛점수 내림차순",
    value: `${DISH_SORT.SCORE}-${SORT_DIRECTION.DESC}`,
  },
  { label: "접시 오름차순", value: `${DISH_SORT.COUNT}-${SORT_DIRECTION.ASC}` },
  {
    label: "접시 내림차순",
    value: `${DISH_SORT.COUNT}-${SORT_DIRECTION.DESC}`,
  },
];
