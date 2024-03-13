import { Tag } from "antd";
import { TagInfo } from "@typings/Tag.ts";

const TagColumn = ({ color, value }: TagInfo) => {
  return <Tag color={color}>{value}</Tag>;
};

export default TagColumn;
