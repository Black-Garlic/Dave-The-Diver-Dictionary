import { atom } from "recoil";
import { getSeasoningWithDishLevelList } from "@libs/recipeUtil.ts";
import { SEASONING_LIST } from "@constants/Seasoning.ts";

export const seasoningWithDishLevelListState = atom({
  key: "seasoningWithDishLevelList",
  default: getSeasoningWithDishLevelList(SEASONING_LIST),
});
