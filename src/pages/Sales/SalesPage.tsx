import MainTemplate from "@components/common/MainTemplate/MainTemplate.tsx";
import DishListTable from "@components/page/Dish/List/DishListTable.tsx";
import { useEffect } from "react";
import { DishWithLevel } from "@typings/Dish.ts";
import { getDishWithLevelList } from "@libs/dishUtil.ts";
import { DISH_LIST } from "@constants/Dish.ts";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { levelListState } from "@services/Level/LevelState.ts";
import { dishFilterListState } from "@services/Dish/DishState.ts";

const SalesPage = () => {
  const levelList = useRecoilValue(levelListState);
  const setDishFilterList = useSetRecoilState(dishFilterListState);

  useEffect(() => {
    const dishWithLevelList: DishWithLevel[] = getDishWithLevelList(
      DISH_LIST,
      levelList,
    );

    setDishFilterList(dishWithLevelList);
  }, [levelList, setDishFilterList]);

  return (
    <MainTemplate>
      <DishListTable />
    </MainTemplate>
  );
};

export default SalesPage;
