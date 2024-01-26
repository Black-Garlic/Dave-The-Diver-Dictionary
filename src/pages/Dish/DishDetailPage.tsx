import MainTemplate from "@components/common/MainTemplate/MainTemplate.tsx";
import DishDetailInfo from "@components/page/Dish/Detail/DishDetailInfo.tsx";
import { useParams } from "react-router";
import { useEffect } from "react";
import { Dish, DishWithLevel } from "@typings/Dish.ts";
import { dishDetailState } from "@services/Dish/DishState.ts";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { levelListState } from "@services/Level/LevelState.ts";
import { DISH_LIST } from "@constants/Dish.ts";
import { getDishWithLevel } from "@libs/dishUtil.ts";

const DishDetailPage = () => {
  const params = useParams();

  const levelList = useRecoilValue(levelListState);
  const setDishDetailState = useSetRecoilState(dishDetailState);

  useEffect(() => {
    const targetDish: Dish | undefined = DISH_LIST.find(
      (dish) => dish.id === params.id,
    );

    if (targetDish) {
      const dishWithLevel: DishWithLevel = getDishWithLevel(
        targetDish,
        levelList,
      );

      setDishDetailState(dishWithLevel);
    }
  }, [levelList, params.id, setDishDetailState]);

  return (
    <MainTemplate>
      <DishDetailInfo />
    </MainTemplate>
  );
};

export default DishDetailPage;
