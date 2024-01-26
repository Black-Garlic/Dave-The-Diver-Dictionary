import { atom } from "recoil";
import { FishWithDishLevel } from "@typings/Fish.ts";

export const fishDefaultListState = atom<FishWithDishLevel[]>({
  key: "fishDefaultListState",
  default: [],
});

export const fishFilterListState = atom<FishWithDishLevel[]>({
  key: "fishFilterListState",
  default: [],
});

export const fishDetailState = atom<FishWithDishLevel>({
  key: "fishDetailState",
  default: undefined,
});
