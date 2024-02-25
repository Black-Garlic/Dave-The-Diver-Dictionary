import { ReactNodeProps } from "@typings/ReactNodeProps.ts";
import DetailInfoItemTitle from "@components/common/DetailInfo/Item/DetailInfoItemTitle.tsx";
import DetailInfoItemText from "@components/common/DetailInfo/Item/DetailInfoItemText.tsx";
import DetailInfoItemTag from "@components/common/DetailInfo/Item/DetailInfoItemTag.tsx";
import DetailInfoItemMultiTag from "@components/common/DetailInfo/Item/DetailInfoItemMultiTag.tsx";
import DetailInfoItemSelect from "@components/common/DetailInfo/Item/DetailInfoItemSelect.tsx";

const DetailInfoMain = ({ children }: ReactNodeProps) => {
  return <>{children}</>;
};

const DetailInfoItem = Object.assign(DetailInfoMain, {
  Title: DetailInfoItemTitle,
  Text: DetailInfoItemText,
  Tag: DetailInfoItemTag,
  MultiTag: DetailInfoItemMultiTag,
  Select: DetailInfoItemSelect,
});

export default DetailInfoItem;
