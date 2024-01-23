import MainTemplate from "@components/common/MainTemplate/MainTemplate.tsx";
import SeasoningListFilter from "@components/page/Seasoning/List/SeasoningListFilter.tsx";
import SeasoningListTable from "@components/page/Seasoning/List/SeasoningListTable.tsx";

const SeasoningListPage = () => {
  return (
    <MainTemplate>
      <SeasoningListFilter />

      <SeasoningListTable />
    </MainTemplate>
  );
};

export default SeasoningListPage;
