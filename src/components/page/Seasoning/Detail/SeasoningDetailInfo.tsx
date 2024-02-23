import { useEffect, useState } from "react";
import { getRecipeCountSum } from "@libs/recipeUtil.ts";
import { Card, Tag } from "antd";
import { useRecoilValue } from "recoil";
import { seasoningDetailState } from "@services/Seasoning/SeasoningState.ts";
import { SEASONING_SOURCE } from "@constants/Seasoning.ts";
import { getSourceColor } from "@libs/sourceUtil.ts";
import DetailInfoItemTitle from "@components/common/DetailInfo/Item/DetailInfoItemTitle.tsx";
import DetailInfo from "@components/common/DetailInfo/DetailInfo.tsx";
import DetailInfoItem from "@components/common/DetailInfo/Item/DetailInfoItem.tsx";

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
    <DetailInfo>
      <DetailInfoItem>
        <DetailInfoItem.Title title={"이름"} />
        <DetailInfoItem.Text text={seasoningDetailValue?.name} />
      </DetailInfoItem>
      <DetailInfoItemTitle title={"원산지"} />
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

      <DetailInfoItem>
        <DetailInfoItem.Title title={"필요 개수"} />
        <DetailInfoItem.Text text={seasoningNeedCount} />
      </DetailInfoItem>
    </DetailInfo>
  );
};

export default SeasoningDetailInfo;
