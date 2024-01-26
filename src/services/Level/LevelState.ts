import { atom } from "recoil";
import { getDishLevelCookie } from "@libs/dishUtil.ts";
import { Level } from "@typings/Dish.ts";

export const levelListState = atom<Level[]>({
  key: "levelListState",
  default: getDishLevelCookie(),
});
