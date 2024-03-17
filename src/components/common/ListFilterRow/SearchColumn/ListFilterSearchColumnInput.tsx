import Search from "antd/es/input/Search";
import { Dispatch, SetStateAction } from "react";

interface Props {
  keyword: string;
  setKeyword: Dispatch<SetStateAction<string>>;
}

const ListFilterSearchColumnInput = ({ keyword, setKeyword }: Props) => {
  return (
    <Search
      placeholder="검색"
      allowClear
      value={keyword}
      onChange={(e) => setKeyword(e.target.value)}
      style={{ width: 300 }}
    />
  );
};

export default ListFilterSearchColumnInput;
