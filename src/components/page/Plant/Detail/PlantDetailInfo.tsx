import { useEffect, useState } from "react";
import { getRecipeCountSum } from "@libs/recipeUtil.ts";
import { Card, Tag } from "antd";
import { useRecoilValue } from "recoil";
import { plantDetailState } from "@services/Plant/PlantState.ts";
import { PLANT_SOURCE } from "@constants/Plant.ts";
import { getSourceColor } from "@libs/sourceUtil.ts";
import DetailInfoItemTitle from "@components/common/DetailInfo/Item/DetailInfoItemTitle.tsx";
import DetailInfoItem from "@components/common/DetailInfo/Item/DetailInfoItem.tsx";
import DetailInfo from "@components/common/DetailInfo/DetailInfo.tsx";

const gridStyle: React.CSSProperties = {
  width: "25%",
  textAlign: "center",
};

const PlantDetailInfo = () => {
  const plantDetailValue = useRecoilValue(plantDetailState);

  const [plantNeedCount, setPlantNeedCount] = useState<number>(0);

  useEffect(() => {
    if (plantDetailValue) {
      setPlantNeedCount(
        getRecipeCountSum(plantDetailValue.id, plantDetailValue.dishList),
      );
    }
  }, [plantDetailValue]);

  return (
    <DetailInfo>
      <DetailInfoItem>
        <DetailInfoItem.Title title={"이름"} />
        <DetailInfoItem.Text text={plantDetailValue?.name} />
      </DetailInfoItem>
      <DetailInfoItemTitle title={"원산지"} />
      <Card.Grid style={gridStyle} hoverable={false}>
        {plantDetailValue?.source?.map(
          (source: PLANT_SOURCE, index: number) => (
            <Tag color={getSourceColor(source)} key={`${source}-${index}`}>
              {source}
            </Tag>
          ),
        )}
      </Card.Grid>

      <DetailInfoItem>
        <DetailInfoItem.Title title={"필요 개수"} />
        <DetailInfoItem.Text text={plantNeedCount} />
      </DetailInfoItem>
    </DetailInfo>
  );
};

export default PlantDetailInfo;
