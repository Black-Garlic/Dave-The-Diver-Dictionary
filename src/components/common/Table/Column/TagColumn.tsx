import { Tag } from "antd";

interface Props {
  color: string;
  value: string | number;
}

const TagColumn = ({ color, value }: Props) => {
  return <Tag color={color}>{value}</Tag>;
};

export default TagColumn;
