import { Dish } from "@typings/Dish.ts";
import { DISH_LIST, RECIPE_TYPE } from "@constants/Dish.ts";
import { RECIPE_LIST } from "@constants/Recipe.ts";
import { Fish } from "@typings/Fish.ts";

export const getDish = (id: string, recipeType: RECIPE_TYPE): Dish[] => {
  console.log("id", id);
  const dishRecipeList = RECIPE_LIST.filter((dishRecipe) => {
    return dishRecipe.recipe.some(
      (recipe) => recipe.id === id && recipe.type === recipeType,
    );
  });
  console.log(dishRecipeList);

  const dishList = DISH_LIST.filter((dish) =>
    dishRecipeList.some((dishRecipe) => dishRecipe.dishId === dish.id),
  );

  console.log(dishList);

  return dishList;
};

export const getFishWithDishList = (fishList: Fish[]) => {
  return fishList.map((fish) => ({
    ...fish,
    dishList: getDish(fish.id, RECIPE_TYPE.FISH),
  }));
};
