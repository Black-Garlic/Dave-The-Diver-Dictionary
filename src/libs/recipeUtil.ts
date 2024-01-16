import { Dish } from "@typings/Dish.ts";
import { DISH_LIST, RECIPE_TYPE } from "@constants/Dish.ts";
import { RECIPE_LEVEL_UP, RECIPE_LIST } from "@constants/Recipe.ts";
import { Fish, FishWithDish } from "@typings/Fish.ts";
import { LEVEL } from "@constants/Level.ts";
import { DishRecipe } from "@typings/Recipe.ts";

export const getDish = (id: string, recipeType: RECIPE_TYPE): Dish[] => {
  const dishRecipeList = RECIPE_LIST.filter((dishRecipe) => {
    return dishRecipe.recipe.some(
      (recipe) => recipe.id === id && recipe.type === recipeType,
    );
  });

  return DISH_LIST.filter((dish) =>
    dishRecipeList.some((dishRecipe) => dishRecipe.dishId === dish.id),
  );
};

export const getFishWithDishList = (fishList: Fish[]): FishWithDish[] => {
  return fishList.map((fish) => getFishWithDish(fish));
};

export const getFishWithDish = (fish: Fish): FishWithDish => {
  return {
    ...fish,
    dishList: getDish(fish.id, RECIPE_TYPE.FISH),
  };
};

export const getDishRecipe = (dishId: string): DishRecipe | undefined => {
  return RECIPE_LIST.find((recipe) => recipe.dishId === dishId);
};

export const getRemainCount = (count: number, level: LEVEL): number => {
  const recipeLevelUpList = getRecipeLevelUpList(count);

  return recipeLevelUpList
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
