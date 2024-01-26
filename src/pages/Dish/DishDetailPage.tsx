import MainTemplate from "@components/common/MainTemplate/MainTemplate.tsx";
import DishDetailInfo from "@components/page/Dish/Detail/DishDetailInfo.tsx";
import { useParams } from "react-router";
import { useEffect } from "react";
import { Dish, DishWithLevel } from "@typings/Dish.ts";
import { dishDetailState, recipeListState } from "@services/Dish/DishState.ts";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { levelListState } from "@services/Level/LevelState.ts";
import { DISH_LIST } from "@constants/Dish.ts";
import { getDishWithLevel } from "@libs/dishUtil.ts";
import { DishRecipe, RecipeInfo } from "@typings/Recipe.ts";
import { getDishRecipe, getRecipeInfoList } from "@libs/recipeUtil.ts";
import { Divider } from "antd";
import DishRecipeTable from "@components/page/Dish/Detail/DishRecipeTable.tsx";

const DishDetailPage = () => {
  const params = useParams();

  const levelList = useRecoilValue(levelListState);
  const setDishDetailState = useSetRecoilState(dishDetailState);
  const setRecipeListState = useSetRecoilState(recipeListState);

  useEffect(() => {
    const targetDish: Dish | undefined = DISH_LIST.find(
      (dish) => dish.id === params.id,
    );

    if (targetDish) {
      const dishWithLevel: DishWithLevel = getDishWithLevel(
        targetDish,
        levelList,
      );

      setDishDetailState(dishWithLevel);

      const dishRecipe: DishRecipe | undefined = getDishRecipe(targetDish.id);

      if (dishRecipe) {
        const recipeInfoList: RecipeInfo[] = getRecipeInfoList(
          dishRecipe?.recipe,
        );

        setRecipeListState(recipeInfoList);
      }
    }
  }, [levelList, params.id, setDishDetailState, setRecipeListState]);

  return (
    <MainTemplate>
      <DishDetailInfo />

      <Divider />

      <DishRecipeTable />
    </MainTemplate>
  );
};

export default DishDetailPage;
