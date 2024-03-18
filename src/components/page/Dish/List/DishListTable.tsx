import { ColumnsType } from "antd/es/table";
import { Dish, DishWithLevel, Party } from "@typings/Dish.ts";
import { Select, Table } from "antd";
import { useCallback } from "react";
import { DISH_DETAIL_ROUTE } from "@constants/Route.ts";
import { useNavigate } from "react-router-dom";
import { LEVEL_LABEL } from "@constants/Level.ts";
import { getLevelOption } from "@libs/levelUtil.ts";
import { useRecoilValue } from "recoil";
import { dishFilterListState } from "@services/Dish/DishState.ts";
import MultiTagColumn from "@components/common/Table/Column/MultiTagColumn.tsx";
import MultiColumn from "@components/common/Table/Column/MultiColumn.tsx";
import useDishLevel from "@hooks/useDishLevel.tsx";

const DishListTable = () => {
  const navigate = useNavigate();
  const { handleDishLevelChange } = useDishLevel();

  const dishListValue = useRecoilValue(dishFilterListState);

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
            handleDishLevelChange(dishId, selectedLevel)
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
      navigate(DISH_DETAIL_ROUTE.path.replace(":id", dish.dishId));
    },
    [navigate],
  );

  return (
    <Table columns={columns} dataSource={dishListValue} pagination={false} />
  );
};

export default DishListTable;
