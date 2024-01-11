import { createBrowserRouter } from "react-router-dom";
import loadable from "@loadable/component";

const FishListPage = loadable(() => import("@pages/Fish/FishListPage"));

export const routerConfig = [
  {
    path: "/",
    element: <FishListPage />,
  },
  { path: "/fish", element: <FishListPage /> },
];

export const router = createBrowserRouter(routerConfig);
