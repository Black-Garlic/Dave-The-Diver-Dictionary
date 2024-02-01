import { Card, Select } from "antd";
import { useRecoilState, useRecoilValue } from "recoil";
import { dishDetailState } from "@services/Dish/DishState.ts";
import { levelListState } from "@services/Level/LevelState.ts";
import { useCallback } from "react";
import { getLevel, getLevelOption } from "@libs/levelUtil.ts";
import { LEVEL_LABEL } from "@constants/Level.ts";

const gridStyle: React.CSSProperties = {
  width: "25%",
  textAlign: "center",
};

const titleStyle: React.CSSProperties = {
  background: "#000",
  color: "#FFF",
};

const DishDetailInfo = () => {
  const dishDetail = useRecoilValue(dishDetailState);
  const [levelList, setLevelListState] = useRecoilState(levelListState);

  const handleChangeDishLevel = useCallback(
    (id: string, selectedLevel: string) => {
      const newLevelList = levelList.map((level) => {
        if (level.id === id) {
          return { ...level, level: getLevel(selectedLevel) };
        } else {
          return level;
        }
      });

      setLevelListState(newLevelList);
    },
    [levelList, setLevelListState],
  );

  return (
    <Card>
      <Card.Grid style={{ ...gridStyle, ...titleStyle }} hoverable={false}>
        이름
      </Card.Grid>
      <Card.Grid style={gridStyle} hoverable={false}>
        {dishDetail?.name}
      </Card.Grid>
      <Card.Grid style={{ ...gridStyle, ...titleStyle }} hoverable={false}>
        랭크
      </Card.Grid>
      <Card.Grid style={gridStyle} hoverable={false}>
        {/*{dish.rank}*/}
      </Card.Grid>

      <Card.Grid style={{ ...gridStyle, ...titleStyle }} hoverable={false}>
        가격
      </Card.Grid>
      <Card.Grid style={gridStyle} hoverable={false}>
        {dishDetail?.maxCost}
      </Card.Grid>
      <Card.Grid style={{ ...gridStyle, ...titleStyle }} hoverable={false}>
        맛점수
      </Card.Grid>
      <Card.Grid style={gridStyle} hoverable={false}>
        {dishDetail?.maxScore}
      </Card.Grid>

      <Card.Grid style={{ ...gridStyle, ...titleStyle }} hoverable={false}>
        그릇
      </Card.Grid>
      <Card.Grid style={gridStyle} hoverable={false}>
        {dishDetail?.maxCount}
      </Card.Grid>
      <Card.Grid style={{ ...gridStyle, ...titleStyle }} hoverable={false}>
        불꽃
      </Card.Grid>
      <Card.Grid style={gridStyle} hoverable={false}>
        {dishDetail?.flame}
      </Card.Grid>

      <Card.Grid style={{ ...gridStyle, ...titleStyle }} hoverable={false}>
        파티
      </Card.Grid>
      <Card.Grid style={gridStyle} hoverable={false}>
        {dishDetail?.party?.map((party) => <>{party}</>)}
      </Card.Grid>
      <Card.Grid style={{ ...gridStyle, ...titleStyle }} hoverable={false}>
        레벨
      </Card.Grid>
      <Card.Grid style={gridStyle} hoverable={false}>
        <Select
          style={{ width: "100%" }}
          onChange={(selectedLevel) =>
            handleChangeDishLevel(dishDetail?.id, selectedLevel)
          }
          options={getLevelOption(dishDetail?.maxLevel)}
          value={LEVEL_LABEL[dishDetail?.level - 1]}
          placeholder="레벨"
          maxTagCount={"responsive"}
          listHeight={350}
        />
      </Card.Grid>
    </Card>
  );
};

export default DishDetailInfo;
