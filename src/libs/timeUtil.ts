import { TIME } from "@constants/Time.ts";
import { COLOR } from "@constants/Color.ts";

export const getTimeColor = (time: string): string => {
  if (time === TIME.DAY) {
    return COLOR.BLUE;
  }

  if (time === TIME.NIGHT) {
    return COLOR.BLACK;
  }

  return COLOR.NONE;
};
