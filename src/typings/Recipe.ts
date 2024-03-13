import { Rank } from "@typings/Rank.ts";
import { RANK } from "@constants/Rank.ts";

export interface Recipe {
  recipeId: string;
  dishId: string;
  type: string;
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
