import MainTemplate from "@components/common/MainTemplate/MainTemplate.tsx";
import SeasoningListFilter from "@components/page/Seasoning/List/SeasoningListFilter.tsx";
import SeasoningListTable from "@components/page/Seasoning/List/SeasoningListTable.tsx";
import { useSetRecoilState } from "recoil";
import { seasoningDefaultListState } from "@services/Seasoning/SeasoningState.ts";
import { useEffect } from "react";
import { SeasoningWithDishLevel } from "@typings/Seasoning.ts";
import { getSeasoningWithDishLevelList } from "@libs/seasoningUtil.ts";
import useBreadcrumb from "@hooks/useBreadcrumb.tsx";
import { Breadcrumb } from "antd";
import { useQuery } from "@tanstack/react-query";
import { getSeasoningList } from "@services/Seasoning/SeasoningApi.ts";
import { getDishLevelList } from "@services/Dish/DishApi.ts";
import { PROFILE_ID } from "@constants/Dish.ts";

const SeasoningListPage = () => {
  const setSeasoningDefaultList = useSetRecoilState(seasoningDefaultListState);

  const breadcrumbItemList = useBreadcrumb();

  const { data: seasoningListData } = useQuery({
    queryKey: ["seasoningList"],
    queryFn: () => getSeasoningList(),
  });

  const { data: dishLevelListData } = useQuery({
    queryKey: ["dishLevelList"],
    queryFn: () => getDishLevelList(PROFILE_ID),
  });

  useEffect(() => {
    if (!seasoningListData || !dishLevelListData) return;

    const seasoningWithDishLevelList: SeasoningWithDishLevel[] =
      getSeasoningWithDishLevelList(seasoningListData, dishLevelListData);

    setSeasoningDefaultList(seasoningWithDishLevelList);
  }, [seasoningListData, dishLevelListData, setSeasoningDefaultList]);

  return (
    <MainTemplate>
      <Breadcrumb items={breadcrumbItemList} />

      <SeasoningListFilter />

      <SeasoningListTable />
    </MainTemplate>
  );
};

export default SeasoningListPage;
