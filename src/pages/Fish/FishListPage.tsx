import FishListTable from "@components/page/Fish/List/FishListTable.tsx";
import FishListFilter from "@components/page/Fish/List/FishListFilter.tsx";
import MainTemplate from "@components/common/MainTemplate/MainTemplate.tsx";
import { useSetRecoilState } from "recoil";
import { fishDefaultListState } from "@services/Fish/FishState.ts";
import { useEffect } from "react";
import { getFishWithDishLevelList } from "@libs/fishUtil.ts";
import { FishWithDishLevel } from "@typings/Fish.ts";
import { Breadcrumb } from "antd";
import useBreadcrumb from "@hooks/useBreadcrumb.tsx";
import { useQuery } from "@tanstack/react-query";
import { getFishList } from "@services/Fish/FishApi.ts";
import { getDishLevelList } from "@services/Dish/DishApi.ts";
import { PROFILE_ID } from "@constants/Dish.ts";

const FishListPage = () => {
  const setFishDefaultList = useSetRecoilState(fishDefaultListState);

  const breadcrumbItemList = useBreadcrumb();

  const { data: fishListData } = useQuery({
    queryKey: ["fishList"],
    queryFn: () => getFishList(),
  });

  const { data: dishLevelListData } = useQuery({
    queryKey: ["dishLevelList"],
    queryFn: () => getDishLevelList(PROFILE_ID),
  });

  useEffect(() => {
    if (!fishListData || !dishLevelListData) return;

    const fishWithDishLevelList: FishWithDishLevel[] = getFishWithDishLevelList(
      fishListData,
      dishLevelListData,
    );

    setFishDefaultList(fishWithDishLevelList);
  }, [fishListData, dishLevelListData, setFishDefaultList]);

  return (
    <MainTemplate>
      <Breadcrumb items={breadcrumbItemList} />

      <FishListFilter />

      <FishListTable />
    </MainTemplate>
  );
};

export default FishListPage;
