import { atom } from "recoil";
import { SeasoningWithDishLevel } from "@typings/Seasoning.ts";

export const seasoningDefaultListState = atom<SeasoningWithDishLevel[]>({
  key: "seasoningDefaultListState",
  default: [],
});

export const seasoningFilterListState = atom<SeasoningWithDishLevel[]>({
  key: "seasoningFilterListState",
  default: [],
});

export const seasoningDetailState = atom<SeasoningWithDishLevel>({
  key: "seasoningDetailState",
  default: undefined,
});
