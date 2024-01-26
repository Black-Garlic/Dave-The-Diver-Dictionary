import { Seasoning, SeasoningWithDishLevel } from "@typings/Seasoning.ts";
import { RECIPE_TYPE } from "@constants/Dish.ts";
import { getDishWithLevelListById } from "@libs/recipeUtil.ts";
import { Level } from "@typings/Dish.ts";

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
