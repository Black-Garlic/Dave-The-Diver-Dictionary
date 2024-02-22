import { Card, Select, Tag } from "antd";
import { useRecoilState, useRecoilValue } from "recoil";
import { dishDetailState } from "@services/Dish/DishState.ts";
import { levelListState } from "@services/Level/LevelState.ts";
import { useCallback } from "react";
import { getLevel, getLevelOption } from "@libs/levelUtil.ts";
import { LEVEL_LABEL } from "@constants/Level.ts";
import { PARTY } from "@constants/Dish.ts";
import { getPartyColor } from "@libs/dishUtil.ts";
import DetailTitle from "@components/common/Detail/DetailTitle.tsx";

const gridStyle: React.CSSProperties = {
  width: "25%",
  textAlign: "center",
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
      <DetailTitle title={"이름"} />
      <Card.Grid style={gridStyle} hoverable={false}>
        {dishDetailValue?.name}
      </Card.Grid>
      <DetailTitle title={"랭크"} />
      <Card.Grid style={gridStyle} hoverable={false}>
        {/*{dish.rank}*/}
      </Card.Grid>

      <DetailTitle title={"가격"} />
      <Card.Grid style={gridStyle} hoverable={false}>
        {dishDetailValue?.maxCost}
      </Card.Grid>
      <DetailTitle title={"맛점수"} />
      <Card.Grid style={gridStyle} hoverable={false}>
        {dishDetailValue?.maxScore}
      </Card.Grid>

      <DetailTitle title={"그릇"} />
      <Card.Grid style={gridStyle} hoverable={false}>
        {dishDetailValue?.maxCount}
      </Card.Grid>
      <DetailTitle title={"불꽃"} />
      <Card.Grid style={gridStyle} hoverable={false}>
        {dishDetailValue?.flame}
      </Card.Grid>

      <DetailTitle title={"파티"} />
      <Card.Grid style={gridStyle} hoverable={false}>
        {dishDetailValue?.party?.map((party: PARTY) => (
          <Tag color={getPartyColor(party)}>{party}</Tag>
        ))}
      </Card.Grid>
      <DetailTitle title={"레벨"} />
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
