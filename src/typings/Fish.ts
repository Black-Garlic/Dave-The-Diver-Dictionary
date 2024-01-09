import { REGION } from "@constants/Region.ts";
import { TIME } from "@constants/Time.ts";
import { Rank } from "@typings/Rank.ts";

export interface Fish extends Rank {
  id: string;
  name: string;
  region: REGION;
  time: TIME;
  dishList: SimpleDish[];
}

export interface SimpleDish {
  id: string;
  name: string;
}
