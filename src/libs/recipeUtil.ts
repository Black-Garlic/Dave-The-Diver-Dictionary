import { Dish, DishWithLevel, Level } from "@typings/Dish.ts";
import { DISH_LIST, RECIPE_TYPE } from "@constants/Dish.ts";
import { RECIPE_LEVEL_UP, RECIPE_LIST } from "@constants/Recipe.ts";
import { Fish, FishWithDish, FishWithDishLevel } from "@typings/Fish.ts";
import { LEVEL } from "@constants/Level.ts";
import { DishRecipe } from "@typings/Recipe.ts";
import { getDishLevelCookie, getDishWithLevelList } from "@libs/dishUtil.ts";
import { Plant, PlantWithDishLevel } from "@typings/Plant.ts";

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
): DishWithLevel[] => {
  const dishRecipeList = RECIPE_LIST.filter((dishRecipe) =>
    dishRecipe.recipe.some(
      (recipe) => recipe.id === id && recipe.type === recipeType,
    ),
  );

  const dishList: Dish[] = DISH_LIST.filter((dish) =>
    dishRecipeList.some((dishRecipe) => dishRecipe.dishId === dish.id),
  );

  const levelList: Level[] = getDishLevelCookie();

  return getDishWithLevelList(dishList, levelList);
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

export const getFishWithDishLevelList = (
  fishList: Fish[],
): FishWithDishLevel[] => {
  return fishList.map((fish) => getFishWithDishLevel(fish));
};

export const getFishWithDishLevel = (fish: Fish): FishWithDishLevel => {
  return {
    ...fish,
    dishList: getDishWithLevelListById(fish.id, RECIPE_TYPE.FISH),
  };
};

export const getPlantWithDishLevelList = (
  plantList: Plant[],
): PlantWithDishLevel[] => {
  return plantList.map((plant) => getPlantWithDishLevel(plant));
};

export const getPlantWithDishLevel = (plant: Plant): PlantWithDishLevel => {
  return {
    ...plant,
    dishList: getDishWithLevelListById(plant.id, RECIPE_TYPE.PLANT),
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
