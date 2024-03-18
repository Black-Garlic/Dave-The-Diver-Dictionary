import { Select } from "antd";
import { SelectProps } from "@typings/Select.ts";

const ListFilterSelectColumnSelect = ({
  mode,
  width,
  value,
  onChange,
  optionList,
  placeholder,
}: SelectProps) => {
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

export default ListFilterSelectColumnSelect;
