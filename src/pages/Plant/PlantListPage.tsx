import MainTemplate from "@components/common/MainTemplate/MainTemplate.tsx";
import PlantListFilter from "@components/page/Plant/List/PlantListFilter.tsx";
import PlantListTable from "@components/page/Plant/List/PlantListTable.tsx";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { levelListState } from "@services/Level/LevelState.ts";
import { plantDefaultListState } from "@services/Plant/PlantState.ts";
import { useEffect } from "react";
import { PlantWithDishLevel } from "@typings/Plant.ts";
import { getPlantWithDishLevelList } from "@libs/plantUtil.ts";
import { PLANT_LIST } from "@constants/Plant.ts";

const PlantListPage = () => {
  const levelListValue = useRecoilValue(levelListState);
  const setPlantDefaultList = useSetRecoilState(plantDefaultListState);

  useEffect(() => {
    const plantWithDishLevelList: PlantWithDishLevel[] =
      getPlantWithDishLevelList(PLANT_LIST, levelListValue);

    setPlantDefaultList(plantWithDishLevelList);
  }, [levelListValue, setPlantDefaultList]);

  return (
    <MainTemplate>
      <PlantListFilter />

      <PlantListTable />
    </MainTemplate>
  );
};

export default PlantListPage;
