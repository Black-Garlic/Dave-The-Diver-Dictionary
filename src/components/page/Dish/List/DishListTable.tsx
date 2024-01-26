import { ColumnsType } from "antd/es/table";
import { Dish, DishWithLevel } from "@typings/Dish.ts";
import { Select, Space, Table } from "antd";
import { useCallback } from "react";
import { DISH_DETAIL_ROUTE } from "@constants/Route.ts";
import { useNavigate } from "react-router-dom";
import { LEVEL_LABEL, LEVEL_OPTION } from "@constants/Level.ts";
import { getLevel } from "@libs/levelUtil.ts";
import { useRecoilState, useRecoilValue } from "recoil";
import { dishFilterListState } from "@services/Dish/DishState.ts";
import { levelListState } from "@services/Level/LevelState.ts";

const DishListTable = () => {
  const navigate = useNavigate();

  const dishList = useRecoilValue(dishFilterListState);
  const [levelList, setLevelListState] = useRecoilState(levelListState);

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
      const newLevelList = levelList.map((level) => {
        if (level.id === id) {
          return { ...level, level: getLevel(selectedLevel) };
        } else {
          return level;
        }
      });

      setLevelListState(newLevelList);
    },
    [levelList, setLevelListState],
  );

  return <Table columns={columns} dataSource={dishList} pagination={false} />;
};

export default DishListTable;
