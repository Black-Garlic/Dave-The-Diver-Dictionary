import { Fish } from "@typings/Fish.ts";
import { REGION } from "@constants/Region.ts";
import { TIME } from "@constants/Time.ts";
import { RANK } from "@constants/Rank.ts";

export const FISH: Fish[] = [
  {
    id: "Fish_1",
    name: "해산물 1",
    rank: RANK.ONE,
    region: REGION.BLUE_HOLE_SHALLOWS,
    time: TIME.DAY,
    dishList: [
      {
        id: "음식 1",
        name: "음식 1",
      },
      {
        id: "음식 2",
        name: "음식 2",
      },
      {
        id: "음식 3",
        name: "음식 3",
      },
    ],
  },
  {
    id: "Fish_2",
    name: "해산물 2",
    rank: RANK.TWO,
    region: REGION.BLUE_HOLE_MEDIUM_DEPTH,
    time: TIME.NIGHT,
    dishList: [],
  },
  {
    id: "Fish_3",
    name: "해산물 3",
    rank: RANK.THREE,
    region: REGION.BLUE_HOLE_DEPTH,
    time: TIME.DAY,
    dishList: [],
  },
  {
    id: "Fish_4",
    name: "해산물 4",
    rank: RANK.FOUR,
    region: REGION.GLACIER_PASSAGE,
    time: TIME.DAY,
    dishList: [],
  },
  {
    id: "Fish_5",
    name: "해산물 5",
    rank: RANK.FIVE,
    region: REGION.GLACIER_ZONE,
    time: TIME.DAY,
    dishList: [],
  },
  {
    id: "Fish_6",
    name: "해산물 6",
    rank: RANK.SIX,
    region: REGION.HYDROTHERMAL_VENTS,
    time: TIME.DAY,
    dishList: [],
  },
  {
    id: "Fish_7",
    name: "해산물 7",
    rank: RANK.SEVEN,
    region: REGION.ETC,
    time: TIME.DAY,
    dishList: [],
  },
];
