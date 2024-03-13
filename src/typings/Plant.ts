import { Rank } from "@typings/Rank.ts";
import { Dish, DishWithLevel } from "@typings/Dish.ts";
import { Source } from "@typings/Source.ts";

export interface Plant extends Rank {
  plantId: string;
  name: string;
  sourceDtoList: Source[];
  dishDtoList: Dish[];
}

export interface PlantWithDishLevel extends Plant {
  dishWithLevelList: DishWithLevel[];
}
