import { Card } from "antd";
import { FishWithDish } from "@typings/Fish.ts";
import { useCallback, useEffect, useState } from "react";
import { getDishRecipe, getRemainCount } from "@libs/recipeUtil.ts";
import { DishWithLevel } from "@typings/Dish.ts";

const gridStyle: React.CSSProperties = {
  width: "25%",
  textAlign: "center",
};

const titleStyle: React.CSSProperties = {
  background: "#000",
  color: "#FFF",
};

interface Props {
  fish?: FishWithDish;
  dishList: DishWithLevel[];
}

const FishDetailInfo = ({ fish, dishList }: Props) => {
  const [fishNeedCount, setFishNeedCount] = useState<number>(0);

  const getFishRecipeCount = useCallback(
    (dish: DishWithLevel): number => {
      const dishRecipe = getDishRecipe(dish.id);

      if (dishRecipe) {
        let recipeCount = 0;

        dishRecipe.recipe.forEach((recipe) => {
          if (recipe.id === fish?.id) {
            recipeCount = recipe.count;
          }
        });

        return getRemainCount(recipeCount, dish.level);
      } else {
        return 0;
      }
    },
    [fish?.id],
  );

  useEffect(() => {
    const fishNeedCount = dishList
      .map((dish) => getFishRecipeCount(dish))
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    setFishNeedCount(fishNeedCount);
  }, [dishList, getFishRecipeCount]);

  if (!fish) return null;

  return (
    <Card>
      <Card.Grid style={{ ...gridStyle, ...titleStyle }} hoverable={false}>
        랭크
      </Card.Grid>
      <Card.Grid style={gridStyle} hoverable={false}>
        {fish.rank}
      </Card.Grid>
      <Card.Grid style={{ ...gridStyle, ...titleStyle }} hoverable={false}>
        이름
      </Card.Grid>
      <Card.Grid style={gridStyle} hoverable={false}>
        {fish.name}
      </Card.Grid>

      <Card.Grid style={{ ...gridStyle, ...titleStyle }} hoverable={false}>
        지역
      </Card.Grid>
      <Card.Grid style={gridStyle} hoverable={false}>
        {fish.region}
      </Card.Grid>
      <Card.Grid style={{ ...gridStyle, ...titleStyle }} hoverable={false}>
        시간대
      </Card.Grid>
      <Card.Grid style={gridStyle} hoverable={false}>
        {fish.time}
      </Card.Grid>

      <Card.Grid style={{ ...gridStyle, ...titleStyle }} hoverable={false}>
        필요 개수
      </Card.Grid>
      <Card.Grid style={gridStyle} hoverable={false}>
        {fishNeedCount}
      </Card.Grid>
    </Card>
  );
};

export default FishDetailInfo;
