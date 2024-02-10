import MainTemplate from "@components/common/MainTemplate/MainTemplate.tsx";
import { useEffect } from "react";
import { DishWithLevel } from "@typings/Dish.ts";
import { getDishWithLevelList } from "@libs/dishUtil.ts";
import { DISH_LIST } from "@constants/Dish.ts";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { levelListState } from "@services/Level/LevelState.ts";
import {
  dishDefaultListState,
  dishFilterListState,
} from "@services/Dish/DishState.ts";
import { Breadcrumb, Divider } from "antd";
import SalesTable from "@components/page/Sales/SalesTable.tsx";
import SalesDishTable from "@components/page/Sales/SalesDishTable.tsx";
import SalesInfo from "@components/page/Sales/SalesInfo.tsx";
import useBreadcrumb from "@hooks/useBreadcrumb.tsx";

const SalesPage = () => {
  const levelListValue = useRecoilValue(levelListState);
  const setDishDefaultList = useSetRecoilState(dishDefaultListState);
  const setDishFilterList = useSetRecoilState(dishFilterListState);

  const breadcrumbItemList = useBreadcrumb();

  useEffect(() => {
    const dishWithLevelList: DishWithLevel[] = getDishWithLevelList(
      DISH_LIST,
      levelListValue,
    );

    setDishDefaultList(dishWithLevelList);
    setDishFilterList(dishWithLevelList);
  }, [levelListValue, setDishDefaultList, setDishFilterList]);

  return (
    <MainTemplate>
      <Breadcrumb items={breadcrumbItemList} />

      <SalesInfo />

      <SalesTable />

      <Divider />

      <SalesDishTable />
    </MainTemplate>
  );
};

export default SalesPage;
