import { ColumnsType } from "antd/es/table";
import { Dish } from "@typings/Dish.ts";
import { Space, Table } from "antd";
import { useCallback } from "react";
import { DISH_DETAIL_ROUTE } from "@constants/Route.ts";
import { useNavigate } from "react-router-dom";

interface Props {
  dishList?: Dish[];
}

const DishListTable = ({ dishList }: Props) => {
  const navigate = useNavigate();

  const columns: ColumnsType<Dish> = [
    {
      key: "name",
      title: "이름",
      dataIndex: "name",
      align: "center",
    },
    {
      key: "maxCost",
      title: "가격",
      dataIndex: "maxCost",
      align: "center",
      width: 150,
    },
    {
      key: "maxScore",
      title: "맛점수",
      dataIndex: "maxScore",
      align: "center",
      width: 150,
    },
    {
      key: "maxCount",
      title: "그릇",
      dataIndex: "maxCount",
      align: "center",
      width: 150,
    },
    {
      key: "flame",
      title: "불꽃",
      dataIndex: "flame",
      align: "center",
      width: 150,
    },
    {
      key: "party",
      title: "파티",
      dataIndex: "party",
      align: "center",
      width: 300,
      render: (_, { id, party }) => (
        <Space direction={"vertical"} style={{ width: "100%" }}>
          {party &&
            party.map((party) => (
              <Space.Compact key={id + party} style={{ width: "100%" }}>
                <p style={{ width: "100%", textAlign: "center" }}>{party}</p>
              </Space.Compact>
            ))}
        </Space>
      ),
    },
  ];

  const handleClickRow = useCallback(
    (dish: Dish) => {
      navigate(DISH_DETAIL_ROUTE.path.replace(":id", dish.id));
    },
    [navigate],
  );

  return (
    <Table
      columns={columns}
      dataSource={dishList}
      pagination={false}
      onRow={(dish) => ({
        onClick: () => handleClickRow(dish),
      })}
    />
  );
};

export default DishListTable;
