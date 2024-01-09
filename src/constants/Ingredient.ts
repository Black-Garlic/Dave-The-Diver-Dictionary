import { Ingredient } from "@typings/Ingredient.ts";
import { RANK } from "@constants/Rank.ts";

export enum INGREDIENT_SOURCE {
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
    source: INGREDIENT_SOURCE.FARM,
    rank: RANK.FOUR,
    dishList: [{ id: "", name: "" }],
  },
  {
    id: "",
    name: "가지",
    source: INGREDIENT_SOURCE.FARM,
    rank: RANK.FOUR,
    dishList: [{ id: "", name: "" }],
  },
  {
    id: "",
    name: "감태",
    source: INGREDIENT_SOURCE.BLUE_HOLE,
    rank: RANK.TWO,
    dishList: [{ id: "", name: "" }],
  },
  {
    id: "",
    name: "검은산호",
    source: INGREDIENT_SOURCE.GLACIAL,
    rank: RANK.TWO,
    dishList: [{ id: "", name: "" }],
  },
  {
    id: "",
    name: "계란",
    source: INGREDIENT_SOURCE.FARM,
    rank: RANK.FOUR,
    dishList: [{ id: "", name: "" }],
  },
  {
    id: "",
    name: "남부황소다시마",
    source: INGREDIENT_SOURCE.GLACIAL,
    rank: RANK.TWO,
    dishList: [{ id: "", name: "" }],
  },
  {
    id: "",
    name: "다시마",
    source: INGREDIENT_SOURCE.BLUE_HOLE_MEDIUM_DEPTH,
    rank: RANK.TWO,
    dishList: [{ id: "", name: "" }],
  },
  {
    id: "",
    name: "당근",
    source: INGREDIENT_SOURCE.FARM,
    rank: RANK.FOUR,
    dishList: [{ id: "", name: "" }],
  },
  {
    id: "",
    name: "마늘",
    source: INGREDIENT_SOURCE.FARM,
    rank: RANK.FOUR,
    dishList: [{ id: "", name: "" }],
  },
  {
    id: "",
    name: "미역",
    source: INGREDIENT_SOURCE.BLUE_HOLE_MEDIUM_DEPTH,
    rank: RANK.TWO,
    dishList: [{ id: "", name: "" }],
  },
  {
    id: "",
    name: "밀",
    source: INGREDIENT_SOURCE.FARM,
    rank: RANK.FOUR,
    dishList: [{ id: "", name: "" }],
  },
  {
    id: "",
    name: "바다조름",
    source: INGREDIENT_SOURCE.GLACIAL,
    rank: RANK.TWO,
    dishList: [{ id: "", name: "" }],
  },
  {
    id: "",
    name: "바다포도",
    source: INGREDIENT_SOURCE.CAVE,
    rank: RANK.TWO,
    dishList: [{ id: "", name: "" }],
  },
  {
    id: "",
    name: "방울토마토",
    source: INGREDIENT_SOURCE.FARM,
    rank: RANK.FOUR,
    dishList: [{ id: "", name: "" }],
  },
  {
    id: "",
    name: "백미",
    source: INGREDIENT_SOURCE.FARM,
    rank: RANK.THREE,
    dishList: [{ id: "", name: "" }],
  },
  {
    id: "",
    name: "블래더랙",
    source: INGREDIENT_SOURCE.GLACIAL_SEAWEED,
    rank: RANK.TWO,
    dishList: [{ id: "", name: "" }],
  },
  {
    id: "",
    name: "양파",
    source: INGREDIENT_SOURCE.FARM,
    rank: RANK.FOUR,
    dishList: [{ id: "", name: "" }],
  },
  {
    id: "",
    name: "오이",
    source: INGREDIENT_SOURCE.FARM,
    rank: RANK.FOUR,
    dishList: [{ id: "", name: "" }],
  },
  {
    id: "",
    name: "우뭇가사리",
    source: INGREDIENT_SOURCE.BLUE_HOLE_SHALLOWS,
    rank: RANK.TWO,
    dishList: [{ id: "", name: "" }],
  },
  {
    id: "",
    name: "콩",
    source: INGREDIENT_SOURCE.FARM,
    rank: RANK.FOUR,
    dishList: [{ id: "", name: "" }],
  },
  {
    id: "",
    name: "하바네로",
    source: INGREDIENT_SOURCE.FARM,
    rank: RANK.FOUR,
    dishList: [{ id: "", name: "" }],
  },
  {
    id: "",
    name: "히알로네마",
    source: INGREDIENT_SOURCE.GLACIAL_SEAWEED,
    rank: RANK.THREE,
    dishList: [{ id: "", name: "" }],
  },
];
