import { ColumnsType } from "antd/es/table";
import { PlantWithDishLevel } from "@typings/Plant.ts";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { PLANT_DETAIL_ROUTE } from "@constants/Route.ts";
import { Table } from "antd";
import { getRecipeCountSum } from "@libs/recipeUtil.ts";
import { getSourceColor } from "@libs/sourceUtil.ts";
import { useRecoilValue } from "recoil";
import { plantFilterListState } from "@services/Plant/PlantState.ts";
import { PLANT_SOURCE } from "@constants/Plant.ts";
import MultiTagColumn from "@components/common/Table/Column/MultiTagColumn.tsx";
import MultiColumn from "@components/common/Table/Column/MultiColumn.tsx";
import TagColumn from "@components/common/Table/Column/TagColumn.tsx";
import MultiDishColumn from "@components/common/Table/Column/MultiDishColumn.tsx";

const PlantListTable = () => {
  const navigate = useNavigate();

  const plantFilterListValue = useRecoilValue(plantFilterListState);

  const columns: ColumnsType<PlantWithDishLevel> = [
    {
      key: "name",
      title: "이름",
      dataIndex: "name",
      align: "center",
      onCell: (plantWithDishLevel) => ({
        onClick: () => handleClickRow(plantWithDishLevel),
      }),
    },
    {
      key: "source",
      title: "원산지",
      dataIndex: "source",
      align: "center",
      width: 150,
      onCell: (plantWithDishLevel) => ({
        onClick: () => handleClickRow(plantWithDishLevel),
      }),
      render: (_, { id, source }) => (
        <MultiColumn direction={"vertical"}>
          {source?.map((source: PLANT_SOURCE) => (
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
      onCell: (plantWithDishLevel) => ({
        onClick: () => handleClickRow(plantWithDishLevel),
      }),
      render: (_, { id, dishList }) => {
        const plantNeedCount = getRecipeCountSum(id, dishList);

        return (
          <TagColumn
            color={plantNeedCount === 0 ? "black" : ""}
            value={plantNeedCount}
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
    (plantWithDishLevel: PlantWithDishLevel) => {
      navigate(PLANT_DETAIL_ROUTE.path.replace(":id", plantWithDishLevel.id));
    },
    [navigate],
  );

  return (
    <Table
      columns={columns}
      dataSource={plantFilterListValue}
      pagination={false}
    />
  );
};

export default PlantListTable;
