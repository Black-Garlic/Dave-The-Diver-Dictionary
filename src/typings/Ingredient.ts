import { INGREDIENT_SOURCE } from "@constants/Ingredient.ts";
import { SimpleDish } from "@typings/Fish.ts";
import { Rank } from "@typings/Rank.ts";

export interface Ingredient extends Rank {
  id: string;
  name: string;
  source: INGREDIENT_SOURCE;
  dishList: SimpleDish[];
}
