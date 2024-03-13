import MainTemplate from "@components/common/MainTemplate/MainTemplate.tsx";
import DishListFilter from "@components/page/Dish/List/DishListFilter.tsx";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { dishDefaultListState } from "@services/Dish/DishState.ts";
import DishListTable from "@components/page/Dish/List/DishListTable.tsx";
import { levelListState } from "@services/Level/LevelState.ts";
import { useEffect } from "react";
import { DishWithLevel } from "@typings/Dish.ts";
import { getDishWithLevelList } from "@libs/dishUtil.ts";
import useBreadcrumb from "@hooks/useBreadcrumb.tsx";
import { Breadcrumb } from "antd";
import { useQuery } from "@tanstack/react-query";
import { getDishList } from "@services/Dish/DishApi.ts";

const DistListPage = () => {
  const levelListValue = useRecoilValue(levelListState);
  const setDishDefaultList = useSetRecoilState(dishDefaultListState);

  const breadcrumbItemList = useBreadcrumb();

  const { data } = useQuery({
    queryKey: ["dishList"],
    queryFn: () => getDishList(),
  });

  useEffect(() => {
    if (!data) return;

    const dishWithLevelList: DishWithLevel[] = getDishWithLevelList(
      data,
      levelListValue,
    );

    setDishDefaultList(dishWithLevelList);
  }, [data, levelListValue, setDishDefaultList]);

  return (
    <MainTemplate>
      <Breadcrumb items={breadcrumbItemList} />

      <DishListFilter />

      <DishListTable />
    </MainTemplate>
  );
};

export default DistListPage;
