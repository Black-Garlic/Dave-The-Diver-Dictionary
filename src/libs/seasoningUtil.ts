import { Seasoning, SeasoningWithDishLevel } from "@typings/Seasoning.ts";
import { Level } from "@typings/Dish.ts";
import { Source } from "@typings/Source.ts";
import { TagInfo } from "@typings/Tag.ts";
import { getDishWithLevelList } from "@libs/dishUtil.ts";

export const getSeasoningWithDishLevelList = (
  seasoningList: Seasoning[],
  levelList: Level[],
): SeasoningWithDishLevel[] => {
  return seasoningList.map((seasoning) =>
    getSeasoningWithDishLevel(seasoning, levelList),
  );
};

export const getSeasoningWithDishLevel = (
  seasoning: Seasoning,
  levelList: Level[],
): SeasoningWithDishLevel => {
  return {
    ...seasoning,
    dishWithLevelList: getDishWithLevelList(seasoning.dishDtoList, levelList),
  };
};

export const sourceListToTagInfoList = (
  sourceDtoList?: Source[],
): TagInfo[] => {
  if (sourceDtoList) {
    return sourceDtoList.map((source) => ({
      color: source.color,
      value: source.name,
    }));
  } else {
    return [];
  }
};
