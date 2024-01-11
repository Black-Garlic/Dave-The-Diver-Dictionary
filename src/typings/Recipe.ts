import { RECIPE_TYPE } from "@constants/Dish.ts";

export interface DishRecipe {
  dishId: string;
  recipe: Recipe[];
}

export interface Recipe {
  id: string;
  type: RECIPE_TYPE;
  count: number;
}
