import MainTemplate from "@components/common/MainTemplate/MainTemplate.tsx";
import SeasoningListFilter from "@components/page/Seasoning/List/SeasoningListFilter.tsx";
import SeasoningListTable from "@components/page/Seasoning/List/SeasoningListTable.tsx";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { levelListState } from "@services/Level/LevelState.ts";
import { seasoningDefaultListState } from "@services/Seasoning/SeasoningState.ts";
import { useEffect } from "react";
import { SeasoningWithDishLevel } from "@typings/Seasoning.ts";
import { getSeasoningWithDishLevelList } from "@libs/seasoningUtil.ts";
import { SEASONING_LIST } from "@constants/Seasoning.ts";

const SeasoningListPage = () => {
  const levelListValue = useRecoilValue(levelListState);
  const setSeasoningDefaultList = useSetRecoilState(seasoningDefaultListState);

  useEffect(() => {
    const seasoningWithDishLevelList: SeasoningWithDishLevel[] =
      getSeasoningWithDishLevelList(SEASONING_LIST, levelListValue);

    setSeasoningDefaultList(seasoningWithDishLevelList);
  }, [levelListValue, setSeasoningDefaultList]);

  return (
    <MainTemplate>
      <SeasoningListFilter />

      <SeasoningListTable />
    </MainTemplate>
  );
};

export default SeasoningListPage;
