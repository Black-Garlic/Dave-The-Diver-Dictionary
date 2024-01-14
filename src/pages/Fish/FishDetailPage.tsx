import MainTemplate from "@components/common/MainTemplate/MainTemplate.tsx";
import FishDetailInfo from "@components/page/Fish/Detail/FishDetailInfo.tsx";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { Fish, FishWithDish } from "@typings/Fish.ts";
import { FISH_LIST } from "@constants/Fish.ts";
import { getFishWithDish } from "@libs/recipeUtil.ts";
import { Divider } from "antd";
import DishListTable from "@components/page/Dish/List/DishListTable.tsx";
import { DishWithLevel } from "@typings/Dish.ts";
import { getDishLevelCookie, getDishWithLevelList } from "@libs/dishUtil.ts";

const FishDetailPage = () => {
  const params = useParams();

  const [fish, setFish] = useState<FishWithDish>();
  const [dishList, setDishList] = useState<DishWithLevel[]>([]);

  useEffect(() => {
    const fishList: Fish[] = FISH_LIST.filter((fish) => fish.id === params.id);

    if (fishList.length > 0) {
      const fishWithDishList: FishWithDish = getFishWithDish(fishList[0]);

      setFish(fishWithDishList);
      setDishList(
        getDishWithLevelList(fishWithDishList.dishList, getDishLevelCookie()),
      );
    }

    getDishLevelCookie();
  }, [params]);

  return (
    <MainTemplate>
      <FishDetailInfo fish={fish} />

      <Divider />

      <DishListTable dishList={dishList} setDishList={setDishList} />
    </MainTemplate>
  );
};

export default FishDetailPage;
