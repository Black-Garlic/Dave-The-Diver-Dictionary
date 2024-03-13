import { Option } from "@typings/Option.ts";

export enum SEASONING_SOURCE {
  DISPATCH = "파견 & 요리 냄비",
  DJANGO = "장고",
}

export const SEASONING_SOURCE_OPTIONS: Option[] = [
  { label: SEASONING_SOURCE.DISPATCH, value: SEASONING_SOURCE.DISPATCH },
  { label: SEASONING_SOURCE.DJANGO, value: SEASONING_SOURCE.DJANGO },
];
