import { Tag } from "antd";
import DetailInfoItemContent from "@components/common/DetailInfo/Item/DetailInfoItemContent.tsx";
import { TagInfo } from "@typings/Tag.ts";

interface Props {
  tagInfoList: TagInfo[];
}

const DetailInfoItemMultiTag = ({ tagInfoList }: Props) => {
  return (
    <DetailInfoItemContent>
      {tagInfoList.map((tagInfo: TagInfo) => (
        <Tag color={tagInfo.color}>{tagInfo.value}</Tag>
      ))}
    </DetailInfoItemContent>
  );
};

export default DetailInfoItemMultiTag;
