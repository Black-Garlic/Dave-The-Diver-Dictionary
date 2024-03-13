import { useParams } from "react-router";
import { useEffect } from "react";
import { PlantWithDishLevel } from "@typings/Plant.ts";
import MainTemplate from "@components/common/MainTemplate/MainTemplate.tsx";
import { Breadcrumb, Divider } from "antd";
import DishListTable from "@components/page/Dish/List/DishListTable.tsx";
import PlantDetailInfo from "@components/page/Plant/Detail/PlantDetailInfo.tsx";
import { useSetRecoilState } from "recoil";
import { dishLevelListState } from "@services/Level/LevelState.ts";
import { plantDetailState } from "@services/Plant/PlantState.ts";
import { dishFilterListState } from "@services/Dish/DishState.ts";
import { getPlantWithDishLevel } from "@libs/plantUtil.ts";
import useBreadcrumb from "@hooks/useBreadcrumb.tsx";
import { useQuery } from "@tanstack/react-query";
import { getPlantDetail } from "@services/Plant/PlantApi.ts";
import { getDishLevelList } from "@services/Dish/DishApi.ts";
import { PROFILE_ID } from "@constants/Dish.ts";

const PlantDetailPage = () => {
  const params = useParams();

  const setPlantDetail = useSetRecoilState(plantDetailState);
  const setDishFilterList = useSetRecoilState(dishFilterListState);
  const setDishLevelList = useSetRecoilState(dishLevelListState);

  const breadcrumbItemList = useBreadcrumb();

  const { data: plantDetailData } = useQuery({
    queryKey: ["plantDetail"],
    queryFn: () => getPlantDetail(params.id || ""),
  });

  const { data: dishLevelListData } = useQuery({
    queryKey: ["dishLevelList"],
    queryFn: () => getDishLevelList(PROFILE_ID),
  });

  useEffect(() => {
    if (!plantDetailData || !dishLevelListData) return;

    const plantWithDishLevel: PlantWithDishLevel = getPlantWithDishLevel(
      plantDetailData,
      dishLevelListData,
    );

    setPlantDetail(plantWithDishLevel);
    setDishFilterList(plantWithDishLevel.dishWithLevelList);
    setDishLevelList(dishLevelListData);
  }, [
    dishLevelListData,
    params.id,
    plantDetailData,
    setDishFilterList,
    setDishLevelList,
    setPlantDetail,
  ]);

  return (
    <MainTemplate>
      <Breadcrumb items={breadcrumbItemList} />

      <PlantDetailInfo />

      <Divider />

      <DishListTable />
    </MainTemplate>
  );
};

export default PlantDetailPage;
