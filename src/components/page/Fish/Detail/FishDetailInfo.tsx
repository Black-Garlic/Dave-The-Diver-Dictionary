import { Card } from "antd";
import { FishWithDish } from "@typings/Fish.ts";

const gridStyle: React.CSSProperties = {
  width: "25%",
  textAlign: "center",
};

const titleStyle: React.CSSProperties = {
  background: "#000",
  color: "#FFF",
};

interface Props {
  fish?: FishWithDish;
}

const FishDetailInfo = ({ fish }: Props) => {
  if (!fish) return null;

  return (
    <Card>
      <Card.Grid style={{ ...gridStyle, ...titleStyle }} hoverable={false}>
        랭크
      </Card.Grid>
      <Card.Grid style={gridStyle} hoverable={false}>
        {fish.rank}
      </Card.Grid>
      <Card.Grid style={{ ...gridStyle, ...titleStyle }} hoverable={false}>
        이름
      </Card.Grid>
      <Card.Grid style={gridStyle} hoverable={false}>
        {fish.name}
      </Card.Grid>

      <Card.Grid style={{ ...gridStyle, ...titleStyle }} hoverable={false}>
        지역
      </Card.Grid>
      <Card.Grid style={gridStyle} hoverable={false}>
        {fish.region}
      </Card.Grid>
      <Card.Grid style={{ ...gridStyle, ...titleStyle }} hoverable={false}>
        시간대
      </Card.Grid>
      <Card.Grid style={gridStyle} hoverable={false}>
        {fish.time}
      </Card.Grid>
    </Card>
  );
};

export default FishDetailInfo;
