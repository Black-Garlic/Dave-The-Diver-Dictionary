import { Dish, DishLevel, DishWithLevel, Party } from "@typings/Dish.ts";
import { LEVEL } from "@constants/Level.ts";
import { PARTY } from "@constants/Dish.ts";
import { COLOR } from "@constants/Color.ts";
import { TagInfo } from "@typings/Tag.ts";

export const getDishWithLevelList = (
  dishList: Dish[],
  dishLevelList: DishLevel[],
): DishWithLevel[] => {
  return dishList.map((dish) => getDishWithLevel(dish, dishLevelList));
};

export const getDishWithLevel = (dish: Dish, dishLevelList: DishLevel[]) => {
  let dishLevel: LEVEL = LEVEL.ONE;

  dishLevelList.forEach((dishLevelDto) => {
    if (dishLevelDto.dishId === dish.dishId) {
      dishLevel = dishLevelDto.dishLevel;
    }
  });

  return { ...dish, dishLevel: dishLevel };
};

export const getPartyColor = (party: string): string => {
  if (party === PARTY.JELLY_FISH) {
    return COLOR.BLUE_VIOLET;
  }

  if (party === PARTY.TUNA) {
    return COLOR.DODGER_BLUE;
  }

  if (party === PARTY.MARLIN) {
    return COLOR.DARK_BLUE;
  }

  if (party === PARTY.STORM_SHARK) {
    return COLOR.BLACK;
  }

  if (party === PARTY.CUCUMBER) {
    return COLOR.FOREST_GREEN;
  }

  if (party === PARTY.CURRY) {
    return COLOR.GOLDEN_ROD;
  }

  if (party === PARTY.SHRIMP) {
    return COLOR.LIGHT_SALMON;
  }

  if (party === PARTY.LOBSTER) {
    return COLOR.ORANGE_RED;
  }

  return COLOR.NONE;
};

export const partyListToTagInfoList = (partyList?: Party[]): TagInfo[] => {
  if (partyList) {
    return partyList?.map((party: Party) => ({
      color: party.color,
      value: party.name,
    }));
  } else {
    return [];
  }
};
