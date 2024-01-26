import { Card } from "antd";
import { useEffect, useState } from "react";
import { getRecipeCountSum } from "@libs/recipeUtil.ts";
import { useRecoilValue } from "recoil";
import { fishDetailState } from "@services/Fish/FishState.ts";

const gridStyle: React.CSSProperties = {
  width: "25%",
  textAlign: "center",
};

const titleStyle: React.CSSProperties = {
  background: "#000",
  color: "#FFF",
};

const FishDetailInfo = () => {
  const fishDetail = useRecoilValue(fishDetailState);
  const [fishNeedCount, setFishNeedCount] = useState<number>(0);

  useEffect(() => {
    if (fishDetail) {
      setFishNeedCount(getRecipeCountSum(fishDetail.id, fishDetail.dishList));
    }
  }, [fishDetail]);

  return (
    <Card>
      <Card.Grid style={{ ...gridStyle, ...titleStyle }} hoverable={false}>
        랭크
      </Card.Grid>
      <Card.Grid style={gridStyle} hoverable={false}>
        {fishDetail?.rank}
      </Card.Grid>
      <Card.Grid style={{ ...gridStyle, ...titleStyle }} hoverable={false}>
        이름
      </Card.Grid>
      <Card.Grid style={gridStyle} hoverable={false}>
        {fishDetail?.name}
      </Card.Grid>

      <Card.Grid style={{ ...gridStyle, ...titleStyle }} hoverable={false}>
        지역
      </Card.Grid>
      <Card.Grid style={gridStyle} hoverable={false}>
        {fishDetail?.region}
      </Card.Grid>
      <Card.Grid style={{ ...gridStyle, ...titleStyle }} hoverable={false}>
        시간대
      </Card.Grid>
      <Card.Grid style={gridStyle} hoverable={false}>
        {fishDetail?.time}
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
