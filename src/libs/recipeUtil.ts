import { Dish } from "@typings/Dish.ts";
import { DISH_LIST, RECIPE_TYPE } from "@constants/Dish.ts";
import { RECIPE_LIST } from "@constants/Recipe.ts";
import { Fish, FishWithDish } from "@typings/Fish.ts";

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
