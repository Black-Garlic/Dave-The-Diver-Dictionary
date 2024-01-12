import { Plant } from "@typings/Plant.ts";
import { RANK } from "@constants/Rank.ts";

export enum PLANT_SOURCE {
  FARM = "텃밭",
  BLUE_HOLE = "0 ~ 130m",
  BLUE_HOLE_SHALLOWS = "0 ~ 50m",
  BLUE_HOLE_MEDIUM_DEPTH = "50 ~ 130m",
  CAVE = "종유동굴",
  GLACIAL = "빙하 지역",
  GLACIAL_SEAWEED = "빙하 해초 동굴",
}

export const PLANT_LIST: Plant[] = [
  {
    id: "Grade_A_Egg",
    name: "1등급란",
    source: PLANT_SOURCE.FARM,
    rank: RANK.FOUR,
  },
  {
    id: "Eggplant",
    name: "가지",
    source: PLANT_SOURCE.FARM,
    rank: RANK.FOUR,
  },
  {
    id: "Kajime",
    name: "감태",
    source: PLANT_SOURCE.BLUE_HOLE,
    rank: RANK.TWO,
  },
  {
    id: "Black_Coral",
    name: "검은산호",
    source: PLANT_SOURCE.GLACIAL,
    rank: RANK.TWO,
  },
  {
    id: "Egg",
    name: "계란",
    source: PLANT_SOURCE.FARM,
    rank: RANK.FOUR,
  },
  {
    id: "Southern_Bull_Kelp",
    name: "남부황소다시마",
    source: PLANT_SOURCE.GLACIAL,
    rank: RANK.TWO,
  },
  {
    id: "Kelp",
    name: "다시마",
    source: PLANT_SOURCE.BLUE_HOLE_MEDIUM_DEPTH,
    rank: RANK.TWO,
  },
  {
    id: "Carrot",
    name: "당근",
    source: PLANT_SOURCE.FARM,
    rank: RANK.FOUR,
  },
  {
    id: "Garlic",
    name: "마늘",
    source: PLANT_SOURCE.FARM,
    rank: RANK.FOUR,
  },
  {
    id: "Seaweed",
    name: "미역",
    source: PLANT_SOURCE.BLUE_HOLE_MEDIUM_DEPTH,
    rank: RANK.TWO,
  },
  {
    id: "Wheat",
    name: "밀",
    source: PLANT_SOURCE.FARM,
    rank: RANK.FOUR,
  },
  {
    id: "Buckbean",
    name: "바다조름",
    source: PLANT_SOURCE.GLACIAL,
    rank: RANK.TWO,
  },
  {
    id: "Sea_Grape",
    name: "바다포도",
    source: PLANT_SOURCE.CAVE,
    rank: RANK.TWO,
  },
  {
    id: "Cherry_Tomato",
    name: "방울토마토",
    source: PLANT_SOURCE.FARM,
    rank: RANK.FOUR,
  },
  {
    id: "Rice",
    name: "백미",
    source: PLANT_SOURCE.FARM,
    rank: RANK.THREE,
  },
  {
    id: "Bladderwrack",
    name: "블래더랙",
    source: PLANT_SOURCE.GLACIAL_SEAWEED,
    rank: RANK.TWO,
  },
  {
    id: "Onion",
    name: "양파",
    source: PLANT_SOURCE.FARM,
    rank: RANK.FOUR,
  },
  {
    id: "Cucumber",
    name: "오이",
    source: PLANT_SOURCE.FARM,
    rank: RANK.FOUR,
  },
  {
    id: "Agar",
    name: "우뭇가사리",
    source: PLANT_SOURCE.BLUE_HOLE_SHALLOWS,
    rank: RANK.TWO,
  },
  {
    id: "Bean",
    name: "콩",
    source: PLANT_SOURCE.FARM,
    rank: RANK.FOUR,
  },
  {
    id: "Habanero",
    name: "하바네로",
    source: PLANT_SOURCE.FARM,
    rank: RANK.FOUR,
  },
  {
    id: "Hyalonema",
    name: "히알로네마",
    source: PLANT_SOURCE.GLACIAL_SEAWEED,
    rank: RANK.THREE,
  },
];
