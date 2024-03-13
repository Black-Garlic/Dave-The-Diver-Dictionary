import { Rank } from "@typings/Rank.ts";
import { DishWithLevel } from "@typings/Dish.ts";
import { Source } from "@typings/Source.ts";

export interface Plant extends Rank {
  plantId: string;
  name: string;
  sourceDtoList: Source[];
}

export interface PlantWithDishLevel extends Plant {
  dishList: DishWithLevel[];
}
