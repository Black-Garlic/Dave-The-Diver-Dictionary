import { useRecoilValue } from "recoil";
import { dishDetailState } from "@services/Dish/DishState.ts";
import { getLevelOption } from "@libs/levelUtil.ts";
import { LEVEL_LABEL } from "@constants/Level.ts";
import { partyListToTagInfoList } from "@libs/dishUtil.ts";
import DetailInfo from "@components/common/DetailInfo/DetailInfo.tsx";
import DetailInfoItem from "@components/common/DetailInfo/Item/DetailInfoItem.tsx";
import useDishLevel from "@hooks/useDishLevel.tsx";

const DishDetailInfo = () => {
  const { handleDishLevelChange } = useDishLevel();

  const dishDetailValue = useRecoilValue(dishDetailState);

  return (
    <DetailInfo>
      <DetailInfoItem title={"이름"}>
        <DetailInfoItem.Text text={dishDetailValue?.name} />
      </DetailInfoItem>

      <DetailInfoItem title={"랭크"}>
        <DetailInfoItem.Text text={undefined} />
      </DetailInfoItem>

      <DetailInfoItem title={"가격"}>
        <DetailInfoItem.Text text={dishDetailValue?.maxCost} />
      </DetailInfoItem>

      <DetailInfoItem title={"맛점수"}>
        <DetailInfoItem.Text text={dishDetailValue?.maxScore} />
      </DetailInfoItem>

      <DetailInfoItem title={"그릇"}>
        <DetailInfoItem.Text text={dishDetailValue?.maxCount} />
      </DetailInfoItem>

      <DetailInfoItem title={"불꽃"}>
        <DetailInfoItem.Text text={dishDetailValue?.flame} />
      </DetailInfoItem>

      <DetailInfoItem title={"파티"}>
        <DetailInfoItem.MultiTag
          tagInfoList={partyListToTagInfoList(dishDetailValue?.partyDtoList)}
        />
      </DetailInfoItem>

      <DetailInfoItem title={"레벨"}>
        <DetailInfoItem.Select
          handleChange={(selectedLevel) =>
            handleDishLevelChange(dishDetailValue?.dishId, selectedLevel)
          }
          optionList={getLevelOption(dishDetailValue?.maxLevel)}
          value={LEVEL_LABEL[dishDetailValue?.dishLevel - 1]}
          placeholder={"레벨"}
        />
      </DetailInfoItem>
    </DetailInfo>
  );
};

export default DishDetailInfo;
