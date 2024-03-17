import { ReactNodeProps } from "@typings/ReactNodeProps.ts";
import { Col, Flex } from "antd";

interface Props extends ReactNodeProps {
  flex: "auto" | "none";
}

const ListFilterColumn = ({ flex, children }: Props) => {
  return (
    <Col flex={flex} style={{ margin: "10px 0px" }}>
      <Flex gap={"middle"}>{children}</Flex>
    </Col>
  );
};

export default ListFilterColumn;
