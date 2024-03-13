import MainTemplate from "@components/common/MainTemplate/MainTemplate.tsx";
import { useEffect } from "react";
import { DishWithLevel } from "@typings/Dish.ts";
import { getDishWithLevelList } from "@libs/dishUtil.ts";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  dishDefaultListState,
  dishFilterListState,
  dishLevelListState,
} from "@services/Dish/DishState.ts";
import { Breadcrumb, Divider } from "antd";
import SalesTable from "@components/page/Sales/SalesTable.tsx";
import SalesDishTable from "@components/page/Sales/SalesDishTable.tsx";
import SalesInfo from "@components/page/Sales/SalesInfo.tsx";
import useBreadcrumb from "@hooks/useBreadcrumb.tsx";
import DishListFilter from "@components/page/Dish/List/DishListFilter.tsx";
import { useQuery } from "@tanstack/react-query";
import { getDishList } from "@services/Dish/DishApi.ts";

const SalesPage = () => {
  const levelListValue = useRecoilValue(dishLevelListState);
  const setDishDefaultList = useSetRecoilState(dishDefaultListState);
  const setDishFilterList = useSetRecoilState(dishFilterListState);

  const breadcrumbItemList = useBreadcrumb();

  const { data: dishListData } = useQuery({
    queryKey: ["dishList"],
    queryFn: () => getDishList(),
  });

  useEffect(() => {
    if (!dishListData) return;

    const dishWithLevelList: DishWithLevel[] = getDishWithLevelList(
      dishListData,
      levelListValue,
    );

    setDishDefaultList(dishWithLevelList);
    setDishFilterList(dishWithLevelList);
  }, [dishListData, levelListValue, setDishDefaultList, setDishFilterList]);

  return (
    <MainTemplate>
      <Breadcrumb items={breadcrumbItemList} />

      <SalesInfo />

      <SalesTable />

      <Divider />

      <DishListFilter />

      <SalesDishTable />
    </MainTemplate>
  );
};

export default SalesPage;
