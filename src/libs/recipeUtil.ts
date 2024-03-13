import { DishWithLevel } from "@typings/Dish.ts";
import { RECIPE_LEVEL_UP } from "@constants/Recipe.ts";
import { LEVEL } from "@constants/Level.ts";

export const getRecipeCountSum = (
  ingredientId: string,
  dishWithLevelList: DishWithLevel[],
): number => {
  return dishWithLevelList
    .map((dish) => getRecipeCount(ingredientId, dish))
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};

export const getRecipeCount = (
  ingredientId: string,
  dish: DishWithLevel,
): number => {
  let recipeCount = 0;

  dish.recipeDtoList.forEach((recipe) => {
    if (recipe.ingredientDto.ingredientId === ingredientId) {
      recipeCount = recipe.count;
    }
  });

  return getRemainCount(recipeCount, dish.dishLevel, dish.maxLevel);
};

export const getRemainCount = (
  count: number,
  level: LEVEL,
  maxLevel: LEVEL,
): number => {
  return getRecipeLevelUpList(count)
    .filter((_, index) => index < maxLevel)
    .filter((_, index) => index >= level)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};

export const getRecipeLevelUpList = (count: number): number[] => {
  if (count === 1) {
    return RECIPE_LEVEL_UP[1];
  }

  if (count === 2) {
    return RECIPE_LEVEL_UP[2];
  }

  if (count === 3) {
    return RECIPE_LEVEL_UP[3];
  }

  if (count === 5) {
    return RECIPE_LEVEL_UP[5];
  }

  return [];
};
