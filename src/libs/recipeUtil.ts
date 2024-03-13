import { Dish, DishWithLevel, Level } from "@typings/Dish.ts";
import { DISH_LIST, RECIPE_TYPE } from "@constants/Dish.ts";
import { RECIPE_LEVEL_UP, RECIPE_LIST } from "@constants/Recipe.ts";
import { LEVEL } from "@constants/Level.ts";
import { DishRecipe, Recipe, RecipeInfo } from "@typings/Recipe.ts";
import { getDishLevelCookie, getDishWithLevelList } from "@libs/dishUtil.ts";
import { FISH_LIST } from "@constants/Fish.ts";
import { PLANT_LIST } from "@constants/Plant.ts";
import { SEASONING_LIST } from "@constants/Seasoning.ts";
import { Fish } from "@typings/Fish.ts";
import { Plant } from "@typings/Plant.ts";
import { Seasoning } from "@typings/Seasoning.ts";

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
    dishRecipeList.some((dishRecipe) => dishRecipe.dishId === dish.dishId),
  );

  if (!levelList) {
    levelList = getDishLevelCookie();
  }

  return getDishWithLevelList(dishList, levelList);
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
  const dishRecipe = getDishRecipe(dish.dishId);

  if (dishRecipe) {
    let recipeCount = 0;

    dishRecipe.recipe.forEach((recipe) => {
      if (recipe.id === id) {
        recipeCount = recipe.count;
      }
    });

    return getRemainCount(recipeCount, dish.level, dish.maxLevel);
  } else {
    return 0;
  }
};

export const getDishRecipe = (dishId: string): DishRecipe | undefined => {
  return RECIPE_LIST.find((recipe) => recipe.dishId === dishId);
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

export const getRecipeInfoList = (recipeList: Recipe[]): RecipeInfo[] => {
  const recipeInfoList: (Fish | Plant | Seasoning | undefined)[] =
    recipeList.map((recipe) => getRecipeInfo(recipe));

  const recipeInfoListExceptUndefined: RecipeInfo[] = [];

  recipeInfoList.forEach((recipeInfo) => {
    if (recipeInfo) {
      const targetRecipe = recipeList.find(
        (recipe) => recipe.id === recipeInfo.id,
      );

      if (targetRecipe) {
        recipeInfoListExceptUndefined.push({
          ...targetRecipe,
          rank: recipeInfo.rank,
          name: recipeInfo.name,
        });
      }
    }
  });

  return recipeInfoListExceptUndefined;
};

export const getRecipeInfo = (
  recipe: Recipe,
): Fish | Plant | Seasoning | undefined => {
  if (recipe.type === RECIPE_TYPE.FISH) {
    return FISH_LIST.find((fish) => fish.fishId === recipe.id);
  }

  if (recipe.type === RECIPE_TYPE.PLANT) {
    return PLANT_LIST.find((plant) => plant.plantId === recipe.id);
  }

  if (recipe.type === RECIPE_TYPE.SEASONING) {
    return SEASONING_LIST.find(
      (seasoning) => seasoning.seasoningId === recipe.id,
    );
  }
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
