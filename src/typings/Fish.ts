import { Rank } from "@typings/Rank.ts";
import { Dish, DishWithLevel } from "@typings/Dish.ts";
import { Tag } from "@typings/Tag.ts";

export interface Fish extends Rank {
  fishId: string;
  name: string;
  regionDto: Region;
  timeDto: Time;
  dishDtoList: Dish[];
}

export interface Region extends Tag {
  regionId: string;
}

export interface Time extends Tag {
  timeId: string;
}

export interface FishWithDishLevel extends Fish {
  dishWithLevelList: DishWithLevel[];
}
