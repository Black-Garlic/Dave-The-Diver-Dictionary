import { Card, Select, Tag } from "antd";
import { useRecoilState, useRecoilValue } from "recoil";
import { dishDetailState } from "@services/Dish/DishState.ts";
import { levelListState } from "@services/Level/LevelState.ts";
import { useCallback } from "react";
import { getLevel, getLevelOption } from "@libs/levelUtil.ts";
import { LEVEL_LABEL } from "@constants/Level.ts";
import { PARTY } from "@constants/Dish.ts";
import { getPartyColor } from "@libs/dishUtil.ts";

const gridStyle: React.CSSProperties = {
  width: "25%",
  textAlign: "center",
};

const titleStyle: React.CSSProperties = {
  background: "#000",
  color: "#FFF",
};

const DishDetailInfo = () => {
  const dishDetailValue = useRecoilValue(dishDetailState);
  const [levelListValue, setLevelList] = useRecoilState(levelListState);

  const handleChangeDishLevel = useCallback(
    (id: string, selectedLevel: string) => {
      const newLevelList = levelListValue.map((level) => {
        if (level.id === id) {
          return { ...level, level: getLevel(selectedLevel) };
        } else {
          return level;
        }
      });

      setLevelList(newLevelList);
    },
    [levelListValue, setLevelList],
  );

  return (
    <Card>
      <Card.Grid style={{ ...gridStyle, ...titleStyle }} hoverable={false}>
        이름
      </Card.Grid>
      <Card.Grid style={gridStyle} hoverable={false}>
        {dishDetailValue?.name}
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
        {dishDetailValue?.maxCost}
      </Card.Grid>
      <Card.Grid style={{ ...gridStyle, ...titleStyle }} hoverable={false}>
        맛점수
      </Card.Grid>
      <Card.Grid style={gridStyle} hoverable={false}>
        {dishDetailValue?.maxScore}
      </Card.Grid>

      <Card.Grid style={{ ...gridStyle, ...titleStyle }} hoverable={false}>
        그릇
      </Card.Grid>
      <Card.Grid style={gridStyle} hoverable={false}>
        {dishDetailValue?.maxCount}
      </Card.Grid>
      <Card.Grid style={{ ...gridStyle, ...titleStyle }} hoverable={false}>
        불꽃
      </Card.Grid>
      <Card.Grid style={gridStyle} hoverable={false}>
        {dishDetailValue?.flame}
      </Card.Grid>

      <Card.Grid style={{ ...gridStyle, ...titleStyle }} hoverable={false}>
        파티
      </Card.Grid>
      <Card.Grid style={gridStyle} hoverable={false}>
        {dishDetailValue?.party?.map((party: PARTY) => (
          <Tag color={getPartyColor(party)}>{party}</Tag>
        ))}
      </Card.Grid>
      <Card.Grid style={{ ...gridStyle, ...titleStyle }} hoverable={false}>
        레벨
      </Card.Grid>
      <Card.Grid style={gridStyle} hoverable={false}>
        <Select
          style={{ width: "100%" }}
          onChange={(selectedLevel) =>
            handleChangeDishLevel(dishDetailValue?.id, selectedLevel)
          }
          options={getLevelOption(dishDetailValue?.maxLevel)}
          value={LEVEL_LABEL[dishDetailValue?.level - 1]}
          placeholder="레벨"
          maxTagCount={"responsive"}
          listHeight={350}
        />
      </Card.Grid>
    </Card>
  );
};

export default DishDetailInfo;
