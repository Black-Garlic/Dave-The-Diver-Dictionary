import { ReactNodeProps } from "@typings/ReactNodeProps.ts";
import { Card } from "antd";

const gridStyle: React.CSSProperties = {
  width: "25%",
  textAlign: "center",
};

const DetailInfoItemContent = ({ children }: ReactNodeProps) => {
  return (
    <Card.Grid style={gridStyle} hoverable={false}>
      {children}
    </Card.Grid>
  );
};

export default DetailInfoItemContent;
