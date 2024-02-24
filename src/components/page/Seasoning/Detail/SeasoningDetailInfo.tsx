import { useEffect, useState } from "react";
import { getRecipeCountSum } from "@libs/recipeUtil.ts";
import { useRecoilValue } from "recoil";
import { seasoningDetailState } from "@services/Seasoning/SeasoningState.ts";
import DetailInfo from "@components/common/DetailInfo/DetailInfo.tsx";
import DetailInfoItem from "@components/common/DetailInfo/Item/DetailInfoItem.tsx";
import { sourceListToTagInfoList } from "@libs/seasoningUtil.ts";

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

      <DetailInfoItem>
        <DetailInfoItem.Title title={"원산지"} />
        <DetailInfoItem.MultiTag
          tagInfoList={sourceListToTagInfoList(seasoningDetailValue?.source)}
        />
      </DetailInfoItem>

      <DetailInfoItem>
        <DetailInfoItem.Title title={"필요 개수"} />
        <DetailInfoItem.Text text={seasoningNeedCount} />
      </DetailInfoItem>
    </DetailInfo>
  );
};

export default SeasoningDetailInfo;
