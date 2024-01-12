import { atom } from "recoil";
import { getFishWithDishList } from "@libs/recipeUtil.ts";
import { FISH_LIST } from "@constants/Fish.ts";

export const fishListState = atom({
  key: "fishList",
  default: getFishWithDishList(FISH_LIST),
});
