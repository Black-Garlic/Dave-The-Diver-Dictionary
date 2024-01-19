import { Button, Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import { FishWithDish } from "@typings/Fish.ts";
import { getRegionColor } from "@libs/regionUtil.ts";
import { getTimeColor } from "@libs/timeUtil.ts";
import { useRecoilValue } from "recoil";
import { fishListState } from "@services/Fish/FishState.ts";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { DISH_DETAIL_ROUTE, FISH_DETAIL_ROUTE } from "@constants/Route.ts";
import { Dish } from "@typings/Dish.ts";

const FishListTable = () => {
  const navigate = useNavigate();
  const fishRecoilList = useRecoilValue(fishListState);

  const columns: ColumnsType<FishWithDish> = [
    {
      key: "rank",
      title: "랭크",
      dataIndex: "rank",
      align: "center",
      width: 100,
      onCell: (fishWithDish) => ({
        onClick: () => handleClickRow(fishWithDish),
      }),
    },
    {
      key: "name",
      title: "이름",
      dataIndex: "name",
      align: "center",
      onCell: (fishWithDish) => ({
        onClick: () => handleClickRow(fishWithDish),
      }),
    },
    {
      key: "region",
      title: "지역",
      dataIndex: "region",
      align: "center",
      width: 150,
      onCell: (fishWithDish) => ({
        onClick: () => handleClickRow(fishWithDish),
      }),
      render: (_, { region }, index) => (
        <Tag color={getRegionColor(region)} key={`${region}-${index}`}>
          {region}
        </Tag>
      ),
    },
    {
      key: "time",
      title: "시간대",
      dataIndex: "time",
      align: "center",
      width: 150,
      onCell: (fishWithDish) => ({
        onClick: () => handleClickRow(fishWithDish),
      }),
      render: (_, { time }, index) => (
        <Tag color={getTimeColor(time)} key={`${time}-${index}`}>
          {time}
        </Tag>
      ),
    },
    {
      key: "time",
      title: "필요 재료",
      dataIndex: "time",
      align: "center",
      width: 150,
      onCell: (fishWithDish) => ({
        onClick: () => handleClickRow(fishWithDish),
      }),
      render: (_, { time }, index) => (
        <Tag color={getTimeColor(time)} key={`${time}-${index}`}>
          {time}
        </Tag>
      ),
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
                style={{ width: "100%", textAlign: "start" }}
                onClick={() => handleClickDish(dish)}
              >
                {dish.name}
              </Button>
            </Space.Compact>
          ))}
        </Space>
      ),
    },
  ];

  const handleClickRow = useCallback(
    (fishWithDish: FishWithDish) => {
      navigate(FISH_DETAIL_ROUTE.path.replace(":id", fishWithDish.id));
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
    <Table columns={columns} dataSource={fishRecoilList} pagination={false} />
  );
};

export default FishListTable;
