import { createBrowserRouter } from "react-router-dom";
import loadable from "@loadable/component";
import {
  DISH_DETAIL_ROUTE,
  DISH_LIST_ROUTE,
  FISH_DETAIL_ROUTE,
  FISH_LIST_ROUTE,
  HOME_ROUTE,
} from "@constants/Route.ts";

const FishListPage = loadable(() => import("@pages/Fish/FishListPage"));
const FishDetailPage = loadable(() => import("@pages/Fish/FishDetailPage"));
const DishListPage = loadable(() => import("@pages/Dish/DistListPage"));
const DishDetailPage = loadable(() => import("@pages/Dish/DishDetailPage"));

export const routerConfig = [
  {
    path: HOME_ROUTE.path,
    element: <FishListPage />,
  },
  { path: FISH_LIST_ROUTE.path, element: <FishListPage /> },
  { path: FISH_DETAIL_ROUTE.path, element: <FishDetailPage /> },
  { path: DISH_LIST_ROUTE.path, element: <DishListPage /> },
  { path: DISH_DETAIL_ROUTE.path, element: <DishDetailPage /> },
];

export const router = createBrowserRouter(routerConfig);
