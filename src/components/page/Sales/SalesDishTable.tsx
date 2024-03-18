import { useRecoilState, useSetRecoilState } from "recoil";
import { dishFilterListState } from "@services/Dish/DishState.ts";
import { ColumnsType } from "antd/es/table";
import { DishWithLevel, Party } from "@typings/Dish.ts";
import { Table } from "antd";
import { salesListState } from "@services/Sales/SalesState.ts";
import { Sales } from "@typings/Sales.ts";
import MultiTagColumn from "@components/common/Table/Column/MultiTagColumn.tsx";
import MultiColumn from "@components/common/Table/Column/MultiColumn.tsx";
import ButtonColumn from "@components/common/Table/Column/ButtonColumn.tsx";

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
      render: (_, { dishId, partyDtoList }) => (
        <MultiColumn direction={"vertical"}>
          {partyDtoList?.map((party: Party) => (
            <MultiTagColumn
              key={dishId + party.partyId}
              color={party.color}
              value={party.name}
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
        <ButtonColumn
          handleClick={() => handleClickAdd(dishWithLevel)}
          label={"추가"}
        />
      ),
    },
  ];

  const handleClickAdd = (dishWithLevel: DishWithLevel) => {
    const sales: Sales = {
      count: 0,
      dish: dishWithLevel,
    };

    setSalesList((prev) => [...prev, sales]);
    setDishList((prev) =>
      prev.filter((dish) => dish.dishId !== dishWithLevel.dishId),
    );
  };

  return (
    <Table
      rowKey={(record) => "SalesDishTable-" + record.dishId}
      columns={columns}
      dataSource={dishListValue}
      pagination={false}
    />
  );
};

export default SalesDishTable;
