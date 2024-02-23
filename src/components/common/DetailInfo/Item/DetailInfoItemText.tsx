import DetailInfoItemContent from "@components/common/DetailInfo/Item/DetailInfoItemContent.tsx";

interface Props {
  text?: string | number;
}

const DetailInfoItemText = ({ text }: Props) => {
  return <DetailInfoItemContent>{text}</DetailInfoItemContent>;
};

export default DetailInfoItemText;
