import MultiColumn from "@components/common/Table/Column/MultiColumn.tsx";
import DishColumn from "@components/common/Table/Column/DishColumn.tsx";
import { DishWithLevel } from "@typings/Dish.ts";

interface Props {
  dishList: DishWithLevel[];
}

const MultiDishColumn = ({ dishList }: Props) => {
  return (
    <MultiColumn direction={"vertical"}>
      {dishList.map((dish) => (
        <MultiColumn.Item key={dish.dishId}>
          <DishColumn dish={dish} />
        </MultiColumn.Item>
      ))}
    </MultiColumn>
  );
};

export default MultiDishColumn;
