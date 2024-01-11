import { atom } from "recoil";
import { FISH_LIST } from "@constants/Fish.ts";

export const fishListState = atom({
  key: "fishList",
  default: FISH_LIST,
});
