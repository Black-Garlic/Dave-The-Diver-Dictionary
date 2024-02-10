import { useParams } from "react-router";
import { useEffect } from "react";
import { Seasoning, SeasoningWithDishLevel } from "@typings/Seasoning.ts";
import { SEASONING_LIST } from "@constants/Seasoning.ts";
import MainTemplate from "@components/common/MainTemplate/MainTemplate.tsx";
import { Divider } from "antd";
import DishListTable from "@components/page/Dish/List/DishListTable.tsx";
import SeasoningDetailInfo from "@components/page/Seasoning/Detail/SeasoningDetailInfo.tsx";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { levelListState } from "@services/Level/LevelState.ts";
import { seasoningDetailState } from "@services/Seasoning/SeasoningState.ts";
import { dishFilterListState } from "@services/Dish/DishState.ts";
import { getSeasoningWithDishLevel } from "@libs/seasoningUtil.ts";

const SeasoningDetailPage = () => {
  const params = useParams();

  const levelListValue = useRecoilValue(levelListState);
  const setSeasoningDetail = useSetRecoilState(seasoningDetailState);
  const setDishFilterList = useSetRecoilState(dishFilterListState);

  useEffect(() => {
    const targetSeasoning: Seasoning | undefined = SEASONING_LIST.find(
      (seasoning) => seasoning.id === params.id,
    );

    if (targetSeasoning) {
      const seasoningWithDishLevel: SeasoningWithDishLevel =
        getSeasoningWithDishLevel(targetSeasoning, levelListValue);

      setSeasoningDetail(seasoningWithDishLevel);
      setDishFilterList(seasoningWithDishLevel.dishList);
    }
  }, [levelListValue, params.id, setDishFilterList, setSeasoningDetail]);

  return (
    <MainTemplate>
      <SeasoningDetailInfo />

      <Divider />

      <DishListTable />
    </MainTemplate>
  );
};

export default SeasoningDetailPage;
