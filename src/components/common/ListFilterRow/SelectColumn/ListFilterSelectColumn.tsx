import ListFilterColumn from "@components/common/ListFilterRow/ListFilterColumn.tsx";
import { ReactNodeProps } from "@typings/ReactNodeProps.ts";
import ListFilterSelectColumnSelect from "@components/common/ListFilterRow/SelectColumn/ListFilterSelectColumnSelect.tsx";
import ListFilterSelectColumnTagSelect from "@components/common/ListFilterRow/SelectColumn/ListFilterSelectColumnTagSelect.tsx";

const ListFilterSelectColumnMain = ({ children }: ReactNodeProps) => {
  return <ListFilterColumn flex={"auto"}>{children}</ListFilterColumn>;
};

const ListFilterSelectColumn = Object.assign(ListFilterSelectColumnMain, {
  Select: ListFilterSelectColumnSelect,
  TagSelect: ListFilterSelectColumnTagSelect,
});

export default ListFilterSelectColumn;
