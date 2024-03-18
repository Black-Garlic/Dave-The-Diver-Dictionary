import { TagSelectProps } from "@typings/Select.ts";
import { Select, Tag } from "antd";

const ListFilterSelectColumnTagSelect = ({
  mode,
  width,
  value,
  onChange,
  optionList,
  placeholder,
  getColor,
}: TagSelectProps) => {
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
      tagRender={({ label, value, closable, onClose }) => (
        <Tag color={getColor(value)} closable={closable} onClose={onClose}>
          {label}
        </Tag>
      )}
    />
  );
};

export default ListFilterSelectColumnTagSelect;
