import { atom } from "recoil";
import { Sales } from "@typings/Sales.ts";

export const salesListState = atom<Sales[]>({
  key: "salesListState",
  default: [],
});
