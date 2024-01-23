import MainTemplate from "@components/common/MainTemplate/MainTemplate.tsx";
import DishDetailInfo from "@components/page/Dish/Detail/DishDetailInfo.tsx";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { DishWithLevel } from "@typings/Dish.ts";
import { dishListState } from "@services/Dish/DishState.ts";
import { useRecoilValue } from "recoil";

const DishDetailPage = () => {
  const params = useParams();
  const dishList = useRecoilValue(dishListState);

  const [dish, setDish] = useState<DishWithLevel>();

  useEffect(() => {
    const dish: DishWithLevel | undefined = dishList.find(
      (dish) => dish.id === params.id,
    );

    if (dish) {
      setDish(dish);
    }
  }, [dishList, params.id]);

  return <MainTemplate>{dish && <DishDetailInfo dish={dish} />}</MainTemplate>;
};

export default DishDetailPage;
