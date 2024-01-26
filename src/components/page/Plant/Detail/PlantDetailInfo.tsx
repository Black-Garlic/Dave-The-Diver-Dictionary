import { useEffect, useState } from "react";
import { getRecipeCountSum } from "@libs/recipeUtil.ts";
import { Card } from "antd";
import { useRecoilValue } from "recoil";
import { plantDetailState } from "@services/Plant/PlantState.ts";

const gridStyle: React.CSSProperties = {
  width: "25%",
  textAlign: "center",
};

const titleStyle: React.CSSProperties = {
  background: "#000",
  color: "#FFF",
};

const PlantDetailInfo = () => {
  const plantDetail = useRecoilValue(plantDetailState);
  const [plantNeedCount, setPlantNeedCount] = useState<number>(0);

  useEffect(() => {
    if (plantDetail) {
      setPlantNeedCount(
        getRecipeCountSum(plantDetail.id, plantDetail.dishList),
      );
    }
  }, [plantDetail]);

  return (
    <Card>
      <Card.Grid style={{ ...gridStyle, ...titleStyle }} hoverable={false}>
        이름
      </Card.Grid>
      <Card.Grid style={gridStyle} hoverable={false}>
        {plantDetail?.name}
      </Card.Grid>
      <Card.Grid style={{ ...gridStyle, ...titleStyle }} hoverable={false}>
        원산지
      </Card.Grid>
      <Card.Grid style={gridStyle} hoverable={false}>
        {plantDetail?.source}
      </Card.Grid>

      <Card.Grid style={{ ...gridStyle, ...titleStyle }} hoverable={false}>
        필요 개수
      </Card.Grid>
      <Card.Grid style={gridStyle} hoverable={false}>
        {plantNeedCount}
      </Card.Grid>
    </Card>
  );
};

export default PlantDetailInfo;
