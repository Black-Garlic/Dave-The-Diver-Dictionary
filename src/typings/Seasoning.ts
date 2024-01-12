import { SEASONING_SOURCE } from "@constants/Seasoning.ts";
import { Rank } from "@typings/Rank.ts";

export interface Seasoning extends Rank {
  id: string;
  name: string;
  source: SEASONING_SOURCE;
}
