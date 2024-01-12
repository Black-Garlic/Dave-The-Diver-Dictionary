import { PLANT_SOURCE } from "@constants/Plant.ts";
import { Rank } from "@typings/Rank.ts";

export interface Plant extends Rank {
  id: string;
  name: string;
  source: PLANT_SOURCE;
}
