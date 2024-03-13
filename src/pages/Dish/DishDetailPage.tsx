import MainTemplate from "@components/common/MainTemplate/MainTemplate.tsx";
import DishDetailInfo from "@components/page/Dish/Detail/DishDetailInfo.tsx";
import { useParams } from "react-router";
import { useEffect } from "react";
import { DishWithLevel } from "@typings/Dish.ts";
import {
  dishDetailState,
  dishLevelListState,
} from "@services/Dish/DishState.ts";
import { useSetRecoilState } from "recoil";
import { getDishWithLevel } from "@libs/dishUtil.ts";
import { Breadcrumb, Divider } from "antd";
import DishRecipeTable from "@components/page/Dish/Detail/DishRecipeTable.tsx";
import useBreadcrumb from "@hooks/useBreadcrumb.tsx";
import { useQuery } from "@tanstack/react-query";
import { getDishDetail, getDishLevelList } from "@services/Dish/DishApi.ts";
import { PROFILE_ID } from "@constants/Dish.ts";

const DishDetailPage = () => {
  const params = useParams();

  const setDishDetail = useSetRecoilState(dishDetailState);
  const setDishLevelList = useSetRecoilState(dishLevelListState);

  const breadcrumbItemList = useBreadcrumb();

  const { data: dishDetailData } = useQuery({
    queryKey: ["dishDetail"],
    queryFn: () => getDishDetail(params.id || ""),
  });

  const { data: dishLevelListData } = useQuery({
    queryKey: ["dishLevelList"],
    queryFn: () => getDishLevelList(PROFILE_ID),
  });

  useEffect(() => {
    if (!dishDetailData || !dishLevelListData) return;

    const dishWithLevel: DishWithLevel = getDishWithLevel(
      dishDetailData,
      dishLevelListData,
    );

    setDishDetail(dishWithLevel);
    setDishLevelList(dishLevelListData);
  }, [
    dishDetailData,
    dishLevelListData,
    params.id,
    setDishDetail,
    setDishLevelList,
  ]);

  return (
    <MainTemplate>
      <Breadcrumb items={breadcrumbItemList} />

      <DishDetailInfo />

      <Divider />

      <DishRecipeTable />
    </MainTemplate>
  );
};

export default DishDetailPage;
