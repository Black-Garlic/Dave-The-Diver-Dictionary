import { ReactNodeProps } from "@typings/ReactNodeProps.ts";
import { Space } from "antd";

const MultiColumnItem = ({ children }: ReactNodeProps) => {
  return <Space.Compact style={{ width: "100%" }}>{children}</Space.Compact>;
};

export default MultiColumnItem;
