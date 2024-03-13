import { Fish, FishWithDishLevel } from "@typings/Fish.ts";
import { DishLevel } from "@typings/Dish.ts";
import { getDishWithLevelList } from "@libs/dishUtil.ts";

export const getFishWithDishLevelList = (
  fishList: Fish[],
  dishLevelList: DishLevel[],
): FishWithDishLevel[] => {
  return fishList.map((fish) => getFishWithDishLevel(fish, dishLevelList));
};

export const getFishWithDishLevel = (
  fish: Fish,
  dishLevelList: DishLevel[],
): FishWithDishLevel => {
  return {
    ...fish,
    dishWithLevelList: getDishWithLevelList(fish.dishDtoList, dishLevelList),
  };
};
