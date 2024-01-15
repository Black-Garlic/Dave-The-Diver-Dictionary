import { createBrowserRouter } from "react-router-dom";
import loadable from "@loadable/component";
import {
  DISH_LIST_ROUTE,
  FISH_DETAIL_ROUTE,
  FISH_LIST_ROUTE,
  HOME_ROUTE,
} from "@constants/Route.ts";

const FishListPage = loadable(() => import("@pages/Fish/FishListPage"));
const FishDetailPage = loadable(() => import("@pages/Fish/FishDetailPage"));
const DishListPage = loadable(() => import("@pages/Dish/DistListPage"));

export const routerConfig = [
  {
    path: HOME_ROUTE.path,
    element: <FishListPage />,
  },
  { path: FISH_LIST_ROUTE.path, element: <FishListPage /> },
  { path: FISH_DETAIL_ROUTE.path, element: <FishDetailPage /> },
  { path: DISH_LIST_ROUTE.path, element: <DishListPage /> },
];

export const router = createBrowserRouter(routerConfig);
