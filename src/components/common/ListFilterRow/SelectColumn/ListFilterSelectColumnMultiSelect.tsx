import { MultiSelectProps } from "@typings/Select.ts";
import { Select } from "antd";

const ListFilterSelectColumnMultiSelect = ({
  width,
  value,
  onChange,
  optionList,
  placeholder,
}: MultiSelectProps) => {
  return (
    <Select
      mode={"multiple"}
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

export default ListFilterSelectColumnMultiSelect;
