import { ColumnsType } from "antd/es/table";
import { Dish, DishWithLevel } from "@typings/Dish.ts";
import { Select, Space, Table } from "antd";
import { Dispatch, SetStateAction, useCallback } from "react";
import { DISH_DETAIL_ROUTE } from "@constants/Route.ts";
import { useNavigate } from "react-router-dom";
import { LEVEL_LABEL, LEVEL_OPTION } from "@constants/Level.ts";
import { getDishWithLevelList, setDishLevelCookie } from "@libs/dishUtil.ts";
import { getLevel } from "@libs/levelUtil.ts";

interface Props {
  dishList: DishWithLevel[];
  setDishList: Dispatch<SetStateAction<DishWithLevel[]>>;
}

const DishListTable = ({ dishList, setDishList }: Props) => {
  const navigate = useNavigate();

  const columns: ColumnsType<DishWithLevel> = [
    {
      key: "name",
      title: "이름",
      dataIndex: "name",
      align: "center",
      onCell: (dish) => ({ onClick: () => handleClickRow(dish) }),
    },
    {
      key: "maxCost",
      title: "가격",
      dataIndex: "maxCost",
      align: "center",
      width: 150,
      onCell: (dish) => ({ onClick: () => handleClickRow(dish) }),
    },
    {
      key: "maxScore",
      title: "맛점수",
      dataIndex: "maxScore",
      align: "center",
      width: 150,
      onCell: (dish) => ({ onClick: () => handleClickRow(dish) }),
    },
    {
      key: "maxCount",
      title: "그릇",
      dataIndex: "maxCount",
      align: "center",
      width: 150,
      onCell: (dish) => ({ onClick: () => handleClickRow(dish) }),
    },
    {
      key: "flame",
      title: "불꽃",
      dataIndex: "flame",
      align: "center",
      width: 150,
      onCell: (dish) => ({ onClick: () => handleClickRow(dish) }),
    },
    {
      key: "party",
      title: "파티",
      dataIndex: "party",
      align: "center",
      width: 250,
      onCell: (dish) => ({ onClick: () => handleClickRow(dish) }),
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
      key: "level",
      title: "레벨",
      dataIndex: "level",
      align: "center",
      width: 250,
      render: (_, { id, level }) => (
        <Select
          style={{ width: "100%" }}
          onChange={(selectedLevel) => handleChangeDishLevel(id, selectedLevel)}
          options={LEVEL_OPTION}
          value={LEVEL_LABEL[level - 1]}
          placeholder="레벨"
          maxTagCount={"responsive"}
          listHeight={350}
        />
      ),
    },
  ];

  const handleClickRow = useCallback(
    (dish: Dish) => {
      navigate(DISH_DETAIL_ROUTE.path.replace(":id", dish.id));
    },
    [navigate],
  );

  const handleChangeDishLevel = useCallback(
    (id: string, selectedLevel: string) => {
      const newDishList = setDishLevelCookie(id, getLevel(selectedLevel));
      setDishList(getDishWithLevelList(dishList, newDishList));
    },
    [dishList, setDishList],
  );

  return <Table columns={columns} dataSource={dishList} pagination={false} />;
};

export default DishListTable;
