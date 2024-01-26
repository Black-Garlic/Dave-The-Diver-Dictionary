import MainTemplate from "@components/common/MainTemplate/MainTemplate.tsx";
import FishDetailInfo from "@components/page/Fish/Detail/FishDetailInfo.tsx";
import { useParams } from "react-router";
import { useEffect } from "react";
import { Fish, FishWithDishLevel } from "@typings/Fish.ts";
import { FISH_LIST } from "@constants/Fish.ts";
import { getFishWithDishLevel } from "@libs/recipeUtil.ts";
import { Divider } from "antd";
import DishListTable from "@components/page/Dish/List/DishListTable.tsx";
import { useSetRecoilState } from "recoil";
import { fishDetailState } from "@services/Fish/FishState.ts";
import { dishFilterListState } from "@services/Dish/DishState.ts";

const FishDetailPage = () => {
  const params = useParams();

  const setFishDetailState = useSetRecoilState(fishDetailState);
  const setDishFilterListState = useSetRecoilState(dishFilterListState);

  useEffect(() => {
    const targetFish: Fish | undefined = FISH_LIST.find(
      (fish) => fish.id === params.id,
    );

    if (targetFish) {
      const fishWithDishLevel: FishWithDishLevel =
        getFishWithDishLevel(targetFish);

      setFishDetailState(fishWithDishLevel);
      setDishFilterListState(fishWithDishLevel.dishList);
    }
  }, [params, setDishFilterListState, setFishDetailState]);

  return (
    <MainTemplate>
      <FishDetailInfo />

      <Divider />

      <DishListTable />
    </MainTemplate>
  );
};

export default FishDetailPage;
