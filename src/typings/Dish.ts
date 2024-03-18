import { LEVEL } from "@constants/Level.ts";
import { Tag } from "@typings/Tag.ts";
import { Recipe } from "@typings/Recipe.ts";

export interface Dish {
  dishId: string;
  name: string;
  maxCost: number;
  maxScore: number;
  maxCount: number;
  maxLevel: LEVEL;
  flame?: number;
  unlockDto?: Unlock;
  partyDtoList?: Party[];
  recipeDtoList: Recipe[];
  rank: number;
}

export interface Party extends Tag {
  partyId: string;
}

export interface Unlock {
  unlockId: string;
  name: string;
}

export interface DishWithLevel extends Dish {
  dishLevel: LEVEL;
}

export interface DishLevel {
  dishLevelId: string;
  dishId: string;
  dishLevel: LEVEL;
}

export interface UpdateDishLevel {
  profileId: string;
  dishId: string;
  dishLevel: number;
}
