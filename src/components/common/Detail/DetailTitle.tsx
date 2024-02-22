import { Card } from "antd";

const gridStyle: React.CSSProperties = {
  width: "25%",
  textAlign: "center",
};

const titleStyle: React.CSSProperties = {
  background: "#000",
  color: "#FFF",
};

interface Props {
  title: string;
}

const DetailTitle = ({ title }: Props) => {
  return (
    <Card.Grid style={{ ...gridStyle, ...titleStyle }} hoverable={false}>
      {title}
    </Card.Grid>
  );
};

export default DetailTitle;
