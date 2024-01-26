import { RECIPE_TYPE } from "@constants/Dish.ts";
import { Rank } from "@typings/Rank.ts";

export interface DishRecipe {
  dishId: string;
  recipe: Recipe[];
}

export interface Recipe {
  id: string;
  type: RECIPE_TYPE;
  count: number;
}

export interface RecipeInfo extends Rank, Recipe {
  name: string;
}
