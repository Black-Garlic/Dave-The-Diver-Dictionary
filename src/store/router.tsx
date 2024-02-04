import { createBrowserRouter } from "react-router-dom";
import loadable from "@loadable/component";
import {
  DISH_DETAIL_ROUTE,
  DISH_LIST_ROUTE,
  FISH_DETAIL_ROUTE,
  FISH_LIST_ROUTE,
  HOME_ROUTE,
  PLANT_DETAIL_ROUTE,
  PLANT_LIST_ROUTE,
  SEASONING_DETAIL_ROUTE,
  SEASONING_LIST_ROUTE,
  DISH_COUNT_ROUTE,
} from "@constants/Route.ts";

const HomePage = loadable(() => import("@pages/Home/HomePage"));

const FishListPage = loadable(() => import("@pages/Fish/FishListPage"));
const FishDetailPage = loadable(() => import("@pages/Fish/FishDetailPage"));

const PlantListPage = loadable(() => import("@pages/Plant/PlantListPage"));
const PlantDetailPage = loadable(() => import("@pages/Plant/PlantDetailPage"));

const SeasoningListPage = loadable(
  () => import("@pages/Seasoning/SeasoningListPage"),
);
const SeasoningDetailPage = loadable(
  () => import("@pages/Seasoning/SeasoningDetailPage"),
);

const DishListPage = loadable(() => import("@pages/Dish/DistListPage"));
const DishDetailPage = loadable(() => import("@pages/Dish/DishDetailPage"));

const DishCountPage = loadable(
  () => import("@pages/DishCount/DishCountPage.tsx"),
);

export const routerConfig = [
  {
    path: HOME_ROUTE.path,
    element: <HomePage />,
  },
  { path: FISH_LIST_ROUTE.path, element: <FishListPage /> },
  { path: FISH_DETAIL_ROUTE.path, element: <FishDetailPage /> },
  { path: PLANT_LIST_ROUTE.path, element: <PlantListPage /> },
  { path: PLANT_DETAIL_ROUTE.path, element: <PlantDetailPage /> },
  { path: SEASONING_LIST_ROUTE.path, element: <SeasoningListPage /> },
  { path: SEASONING_DETAIL_ROUTE.path, element: <SeasoningDetailPage /> },
  { path: DISH_LIST_ROUTE.path, element: <DishListPage /> },
  { path: DISH_DETAIL_ROUTE.path, element: <DishDetailPage /> },
  { path: DISH_COUNT_ROUTE.path, element: <DishCountPage /> },
];

export const router = createBrowserRouter(routerConfig);
