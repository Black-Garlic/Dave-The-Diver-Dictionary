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
