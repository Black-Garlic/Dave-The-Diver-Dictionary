import MainTemplate from "@components/common/MainTemplate/MainTemplate.tsx";
import FishDetailInfo from "@components/page/Fish/Detail/FishDetailInfo.tsx";
import { useParams } from "react-router";
import { useEffect } from "react";
import { FishWithDishLevel } from "@typings/Fish.ts";
import { Breadcrumb, Divider } from "antd";
import DishListTable from "@components/page/Dish/List/DishListTable.tsx";
import { useSetRecoilState } from "recoil";
import { fishDetailState } from "@services/Fish/FishState.ts";
import {
  dishFilterListState,
  dishLevelListState,
} from "@services/Dish/DishState.ts";
import { getFishWithDishLevel } from "@libs/fishUtil.ts";
import useBreadcrumb from "@hooks/useBreadcrumb.tsx";
import { useQuery } from "@tanstack/react-query";
import { getFishDetail } from "@services/Fish/FishApi.ts";
import { getDishLevelList } from "@services/Dish/DishApi.ts";
import { PROFILE_ID } from "@constants/Dish.ts";

const FishDetailPage = () => {
  const params = useParams();

  const setFishDetail = useSetRecoilState(fishDetailState);
  const setDishFilterList = useSetRecoilState(dishFilterListState);
  const setDishLevelList = useSetRecoilState(dishLevelListState);

  const breadcrumbItemList = useBreadcrumb();

  const { data: fishDetailData } = useQuery({
    queryKey: ["fishDetail"],
    queryFn: () => getFishDetail(params.id || ""),
  });

  const { data: dishLevelListData } = useQuery({
    queryKey: ["dishLevelList"],
    queryFn: () => getDishLevelList(PROFILE_ID),
  });

  useEffect(() => {
    if (!fishDetailData || !dishLevelListData) return;

    const fishWithDishLevel: FishWithDishLevel = getFishWithDishLevel(
      fishDetailData,
      dishLevelListData,
    );

    setFishDetail(fishWithDishLevel);
    setDishFilterList(fishWithDishLevel.dishWithLevelList);
    setDishLevelList(dishLevelListData);
  }, [
    dishLevelListData,
    fishDetailData,
    params,
    setDishFilterList,
    setDishLevelList,
    setFishDetail,
  ]);

  return (
    <MainTemplate>
      <Breadcrumb items={breadcrumbItemList} />

      <FishDetailInfo />

      <Divider />

      <DishListTable />
    </MainTemplate>
  );
};

export default FishDetailPage;
