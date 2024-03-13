import { useParams } from "react-router";
import { useEffect } from "react";
import { PlantWithDishLevel } from "@typings/Plant.ts";
import MainTemplate from "@components/common/MainTemplate/MainTemplate.tsx";
import { Breadcrumb, Divider } from "antd";
import DishListTable from "@components/page/Dish/List/DishListTable.tsx";
import PlantDetailInfo from "@components/page/Plant/Detail/PlantDetailInfo.tsx";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { levelListState } from "@services/Level/LevelState.ts";
import { plantDetailState } from "@services/Plant/PlantState.ts";
import { dishFilterListState } from "@services/Dish/DishState.ts";
import { getPlantWithDishLevel } from "@libs/plantUtil.ts";
import useBreadcrumb from "@hooks/useBreadcrumb.tsx";
import { useQuery } from "@tanstack/react-query";
import { getPlantDetail } from "@services/Plant/PlantApi.ts";

const PlantDetailPage = () => {
  const params = useParams();

  const levelListValue = useRecoilValue(levelListState);
  const setPlantDetail = useSetRecoilState(plantDetailState);
  const setDishFilterList = useSetRecoilState(dishFilterListState);

  const breadcrumbItemList = useBreadcrumb();

  const { data } = useQuery({
    queryKey: ["plantDetail"],
    queryFn: () => getPlantDetail(params.id || ""),
  });

  useEffect(() => {
    if (!data) return;

    const plantWithDishLevel: PlantWithDishLevel = getPlantWithDishLevel(
      data,
      levelListValue,
    );

    setPlantDetail(plantWithDishLevel);
    setDishFilterList(plantWithDishLevel.dishList);
  }, [data, levelListValue, params.id, setDishFilterList, setPlantDetail]);

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
