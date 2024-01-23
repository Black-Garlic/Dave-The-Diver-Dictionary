import MainTemplate from "@components/common/MainTemplate/MainTemplate.tsx";
import FishDetailInfo from "@components/page/Fish/Detail/FishDetailInfo.tsx";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { Fish, FishWithDishLevel } from "@typings/Fish.ts";
import { FISH_LIST } from "@constants/Fish.ts";
import { getFishWithDishLevel } from "@libs/recipeUtil.ts";
import { Divider } from "antd";
import DishListTable from "@components/page/Dish/List/DishListTable.tsx";
import { DishWithLevel } from "@typings/Dish.ts";

const FishDetailPage = () => {
  const params = useParams();

  const [fish, setFish] = useState<FishWithDishLevel>();
  const [dishList, setDishList] = useState<DishWithLevel[]>([]);

  useEffect(() => {
    const targetFish: Fish | undefined = FISH_LIST.find(
      (fish) => fish.id === params.id,
    );

    if (targetFish) {
      const fishWithDishLevel: FishWithDishLevel =
        getFishWithDishLevel(targetFish);

      setFish(fishWithDishLevel);
      setDishList(fishWithDishLevel.dishList);
    }
  }, [params]);

  return (
    <MainTemplate>
      {fish && <FishDetailInfo fish={fish} />}

      <Divider />

      <DishListTable dishList={dishList} setDishList={setDishList} />
    </MainTemplate>
  );
};

export default FishDetailPage;
