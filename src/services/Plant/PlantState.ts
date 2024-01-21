import { atom } from "recoil";
import { getPlantWithDishLevelList } from "@libs/recipeUtil.ts";
import { PLANT_LIST } from "@constants/Plant.ts";

export const plantWithDishLevelListState = atom({
  key: "plantWithDishLevelList",
  default: getPlantWithDishLevelList(PLANT_LIST),
});
