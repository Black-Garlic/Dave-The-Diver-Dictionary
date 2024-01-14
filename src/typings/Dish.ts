import { PARTY, UNLOCK_TYPE } from "@constants/Dish.ts";
import { LEVEL } from "@constants/Level.ts";

export interface Dish {
  id: string;
  name: string;
  unlock?: UNLOCK_TYPE | string;
  maxCost: number;
  maxScore: number;
  maxCount: number;
  flame?: number;
  party?: PARTY[];
}

export interface DishWithLevel extends Dish {
  level: LEVEL;
}

export interface Level {
  id: string;
  level: LEVEL;
}
