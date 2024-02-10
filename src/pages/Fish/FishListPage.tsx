import FishListTable from "@components/page/Fish/List/FishListTable.tsx";
import FishListFilter from "@components/page/Fish/List/FishListFilter.tsx";
import MainTemplate from "@components/common/MainTemplate/MainTemplate.tsx";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { levelListState } from "@services/Level/LevelState.ts";
import { fishDefaultListState } from "@services/Fish/FishState.ts";
import { useEffect } from "react";
import { FISH_LIST } from "@constants/Fish.ts";
import { getFishWithDishLevelList } from "@libs/fishUtil.ts";
import { FishWithDishLevel } from "@typings/Fish.ts";
import { Breadcrumb } from "antd";
import useBreadcrumb from "@hooks/useBreadcrumb.tsx";

const FishListPage = () => {
  const levelListValue = useRecoilValue(levelListState);
  const setFishDefaultList = useSetRecoilState(fishDefaultListState);

  const breadcrumbItemList = useBreadcrumb();

  useEffect(() => {
    const fishWithDishLevelList: FishWithDishLevel[] = getFishWithDishLevelList(
      FISH_LIST,
      levelListValue,
    );

    setFishDefaultList(fishWithDishLevelList);
  }, [levelListValue, setFishDefaultList]);

  return (
    <MainTemplate>
      <Breadcrumb items={breadcrumbItemList} />

      <FishListFilter />

      <FishListTable />
    </MainTemplate>
  );
};

export default FishListPage;
