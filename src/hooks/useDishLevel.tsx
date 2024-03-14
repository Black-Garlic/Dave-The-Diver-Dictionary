import { useRecoilState } from "recoil";
import { dishLevelListState } from "@services/Dish/DishState.ts";
import { useMutation } from "@tanstack/react-query";
import { postDishLevel } from "@services/Dish/DishApi.ts";
import { UpdateDishLevel } from "@typings/Dish.ts";
import { getLevel } from "@libs/levelUtil.ts";
import { PROFILE_ID } from "@constants/Dish.ts";

const useDishLevel = () => {
  const [dishLevelListValue, setDishLevelList] =
    useRecoilState(dishLevelListState);

  const postDishLevelMutation = useMutation({
    mutationFn: (updateDishLevel: UpdateDishLevel) =>
      postDishLevel(updateDishLevel),
  });

  const handleDishLevelChange = (dishId: string, selectedLevel: string) => {
    const updateDishLevel: UpdateDishLevel = {
      profileId: PROFILE_ID,
      dishId: dishId,
      dishLevel: Number(selectedLevel),
    };

    postDishLevelMutation.mutate(updateDishLevel);

    const newLevelList = dishLevelListValue.map((dishLevel) => {
      if (dishLevel.dishId === dishId) {
        return { ...dishLevel, level: getLevel(selectedLevel) };
      } else {
        return dishLevel;
      }
    });

    setDishLevelList(newLevelList);
  };

  return {
    dishLevelListValue,
    setDishLevelList,
    handleDishLevelChange,
  };
};

export default useDishLevel;
