import { Plant, PlantWithDishLevel } from "@typings/Plant.ts";
import { RECIPE_TYPE } from "@constants/Dish.ts";
import { getDishWithLevelListById } from "@libs/recipeUtil.ts";
import { Level } from "@typings/Dish.ts";
import { TagInfo } from "@typings/ComponentInfo.ts";
import { Source } from "@typings/Source.ts";

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
    dishList: getDishWithLevelListById(
      plant.plantId,
      RECIPE_TYPE.PLANT,
      levelList,
    ),
  };
};

export const sourceListToTagListInfo = (
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
