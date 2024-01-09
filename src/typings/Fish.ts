import { RANK } from "@constants/Rank.ts";
import { REGION } from "@constants/Region.ts";
import { TIME } from "@constants/Time.ts";

export interface Fish {
  id: string;
  name: string;
  rank: RANK;
  region: REGION;
  time: TIME;
  dishList: SimpleDish[];
}

export interface SimpleDish {
  id: string;
  name: string;
}
