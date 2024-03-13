import { LEVEL } from "@constants/Level.ts";
import { Tag } from "@typings/Tag.ts";

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
}

export interface Party extends Tag {
  partyId: string;
}

export interface Unlock {
  unlockId: string;
  name: string;
}

export interface DishWithLevel extends Dish {
  level: LEVEL;
}

export interface Level {
  id: string;
  level: LEVEL;
}
