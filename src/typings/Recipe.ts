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
