import MainTemplate from "@components/common/MainTemplate/MainTemplate.tsx";
import PlantListFilter from "@components/page/Plant/List/PlantListFilter.tsx";
import PlantListTable from "@components/page/Plant/List/PlantListTable.tsx";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { levelListState } from "@services/Level/LevelState.ts";
import { plantDefaultListState } from "@services/Plant/PlantState.ts";
import { useEffect } from "react";
import { PlantWithDishLevel } from "@typings/Plant.ts";
import { getPlantWithDishLevelList } from "@libs/plantUtil.ts";
import useBreadcrumb from "@hooks/useBreadcrumb.tsx";
import { Breadcrumb } from "antd";
import { useQuery } from "@tanstack/react-query";
import { getPlantList } from "@services/Plant/PlantApi.ts";

const PlantListPage = () => {
  const levelListValue = useRecoilValue(levelListState);
  const setPlantDefaultList = useSetRecoilState(plantDefaultListState);

  const breadcrumbItemList = useBreadcrumb();

  const { data: plantListData } = useQuery({
    queryKey: ["plantList"],
    queryFn: () => getPlantList(),
  });

  useEffect(() => {
    if (!plantListData) return;

    const plantWithDishLevelList: PlantWithDishLevel[] =
      getPlantWithDishLevelList(plantListData, levelListValue);

    setPlantDefaultList(plantWithDishLevelList);
  }, [plantListData, levelListValue, setPlantDefaultList]);

  return (
    <MainTemplate>
      <Breadcrumb items={breadcrumbItemList} />

      <PlantListFilter />

      <PlantListTable />
    </MainTemplate>
  );
};

export default PlantListPage;
