import { ColumnsType } from "antd/es/table";
import { Dish, DishWithLevel } from "@typings/Dish.ts";
import { Select, Table } from "antd";
import { useCallback } from "react";
import { DISH_DETAIL_ROUTE } from "@constants/Route.ts";
import { useNavigate } from "react-router-dom";
import { LEVEL_LABEL } from "@constants/Level.ts";
import { getLevel, getLevelOption } from "@libs/levelUtil.ts";
import { useRecoilState, useRecoilValue } from "recoil";
import { dishFilterListState } from "@services/Dish/DishState.ts";
import { levelListState } from "@services/Level/LevelState.ts";
import { getPartyColor } from "@libs/dishUtil.ts";
import { PARTY } from "@constants/Dish.ts";
import MultiTagColumn from "@components/common/Table/Column/MultiTagColumn.tsx";
import MultiColumn from "@components/common/Table/Column/MultiColumn.tsx";

const DishListTable = () => {
  const navigate = useNavigate();

  const dishListValue = useRecoilValue(dishFilterListState);
  const [levelListValue, setLevelList] = useRecoilState(levelListState);

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
      key: "level",
      title: "레벨",
      dataIndex: "level",
      align: "center",
      width: 250,
      render: (_, { id, level, maxLevel }) => (
        <Select
          style={{ width: "100%" }}
          onChange={(selectedLevel) => handleChangeDishLevel(id, selectedLevel)}
          options={getLevelOption(maxLevel)}
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
      const newLevelList = levelListValue.map((level) => {
        if (level.id === id) {
          return { ...level, level: getLevel(selectedLevel) };
        } else {
          return level;
        }
      });

      setLevelList(newLevelList);
    },
    [levelListValue, setLevelList],
  );

  return (
    <Table columns={columns} dataSource={dishListValue} pagination={false} />
  );
};

export default DishListTable;
