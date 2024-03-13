import { Seasoning, SeasoningWithDishLevel } from "@typings/Seasoning.ts";
import { DishLevel } from "@typings/Dish.ts";
import { Source } from "@typings/Source.ts";
import { TagInfo } from "@typings/Tag.ts";
import { getDishWithLevelList } from "@libs/dishUtil.ts";

export const getSeasoningWithDishLevelList = (
  seasoningList: Seasoning[],
  dishLevelList: DishLevel[],
): SeasoningWithDishLevel[] => {
  return seasoningList.map((seasoning) =>
    getSeasoningWithDishLevel(seasoning, dishLevelList),
  );
};

export const getSeasoningWithDishLevel = (
  seasoning: Seasoning,
  dishLevelList: DishLevel[],
): SeasoningWithDishLevel => {
  return {
    ...seasoning,
    dishWithLevelList: getDishWithLevelList(
      seasoning.dishDtoList,
      dishLevelList,
    ),
  };
};

export const sourceListToTagInfoList = (
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
