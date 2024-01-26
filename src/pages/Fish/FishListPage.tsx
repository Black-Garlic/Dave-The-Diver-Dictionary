import FishListTable from "@components/page/Fish/List/FishListTable.tsx";
import FishListFilter from "@components/page/Fish/List/FishListFilter.tsx";
import MainTemplate from "@components/common/MainTemplate/MainTemplate.tsx";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { levelListState } from "@services/Level/LevelState.ts";
import { fishDefaultListState } from "@services/Fish/FishState.ts";
import { useEffect } from "react";
import { getFishWithDishLevelList } from "@libs/recipeUtil.ts";
import { FISH_LIST } from "@constants/Fish.ts";

const FishListPage = () => {
  const levelList = useRecoilValue(levelListState);
  const setFishDefaultList = useSetRecoilState(fishDefaultListState);

  useEffect(() => {
    const fishWithDishLevelList = getFishWithDishLevelList(
      FISH_LIST,
      levelList,
    );

    setFishDefaultList(fishWithDishLevelList);
  }, [levelList, setFishDefaultList]);

  return (
    <MainTemplate>
      <FishListFilter />

      <FishListTable />
    </MainTemplate>
  );
};

export default FishListPage;
