import { atom } from "recoil";
import { DishLevel, DishWithLevel } from "@typings/Dish.ts";

export const dishDefaultListState = atom<DishWithLevel[]>({
  key: "dishDefaultListState",
  default: [],
});

export const dishFilterListState = atom<DishWithLevel[]>({
  key: "dishFilterListState",
  default: [],
});

export const dishDetailState = atom<DishWithLevel>({
  key: "dishDetailState",
  default: undefined,
});

export const dishLevelListState = atom<DishLevel[]>({
  key: "dishLevelListState",
  default: [],
});
