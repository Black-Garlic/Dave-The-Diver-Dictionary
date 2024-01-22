import { PlantWithDishLevel } from "@typings/Plant.ts";
import { useEffect, useState } from "react";
import { getRecipeCountSum } from "@libs/recipeUtil.ts";
import { Card } from "antd";

const gridStyle: React.CSSProperties = {
  width: "25%",
  textAlign: "center",
};

const titleStyle: React.CSSProperties = {
  background: "#000",
  color: "#FFF",
};

interface Props {
  plant?: PlantWithDishLevel;
}

const PlantDetailInfo = ({ plant }: Props) => {
  const [plantNeedCount, setPlantNeedCount] = useState<number>(0);

  useEffect(() => {
    if (!plant) return;

    setPlantNeedCount(getRecipeCountSum(plant.id, plant.dishList));
  }, [plant]);

  if (!plant) return null;

  return (
    <Card>
      <Card.Grid style={{ ...gridStyle, ...titleStyle }} hoverable={false}>
        이름
      </Card.Grid>
      <Card.Grid style={gridStyle} hoverable={false}>
        {plant.name}
      </Card.Grid>
      <Card.Grid style={{ ...gridStyle, ...titleStyle }} hoverable={false}>
        원산지
      </Card.Grid>
      <Card.Grid style={gridStyle} hoverable={false}>
        {plant.source}
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
