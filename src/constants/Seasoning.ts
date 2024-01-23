import { Seasoning } from "@typings/Seasoning.ts";
import { RANK } from "@constants/Rank.ts";
import { Option } from "@typings/Option.ts";

export enum SEASONING_SOURCE {
  DISPATCH = "파견 & 요리 냄비",
  DJANGO = "장고",
}

export const SEASONING_SOURCE_OPTIONS: Option[] = [
  { label: SEASONING_SOURCE.DISPATCH, value: SEASONING_SOURCE.DISPATCH },
  { label: SEASONING_SOURCE.DJANGO, value: SEASONING_SOURCE.DJANGO },
];

export const SEASONING_LIST: Seasoning[] = [
  {
    id: "Soy_Sauce",
    name: "간장",
    source: SEASONING_SOURCE.DISPATCH,
    rank: RANK.ONE,
  },
  {
    id: "Turmeric",
    name: "강황",
    source: SEASONING_SOURCE.DISPATCH,
    rank: RANK.ONE,
  },
  {
    id: "Mayonnaise",
    name: "마요네즈",
    source: SEASONING_SOURCE.DISPATCH,
    rank: RANK.ONE,
  },
  {
    id: "Miso",
    name: "미소된장",
    source: SEASONING_SOURCE.DISPATCH,
    rank: RANK.ONE,
  },
  {
    id: "Salt",
    name: "소금",
    source: SEASONING_SOURCE.DISPATCH,
    rank: RANK.ONE,
  },
  {
    id: "Olive_Oil",
    name: "올리브오일",
    source: SEASONING_SOURCE.DISPATCH,
    rank: RANK.ONE,
  },
  {
    id: "Sesame_Seed",
    name: "참깨",
    source: SEASONING_SOURCE.DISPATCH,
    rank: RANK.ONE,
  },
  {
    id: "Curry_Block",
    name: "카레블럭",
    source: SEASONING_SOURCE.DISPATCH,
    rank: RANK.ONE,
  },
  {
    id: "Truffle",
    name: "트러플",
    source: SEASONING_SOURCE.DJANGO,
    rank: RANK.ONE,
  },
  {
    id: "Black_Pepper",
    name: "후추",
    source: SEASONING_SOURCE.DISPATCH,
    rank: RANK.ONE,
  },
  {
    id: "Black_Vinegar",
    name: "흑식초",
    source: SEASONING_SOURCE.DISPATCH,
    rank: RANK.ONE,
  },
];
