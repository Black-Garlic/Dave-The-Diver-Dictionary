import { DishWithLevel } from "@typings/Dish.ts";

export interface Sales {
  dish: DishWithLevel;
  count: number;
}

export interface SalesCount {
  [key: string]: number;
}
