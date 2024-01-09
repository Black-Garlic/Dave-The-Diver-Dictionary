import { Ingredient } from "@typings/Ingredient.ts";

export enum SOURCE {
  FARM = "텃밭",
  BLUE_HOLE = "0 ~ 130m",
  BLUE_HOLE_SHALLOWS = "0 ~ 50m",
  BLUE_HOLE_MEDIUM_DEPTH = "50 ~ 130m",
  CAVE = "종유동굴",
  GLACIAL = "빙하 지역",
  GLACIAL_SEAWEED = "빙하 해초 동굴",
}

export const INGREDIENTS_LIST: Ingredient[] = [
  {
    id: "",
    name: "1등급란",
    source: SOURCE.FARM,
    dishList: [{ id: "", name: "" }],
  },
  {
    id: "",
    name: "가지",
    source: SOURCE.FARM,
    dishList: [{ id: "", name: "" }],
  },
  {
    id: "",
    name: "감태",
    source: SOURCE.BLUE_HOLE,
    dishList: [{ id: "", name: "" }],
  },
  {
    id: "",
    name: "검은산호",
    source: SOURCE.GLACIAL,
    dishList: [{ id: "", name: "" }],
  },
  {
    id: "",
    name: "계란",
    source: SOURCE.FARM,
    dishList: [{ id: "", name: "" }],
  },
  {
    id: "",
    name: "남부황소다시마",
    source: SOURCE.GLACIAL,
    dishList: [{ id: "", name: "" }],
  },
  {
    id: "",
    name: "다시마",
    source: SOURCE.BLUE_HOLE_MEDIUM_DEPTH,
    dishList: [{ id: "", name: "" }],
  },
  {
    id: "",
    name: "당근",
    source: SOURCE.FARM,
    dishList: [{ id: "", name: "" }],
  },
  {
    id: "",
    name: "마늘",
    source: SOURCE.FARM,
    dishList: [{ id: "", name: "" }],
  },
  {
    id: "",
    name: "미역",
    source: SOURCE.BLUE_HOLE_MEDIUM_DEPTH,
    dishList: [{ id: "", name: "" }],
  },
  {
    id: "",
    name: "밀",
    source: SOURCE.FARM,
    dishList: [{ id: "", name: "" }],
  },
  {
    id: "",
    name: "바다조름",
    source: SOURCE.GLACIAL,
    dishList: [{ id: "", name: "" }],
  },
  {
    id: "",
    name: "바다포도",
    source: SOURCE.CAVE,
    dishList: [{ id: "", name: "" }],
  },
  {
    id: "",
    name: "방울토마토",
    source: SOURCE.FARM,
    dishList: [{ id: "", name: "" }],
  },
  {
    id: "",
    name: "백미",
    source: SOURCE.FARM,
    dishList: [{ id: "", name: "" }],
  },
  {
    id: "",
    name: "블래더랙",
    source: SOURCE.GLACIAL_SEAWEED,
    dishList: [{ id: "", name: "" }],
  },
  {
    id: "",
    name: "양파",
    source: SOURCE.FARM,
    dishList: [{ id: "", name: "" }],
  },
  {
    id: "",
    name: "오이",
    source: SOURCE.FARM,
    dishList: [{ id: "", name: "" }],
  },
  {
    id: "",
    name: "우뭇가사리",
    source: SOURCE.BLUE_HOLE_SHALLOWS,
    dishList: [{ id: "", name: "" }],
  },
  {
    id: "",
    name: "콩",
    source: SOURCE.FARM,
    dishList: [{ id: "", name: "" }],
  },
  {
    id: "",
    name: "하바네로",
    source: SOURCE.FARM,
    dishList: [{ id: "", name: "" }],
  },
  {
    id: "",
    name: "히알로네마",
    source: SOURCE.GLACIAL_SEAWEED,
    dishList: [{ id: "", name: "" }],
  },
];
