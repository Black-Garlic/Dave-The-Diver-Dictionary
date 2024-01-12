import { Route } from "@typings/Route.ts";

export const HOME_ROUTE: Route = { name: "홈", path: "/" };

export const FISH_LIST_ROUTE: Route = { name: "해산물", path: "/fish" };
export const FISH_DETAIL_ROUTE: Route = { name: "custom", path: "/fish/:id" };
