import { Option } from "@typings/Option.ts";

export enum TIME {
  DAY = "낮",
  NIGHT = "밤",
}

export const TIME_OPTION: Option[] = [
  { label: TIME.DAY, value: TIME.DAY },
  { label: TIME.NIGHT, value: TIME.NIGHT },
];
