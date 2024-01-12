import { SEASONING_SOURCE } from "@constants/Seasoning.ts";
import { Rank } from "@typings/Rank.ts";
import { SimpleDish } from "@typings/Dish.ts";

export interface Seasoning extends Rank {
  id: string;
  name: string;
  source: SEASONING_SOURCE;
  dishList: SimpleDish[];
}