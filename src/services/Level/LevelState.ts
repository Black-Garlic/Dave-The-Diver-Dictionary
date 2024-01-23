import { atom } from "recoil";
import { getDishLevelCookie } from "@libs/dishUtil.ts";

export const levelState = atom({
  key: "level",
  default: getDishLevelCookie(),
});
