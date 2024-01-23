import { SeasoningWithDishLevel } from "@typings/Seasoning.ts";
import { useEffect, useState } from "react";
import { getRecipeCountSum } from "@libs/recipeUtil.ts";
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
  seasoning: SeasoningWithDishLevel;
}

const SeasoningDetailInfo = ({ seasoning }: Props) => {
  const [seasoningNeedCount, setSeasoningNeedCount] = useState<number>(0);

  useEffect(() => {
    setSeasoningNeedCount(getRecipeCountSum(seasoning.id, seasoning.dishList));
  }, [seasoning]);

  return (
    <Card>
      <Card.Grid style={{ ...gridStyle, ...titleStyle }} hoverable={false}>
        이름
      </Card.Grid>
      <Card.Grid style={gridStyle} hoverable={false}>
        {seasoning.name}
      </Card.Grid>
      <Card.Grid style={{ ...gridStyle, ...titleStyle }} hoverable={false}>
        원산지
      </Card.Grid>
      <Card.Grid style={gridStyle} hoverable={false}>
        {seasoning.source}
      </Card.Grid>

      <Card.Grid style={{ ...gridStyle, ...titleStyle }} hoverable={false}>
        필요 개수
      </Card.Grid>
      <Card.Grid style={gridStyle} hoverable={false}>
        {seasoningNeedCount}
      </Card.Grid>
    </Card>
  );
};

export default SeasoningDetailInfo;
