import FishListTable from "@components/page/Fish/List/FishListTable.tsx";
import FishListFilter from "@components/page/Fish/List/FishListFilter.tsx";

const FishListPage = () => {
  return (
    <>
      <FishListFilter />

      <FishListTable />
    </>
  );
};

export default FishListPage;
