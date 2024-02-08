import { Button, Space, Table } from "antd";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { ColumnsType } from "antd/es/table";
import { Sales } from "@typings/Sales.ts";
import { salesListState } from "@services/Sales/SalesState.ts";
import {
  dishDefaultListState,
  dishFilterListState,
} from "@services/Dish/DishState.ts";

const SalesTable = () => {
  const dishDefaultList = useRecoilValue(dishDefaultListState);
  const setDishFilterList = useSetRecoilState(dishFilterListState);
  const [salesList, setSalesListState] = useRecoilState(salesListState);

  const columns: ColumnsType<Sales> = [
    {
      key: "name",
      title: "이름",
      dataIndex: "name",
      align: "center",
      render: (_, { dish }) => <>{dish.name}</>,
    },
    {
      key: "maxCost",
      title: "가격",
      dataIndex: "maxCost",
      align: "center",
      width: 150,
      render: (_, { dish }) => <>{dish.maxCost}</>,
    },
    {
      key: "maxScore",
      title: "맛점수",
      dataIndex: "maxScore",
      align: "center",
      width: 150,
      render: (_, { dish }) => <>{dish.maxScore}</>,
    },
    {
      key: "maxCount",
      title: "그릇",
      dataIndex: "maxCount",
      align: "center",
      width: 150,
      render: (_, { dish }) => <>{dish.maxCount}</>,
    },
    {
      key: "count",
      title: "판매 개수",
      dataIndex: "count",
      align: "center",
      width: 150,
      render: (_, sales) => (
        <Space direction={"horizontal"}>
          <Button onClick={() => handleClickCount(sales, false)}>-</Button>

          {sales.count}

          <Button onClick={() => handleClickCount(sales, true)}>+</Button>
        </Space>
      ),
    },
    {
      key: "id",
      title: "삭제",
      dataIndex: "id",
      align: "center",
      width: 250,
      render: (_, sales) => (
        <Button onClick={() => handleClickRemove(sales)}>삭제</Button>
      ),
    },
  ];

  const handleClickCount = (sales: Sales, isAdd: boolean) => {
    if (isAdd) {
      setSalesListState((prev) =>
        prev.map((salesInfo) => {
          if (salesInfo.dish.id === sales.dish.id) {
            return { ...salesInfo, count: sales.count + 1 };
          } else {
            return salesInfo;
          }
        }),
      );
    } else {
      if (sales.count >= 1) {
        setSalesListState((prev) =>
          prev.map((salesInfo) => {
            if (salesInfo.dish.id === sales.dish.id) {
              return { ...salesInfo, count: sales.count - 1 };
            } else {
              return salesInfo;
            }
          }),
        );
      }
    }
  };

  const handleClickRemove = (sales: Sales) => {
    const newSalesList = salesList.filter(
      (salesInfo) => salesInfo.dish.id !== sales.dish.id,
    );

    setSalesListState(newSalesList);
    setDishFilterList(
      dishDefaultList.filter(
        (dish) =>
          !newSalesList.some((salesInfo) => salesInfo.dish.id === dish.id),
      ),
    );
  };

  return <Table columns={columns} dataSource={salesList} pagination={false} />;
};

export default SalesTable;
