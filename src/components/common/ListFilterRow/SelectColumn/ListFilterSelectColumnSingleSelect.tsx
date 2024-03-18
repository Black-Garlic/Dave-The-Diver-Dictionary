import { Select } from "antd";
import { SingleSelectProps } from "@typings/Select.ts";

const ListFilterSelectColumnSingleSelect = ({
  width,
  value,
  onChange,
  optionList,
  placeholder,
}: SingleSelectProps) => {
  return (
    <Select
      allowClear
      style={{ width: `${width}px` }}
      value={value}
      onChange={onChange}
      options={optionList}
      placeholder={placeholder}
      maxTagCount={"responsive"}
    />
  );
};

export default ListFilterSelectColumnSingleSelect;
