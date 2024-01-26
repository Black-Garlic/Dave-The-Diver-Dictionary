import { Fish, FishWithDishLevel } from "@typings/Fish.ts";
import { Level } from "@typings/Dish.ts";
import { RECIPE_TYPE } from "@constants/Dish.ts";
import {
  getDishWithLevelListById,
  getDishWithLevelListByIdAndLevelList,
} from "@libs/recipeUtil.ts";

export const getFishWithDishLevelList = (
  fishList: Fish[],
  levelList: Level[],
): FishWithDishLevel[] => {
  return fishList.map((fish) => getFishWithDishLevelArray(fish, levelList));
};

export const getFishWithDishLevelArray = (
  fish: Fish,
  levelList: Level[],
): FishWithDishLevel => {
  return {
    ...fish,
    dishList: getDishWithLevelListByIdAndLevelList(
      fish.id,
      RECIPE_TYPE.FISH,
      levelList,
    ),
  };
};

export const getFishWithDishLevel = (fish: Fish): FishWithDishLevel => {
  return {
    ...fish,
    dishList: getDishWithLevelListById(fish.id, RECIPE_TYPE.FISH),
  };
};
