import { PLANT_SOURCE } from "@constants/Plant.ts";
import { Rank } from "@typings/Rank.ts";
import { DishWithLevel } from "@typings/Dish.ts";

export interface Plant extends Rank {
  id: string;
  name: string;
  source: PLANT_SOURCE[];
}

export interface PlantWithDishLevel extends Plant {
  dishList: DishWithLevel[];
}
