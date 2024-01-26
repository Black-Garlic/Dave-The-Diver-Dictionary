import { Plant, PlantWithDishLevel } from "@typings/Plant.ts";
import { RECIPE_TYPE } from "@constants/Dish.ts";
import { getDishWithLevelListById } from "@libs/recipeUtil.ts";
import { Level } from "@typings/Dish.ts";

export const getPlantWithDishLevelList = (
  plantList: Plant[],
  levelList: Level[],
): PlantWithDishLevel[] => {
  return plantList.map((plant) => getPlantWithDishLevel(plant, levelList));
};

export const getPlantWithDishLevel = (
  plant: Plant,
  levelList: Level[],
): PlantWithDishLevel => {
  return {
    ...plant,
    dishList: getDishWithLevelListById(plant.id, RECIPE_TYPE.PLANT, levelList),
  };
};
