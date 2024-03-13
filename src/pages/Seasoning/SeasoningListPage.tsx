import MainTemplate from "@components/common/MainTemplate/MainTemplate.tsx";
import SeasoningListFilter from "@components/page/Seasoning/List/SeasoningListFilter.tsx";
import SeasoningListTable from "@components/page/Seasoning/List/SeasoningListTable.tsx";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { levelListState } from "@services/Level/LevelState.ts";
import { seasoningDefaultListState } from "@services/Seasoning/SeasoningState.ts";
import { useEffect } from "react";
import { SeasoningWithDishLevel } from "@typings/Seasoning.ts";
import { getSeasoningWithDishLevelList } from "@libs/seasoningUtil.ts";
import useBreadcrumb from "@hooks/useBreadcrumb.tsx";
import { Breadcrumb } from "antd";
import { useQuery } from "@tanstack/react-query";
import { getSeasoningList } from "@services/Seasoning/SeasoningApi.ts";

const SeasoningListPage = () => {
  const levelListValue = useRecoilValue(levelListState);
  const setSeasoningDefaultList = useSetRecoilState(seasoningDefaultListState);

  const breadcrumbItemList = useBreadcrumb();

  const { data } = useQuery({
    queryKey: ["seasoningList"],
    queryFn: () => getSeasoningList(),
  });

  useEffect(() => {
    if (!data) return;

    const seasoningWithDishLevelList: SeasoningWithDishLevel[] =
      getSeasoningWithDishLevelList(data, levelListValue);

    setSeasoningDefaultList(seasoningWithDishLevelList);
  }, [data, levelListValue, setSeasoningDefaultList]);

  return (
    <MainTemplate>
      <Breadcrumb items={breadcrumbItemList} />

      <SeasoningListFilter />

      <SeasoningListTable />
    </MainTemplate>
  );
};

export default SeasoningListPage;
