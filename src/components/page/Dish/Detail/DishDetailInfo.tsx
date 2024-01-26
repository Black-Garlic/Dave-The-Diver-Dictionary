import { Card } from "antd";
import { useRecoilValue } from "recoil";
import { dishDetailState } from "@services/Dish/DishState.ts";

const gridStyle: React.CSSProperties = {
  width: "25%",
  textAlign: "center",
};

const titleStyle: React.CSSProperties = {
  background: "#000",
  color: "#FFF",
};

const DishDetailInfo = () => {
  const dishDetail = useRecoilValue(dishDetailState);

  return (
    <Card>
      <Card.Grid style={{ ...gridStyle, ...titleStyle }} hoverable={false}>
        이름
      </Card.Grid>
      <Card.Grid style={gridStyle} hoverable={false}>
        {dishDetail?.name}
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
        {dishDetail?.maxCost}
      </Card.Grid>
      <Card.Grid style={{ ...gridStyle, ...titleStyle }} hoverable={false}>
        맛점수
      </Card.Grid>
      <Card.Grid style={gridStyle} hoverable={false}>
        {dishDetail?.maxScore}
      </Card.Grid>

      <Card.Grid style={{ ...gridStyle, ...titleStyle }} hoverable={false}>
        그릇
      </Card.Grid>
      <Card.Grid style={gridStyle} hoverable={false}>
        {dishDetail?.maxCount}
      </Card.Grid>
      <Card.Grid style={{ ...gridStyle, ...titleStyle }} hoverable={false}>
        불꽃
      </Card.Grid>
      <Card.Grid style={gridStyle} hoverable={false}>
        {dishDetail?.flame}
      </Card.Grid>

      <Card.Grid style={{ ...gridStyle, ...titleStyle }} hoverable={false}>
        파티
      </Card.Grid>
      <Card.Grid style={gridStyle} hoverable={false}>
        {dishDetail?.party?.map((party) => <>{party}</>)}
      </Card.Grid>
      <Card.Grid style={{ ...gridStyle, ...titleStyle }} hoverable={false}>
        레벨
      </Card.Grid>
      <Card.Grid style={gridStyle} hoverable={false}>
        {dishDetail?.level}
      </Card.Grid>
    </Card>
  );
};

export default DishDetailInfo;
