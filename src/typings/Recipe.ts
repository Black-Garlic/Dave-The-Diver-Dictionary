import { RECIPE_TYPE } from "@constants/Dish.ts";
import { Rank } from "@typings/Rank.ts";
import { RANK } from "@constants/Rank.ts";

export interface DishRecipe {
  dishId: string;
  recipe: Recipe[];
}

export interface Recipe {
  recipeId: string;
  dishId: string;
  type: RECIPE_TYPE;
  count: number;
  ingredientDto: Ingredient;
}

export interface Ingredient {
  ingredientId: string;
  name: string;
  rank: RANK;
}

export interface RecipeInfo extends Rank, Recipe {
  name: string;
}
