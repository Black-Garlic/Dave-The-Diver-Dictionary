import { useEffect, useState } from "react";
import { getRecipeCountSum } from "@libs/recipeUtil.ts";
import { Card, Tag } from "antd";
import { useRecoilValue } from "recoil";
import { plantDetailState } from "@services/Plant/PlantState.ts";
import { PLANT_SOURCE } from "@constants/Plant.ts";
import { getSourceColor } from "@libs/sourceUtil.ts";
import DetailTitle from "@components/common/Detail/DetailTitle.tsx";

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
    <Card>
      <DetailTitle title={"이름"} />
      <Card.Grid style={gridStyle} hoverable={false}>
        {plantDetailValue?.name}
      </Card.Grid>
      <DetailTitle title={"원산지"} />
      <Card.Grid style={gridStyle} hoverable={false}>
        {plantDetailValue?.source &&
          plantDetailValue?.source?.map(
            (source: PLANT_SOURCE, index: number) => (
              <Tag color={getSourceColor(source)} key={`${source}-${index}`}>
                {source}
              </Tag>
            ),
          )}
      </Card.Grid>

      <DetailTitle title={"필요 개수"} />
      <Card.Grid style={gridStyle} hoverable={false}>
        {plantNeedCount}
      </Card.Grid>
    </Card>
  );
};

export default PlantDetailInfo;
