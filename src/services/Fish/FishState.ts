import { atom } from "recoil";
import {
  getFishWithDishLevelList,
  getFishWithDishList,
} from "@libs/recipeUtil.ts";
import { FISH_LIST } from "@constants/Fish.ts";

export const fishListState = atom({
  key: "fishList",
  default: getFishWithDishList(FISH_LIST),
});

export const fishWithDishLevelListState = atom({
  key: "fishWithDishLevelList",
  default: getFishWithDishLevelList(FISH_LIST),
});

export const fishDetailState = atom({
  key: "fishDetail",
});
