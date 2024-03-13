import { useParams } from "react-router";
import { useEffect } from "react";
import { SeasoningWithDishLevel } from "@typings/Seasoning.ts";
import MainTemplate from "@components/common/MainTemplate/MainTemplate.tsx";
import { Breadcrumb, Divider } from "antd";
import DishListTable from "@components/page/Dish/List/DishListTable.tsx";
import SeasoningDetailInfo from "@components/page/Seasoning/Detail/SeasoningDetailInfo.tsx";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { dishLevelListState } from "@services/Level/LevelState.ts";
import { seasoningDetailState } from "@services/Seasoning/SeasoningState.ts";
import { dishFilterListState } from "@services/Dish/DishState.ts";
import { getSeasoningWithDishLevel } from "@libs/seasoningUtil.ts";
import useBreadcrumb from "@hooks/useBreadcrumb.tsx";
import { useQuery } from "@tanstack/react-query";
import { getSeasoningDetail } from "@services/Seasoning/SeasoningApi.ts";

const SeasoningDetailPage = () => {
  const params = useParams();

  const levelListValue = useRecoilValue(dishLevelListState);
  const setSeasoningDetail = useSetRecoilState(seasoningDetailState);
  const setDishFilterList = useSetRecoilState(dishFilterListState);

  const breadcrumbItemList = useBreadcrumb();

  const { data } = useQuery({
    queryKey: ["seasoningDetail"],
    queryFn: () => getSeasoningDetail(params.id || ""),
  });

  useEffect(() => {
    if (!data) return;

    const seasoningWithDishLevel: SeasoningWithDishLevel =
      getSeasoningWithDishLevel(data, levelListValue);

    setSeasoningDetail(seasoningWithDishLevel);
    setDishFilterList(seasoningWithDishLevel.dishWithLevelList);
  }, [data, levelListValue, params.id, setDishFilterList, setSeasoningDetail]);

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
