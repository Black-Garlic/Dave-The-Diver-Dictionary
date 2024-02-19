import { Card, Tag } from "antd";
import { useEffect, useState } from "react";
import { getRecipeCountSum } from "@libs/recipeUtil.ts";
import { useRecoilValue } from "recoil";
import { fishDetailState } from "@services/Fish/FishState.ts";
import { getRegionColor } from "@libs/regionUtil.ts";
import { getTimeColor } from "@libs/timeUtil.ts";

const gridStyle: React.CSSProperties = {
  width: "25%",
  textAlign: "center",
};

const titleStyle: React.CSSProperties = {
  background: "#000",
  color: "#FFF",
};

const FishDetailInfo = () => {
  const fishDetailValue = useRecoilValue(fishDetailState);

  const [fishNeedCount, setFishNeedCount] = useState<number>(0);

  useEffect(() => {
    if (fishDetailValue) {
      setFishNeedCount(
        getRecipeCountSum(fishDetailValue.id, fishDetailValue.dishList),
      );
    }
  }, [fishDetailValue]);

  return (
    <Card>
      <Card.Grid style={{ ...gridStyle, ...titleStyle }} hoverable={false}>
        랭크
      </Card.Grid>
      <Card.Grid style={gridStyle} hoverable={false}>
        {fishDetailValue?.rank}
      </Card.Grid>
      <Card.Grid style={{ ...gridStyle, ...titleStyle }} hoverable={false}>
        이름
      </Card.Grid>
      <Card.Grid style={gridStyle} hoverable={false}>
        {fishDetailValue?.name}
      </Card.Grid>

      <Card.Grid style={{ ...gridStyle, ...titleStyle }} hoverable={false}>
        지역
      </Card.Grid>
      <Card.Grid style={gridStyle} hoverable={false}>
        {fishDetailValue?.region && (
          <Tag color={getRegionColor(fishDetailValue?.region)}>
            {fishDetailValue?.region}
          </Tag>
        )}
      </Card.Grid>
      <Card.Grid style={{ ...gridStyle, ...titleStyle }} hoverable={false}>
        시간대
      </Card.Grid>
      <Card.Grid style={gridStyle} hoverable={false}>
        {fishDetailValue?.time && (
          <Tag color={getTimeColor(fishDetailValue?.time)}>
            {fishDetailValue?.time}
          </Tag>
        )}
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
