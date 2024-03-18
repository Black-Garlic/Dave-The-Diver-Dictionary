import { useRecoilState } from "recoil";
import {
  dishFilterListState,
  dishLevelListState,
} from "@services/Dish/DishState.ts";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postDishLevel } from "@services/Dish/DishApi.ts";
import { DishWithLevel, UpdateDishLevel } from "@typings/Dish.ts";
import { getLevel } from "@libs/levelUtil.ts";
import { PROFILE_ID } from "@constants/Dish.ts";

const useDishLevel = () => {
  const [dishLevelListValue, setDishLevelList] =
    useRecoilState(dishLevelListState);
  const [dishListValue, setDishList] = useRecoilState(dishFilterListState);

  const queryClient = useQueryClient();

  const postDishLevelMutation = useMutation({
    mutationKey: ["dishLevelList"],
    mutationFn: (updateDishLevel: UpdateDishLevel) =>
      postDishLevel(updateDishLevel),
  });

  const handleDishLevelChange = (dishId: string, selectedLevel: string) => {
    const updateDishLevel: UpdateDishLevel = {
      profileId: PROFILE_ID,
      dishId: dishId,
      dishLevel: Number(selectedLevel),
    };

    postDishLevelMutation.mutate(updateDishLevel, {
      onSuccess: () => handleDishLevelChangeSuccess(dishId, selectedLevel),
      onError: (error) => console.log(error),
    });
  };

  const handleDishLevelChangeSuccess = (
    dishId: string,
    selectedLevel: string,
  ) => {
    const newLevelList = dishLevelListValue.map((dishLevel) => {
      if (dishLevel.dishId === dishId) {
        return { ...dishLevel, level: getLevel(selectedLevel) };
      } else {
        return dishLevel;
      }
    });

    setDishLevelList(newLevelList);

    const newDishListValue: DishWithLevel[] = dishListValue.map((dish) => {
      if (dish.dishId === dishId) {
        return { ...dish, dishLevel: getLevel(selectedLevel) };
      } else {
        return dish;
      }
    });

    setDishList(newDishListValue);

    queryClient.invalidateQueries({ queryKey: ["dishLevelList"] });
  };

  return {
    dishLevelListValue,
    setDishLevelList,
    handleDishLevelChange,
  };
};

export default useDishLevel;
