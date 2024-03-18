import { Tag } from "antd";
import { TagInfo } from "@typings/Tag.ts";

interface Props {
  tagInfoList: TagInfo[];
}

const DetailInfoItemMultiTag = ({ tagInfoList }: Props) => {
  return (
    <>
      {tagInfoList.map((tagInfo: TagInfo) => (
        <Tag key={tagInfo.value} color={tagInfo.color}>
          {tagInfo.value}
        </Tag>
      ))}
    </>
  );
};

export default DetailInfoItemMultiTag;
