import { ReactNodeProps } from "@typings/ReactNodeProps.ts";
import DetailInfoItemText from "@components/common/DetailInfo/Item/DetailInfoItemText.tsx";
import DetailInfoItemTag from "@components/common/DetailInfo/Item/DetailInfoItemTag.tsx";
import DetailInfoItemMultiTag from "@components/common/DetailInfo/Item/DetailInfoItemMultiTag.tsx";
import DetailInfoItemSelect from "@components/common/DetailInfo/Item/DetailInfoItemSelect.tsx";
import { Card } from "antd";

const gridStyle: React.CSSProperties = {
  width: "25%",
  textAlign: "center",
};

const titleStyle: React.CSSProperties = {
  background: "#000",
  color: "#FFF",
};

interface Props extends ReactNodeProps {
  title: string;
}

const DetailInfoMain = ({ title, children }: Props) => {
  return (
    <>
      <Card.Grid style={{ ...gridStyle, ...titleStyle }} hoverable={false}>
        {title}
      </Card.Grid>

      <Card.Grid style={gridStyle} hoverable={false}>
        {children}
      </Card.Grid>
    </>
  );
};

const DetailInfoItem = Object.assign(DetailInfoMain, {
  Text: DetailInfoItemText,
  Tag: DetailInfoItemTag,
  MultiTag: DetailInfoItemMultiTag,
  Select: DetailInfoItemSelect,
});

export default DetailInfoItem;
