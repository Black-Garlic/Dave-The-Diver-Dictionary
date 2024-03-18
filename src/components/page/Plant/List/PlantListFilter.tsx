import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  plantDefaultListState,
  plantFilterListState,
} from "@services/Plant/PlantState.ts";
import { useEffect, useState } from "react";
import { PlantWithDishLevel } from "@typings/Plant.ts";
import { PLANT_SOURCE, PLANT_SOURCE_OPTION } from "@constants/Plant.ts";
import { getSourceColor } from "@libs/sourceUtil.ts";
import ListFilterSelectColumn from "@components/common/ListFilterRow/SelectColumn/ListFilterSelectColumn.tsx";
import ListFilterRow from "@components/common/ListFilterRow/ListFilterRow.tsx";
import ListFilterSearchColumn from "@components/common/ListFilterRow/SearchColumn/ListFilterSearchColumn.tsx";

const PlantListFilter = () => {
  const plantDefaultListValue = useRecoilValue(plantDefaultListState);
  const setPlantFilterList = useSetRecoilState(plantFilterListState);

  const [source, setSource] = useState<string[]>([]);
  const [keyword, setKeyword] = useState<string>("");

  const filterSource = (
    plantList: PlantWithDishLevel[],
    source: string[],
  ): PlantWithDishLevel[] => {
    if (source.length > 0) {
      const filterSourceSet: Set<string> = new Set();

      source.forEach((sourceOption) => {
        if (sourceOption === PLANT_SOURCE.BLUE_HOLE) {
          filterSourceSet.add(PLANT_SOURCE.BLUE_HOLE);
          filterSourceSet.add(PLANT_SOURCE.BLUE_HOLE_SHALLOWS);
          filterSourceSet.add(PLANT_SOURCE.BLUE_HOLE_MEDIUM_DEPTH);
        } else if (sourceOption === PLANT_SOURCE.BLUE_HOLE_SHALLOWS) {
          filterSourceSet.add(PLANT_SOURCE.BLUE_HOLE);
          filterSourceSet.add(PLANT_SOURCE.BLUE_HOLE_SHALLOWS);
        } else if (sourceOption === PLANT_SOURCE.BLUE_HOLE_MEDIUM_DEPTH) {
          filterSourceSet.add(PLANT_SOURCE.BLUE_HOLE);
          filterSourceSet.add(PLANT_SOURCE.BLUE_HOLE_MEDIUM_DEPTH);
        } else {
          filterSourceSet.add(sourceOption);
        }
      });

      return plantList.filter((plant) =>
        plant.sourceDtoList.some((source) => filterSourceSet.has(source.name)),
      );
    } else {
      return plantList;
    }
  };

  const filterKeyword = (
    plantList: PlantWithDishLevel[],
    keyword: string,
  ): PlantWithDishLevel[] => {
    if (keyword !== "") {
      return plantList.filter(
        (plant) =>
          plant.name.includes(keyword) ||
          plant.sourceDtoList.some((source) => source.name.includes(keyword)) ||
          plant.dishDtoList.some((dish) => dish.name.includes(keyword)),
      );
    } else {
      return plantList;
    }
  };

  useEffect(() => {
    const plantFilterSourceList = filterSource(plantDefaultListValue, source);
    const plantFilterKeywordList = filterKeyword(
      plantFilterSourceList,
      keyword,
    );

    setPlantFilterList(plantFilterKeywordList);
  }, [keyword, plantDefaultListValue, setPlantFilterList, source]);

  const handleResetButtonClick = () => {
    setSource([]);
    setKeyword("");
  };

  return (
    <ListFilterRow>
      <ListFilterSelectColumn>
        <ListFilterSelectColumn.TagSelect
          width={250}
          value={source}
          onChange={setSource}
          optionList={PLANT_SOURCE_OPTION}
          placeholder="지역"
          getColor={getSourceColor}
        />
      </ListFilterSelectColumn>

      <ListFilterSearchColumn>
        <ListFilterSearchColumn.Input
          keyword={keyword}
          setKeyword={setKeyword}
        />

        <ListFilterSearchColumn.ResetButton
          handleResetButtonClick={handleResetButtonClick}
        />
      </ListFilterSearchColumn>
    </ListFilterRow>
  );
};

export default PlantListFilter;
