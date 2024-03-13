import MainTemplate from "@components/common/MainTemplate/MainTemplate.tsx";
import PlantListFilter from "@components/page/Plant/List/PlantListFilter.tsx";
import PlantListTable from "@components/page/Plant/List/PlantListTable.tsx";
import { useSetRecoilState } from "recoil";
import { plantDefaultListState } from "@services/Plant/PlantState.ts";
import { useEffect } from "react";
import { PlantWithDishLevel } from "@typings/Plant.ts";
import { getPlantWithDishLevelList } from "@libs/plantUtil.ts";
import useBreadcrumb from "@hooks/useBreadcrumb.tsx";
import { Breadcrumb } from "antd";
import { useQuery } from "@tanstack/react-query";
import { getPlantList } from "@services/Plant/PlantApi.ts";
import { getDishLevelList } from "@services/Dish/DishApi.ts";
import { PROFILE_ID } from "@constants/Dish.ts";

const PlantListPage = () => {
  const setPlantDefaultList = useSetRecoilState(plantDefaultListState);

  const breadcrumbItemList = useBreadcrumb();

  const { data: plantListData } = useQuery({
    queryKey: ["plantList"],
    queryFn: () => getPlantList(),
  });

  const { data: dishLevelListData } = useQuery({
    queryKey: ["dishLevelList"],
    queryFn: () => getDishLevelList(PROFILE_ID),
  });

  useEffect(() => {
    if (!plantListData || !dishLevelListData) return;

    const plantWithDishLevelList: PlantWithDishLevel[] =
      getPlantWithDishLevelList(plantListData, dishLevelListData);

    setPlantDefaultList(plantWithDishLevelList);
  }, [plantListData, dishLevelListData, setPlantDefaultList]);

  return (
    <MainTemplate>
      <Breadcrumb items={breadcrumbItemList} />

      <PlantListFilter />

      <PlantListTable />
    </MainTemplate>
  );
};

export default PlantListPage;
