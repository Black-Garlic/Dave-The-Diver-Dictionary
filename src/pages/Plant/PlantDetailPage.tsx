import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { Plant, PlantWithDishLevel } from "@typings/Plant.ts";
import { PLANT_LIST } from "@constants/Plant.ts";
import { getPlantWithDishLevel } from "@libs/recipeUtil.ts";
import MainTemplate from "@components/common/MainTemplate/MainTemplate.tsx";
import { Divider } from "antd";
import DishListTable from "@components/page/Dish/List/DishListTable.tsx";
import { DishWithLevel } from "@typings/Dish.ts";
import PlantDetailInfo from "@components/page/Plant/Detail/PlantDetailInfo.tsx";

const PlantDetailPage = () => {
  const params = useParams();

  const [plant, setPlant] = useState<PlantWithDishLevel>();
  const [dishList, setDishList] = useState<DishWithLevel[]>([]);

  useEffect(() => {
    const targetPlant: Plant | undefined = PLANT_LIST.find(
      (plant) => plant.id === params.id,
    );

    if (targetPlant) {
      const plantWithDishLevel: PlantWithDishLevel =
        getPlantWithDishLevel(targetPlant);

      setPlant(plantWithDishLevel);
      setDishList(plantWithDishLevel.dishList);
    }
  }, [params.id]);

  return (
    <MainTemplate>
      {plant && <PlantDetailInfo plant={plant} />}

      <Divider />

      <DishListTable dishList={dishList} setDishList={setDishList} />
    </MainTemplate>
  );
};

export default PlantDetailPage;
