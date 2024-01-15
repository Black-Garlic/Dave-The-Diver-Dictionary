import MainTemplate from "@components/common/MainTemplate/MainTemplate.tsx";
import DishListFilter from "@components/page/Dish/List/DishListFilter.tsx";
import { useRecoilState } from "recoil";
import { dishListState } from "@services/Dish/DishState.ts";
import DishListTable from "@components/page/Dish/List/DishListTable.tsx";

const DistListPage = () => {
  const [dishList, setDishList] = useRecoilState(dishListState);

  return (
    <MainTemplate>
      <DishListFilter />

      <DishListTable dishList={dishList} setDishList={setDishList} />
    </MainTemplate>
  );
};

export default DistListPage;
