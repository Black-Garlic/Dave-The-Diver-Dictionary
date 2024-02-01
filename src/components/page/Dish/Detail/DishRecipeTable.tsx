import { useRecoilValue } from "recoil";
import { dishDetailState, recipeListState } from "@services/Dish/DishState.ts";
import { ColumnsType } from "antd/es/table";
import { RecipeInfo } from "@typings/Recipe.ts";
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

  const dishDetail = useRecoilValue(dishDetailState);
  const recipeList = useRecoilValue(recipeListState);

  const columns: ColumnsType<RecipeInfo> = [
    {
      key: "rank",
      title: "랭크",
      dataIndex: "rank",
      align: "center",
      width: 250,
    },
    {
      key: "name",
      title: "이름",
      dataIndex: "name",
      align: "center",
    },
    {
      key: "type",
      title: "타입",
      dataIndex: "type",
      align: "center",
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
        <>{getRemainCount(count, dishDetail.level, dishDetail.maxLevel)}</>
      ),
    },
  ];

  const handleClickRow = useCallback(
    (recipeInfo: RecipeInfo) => {
      if (recipeInfo.type === RECIPE_TYPE.FISH) {
        navigate(FISH_DETAIL_ROUTE.path.replace(":id", recipeInfo.id));
      }

      if (recipeInfo.type === RECIPE_TYPE.PLANT) {
        navigate(PLANT_DETAIL_ROUTE.path.replace(":id", recipeInfo.id));
      }

      if (recipeInfo.type === RECIPE_TYPE.SEASONING) {
        navigate(SEASONING_DETAIL_ROUTE.path.replace(":id", recipeInfo.id));
      }
    },
    [navigate],
  );

  return (
    <Table
      columns={columns}
      dataSource={recipeList}
      pagination={false}
      onRow={(recipeInfo) => ({
        onClick: () => handleClickRow(recipeInfo),
      })}
    />
  );
};

export default DishRecipeTable;
