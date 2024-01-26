import { atom } from "recoil";
import { DishWithLevel } from "@typings/Dish.ts";
import { RecipeInfo } from "@typings/Recipe.ts";

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

export const recipeListState = atom<RecipeInfo[]>({
  key: "recipeListState",
  default: [],
});
