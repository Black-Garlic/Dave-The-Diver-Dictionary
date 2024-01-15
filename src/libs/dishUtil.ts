import { Dish, DishWithLevel, Level } from "@typings/Dish.ts";
import { LEVEL } from "@constants/Level.ts";
import { Cookies } from "react-cookie";
import { PARTY } from "@constants/Dish.ts";

export const getDishLevelCookie = (): Level[] => {
  const Cookie = new Cookies();
  const dishLevelCookie: Level[] = Cookie.get("dishLevel");

  if (dishLevelCookie) {
    return dishLevelCookie;
  } else {
    const defaultCookie: Level[] = [];
    Cookie.set("dishLevel", defaultCookie);

    return defaultCookie;
  }
};

export const setDishLevelCookie = (id: string, selectedLevel: LEVEL) => {
  const Cookie = new Cookies();
  const levelList: Level[] = getDishLevelCookie();
  let newLevelList: Level[] = [];

  if (levelList.some((level) => level.id === id)) {
    newLevelList = levelList.map((level) => {
      if (level.id === id) {
        return { ...level, level: selectedLevel };
      } else {
        return { ...level };
      }
    });
  } else {
    newLevelList = [...levelList, { id: id, level: selectedLevel }];
  }

  Cookie.set("dishLevel", newLevelList);

  return newLevelList;
};

export const getDishWithLevelList = (
  dishList: Dish[],
  levelList: Level[],
): DishWithLevel[] => {
  return dishList.map((dish) => getDishWithLevel(dish, levelList));
};

export const getDishWithLevel = (dish: Dish, levelList: Level[]) => {
  let dishLevel: LEVEL = LEVEL.ONE;

  levelList.forEach((level) => {
    if (level.id === dish.id) {
      dishLevel = level.level;
    }
  });

  return { ...dish, level: dishLevel };
};

export const getPartyColor = (party: string): string => {
  if (party === PARTY.JELLY_FISH) {
    return "BlueViolet";
  }

  if (party === PARTY.TUNA) {
    return "DodgerBlue";
  }

  if (party === PARTY.MARLIN) {
    return "DarkBlue";
  }

  if (party === PARTY.STORM_SHARK) {
    return "Black";
  }

  if (party === PARTY.CUCUMBER) {
    return "ForestGreen";
  }

  if (party === PARTY.CURRY) {
    return "GoldenRod";
  }

  if (party === PARTY.SHRIMP) {
    return "LightSalmon";
  }

  if (party === PARTY.LOBSTER) {
    return "OrangeRed";
  }

  return "";
};
