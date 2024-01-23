import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { DishWithLevel } from "@typings/Dish.ts";
import { Seasoning, SeasoningWithDishLevel } from "@typings/Seasoning.ts";
import { SEASONING_LIST } from "@constants/Seasoning.ts";
import { getSeasoningWithDishLevel } from "@libs/recipeUtil.ts";
import MainTemplate from "@components/common/MainTemplate/MainTemplate.tsx";
import { Divider } from "antd";
import DishListTable from "@components/page/Dish/List/DishListTable.tsx";
import SeasoningDetailInfo from "@components/page/Seasoning/Detail/SeasoningDetailInfo.tsx";

const SeasoningDetailPage = () => {
  const params = useParams();

  const [seasoning, setSeasoning] = useState<SeasoningWithDishLevel>();
  const [dishList, setDishList] = useState<DishWithLevel[]>([]);

  useEffect(() => {
    const targetSeasoning: Seasoning | undefined = SEASONING_LIST.find(
      (seasoning) => seasoning.id === params.id,
    );

    if (targetSeasoning) {
      const seasoningWithDishLevel: SeasoningWithDishLevel =
        getSeasoningWithDishLevel(targetSeasoning);

      setSeasoning(seasoningWithDishLevel);
      setDishList(seasoningWithDishLevel.dishList);
    }
  }, [params.id]);

  return (
    <MainTemplate>
      {seasoning && <SeasoningDetailInfo seasoning={seasoning} />}

      <Divider />

      <DishListTable dishList={dishList} setDishList={setDishList} />
    </MainTemplate>
  );
};

export default SeasoningDetailPage;
