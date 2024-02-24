import { Plant, PlantWithDishLevel } from "@typings/Plant.ts";
import { RECIPE_TYPE } from "@constants/Dish.ts";
import { getDishWithLevelListById } from "@libs/recipeUtil.ts";
import { Level } from "@typings/Dish.ts";
import { PLANT_SOURCE } from "@constants/Plant.ts";
import { TagInfo } from "@typings/ComponentInfo.ts";
import { getSourceColor } from "@libs/sourceUtil.ts";

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

export const sourceListToTagListInfo = (
  sourceList?: PLANT_SOURCE[],
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
