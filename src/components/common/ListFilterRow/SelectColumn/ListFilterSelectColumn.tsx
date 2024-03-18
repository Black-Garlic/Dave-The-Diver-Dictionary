import ListFilterColumn from "@components/common/ListFilterRow/ListFilterColumn.tsx";
import { ReactNodeProps } from "@typings/ReactNodeProps.ts";
import ListFilterSelectColumnSingleSelect from "@components/common/ListFilterRow/SelectColumn/ListFilterSelectColumnSingleSelect.tsx";
import ListFilterSelectColumnTagSelect from "@components/common/ListFilterRow/SelectColumn/ListFilterSelectColumnTagSelect.tsx";
import ListFilterSelectColumnMultiSelect from "@components/common/ListFilterRow/SelectColumn/ListFilterSelectColumnMultiSelect.tsx";

const ListFilterSelectColumnMain = ({ children }: ReactNodeProps) => {
  return <ListFilterColumn flex={"auto"}>{children}</ListFilterColumn>;
};

const ListFilterSelectColumn = Object.assign(ListFilterSelectColumnMain, {
  Select: ListFilterSelectColumnSingleSelect,
  MultiSelect: ListFilterSelectColumnMultiSelect,
  TagSelect: ListFilterSelectColumnTagSelect,
});

export default ListFilterSelectColumn;
