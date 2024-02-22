import { Card, Tag } from "antd";
import { useEffect, useState } from "react";
import { getRecipeCountSum } from "@libs/recipeUtil.ts";
import { useRecoilValue } from "recoil";
import { fishDetailState } from "@services/Fish/FishState.ts";
import { getRegionColor } from "@libs/regionUtil.ts";
import { getTimeColor } from "@libs/timeUtil.ts";
import DetailTitle from "@components/common/Detail/DetailTitle.tsx";

const gridStyle: React.CSSProperties = {
  width: "25%",
  textAlign: "center",
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
      <DetailTitle title={"랭크"} />
      <Card.Grid style={gridStyle} hoverable={false}>
        {fishDetailValue?.rank}
      </Card.Grid>
      <DetailTitle title={"이름"} />
      <Card.Grid style={gridStyle} hoverable={false}>
        {fishDetailValue?.name}
      </Card.Grid>

      <DetailTitle title={"지역"} />
      <Card.Grid style={gridStyle} hoverable={false}>
        {fishDetailValue?.region && (
          <Tag color={getRegionColor(fishDetailValue?.region)}>
            {fishDetailValue?.region}
          </Tag>
        )}
      </Card.Grid>
      <DetailTitle title={"시간대"} />
      <Card.Grid style={gridStyle} hoverable={false}>
        {fishDetailValue?.time && (
          <Tag color={getTimeColor(fishDetailValue?.time)}>
            {fishDetailValue?.time}
          </Tag>
        )}
      </Card.Grid>

      <DetailTitle title={"필요 개수"} />
      <Card.Grid style={gridStyle} hoverable={false}>
        {fishNeedCount}
      </Card.Grid>
    </Card>
  );
};

export default FishDetailInfo;
