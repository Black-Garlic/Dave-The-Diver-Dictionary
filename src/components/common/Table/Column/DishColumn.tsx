import { LEVEL_LABEL } from "@constants/Level.ts";
import { Button } from "antd";
import { useCallback } from "react";
import { Dish, DishWithLevel } from "@typings/Dish.ts";
import { DISH_DETAIL_ROUTE } from "@constants/Route.ts";
import { useNavigate } from "react-router-dom";

interface Props {
  dish: DishWithLevel;
}

const DishColumn = ({ dish }: Props) => {
  const navigate = useNavigate();

  const handleClickDish = useCallback(
    (dish: Dish) => {
      navigate(DISH_DETAIL_ROUTE.path.replace(":id", dish.dishId));
    },
    [navigate],
  );

  return (
    <Button
      style={{ width: "100%", textAlign: "start", display: "flex" }}
      onClick={() => handleClickDish(dish)}
    >
      <div style={{ flex: "1" }}>{dish.name}</div>

      <div>{LEVEL_LABEL[dish.dishLevel - 1]}</div>
    </Button>
  );
};

export default DishColumn;
