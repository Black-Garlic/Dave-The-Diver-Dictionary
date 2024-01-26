import { Dish, DishWithLevel, Level } from "@typings/Dish.ts";
import { DISH_LIST, RECIPE_TYPE } from "@constants/Dish.ts";
import { RECIPE_LEVEL_UP, RECIPE_LIST } from "@constants/Recipe.ts";
import { LEVEL } from "@constants/Level.ts";
import { DishRecipe } from "@typings/Recipe.ts";
import { getDishLevelCookie, getDishWithLevelList } from "@libs/dishUtil.ts";
import { Seasoning, SeasoningWithDishLevel } from "@typings/Seasoning.ts";

export const getDish = (id: string, recipeType: RECIPE_TYPE): Dish[] => {
  const dishRecipeList = RECIPE_LIST.filter((dishRecipe) =>
    dishRecipe.recipe.some(
      (recipe) => recipe.id === id && recipe.type === recipeType,
    ),
  );

  return DISH_LIST.filter((dish) =>
    dishRecipeList.some((dishRecipe) => dishRecipe.dishId === dish.id),
  );
};

export const getDishWithLevelListById = (
  id: string,
  recipeType: RECIPE_TYPE,
  levelList?: Level[],
): DishWithLevel[] => {
  const dishRecipeList = RECIPE_LIST.filter((dishRecipe) =>
    dishRecipe.recipe.some(
      (recipe) => recipe.id === id && recipe.type === recipeType,
    ),
  );

  const dishList: Dish[] = DISH_LIST.filter((dish) =>
    dishRecipeList.some((dishRecipe) => dishRecipe.dishId === dish.id),
  );

  if (!levelList) {
    levelList = getDishLevelCookie();
  }

  return getDishWithLevelList(dishList, levelList);
};

export const getSeasoningWithDishLevelList = (
  seasoningList: Seasoning[],
): SeasoningWithDishLevel[] => {
  return seasoningList.map((seasoning) => getSeasoningWithDishLevel(seasoning));
};

export const getSeasoningWithDishLevel = (
  seasoning: Seasoning,
): SeasoningWithDishLevel => {
  return {
    ...seasoning,
    dishList: getDishWithLevelListById(seasoning.id, RECIPE_TYPE.SEASONING),
  };
};

export const getDishRecipe = (dishId: string): DishRecipe | undefined => {
  return RECIPE_LIST.find((recipe) => recipe.dishId === dishId);
};

export const getRecipeCountSum = (
  id: string,
  dishWithLevelList: DishWithLevel[],
): number => {
  return dishWithLevelList
    .map((dish) => getRecipeCount(id, dish))
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};

export const getRecipeCount = (id: string, dish: DishWithLevel): number => {
  const dishRecipe = getDishRecipe(dish.id);

  if (dishRecipe) {
    let recipeCount = 0;

    dishRecipe.recipe.forEach((recipe) => {
      if (recipe.id === id) {
        recipeCount = recipe.count;
      }
    });

    return getRemainCount(recipeCount, dish.level);
  } else {
    return 0;
  }
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
