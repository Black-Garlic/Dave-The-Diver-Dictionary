import { Tag } from "antd";
import DetailInfoItemContent from "@components/common/DetailInfo/Item/DetailInfoItemContent.tsx";

interface Props {
  color: string;
  text?: string;
}

const DetailInfoItemTag = ({ color, text }: Props) => {
  return (
    <DetailInfoItemContent>
      <Tag color={color}>{text}</Tag>
    </DetailInfoItemContent>
  );
};

export default DetailInfoItemTag;
