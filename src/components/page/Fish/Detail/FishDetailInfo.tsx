import { Card } from "antd";
import { FishWithDish } from "@typings/Fish.ts";
import { useEffect, useState } from "react";
import { getRecipeCountSum } from "@libs/recipeUtil.ts";
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
  fish: FishWithDish;
  dishList: DishWithLevel[];
}

const FishDetailInfo = ({ fish, dishList }: Props) => {
  const [fishNeedCount, setFishNeedCount] = useState<number>(0);

  useEffect(() => {
    setFishNeedCount(getRecipeCountSum(fish.id, dishList));
  }, [dishList, fish]);

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

      <Card.Grid style={{ ...gridStyle, ...titleStyle }} hoverable={false}>
        필요 개수
      </Card.Grid>
      <Card.Grid style={gridStyle} hoverable={false}>
        {fishNeedCount}
      </Card.Grid>
    </Card>
  );
};

export default FishDetailInfo;
