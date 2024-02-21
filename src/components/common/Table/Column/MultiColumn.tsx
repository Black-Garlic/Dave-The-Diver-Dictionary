import { ReactNodeProps } from "@typings/ReactNodeProps.ts";
import { Space } from "antd";
import MultiColumnItem from "@components/common/Table/Column/MultiColumnItem.tsx";

interface Props extends ReactNodeProps {
  direction: "vertical" | "horizontal";
}

const MultiColumnMain = ({ direction, children }: Props) => {
  return (
    <Space direction={direction} style={{ width: "100%" }}>
      {children}
    </Space>
  );
};

const MultiColumn = Object.assign(MultiColumnMain, { Item: MultiColumnItem });

export default MultiColumn;
