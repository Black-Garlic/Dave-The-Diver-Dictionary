import FishListTable from "@components/page/Fish/List/FishListTable.tsx";
import FishListFilter from "@components/page/Fish/List/FishListFilter.tsx";
import MainTemplate from "@components/common/MainTemplate/MainTemplate.tsx";

const FishListPage = () => {
  return (
    <MainTemplate>
      <FishListFilter />

      <FishListTable />
    </MainTemplate>
  );
};

export default FishListPage;
