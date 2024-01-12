import { createBrowserRouter } from "react-router-dom";
import loadable from "@loadable/component";
import {
  FISH_DETAIL_ROUTE,
  FISH_LIST_ROUTE,
  HOME_ROUTE,
} from "@constants/Route.ts";

const FishListPage = loadable(() => import("@pages/Fish/FishListPage"));
const FishDetailPage = loadable(() => import("@pages/Fish/FishDetailPage"));

export const routerConfig = [
  {
    path: HOME_ROUTE.path,
    element: <FishListPage />,
  },
  { path: FISH_LIST_ROUTE.path, element: <FishListPage /> },
  { path: FISH_DETAIL_ROUTE.path, element: <FishDetailPage /> },
];

export const router = createBrowserRouter(routerConfig);
