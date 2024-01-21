import MainTemplate from "@components/common/MainTemplate/MainTemplate.tsx";
import PlantListFilter from "@components/page/Plant/List/PlantListFilter.tsx";
import PlantListTable from "@components/page/Plant/List/PlantListTable.tsx";

const PlantListPage = () => {
  return (
    <MainTemplate>
      <PlantListFilter />

      <PlantListTable />
    </MainTemplate>
  );
};

export default PlantListPage;
