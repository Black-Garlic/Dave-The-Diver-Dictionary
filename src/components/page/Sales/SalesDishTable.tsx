import { useRecoilState, useSetRecoilState } from "recoil";
import { dishFilterListState } from "@services/Dish/DishState.ts";
import { ColumnsType } from "antd/es/table";
import { DishWithLevel } from "@typings/Dish.ts";
import { Button, Table } from "antd";
import { salesListState } from "@services/Sales/SalesState.ts";
import { Sales } from "@typings/Sales.ts";
import { PARTY } from "@constants/Dish.ts";
import MultiTagColumn from "@components/common/Table/Column/MultiTagColumn.tsx";
import { getPartyColor } from "@libs/dishUtil.ts";
import MultiColumn from "@components/common/Table/Column/MultiColumn.tsx";

const SalesDishTable = () => {
  const [dishListValue, setDishList] = useRecoilState(dishFilterListState);
  const setSalesList = useSetRecoilState(salesListState);

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
        <MultiColumn direction={"vertical"}>
          {party?.map((party: PARTY) => (
            <MultiTagColumn
              key={id + party}
              color={getPartyColor(party)}
              value={party}
            />
          ))}
        </MultiColumn>
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

    setSalesList((prev) => [...prev, sales]);
    setDishList((prev) => prev.filter((dish) => dish.id !== dishWithLevel.id));
  };

  return (
    <Table columns={columns} dataSource={dishListValue} pagination={false} />
  );
};

export default SalesDishTable;
