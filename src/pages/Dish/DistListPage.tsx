import MainTemplate from "@components/common/MainTemplate/MainTemplate.tsx";
import DishListFilter from "@components/page/Dish/List/DishListFilter.tsx";
import { useSetRecoilState } from "recoil";
import { dishDefaultListState } from "@services/Dish/DishState.ts";
import DishListTable from "@components/page/Dish/List/DishListTable.tsx";
import { useEffect } from "react";
import { DishWithLevel } from "@typings/Dish.ts";
import { getDishWithLevelList } from "@libs/dishUtil.ts";
import useBreadcrumb from "@hooks/useBreadcrumb.tsx";
import { Breadcrumb } from "antd";
import { useQuery } from "@tanstack/react-query";
import { getDishLevelList, getDishList } from "@services/Dish/DishApi.ts";
import { PROFILE_ID } from "@constants/Dish.ts";
import { dishLevelListState } from "@services/Level/LevelState.ts";

const DistListPage = () => {
  const setDishDefaultList = useSetRecoilState(dishDefaultListState);
  const setDishLevelList = useSetRecoilState(dishLevelListState);

  const breadcrumbItemList = useBreadcrumb();

  const { data: dishListData } = useQuery({
    queryKey: ["dishList"],
    queryFn: () => getDishList(),
  });

  const { data: dishLevelListData } = useQuery({
    queryKey: ["dishLevelList"],
    queryFn: () => getDishLevelList(PROFILE_ID),
  });

  useEffect(() => {
    if (!dishListData || !dishLevelListData) return;

    const dishWithLevelList: DishWithLevel[] = getDishWithLevelList(
      dishListData,
      dishLevelListData,
    );

    setDishDefaultList(dishWithLevelList);
    setDishLevelList(dishLevelListData);
  }, [dishListData, dishLevelListData, setDishDefaultList, setDishLevelList]);

  return (
    <MainTemplate>
      <Breadcrumb items={breadcrumbItemList} />

      <DishListFilter />

      <DishListTable />
    </MainTemplate>
  );
};

export default DistListPage;
