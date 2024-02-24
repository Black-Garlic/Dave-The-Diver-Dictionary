import { Dish, DishWithLevel, Level } from "@typings/Dish.ts";
import { LEVEL } from "@constants/Level.ts";
import { Cookies } from "react-cookie";
import { PARTY } from "@constants/Dish.ts";
import { LEVEL_DUMMY } from "@constants/Dummy.ts";
import { COLOR } from "@constants/Color.ts";
import { TagInfo } from "@typings/ComponentInfo.ts";

export const getDishLevelCookie = (): Level[] => {
  const Cookie = new Cookies();
  const dishLevelCookie: Level[] = Cookie.get("dishLevel");

  if (dishLevelCookie) {
    return dishLevelCookie;
  } else {
    const defaultCookie: Level[] = LEVEL_DUMMY;
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

export const partyListToTagInfoList = (partyList?: PARTY[]): TagInfo[] => {
  if (partyList) {
    return partyList?.map((party: PARTY) => ({
      color: getPartyColor(party),
      value: party,
    }));
  } else {
    return [];
  }
};
