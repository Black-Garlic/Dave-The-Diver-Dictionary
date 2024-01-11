import { UNLOCK_TYPE } from "@constants/Dish.ts";

export interface Dish {
  id: string;
  name: string;
  unlockType?: UNLOCK_TYPE | string;
  maxCost: number;
  maxScore: number;
  maxCount: number;
}

export interface SimpleDish {
  id: string;
  name: string;
}
