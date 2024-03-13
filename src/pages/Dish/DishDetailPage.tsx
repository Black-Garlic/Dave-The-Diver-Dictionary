import MainTemplate from "@components/common/MainTemplate/MainTemplate.tsx";
import DishDetailInfo from "@components/page/Dish/Detail/DishDetailInfo.tsx";
import { useParams } from "react-router";
import { useEffect } from "react";
import { DishWithLevel } from "@typings/Dish.ts";
import { dishDetailState, recipeListState } from "@services/Dish/DishState.ts";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { levelListState } from "@services/Level/LevelState.ts";
import { getDishWithLevel } from "@libs/dishUtil.ts";
import { DishRecipe, RecipeInfo } from "@typings/Recipe.ts";
import { getDishRecipe, getRecipeInfoList } from "@libs/recipeUtil.ts";
import { Breadcrumb, Divider } from "antd";
import DishRecipeTable from "@components/page/Dish/Detail/DishRecipeTable.tsx";
import useBreadcrumb from "@hooks/useBreadcrumb.tsx";
import { useQuery } from "@tanstack/react-query";
import { getDishDetail } from "@services/Dish/DishApi.ts";

const DishDetailPage = () => {
  const params = useParams();

  const levelList = useRecoilValue(levelListState);
  const setDishDetail = useSetRecoilState(dishDetailState);
  const setRecipeList = useSetRecoilState(recipeListState);

  const breadcrumbItemList = useBreadcrumb();

  const { data } = useQuery({
    queryKey: ["dishDetail"],
    queryFn: () => getDishDetail(params.id || ""),
  });

  useEffect(() => {
    if (!data) return;

    const dishWithLevel: DishWithLevel = getDishWithLevel(data, levelList);

    setDishDetail(dishWithLevel);

    const dishRecipe: DishRecipe | undefined = getDishRecipe(data.dishId);

    if (dishRecipe) {
      const recipeInfoList: RecipeInfo[] = getRecipeInfoList(
        dishRecipe?.recipe,
      );

      setRecipeList(recipeInfoList);
    }
  }, [data, levelList, params.id, setDishDetail, setRecipeList]);

  return (
    <MainTemplate>
      <Breadcrumb items={breadcrumbItemList} />

      <DishDetailInfo />

      <Divider />

      <DishRecipeTable />
    </MainTemplate>
  );
};

export default DishDetailPage;
