import { Tag } from "antd";
import DetailInfoItemContent from "@components/common/DetailInfo/Item/DetailInfoItemContent.tsx";
import { TagInfo } from "@typings/ComponentInfo.ts";

const DetailInfoItemTag = ({ color, value }: TagInfo) => {
  return (
    <DetailInfoItemContent>
      <Tag color={color}>{value}</Tag>
    </DetailInfoItemContent>
  );
};

export default DetailInfoItemTag;
