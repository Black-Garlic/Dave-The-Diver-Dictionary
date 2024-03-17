import { ReactNodeProps } from "@typings/ReactNodeProps.ts";
import { Row } from "antd";

const ListFilterRow = ({ children }: ReactNodeProps) => {
  return <Row>{children}</Row>;
};

export default ListFilterRow;
