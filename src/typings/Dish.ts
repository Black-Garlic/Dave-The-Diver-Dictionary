import { RECIPE_TYPE, UNLOCK_TYPE } from "@constants/Dish.ts";

export interface Dish {
  id: string;
  name: string;
  unlockType?: UNLOCK_TYPE | string;
  maxCost: number;
  maxScore: number;
  maxCount: number;
  recipeList: Recipe[];
}

export interface Recipe {
  id: string;
  name: string;
  type: RECIPE_TYPE;
  count: number;
}

export interface SimpleDish {
  id: string;
  name: string;
}
