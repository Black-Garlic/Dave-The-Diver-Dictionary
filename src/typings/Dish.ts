import { PARTY, UNLOCK_TYPE } from "@constants/Dish.ts";

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
