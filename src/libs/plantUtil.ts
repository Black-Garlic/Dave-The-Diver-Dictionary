import { Plant, PlantWithDishLevel } from "@typings/Plant.ts";
import { DishLevel } from "@typings/Dish.ts";
import { Source } from "@typings/Source.ts";
import { TagInfo } from "@typings/Tag.ts";
import { getDishWithLevelList } from "@libs/dishUtil.ts";

export const getPlantWithDishLevelList = (
  plantList: Plant[],
  dishLevelList: DishLevel[],
): PlantWithDishLevel[] => {
  return plantList.map((plant) => getPlantWithDishLevel(plant, dishLevelList));
};

export const getPlantWithDishLevel = (
  plant: Plant,
  dishLevelList: DishLevel[],
): PlantWithDishLevel => {
  return {
    ...plant,
    dishWithLevelList: getDishWithLevelList(plant.dishDtoList, dishLevelList),
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
