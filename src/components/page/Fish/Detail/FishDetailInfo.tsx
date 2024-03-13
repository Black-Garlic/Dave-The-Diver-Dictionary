import { useEffect, useState } from "react";
import { getRecipeCountSum } from "@libs/recipeUtil.ts";
import { useRecoilValue } from "recoil";
import { fishDetailState } from "@services/Fish/FishState.ts";
import DetailInfoItem from "@components/common/DetailInfo/Item/DetailInfoItem.tsx";
import DetailInfo from "@components/common/DetailInfo/DetailInfo.tsx";

const FishDetailInfo = () => {
  const fishDetailValue = useRecoilValue(fishDetailState);

  const [fishNeedCount, setFishNeedCount] = useState<number>(0);

  useEffect(() => {
    if (fishDetailValue) {
      setFishNeedCount(
        getRecipeCountSum(fishDetailValue.fishId, fishDetailValue.dishList),
      );
    }
  }, [fishDetailValue]);

  return (
    <DetailInfo>
      <DetailInfoItem>
        <DetailInfoItem.Title title={"랭크"} />
        <DetailInfoItem.Text text={fishDetailValue?.rank} />
      </DetailInfoItem>
      <DetailInfoItem>
        <DetailInfoItem.Title title={"이름"} />
        <DetailInfoItem.Text text={fishDetailValue?.name} />
      </DetailInfoItem>

      <DetailInfoItem>
        <DetailInfoItem.Title title={"지역"} />
        <DetailInfoItem.Tag
          color={fishDetailValue?.regionDto.color}
          value={fishDetailValue?.regionDto.name}
        />
      </DetailInfoItem>
      <DetailInfoItem>
        <DetailInfoItem.Title title={"시간대"} />
        <DetailInfoItem.Tag
          color={fishDetailValue?.timeDto.color}
          value={fishDetailValue?.timeDto.name}
        />
      </DetailInfoItem>

      <DetailInfoItem>
        <DetailInfoItem.Title title={"필요 개수"} />
        <DetailInfoItem.Text text={fishNeedCount} />
      </DetailInfoItem>
    </DetailInfo>
  );
};

export default FishDetailInfo;
