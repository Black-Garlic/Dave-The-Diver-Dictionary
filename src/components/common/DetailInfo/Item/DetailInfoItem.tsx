import { ReactNodeProps } from "@typings/ReactNodeProps.ts";
import DetailInfoItemTitle from "@components/common/DetailInfo/Item/DetailInfoItemTitle.tsx";
import DetailInfoItemText from "@components/common/DetailInfo/Item/DetailInfoItemText.tsx";
import DetailInfoItemTag from "@components/common/DetailInfo/Item/DetailInfoItemTag.tsx";

const DetailInfoMain = ({ children }: ReactNodeProps) => {
  return <>{children}</>;
};

const DetailInfoItem = Object.assign(DetailInfoMain, {
  Title: DetailInfoItemTitle,
  Text: DetailInfoItemText,
  Tag: DetailInfoItemTag,
});

export default DetailInfoItem;
