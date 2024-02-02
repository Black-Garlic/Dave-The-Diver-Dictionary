import { Menu } from "../typings/Menu.ts";
import {
  FISH_LIST_ROUTE,
  PLANT_LIST_ROUTE,
  SEASONING_LIST_ROUTE,
  DISH_LIST_ROUTE,
  SUSHI_ROUTE,
} from "@constants/Route.ts";

export const MENU: Menu[] = [
  { key: "fish", label: "해산물", path: FISH_LIST_ROUTE.path },
  { key: "plant", label: "부재료", path: PLANT_LIST_ROUTE.path },
  { key: "seasoning", label: "조미료", path: SEASONING_LIST_ROUTE.path },
  { key: "dish", label: "요리", path: DISH_LIST_ROUTE.path },
  { key: "sushi", label: "초밥", path: SUSHI_ROUTE.path },
];
