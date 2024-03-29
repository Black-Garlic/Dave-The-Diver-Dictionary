import { Route } from "@typings/Route.ts";

export const HOME_ROUTE: Route = { name: "홈", path: "" };

export const FISH_LIST_ROUTE: Route = { name: "해산물", path: "/fish" };
export const FISH_DETAIL_ROUTE: Route = { name: "custom", path: "/fish/:id" };

export const PLANT_LIST_ROUTE: Route = { name: "부재료", path: "/plant" };
export const PLANT_DETAIL_ROUTE: Route = { name: "custom", path: "/plant/:id" };

export const SEASONING_LIST_ROUTE: Route = {
  name: "조미료",
  path: "/seasoning",
};
export const SEASONING_DETAIL_ROUTE: Route = {
  name: "custom",
  path: "/seasoning/:id",
};

export const DISH_LIST_ROUTE: Route = { name: "요리", path: "/dish" };
export const DISH_DETAIL_ROUTE: Route = { name: "custom", path: "/dish/:id" };

export const SALES_ROUTE: Route = {
  name: "영업",
  path: "/sales",
};

export const ROUTE_LIST: Route[] = [
  HOME_ROUTE,
  FISH_LIST_ROUTE,
  FISH_DETAIL_ROUTE,
  PLANT_LIST_ROUTE,
  PLANT_DETAIL_ROUTE,
  SEASONING_LIST_ROUTE,
  SEASONING_DETAIL_ROUTE,
  DISH_LIST_ROUTE,
  DISH_DETAIL_ROUTE,
  SALES_ROUTE,
];
