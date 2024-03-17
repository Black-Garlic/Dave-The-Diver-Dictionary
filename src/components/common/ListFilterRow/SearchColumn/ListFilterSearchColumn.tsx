import { ReactNodeProps } from "@typings/ReactNodeProps.ts";
import ListFilterColumn from "@components/common/ListFilterRow/ListFilterColumn.tsx";
import ListFilterSearchColumnInput from "@components/common/ListFilterRow/SearchColumn/ListFilterSearchColumnInput.tsx";
import ListFilterSearchColumnResetButton from "@components/common/ListFilterRow/SearchColumn/ListFilterSearchColumnResetButton.tsx";

const ListFilterSearchColumnMain = ({ children }: ReactNodeProps) => {
  return <ListFilterColumn flex={"auto"}>{children}</ListFilterColumn>;
};

const ListFilterSearchColumn = Object.assign(ListFilterSearchColumnMain, {
  Input: ListFilterSearchColumnInput,
  ResetButton: ListFilterSearchColumnResetButton,
});

export default ListFilterSearchColumn;
