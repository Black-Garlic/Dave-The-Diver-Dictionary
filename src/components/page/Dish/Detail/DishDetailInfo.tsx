import { Card, Select } from "antd";
import { useRecoilState, useRecoilValue } from "recoil";
import { dishDetailState } from "@services/Dish/DishState.ts";
import { levelListState } from "@services/Level/LevelState.ts";
import { useCallback } from "react";
import { getLevel, getLevelOption } from "@libs/levelUtil.ts";
import { LEVEL_LABEL } from "@constants/Level.ts";
import { partyListToTagInfoList } from "@libs/dishUtil.ts";
import DetailInfoItemTitle from "@components/common/DetailInfo/Item/DetailInfoItemTitle.tsx";
import DetailInfo from "@components/common/DetailInfo/DetailInfo.tsx";
import DetailInfoItem from "@components/common/DetailInfo/Item/DetailInfoItem.tsx";

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
    <DetailInfo>
      <DetailInfoItem>
        <DetailInfoItem.Title title={"이름"} />
        <DetailInfoItem.Text text={dishDetailValue?.name} />
      </DetailInfoItem>
      <DetailInfoItem>
        <DetailInfoItem.Title title={"랭크"} />
        <DetailInfoItem.Text text={undefined} />
      </DetailInfoItem>

      <DetailInfoItem>
        <DetailInfoItem.Title title={"가격"} />
        <DetailInfoItem.Text text={dishDetailValue?.maxCost} />
      </DetailInfoItem>
      <DetailInfoItem>
        <DetailInfoItem.Title title={"맛점수"} />
        <DetailInfoItem.Text text={dishDetailValue?.maxScore} />
      </DetailInfoItem>

      <DetailInfoItem>
        <DetailInfoItem.Title title={"그릇"} />
        <DetailInfoItem.Text text={dishDetailValue?.maxCount} />
      </DetailInfoItem>
      <DetailInfoItem>
        <DetailInfoItem.Title title={"불꽃"} />
        <DetailInfoItem.Text text={dishDetailValue?.flame} />
      </DetailInfoItem>

      <DetailInfoItem>
        <DetailInfoItem.Title title={"파티"} />
        <DetailInfoItem.MultiTag
          tagInfoList={partyListToTagInfoList(dishDetailValue?.party)}
        />
      </DetailInfoItem>

      <DetailInfoItemTitle title={"레벨"} />
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
    </DetailInfo>
  );
};

export default DishDetailInfo;
