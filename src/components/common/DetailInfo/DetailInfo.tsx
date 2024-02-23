import { ReactNodeProps } from "@typings/ReactNodeProps.ts";
import { Card } from "antd";

const DetailInfo = ({ children }: ReactNodeProps) => {
  return <Card className={"ant-card-contain-grid"}>{children}</Card>;
};

export default DetailInfo;
