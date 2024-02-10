import { useParams } from "react-router";
import { useEffect } from "react";
import { Plant, PlantWithDishLevel } from "@typings/Plant.ts";
import { PLANT_LIST } from "@constants/Plant.ts";
import MainTemplate from "@components/common/MainTemplate/MainTemplate.tsx";
import { Divider } from "antd";
import DishListTable from "@components/page/Dish/List/DishListTable.tsx";
import PlantDetailInfo from "@components/page/Plant/Detail/PlantDetailInfo.tsx";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { levelListState } from "@services/Level/LevelState.ts";
import { plantDetailState } from "@services/Plant/PlantState.ts";
import { dishFilterListState } from "@services/Dish/DishState.ts";
import { getPlantWithDishLevel } from "@libs/plantUtil.ts";

const PlantDetailPage = () => {
  const params = useParams();

  const levelListValue = useRecoilValue(levelListState);
  const setPlantDetail = useSetRecoilState(plantDetailState);
  const setDishFilterList = useSetRecoilState(dishFilterListState);

  useEffect(() => {
    const targetPlant: Plant | undefined = PLANT_LIST.find(
      (plant) => plant.id === params.id,
    );

    if (targetPlant) {
      const plantWithDishLevel: PlantWithDishLevel = getPlantWithDishLevel(
        targetPlant,
        levelListValue,
      );

      setPlantDetail(plantWithDishLevel);
      setDishFilterList(plantWithDishLevel.dishList);
    }
  }, [levelListValue, params.id, setDishFilterList, setPlantDetail]);

  return (
    <MainTemplate>
      <PlantDetailInfo />

      <Divider />

      <DishListTable />
    </MainTemplate>
  );
};

export default PlantDetailPage;
