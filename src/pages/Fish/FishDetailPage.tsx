import MainTemplate from "@components/common/MainTemplate/MainTemplate.tsx";
import FishDetailInfo from "@components/page/Fish/Detail/FishDetailInfo.tsx";
import { useParams } from "react-router";
import { useEffect } from "react";
import { FishWithDishLevel } from "@typings/Fish.ts";
import { Breadcrumb, Divider } from "antd";
import DishListTable from "@components/page/Dish/List/DishListTable.tsx";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { fishDetailState } from "@services/Fish/FishState.ts";
import { dishFilterListState } from "@services/Dish/DishState.ts";
import { getFishWithDishLevel } from "@libs/fishUtil.ts";
import { levelListState } from "@services/Level/LevelState.ts";
import useBreadcrumb from "@hooks/useBreadcrumb.tsx";
import { useQuery } from "@tanstack/react-query";
import { getFishDetail } from "@services/Fish/FishApi.ts";

const FishDetailPage = () => {
  const params = useParams();

  const levelListValue = useRecoilValue(levelListState);
  const setFishDetail = useSetRecoilState(fishDetailState);
  const setDishFilterList = useSetRecoilState(dishFilterListState);

  const breadcrumbItemList = useBreadcrumb();

  const { data } = useQuery({
    queryKey: ["fishDetail"],
    queryFn: () => getFishDetail(params.id || ""),
  });

  useEffect(() => {
    if (!data) return;

    const fishWithDishLevel: FishWithDishLevel = getFishWithDishLevel(
      data,
      levelListValue,
    );

    setFishDetail(fishWithDishLevel);
    setDishFilterList(fishWithDishLevel.dishWithLevelList);
  }, [data, levelListValue, params, setDishFilterList, setFishDetail]);

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
