import { Fish, FishWithDishLevel } from "@typings/Fish.ts";
import { Level } from "@typings/Dish.ts";
import { getDishWithLevelList } from "@libs/dishUtil.ts";

export const getFishWithDishLevelList = (
  fishList: Fish[],
  levelList: Level[],
): FishWithDishLevel[] => {
  return fishList.map((fish) => getFishWithDishLevel(fish, levelList));
};

export const getFishWithDishLevel = (
  fish: Fish,
  levelList: Level[],
): FishWithDishLevel => {
  return {
    ...fish,
    dishWithLevelList: getDishWithLevelList(fish.dishDtoList, levelList),
  };
};
