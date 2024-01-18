import { Card } from "antd";
import { DishWithLevel } from "@typings/Dish.ts";

const gridStyle: React.CSSProperties = {
  width: "25%",
  textAlign: "center",
};

const titleStyle: React.CSSProperties = {
  background: "#000",
  color: "#FFF",
};

interface Props {
  dish?: DishWithLevel;
}

const DishDetailInfo = ({ dish }: Props) => {
  if (!dish) return null;

  return (
    <Card>
      <Card.Grid style={{ ...gridStyle, ...titleStyle }} hoverable={false}>
        이름
      </Card.Grid>
      <Card.Grid style={gridStyle} hoverable={false}>
        {dish.name}
      </Card.Grid>
      <Card.Grid style={{ ...gridStyle, ...titleStyle }} hoverable={false}>
        랭크
      </Card.Grid>
      <Card.Grid style={gridStyle} hoverable={false}>
        {/*{dish.rank}*/}
      </Card.Grid>

      <Card.Grid style={{ ...gridStyle, ...titleStyle }} hoverable={false}>
        가격
      </Card.Grid>
      <Card.Grid style={gridStyle} hoverable={false}>
        {dish.maxCost}
      </Card.Grid>
      <Card.Grid style={{ ...gridStyle, ...titleStyle }} hoverable={false}>
        맛점수
      </Card.Grid>
      <Card.Grid style={gridStyle} hoverable={false}>
        {dish.maxScore}
      </Card.Grid>

      <Card.Grid style={{ ...gridStyle, ...titleStyle }} hoverable={false}>
        그릇
      </Card.Grid>
      <Card.Grid style={gridStyle} hoverable={false}>
        {dish.maxCount}
      </Card.Grid>
      <Card.Grid style={{ ...gridStyle, ...titleStyle }} hoverable={false}>
        불꽃
      </Card.Grid>
      <Card.Grid style={gridStyle} hoverable={false}>
        {dish.flame}
      </Card.Grid>

      <Card.Grid style={{ ...gridStyle, ...titleStyle }} hoverable={false}>
        파티
      </Card.Grid>
      <Card.Grid style={gridStyle} hoverable={false}>
        {dish.party?.map((party) => <>{party}</>)}
      </Card.Grid>
      <Card.Grid style={{ ...gridStyle, ...titleStyle }} hoverable={false}>
        레벨
      </Card.Grid>
      <Card.Grid style={gridStyle} hoverable={false}>
        {dish.level}
      </Card.Grid>
    </Card>
  );
};

export default DishDetailInfo;
