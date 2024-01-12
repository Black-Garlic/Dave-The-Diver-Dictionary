import { REGION } from "@constants/Region.ts";
import { TIME } from "@constants/Time.ts";
import { Rank } from "@typings/Rank.ts";
import { Dish } from "@typings/Dish.ts";

export interface Fish extends Rank {
  id: string;
  name: string;
  region: REGION;
  time: TIME;
  dishList?: Dish[];
}

export interface FishWithDish extends Fish {
  dishList: Dish[];
}
