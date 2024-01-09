import { SOURCE } from "@constants/Ingredient.ts";
import { SimpleDish } from "@typings/Fish.ts";

export interface Ingredient {
  id: string;
  name: string;
  source: SOURCE;
  dishList: SimpleDish[];
}
