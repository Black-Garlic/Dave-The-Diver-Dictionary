import { atom } from "recoil";
import { DishLevel } from "@typings/Dish.ts";

export const dishLevelListState = atom<DishLevel[]>({
  key: "dishLevelListState",
  default: [],
});
