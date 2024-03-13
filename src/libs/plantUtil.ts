import { Plant, PlantWithDishLevel } from "@typings/Plant.ts";
import { Level } from "@typings/Dish.ts";
import { Source } from "@typings/Source.ts";
import { TagInfo } from "@typings/Tag.ts";
import { getDishWithLevelList } from "@libs/dishUtil.ts";

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
    dishWithLevelList: getDishWithLevelList(plant.dishDtoList, levelList),
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
