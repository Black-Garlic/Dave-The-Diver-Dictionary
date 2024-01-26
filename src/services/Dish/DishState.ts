import { atom } from "recoil";
import { getDishLevelCookie, getDishWithLevelList } from "@libs/dishUtil.ts";
import { DISH_LIST } from "@constants/Dish.ts";
import { DishWithLevel } from "@typings/Dish.ts";

export const dishListState = atom({
  key: "dishList",
  default: getDishWithLevelList(DISH_LIST, getDishLevelCookie()),
});

export const dishFilterListState = atom<DishWithLevel[]>({
  key: "dishFilterListState",
  default: [],
});
