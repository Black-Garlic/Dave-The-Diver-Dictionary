import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { seasoningFilterListState } from "@services/Seasoning/SeasoningState.ts";
import { useCallback } from "react";
import { SEASONING_DETAIL_ROUTE } from "@constants/Route.ts";
import { SeasoningWithDishLevel } from "@typings/Seasoning.ts";
import { Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { getSourceColor } from "@libs/sourceUtil.ts";
import { getRecipeCountSum } from "@libs/recipeUtil.ts";
import { SEASONING_SOURCE } from "@constants/Seasoning.ts";
import MultiTagColumn from "@components/common/Table/Column/MultiTagColumn.tsx";
import MultiColumn from "@components/common/Table/Column/MultiColumn.tsx";
import TagColumn from "@components/common/Table/Column/TagColumn.tsx";
import MultiDishColumn from "@components/common/Table/Column/MultiDishColumn.tsx";

const SeasoningListTable = () => {
  const navigate = useNavigate();

  const seasoningFilterListValue = useRecoilValue(seasoningFilterListState);

  const columns: ColumnsType<SeasoningWithDishLevel> = [
    {
      key: "name",
      title: "이름",
      dataIndex: "name",
      align: "center",
      onCell: (seasoningWithDishLevel) => ({
        onClick: () => handleClickRow(seasoningWithDishLevel),
      }),
    },
    {
      key: "source",
      title: "원산지",
      dataIndex: "source",
      align: "center",
      width: 150,
      onCell: (seasoningWithDishLevel) => ({
        onClick: () => handleClickRow(seasoningWithDishLevel),
      }),
      render: (_, { id, source }) => (
        <MultiColumn direction={"vertical"}>
          {source?.map((source: SEASONING_SOURCE) => (
            <MultiTagColumn
              key={id + source}
              color={getSourceColor(source)}
              value={source}
            />
          ))}
        </MultiColumn>
      ),
    },
    {
      key: "time",
      title: "필요 재료",
      dataIndex: "time",
      align: "center",
      width: 150,
      onCell: (seasoningWithDishLevel) => ({
        onClick: () => handleClickRow(seasoningWithDishLevel),
      }),
      render: (_, { id, dishList }) => {
        const seasoningNeedCount = getRecipeCountSum(id, dishList);

        return (
          <TagColumn
            color={seasoningNeedCount === 0 ? "black" : ""}
            value={seasoningNeedCount}
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
    (seasoningWithDishLevel: SeasoningWithDishLevel) => {
      navigate(
        SEASONING_DETAIL_ROUTE.path.replace(":id", seasoningWithDishLevel.id),
      );
    },
    [navigate],
  );

  return (
    <Table
      columns={columns}
      dataSource={seasoningFilterListValue}
      pagination={false}
    />
  );
};

export default SeasoningListTable;
