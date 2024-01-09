import { Seasoning } from "@typings/Seasoning.ts";
import { RANK } from "@constants/Rank.ts";

export enum SEASONING_SOURCE {
  DISPATCH = "파견 & 요리 냄비",
  DJANGO = "장고",
}

export const SEASONING_LIST: Seasoning[] = [
  {
    id: "",
    name: "간장",
    source: SEASONING_SOURCE.DISPATCH,
    rank: RANK.ONE,
    dishList: [{ id: "", name: "" }],
  },
  {
    id: "",
    name: "강황",
    source: SEASONING_SOURCE.DISPATCH,
    rank: RANK.ONE,
    dishList: [{ id: "", name: "" }],
  },
  {
    id: "",
    name: "마요네즈",
    source: SEASONING_SOURCE.DISPATCH,
    rank: RANK.ONE,
    dishList: [{ id: "", name: "" }],
  },
  {
    id: "",
    name: "미소된장",
    source: SEASONING_SOURCE.DISPATCH,
    rank: RANK.ONE,
    dishList: [{ id: "", name: "" }],
  },
  {
    id: "",
    name: "소금",
    source: SEASONING_SOURCE.DISPATCH,
    rank: RANK.ONE,
    dishList: [{ id: "", name: "" }],
  },
  {
    id: "",
    name: "올리브오일",
    source: SEASONING_SOURCE.DISPATCH,
    rank: RANK.ONE,
    dishList: [{ id: "", name: "" }],
  },
  {
    id: "",
    name: "참깨",
    source: SEASONING_SOURCE.DISPATCH,
    rank: RANK.ONE,
    dishList: [{ id: "", name: "" }],
  },
  {
    id: "",
    name: "카레블럭",
    source: SEASONING_SOURCE.DISPATCH,
    rank: RANK.ONE,
    dishList: [{ id: "", name: "" }],
  },
  {
    id: "",
    name: "트러플",
    source: SEASONING_SOURCE.DJANGO,
    rank: RANK.ONE,
    dishList: [{ id: "", name: "" }],
  },
  {
    id: "",
    name: "후추",
    source: SEASONING_SOURCE.DISPATCH,
    rank: RANK.ONE,
    dishList: [{ id: "", name: "" }],
  },
  {
    id: "",
    name: "흑식초",
    source: SEASONING_SOURCE.DISPATCH,
    rank: RANK.ONE,
    dishList: [{ id: "", name: "" }],
  },
];
