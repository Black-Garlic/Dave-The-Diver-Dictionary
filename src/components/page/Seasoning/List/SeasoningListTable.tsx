import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { seasoningFilterListState } from "@services/Seasoning/SeasoningState.ts";
import { useCallback } from "react";
import { Dish } from "@typings/Dish.ts";
import { DISH_DETAIL_ROUTE, SEASONING_DETAIL_ROUTE } from "@constants/Route.ts";
import { SeasoningWithDishLevel } from "@typings/Seasoning.ts";
import { Button, Space, Table, Tag } from "antd";
import { ColumnsType } from "antd/es/table";
import { getSourceColor } from "@libs/sourceUtil.ts";
import { getRecipeCountSum } from "@libs/recipeUtil.ts";
import { LEVEL_LABEL } from "@constants/Level.ts";

const SeasoningListTable = () => {
  const navigate = useNavigate();
  const seasoningFilterList = useRecoilValue(seasoningFilterListState);

  const columns: ColumnsType<SeasoningWithDishLevel> = [
    {
      key: "name",
      title: "이름",
      dataIndex: "name",
      align: "center",
      onCell: (seasoningWithDishLevel) => ({
        onClick: () => handleClickRow(seasoningWithDishLevel),
      }),
    },
    {
      key: "source",
      title: "원산지",
      dataIndex: "source",
      align: "center",
      width: 150,
      onCell: (seasoningWithDishLevel) => ({
        onClick: () => handleClickRow(seasoningWithDishLevel),
      }),
      render: (_, { source }, index) => (
        <Tag color={getSourceColor(source)} key={`${source}-${index}`}>
          {source}
        </Tag>
      ),
    },
    {
      key: "time",
      title: "필요 재료",
      dataIndex: "time",
      align: "center",
      width: 150,
      onCell: (seasoningWithDishLevel) => ({
        onClick: () => handleClickRow(seasoningWithDishLevel),
      }),
      render: (_, { id, dishList }, index) => {
        const seasoningNeedCount = getRecipeCountSum(id, dishList);

        return (
          <Tag
            key={`${id}-${index}`}
            color={seasoningNeedCount === 0 ? "black" : ""}
          >
            {seasoningNeedCount}
          </Tag>
        );
      },
    },
    {
      key: "dish",
      title: "요리",
      dataIndex: "dish",
      align: "center",
      width: 350,
      render: (_, { dishList }) => (
        <Space direction={"vertical"} style={{ width: "100%" }}>
          {dishList.map((dish) => (
            <Space.Compact key={dish.id} style={{ width: "100%" }}>
              <Button
                style={{ width: "100%", textAlign: "start", display: "flex" }}
                onClick={() => handleClickDish(dish)}
              >
                <div style={{ flex: "1" }}>{dish.name}</div>

                <div>{LEVEL_LABEL[dish.level - 1]}</div>
              </Button>
            </Space.Compact>
          ))}
        </Space>
      ),
    },
  ];

  const handleClickRow = useCallback(
    (seasoningWithDishLevel: SeasoningWithDishLevel) => {
      navigate(
        SEASONING_DETAIL_ROUTE.path.replace(":id", seasoningWithDishLevel.id),
      );
    },
    [navigate],
  );

  const handleClickDish = useCallback(
    (dish: Dish) => {
      navigate(DISH_DETAIL_ROUTE.path.replace(":id", dish.id));
    },
    [navigate],
  );

  return (
    <Table
      columns={columns}
      dataSource={seasoningFilterList}
      pagination={false}
    />
  );
};

export default SeasoningListTable;
