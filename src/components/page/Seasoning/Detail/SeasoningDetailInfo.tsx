import { useEffect, useState } from "react";
import { getRecipeCountSum } from "@libs/recipeUtil.ts";
import { Card, Tag } from "antd";
import { useRecoilValue } from "recoil";
import { seasoningDetailState } from "@services/Seasoning/SeasoningState.ts";
import { SEASONING_SOURCE } from "@constants/Seasoning.ts";
import { getSourceColor } from "@libs/sourceUtil.ts";
import DetailTitle from "@components/common/Detail/DetailTitle.tsx";

const gridStyle: React.CSSProperties = {
  width: "25%",
  textAlign: "center",
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
      <DetailTitle title={"이름"} />
      <Card.Grid style={gridStyle} hoverable={false}>
        {seasoningDetailValue?.name}
      </Card.Grid>
      <DetailTitle title={"원산지"} />
      <Card.Grid style={gridStyle} hoverable={false}>
        {seasoningDetailValue?.source &&
          seasoningDetailValue?.source?.map(
            (source: SEASONING_SOURCE, index: number) => (
              <Tag color={getSourceColor(source)} key={`${source}-${index}`}>
                {source}
              </Tag>
            ),
          )}
      </Card.Grid>

      <DetailTitle title={"필요 개수"} />
      <Card.Grid style={gridStyle} hoverable={false}>
        {seasoningNeedCount}
      </Card.Grid>
    </Card>
  );
};

export default SeasoningDetailInfo;
