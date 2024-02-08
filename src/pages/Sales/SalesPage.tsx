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
import { Divider } from "antd";
import SalesTable from "@components/page/Sales/SalesTable.tsx";
import SalesDishTable from "@components/page/Sales/SalesDishTable.tsx";
import SalesInfo from "@components/page/Sales/SalesInfo.tsx";

const SalesPage = () => {
  const levelList = useRecoilValue(levelListState);
  const setDishDefaultList = useSetRecoilState(dishDefaultListState);
  const setDishFilterList = useSetRecoilState(dishFilterListState);

  useEffect(() => {
    const dishWithLevelList: DishWithLevel[] = getDishWithLevelList(
      DISH_LIST,
      levelList,
    );

    setDishDefaultList(dishWithLevelList);
    setDishFilterList(dishWithLevelList);
  }, [levelList, setDishDefaultList, setDishFilterList]);

  return (
    <MainTemplate>
      <SalesInfo />

      <SalesTable />

      <Divider />

      <SalesDishTable />
    </MainTemplate>
  );
};

export default SalesPage;
