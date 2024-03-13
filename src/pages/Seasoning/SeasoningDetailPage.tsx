import { useParams } from "react-router";
import { useEffect } from "react";
import { SeasoningWithDishLevel } from "@typings/Seasoning.ts";
import MainTemplate from "@components/common/MainTemplate/MainTemplate.tsx";
import { Breadcrumb, Divider } from "antd";
import DishListTable from "@components/page/Dish/List/DishListTable.tsx";
import SeasoningDetailInfo from "@components/page/Seasoning/Detail/SeasoningDetailInfo.tsx";
import { useSetRecoilState } from "recoil";
import { dishLevelListState } from "@services/Level/LevelState.ts";
import { seasoningDetailState } from "@services/Seasoning/SeasoningState.ts";
import { dishFilterListState } from "@services/Dish/DishState.ts";
import { getSeasoningWithDishLevel } from "@libs/seasoningUtil.ts";
import useBreadcrumb from "@hooks/useBreadcrumb.tsx";
import { useQuery } from "@tanstack/react-query";
import { getSeasoningDetail } from "@services/Seasoning/SeasoningApi.ts";
import { getDishLevelList } from "@services/Dish/DishApi.ts";
import { PROFILE_ID } from "@constants/Dish.ts";

const SeasoningDetailPage = () => {
  const params = useParams();

  const setSeasoningDetail = useSetRecoilState(seasoningDetailState);
  const setDishFilterList = useSetRecoilState(dishFilterListState);
  const setDishLevelList = useSetRecoilState(dishLevelListState);

  const breadcrumbItemList = useBreadcrumb();

  const { data: seasoningDetailData } = useQuery({
    queryKey: ["seasoningDetail"],
    queryFn: () => getSeasoningDetail(params.id || ""),
  });

  const { data: dishLevelListData } = useQuery({
    queryKey: ["dishLevelList"],
    queryFn: () => getDishLevelList(PROFILE_ID),
  });

  useEffect(() => {
    if (!seasoningDetailData || !dishLevelListData) return;

    const seasoningWithDishLevel: SeasoningWithDishLevel =
      getSeasoningWithDishLevel(seasoningDetailData, dishLevelListData);

    setSeasoningDetail(seasoningWithDishLevel);
    setDishFilterList(seasoningWithDishLevel.dishWithLevelList);
    setDishLevelList(dishLevelListData);
  }, [
    dishLevelListData,
    params.id,
    seasoningDetailData,
    setDishFilterList,
    setDishLevelList,
    setSeasoningDetail,
  ]);

  return (
    <MainTemplate>
      <Breadcrumb items={breadcrumbItemList} />

      <SeasoningDetailInfo />

      <Divider />

      <DishListTable />
    </MainTemplate>
  );
};

export default SeasoningDetailPage;
