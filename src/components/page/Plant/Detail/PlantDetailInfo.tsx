import { useEffect, useState } from "react";
import { getRecipeCountSum } from "@libs/recipeUtil.ts";
import { useRecoilValue } from "recoil";
import { plantDetailState } from "@services/Plant/PlantState.ts";
import DetailInfoItem from "@components/common/DetailInfo/Item/DetailInfoItem.tsx";
import DetailInfo from "@components/common/DetailInfo/DetailInfo.tsx";
import { sourceListToTagListInfo } from "@libs/plantUtil.ts";

const PlantDetailInfo = () => {
  const plantDetailValue = useRecoilValue(plantDetailState);

  const [plantNeedCount, setPlantNeedCount] = useState<number>(0);

  useEffect(() => {
    if (plantDetailValue) {
      setPlantNeedCount(
        getRecipeCountSum(
          plantDetailValue.plantId,
          plantDetailValue.dishWithLevelList,
        ),
      );
    }
  }, [plantDetailValue]);

  return (
    <DetailInfo>
      <DetailInfoItem>
        <DetailInfoItem.Title title={"이름"} />
        <DetailInfoItem.Text text={plantDetailValue?.name} />
      </DetailInfoItem>

      <DetailInfoItem>
        <DetailInfoItem.Title title={"원산지"} />
        <DetailInfoItem.MultiTag
          tagInfoList={sourceListToTagListInfo(plantDetailValue?.sourceDtoList)}
        />
      </DetailInfoItem>

      <DetailInfoItem>
        <DetailInfoItem.Title title={"필요 개수"} />
        <DetailInfoItem.Text text={plantNeedCount} />
      </DetailInfoItem>
    </DetailInfo>
  );
};

export default PlantDetailInfo;
