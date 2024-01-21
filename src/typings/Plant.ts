import { PLANT_SOURCE } from "@constants/Plant.ts";
import { Rank } from "@typings/Rank.ts";
import { Dish, DishWithLevel } from "@typings/Dish.ts";

export interface Plant extends Rank {
  id: string;
  name: string;
  source: PLANT_SOURCE;
}

export interface PlantWithDish extends Plant {
  dishList: Dish[];
}

export interface PlantWithDishLevel extends Plant {
  dishList: DishWithLevel[];
}
