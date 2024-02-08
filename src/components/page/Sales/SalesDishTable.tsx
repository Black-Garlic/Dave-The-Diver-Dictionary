import { useRecoilState, useSetRecoilState } from "recoil";
import { dishFilterListState } from "@services/Dish/DishState.ts";
import { ColumnsType } from "antd/es/table";
import { DishWithLevel } from "@typings/Dish.ts";
import { Button, Space, Table } from "antd";
import { salesListState } from "@services/Sales/SalesState.ts";
import { Sales } from "@typings/Sales.ts";

const SalesDishTable = () => {
  const [dishListState, setDishListState] = useRecoilState(dishFilterListState);
  const setSalesListState = useSetRecoilState(salesListState);

  const columns: ColumnsType<DishWithLevel> = [
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
      width: 250,
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
    {
      key: "id",
      title: "추가",
      dataIndex: "id",
      align: "center",
      width: 250,
      render: (_, dishWithLevel) => (
        <Button onClick={() => handleClickAdd(dishWithLevel)}>추가</Button>
      ),
    },
  ];

  const handleClickAdd = (dishWithLevel: DishWithLevel) => {
    const sales: Sales = {
      count: 0,
      dish: dishWithLevel,
    };

    setSalesListState((prev) => [...prev, sales]);
    setDishListState((prev) =>
      prev.filter((dish) => dish.id !== dishWithLevel.id),
    );
  };

  return (
    <Table columns={columns} dataSource={dishListState} pagination={false} />
  );
};

export default SalesDishTable;
