import MainTemplate from "@components/common/MainTemplate/MainTemplate.tsx";
import DishListFilter from "@components/page/Dish/List/DishListFilter.tsx";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { dishDefaultListState } from "@services/Dish/DishState.ts";
import DishListTable from "@components/page/Dish/List/DishListTable.tsx";
import { levelListState } from "@services/Level/LevelState.ts";
import { useEffect } from "react";
import { DishWithLevel } from "@typings/Dish.ts";
import { getDishWithLevelList } from "@libs/dishUtil.ts";
import { DISH_LIST } from "@constants/Dish.ts";
import useBreadcrumb from "@hooks/useBreadcrumb.tsx";
import { Breadcrumb } from "antd";

const DistListPage = () => {
  const levelListValue = useRecoilValue(levelListState);
  const setDishDefaultList = useSetRecoilState(dishDefaultListState);

  const breadcrumbItemList = useBreadcrumb();

  useEffect(() => {
    const dishWithLevelList: DishWithLevel[] = getDishWithLevelList(
      DISH_LIST,
      levelListValue,
    );

    setDishDefaultList(dishWithLevelList);
  }, [levelListValue, setDishDefaultList]);

  return (
    <MainTemplate>
      <Breadcrumb items={breadcrumbItemList} />

      <DishListFilter />

      <DishListTable />
    </MainTemplate>
  );
};

export default DistListPage;
