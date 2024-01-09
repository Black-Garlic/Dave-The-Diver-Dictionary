import { TIME } from "@constants/Time.ts";

export const getTimeColor = (time: string): string => {
  if (time === TIME.DAY) {
    return "blue";
  }

  if (time === TIME.NIGHT) {
    return "black";
  }

  return "";
};
