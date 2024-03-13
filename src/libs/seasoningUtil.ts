import { Seasoning, SeasoningWithDishLevel } from "@typings/Seasoning.ts";
import { RECIPE_TYPE } from "@constants/Dish.ts";
import { getDishWithLevelListById } from "@libs/recipeUtil.ts";
import { Level } from "@typings/Dish.ts";
import { Source } from "@typings/Source.ts";
import { TagInfo } from "@typings/Tag.ts";

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
    dishList: getDishWithLevelListById(
      seasoning.seasoningId,
      RECIPE_TYPE.SEASONING,
      levelList,
    ),
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
