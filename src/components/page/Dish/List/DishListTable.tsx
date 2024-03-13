import { ColumnsType } from "antd/es/table";
import { Dish, DishWithLevel, Party } from "@typings/Dish.ts";
import { Select, Table } from "antd";
import { useCallback } from "react";
import { DISH_DETAIL_ROUTE } from "@constants/Route.ts";
import { useNavigate } from "react-router-dom";
import { LEVEL_LABEL } from "@constants/Level.ts";
import { getLevel, getLevelOption } from "@libs/levelUtil.ts";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  dishFilterListState,
  dishLevelListState,
} from "@services/Dish/DishState.ts";
import MultiTagColumn from "@components/common/Table/Column/MultiTagColumn.tsx";
import MultiColumn from "@components/common/Table/Column/MultiColumn.tsx";

const DishListTable = () => {
  const navigate = useNavigate();

  const dishListValue = useRecoilValue(dishFilterListState);
  const [dishLevelListValue, setDishLevelList] =
    useRecoilState(dishLevelListState);

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
      key: "level",
      title: "레벨",
      dataIndex: "level",
      align: "center",
      width: 250,
      render: (_, { dishId, dishLevel, maxLevel }) => (
        <Select
          style={{ width: "100%" }}
          onChange={(selectedLevel) =>
            handleChangeDishLevel(dishId, selectedLevel)
          }
          options={getLevelOption(maxLevel)}
          value={LEVEL_LABEL[dishLevel - 1]}
          placeholder="레벨"
          maxTagCount={"responsive"}
          listHeight={350}
        />
      ),
    },
  ];

  const handleClickRow = useCallback(
    (dish: Dish) => {
      console.log(dish);
      navigate(DISH_DETAIL_ROUTE.path.replace(":id", dish.dishId));
    },
    [navigate],
  );

  const handleChangeDishLevel = useCallback(
    (dishId: string, selectedLevel: string) => {
      const newLevelList = dishLevelListValue.map((dishLevel) => {
        if (dishLevel.dishId === dishId) {
          return { ...dishLevel, level: getLevel(selectedLevel) };
        } else {
          return dishLevel;
        }
      });

      setDishLevelList(newLevelList);
    },
    [dishLevelListValue, setDishLevelList],
  );

  return (
    <Table columns={columns} dataSource={dishListValue} pagination={false} />
  );
};

export default DishListTable;
