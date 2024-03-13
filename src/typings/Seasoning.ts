import { Rank } from "@typings/Rank.ts";
import { Dish, DishWithLevel } from "@typings/Dish.ts";
import { Source } from "@typings/Source.ts";

export interface Seasoning extends Rank {
  seasoningId: string;
  name: string;
  sourceDtoList: Source[];
  dishDtoList: Dish[];
}

export interface SeasoningWithDishLevel extends Seasoning {
  dishWithLevelList: DishWithLevel[];
}
