import { atom } from "recoil";
import { PlantWithDishLevel } from "@typings/Plant.ts";

export const plantDefaultListState = atom<PlantWithDishLevel[]>({
  key: "plantDefaultListState",
  default: [],
});

export const plantFilterListState = atom<PlantWithDishLevel[]>({
  key: "plantFilterListState",
  default: [],
});

export const plantDetailState = atom<PlantWithDishLevel>({
  key: "plantDetailState",
  default: undefined,
});
