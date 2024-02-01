import { LEVEL, LEVEL_OPTION } from "@constants/Level.ts";
import { Option } from "@typings/Option.ts";

export const getLevelOption = (level: LEVEL): Option[] => {
  return LEVEL_OPTION.filter((_, index) => index < level);
};

export const getLevel = (level: string): LEVEL => {
  switch (parseInt(level)) {
    case 1:
      return LEVEL.ONE;
    case 2:
      return LEVEL.TWO;
    case 3:
      return LEVEL.THREE;
    case 4:
      return LEVEL.FOUR;
    case 5:
      return LEVEL.FIVE;
    case 6:
      return LEVEL.SIX;
    case 7:
      return LEVEL.SEVEN;
    case 8:
      return LEVEL.EIGHT;
    case 9:
      return LEVEL.NINE;
    case 10:
      return LEVEL.TEN;
  }

  return LEVEL.ONE;
};
