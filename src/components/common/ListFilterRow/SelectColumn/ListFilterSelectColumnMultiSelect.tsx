import { MultiSelectProps } from "@typings/Select.ts";
import { Select } from "antd";

const ListFilterSelectColumnMultiSelect = ({
  mode,
  width,
  value,
  onChange,
  optionList,
  placeholder,
}: MultiSelectProps) => {
  return (
    <Select
      mode={mode}
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
