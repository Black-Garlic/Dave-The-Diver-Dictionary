import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { FishWithDishLevel } from "@typings/Fish.ts";
import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { FISH_DETAIL_ROUTE } from "@constants/Route.ts";
import { getRecipeCountSum } from "@libs/recipeUtil.ts";
import { fishFilterListState } from "@services/Fish/FishState.ts";
import TagColumn from "@components/common/Table/Column/TagColumn.tsx";
import MultiDishColumn from "@components/common/Table/Column/MultiDishColumn.tsx";

const FishListTable = () => {
  const navigate = useNavigate();

  const fishFilterList = useRecoilValue(fishFilterListState);

  const columns: ColumnsType<FishWithDishLevel> = [
    {
      key: "rank",
      title: "랭크",
      dataIndex: "rank",
      align: "center",
      width: 100,
      onCell: (fishWithDish) => ({
        onClick: () => handleClickRow(fishWithDish),
      }),
    },
    {
      key: "name",
      title: "이름",
      dataIndex: "name",
      align: "center",
      onCell: (fishWithDish) => ({
        onClick: () => handleClickRow(fishWithDish),
      }),
    },
    {
      key: "region",
      title: "지역",
      dataIndex: "region",
      align: "center",
      width: 150,
      onCell: (fishWithDish) => ({
        onClick: () => handleClickRow(fishWithDish),
      }),
      render: (_, { regionDto }) => (
        <TagColumn color={regionDto.color} value={regionDto.name} />
      ),
    },
    {
      key: "time",
      title: "시간대",
      dataIndex: "time",
      align: "center",
      width: 150,
      onCell: (fishWithDish) => ({
        onClick: () => handleClickRow(fishWithDish),
      }),
      render: (_, { timeDto }) => (
        <TagColumn color={timeDto.color} value={timeDto.name} />
      ),
    },
    {
      key: "time",
      title: "필요 재료",
      dataIndex: "time",
      align: "center",
      width: 150,
      onCell: (fishWithDish) => ({
        onClick: () => handleClickRow(fishWithDish),
      }),
      render: (_, { fishId, dishList }) => {
        const fishNeedCount = getRecipeCountSum(fishId, dishList);

        return (
          <TagColumn
            color={fishNeedCount === 0 ? "black" : ""}
            value={fishNeedCount}
          />
        );
      },
    },
    {
      key: "dish",
      title: "요리",
      dataIndex: "dish",
      align: "center",
      width: 350,
      render: (_, { dishList }) => <MultiDishColumn dishList={dishList} />,
    },
  ];

  const handleClickRow = useCallback(
    (fishWithDish: FishWithDishLevel) => {
      navigate(FISH_DETAIL_ROUTE.path.replace(":id", fishWithDish.fishId));
    },
    [navigate],
  );

  return (
    <Table columns={columns} dataSource={fishFilterList} pagination={false} />
  );
};

export default FishListTable;
