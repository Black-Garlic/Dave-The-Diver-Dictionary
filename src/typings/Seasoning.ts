import { Rank } from "@typings/Rank.ts";
import { DishWithLevel } from "@typings/Dish.ts";
import { Source } from "@typings/Source.ts";

export interface Seasoning extends Rank {
  seasoningId: string;
  name: string;
  sourceDtoList: Source[];
}

export interface SeasoningWithDishLevel extends Seasoning {
  dishList: DishWithLevel[];
}
