import { useRecoilValue } from "recoil";
import { dishDetailState } from "@services/Dish/DishState.ts";
import { ColumnsType } from "antd/es/table";
import { Recipe } from "@typings/Recipe.ts";
import { useCallback } from "react";
import { Table } from "antd";
import { useNavigate } from "react-router-dom";
import { RECIPE_TYPE } from "@constants/Dish.ts";
import {
  FISH_DETAIL_ROUTE,
  PLANT_DETAIL_ROUTE,
  SEASONING_DETAIL_ROUTE,
} from "@constants/Route.ts";
import { getRemainCount } from "@libs/recipeUtil.ts";

const DishRecipeTable = () => {
  const navigate = useNavigate();

  const dishDetailValue = useRecoilValue(dishDetailState);

  const columns: ColumnsType<Recipe> = [
    {
      key: "rank",
      title: "랭크",
      dataIndex: "ingredientDto.rank",
      align: "center",
      width: 250,
      render: (_, { ingredientDto }) => <>{ingredientDto.rank}</>,
    },
    {
      key: "name",
      title: "이름",
      dataIndex: "ingredientDto.name",
      align: "center",
      render: (_, { ingredientDto }) => <>{ingredientDto.name}</>,
    },
    {
      key: "type",
      title: "타입",
      dataIndex: "type",
      align: "center",
      render: (_, { type }) => {
        switch (type) {
          case "FISH":
            return RECIPE_TYPE.FISH;
          case "PLANT":
            return RECIPE_TYPE.PLANT;
          case "SEASONING":
            return RECIPE_TYPE.SEASONING;
          default:
            return <></>;
        }
      },
    },
    {
      key: "count",
      title: "재료 개수",
      dataIndex: "count",
      align: "center",
      width: 250,
    },
    {
      key: "need",
      title: "남은 개수",
      dataIndex: "need",
      align: "center",
      width: 250,
      render: (_, { count }) => (
        <>
          {getRemainCount(
            count,
            dishDetailValue.level,
            dishDetailValue.maxLevel,
          )}
        </>
      ),
    },
  ];

  const handleClickRow = useCallback(
    (recipe: Recipe) => {
      if (recipe.type === RECIPE_TYPE.FISH) {
        navigate(
          FISH_DETAIL_ROUTE.path.replace(
            ":id",
            recipe.ingredientDto.ingredientId,
          ),
        );
      }

      if (recipe.type === RECIPE_TYPE.PLANT) {
        navigate(
          PLANT_DETAIL_ROUTE.path.replace(
            ":id",
            recipe.ingredientDto.ingredientId,
          ),
        );
      }

      if (recipe.type === RECIPE_TYPE.SEASONING) {
        navigate(
          SEASONING_DETAIL_ROUTE.path.replace(
            ":id",
            recipe.ingredientDto.ingredientId,
          ),
        );
      }
    },
    [navigate],
  );

  return (
    <Table
      columns={columns}
      dataSource={dishDetailValue?.recipeDtoList || []}
      pagination={false}
      onRow={(recipe) => ({
        onClick: () => handleClickRow(recipe),
      })}
    />
  );
};

export default DishRecipeTable;
