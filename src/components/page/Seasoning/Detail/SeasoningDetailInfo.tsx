import { useEffect, useState } from "react";
import { getRecipeCountSum } from "@libs/recipeUtil.ts";
import { Card } from "antd";
import { useRecoilValue } from "recoil";
import { seasoningDetailState } from "@services/Seasoning/SeasoningState.ts";

const gridStyle: React.CSSProperties = {
  width: "25%",
  textAlign: "center",
};

const titleStyle: React.CSSProperties = {
  background: "#000",
  color: "#FFF",
};

const SeasoningDetailInfo = () => {
  const seasoningDetailValue = useRecoilValue(seasoningDetailState);

  const [seasoningNeedCount, setSeasoningNeedCount] = useState<number>(0);

  useEffect(() => {
    if (seasoningDetailValue) {
      setSeasoningNeedCount(
        getRecipeCountSum(
          seasoningDetailValue.id,
          seasoningDetailValue.dishList,
        ),
      );
    }
  }, [seasoningDetailValue]);

  return (
    <Card>
      <Card.Grid style={{ ...gridStyle, ...titleStyle }} hoverable={false}>
        이름
      </Card.Grid>
      <Card.Grid style={gridStyle} hoverable={false}>
        {seasoningDetailValue?.name}
      </Card.Grid>
      <Card.Grid style={{ ...gridStyle, ...titleStyle }} hoverable={false}>
        원산지
      </Card.Grid>
      <Card.Grid style={gridStyle} hoverable={false}>
        {seasoningDetailValue?.source}
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
