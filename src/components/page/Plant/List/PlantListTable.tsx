import { ColumnsType } from "antd/es/table";
import { PlantWithDishLevel } from "@typings/Plant.ts";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { DISH_DETAIL_ROUTE, PLANT_DETAIL_ROUTE } from "@constants/Route.ts";
import { Button, Space, Table, Tag } from "antd";
import { LEVEL_LABEL } from "@constants/Level.ts";
import { getRecipeCountSum } from "@libs/recipeUtil.ts";
import { Dish } from "@typings/Dish.ts";
import { getSourceColor } from "@libs/sourceUtil.ts";
import { useRecoilValue } from "recoil";
import { plantFilterListState } from "@services/Plant/PlantState.ts";
import { PLANT_SOURCE } from "@constants/Plant.ts";

const PlantListTable = () => {
  const navigate = useNavigate();

  const plantFilterListValue = useRecoilValue(plantFilterListState);

  const columns: ColumnsType<PlantWithDishLevel> = [
    {
      key: "name",
      title: "이름",
      dataIndex: "name",
      align: "center",
      onCell: (plantWithDishLevel) => ({
        onClick: () => handleClickRow(plantWithDishLevel),
      }),
    },
    {
      key: "source",
      title: "원산지",
      dataIndex: "source",
      align: "center",
      width: 150,
      onCell: (plantWithDishLevel) => ({
        onClick: () => handleClickRow(plantWithDishLevel),
      }),
      render: (_, { id, source }, index) => (
        <Space direction={"vertical"} style={{ width: "100%" }}>
          {source?.map((source: PLANT_SOURCE) => (
            <Space.Compact key={id + source} style={{ width: "100%" }}>
              <div style={{ width: "100%" }}>
                <Tag color={getSourceColor(source)} key={`${source}-${index}`}>
                  {source}
                </Tag>
              </div>
            </Space.Compact>
          ))}
        </Space>
      ),
    },
    {
      key: "time",
      title: "필요 재료",
      dataIndex: "time",
      align: "center",
      width: 150,
      onCell: (plantWithDishLevel) => ({
        onClick: () => handleClickRow(plantWithDishLevel),
      }),
      render: (_, { id, dishList }, index) => {
        const plantNeedCount = getRecipeCountSum(id, dishList);

        return (
          <Tag
            key={`${id}-${index}`}
            color={plantNeedCount === 0 ? "black" : ""}
          >
            {plantNeedCount}
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
    (plantWithDishLevel: PlantWithDishLevel) => {
      navigate(PLANT_DETAIL_ROUTE.path.replace(":id", plantWithDishLevel.id));
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
      dataSource={plantFilterListValue}
      pagination={false}
    />
  );
};

export default PlantListTable;
