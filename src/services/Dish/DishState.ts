import { atom } from "recoil";
import { getDishLevelCookie, getDishWithLevelList } from "@libs/dishUtil.ts";
import { DISH_LIST } from "@constants/Dish.ts";

export const dishListState = atom({
  key: "dishList",
  default: getDishWithLevelList(DISH_LIST, getDishLevelCookie()),
});
