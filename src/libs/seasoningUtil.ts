import { Seasoning, SeasoningWithDishLevel } from "@typings/Seasoning.ts";
import { RECIPE_TYPE } from "@constants/Dish.ts";
import { getDishWithLevelListById } from "@libs/recipeUtil.ts";
import { Level } from "@typings/Dish.ts";
import { SEASONING_SOURCE } from "@constants/Seasoning.ts";
import { TagInfo } from "@typings/ComponentInfo.ts";
import { getSourceColor } from "@libs/sourceUtil.ts";

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
      seasoning.id,
      RECIPE_TYPE.SEASONING,
      levelList,
    ),
  };
};

export const sourceListToTagInfoList = (
  sourceList?: SEASONING_SOURCE[],
): TagInfo[] => {
  if (sourceList) {
    return sourceList.map((source) => ({
      color: getSourceColor(source),
      value: source,
    }));
  } else {
    return [];
  }
};
