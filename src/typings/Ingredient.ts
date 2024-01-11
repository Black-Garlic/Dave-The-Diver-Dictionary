import { INGREDIENT_SOURCE } from "@constants/Ingredient.ts";
import { Rank } from "@typings/Rank.ts";
import { SimpleDish } from "@typings/Dish.ts";

export interface Ingredient extends Rank {
  id: string;
  name: string;
  source: INGREDIENT_SOURCE;
  dishList: SimpleDish[];
}
