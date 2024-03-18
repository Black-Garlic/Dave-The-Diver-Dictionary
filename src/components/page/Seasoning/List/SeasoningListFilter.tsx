import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  seasoningDefaultListState,
  seasoningFilterListState,
} from "@services/Seasoning/SeasoningState.ts";
import { useEffect, useState } from "react";
import { getSourceColor } from "@libs/sourceUtil.ts";
import { SEASONING_SOURCE_OPTIONS } from "@constants/Seasoning.ts";
import { SeasoningWithDishLevel } from "@typings/Seasoning.ts";
import ListFilterRow from "@components/common/ListFilterRow/ListFilterRow.tsx";
import ListFilterSearchColumn from "@components/common/ListFilterRow/SearchColumn/ListFilterSearchColumn.tsx";
import ListFilterSelectColumn from "@components/common/ListFilterRow/SelectColumn/ListFilterSelectColumn.tsx";

const SeasoningListFilter = () => {
  const seasoningDefaultListValue = useRecoilValue(seasoningDefaultListState);
  const setSeasoningFilterList = useSetRecoilState(seasoningFilterListState);

  const [source, setSource] = useState<string[]>([]);
  const [keyword, setKeyword] = useState<string>("");

  const filterSource = (
    seasoningList: SeasoningWithDishLevel[],
    source: string[],
  ): SeasoningWithDishLevel[] => {
    if (source.length > 0) {
      return seasoningList.filter((seasoning) =>
        seasoning.sourceDtoList.some((seasoningSource) =>
          source.includes(seasoningSource.name),
        ),
      );
    } else {
      return seasoningList;
    }
  };

  const filterKeyword = (
    seasoningList: SeasoningWithDishLevel[],
    keyword: string,
  ): SeasoningWithDishLevel[] => {
    if (keyword !== "") {
      return seasoningList.filter(
        (seasoning) =>
          seasoning.name.includes(keyword) ||
          seasoning.sourceDtoList.some((seasoningSource) =>
            seasoningSource.name.includes(keyword),
          ) ||
          seasoning.dishDtoList.some((dish) => dish.name.includes(keyword)),
      );
    } else {
      return seasoningList;
    }
  };

  useEffect(() => {
    const seasoningFilterSourceList = filterSource(
      seasoningDefaultListValue,
      source,
    );
    const seasoningFilterKeywordList = filterKeyword(
      seasoningFilterSourceList,
      keyword,
    );

    setSeasoningFilterList(seasoningFilterKeywordList);
  }, [keyword, seasoningDefaultListValue, setSeasoningFilterList, source]);

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
          optionList={SEASONING_SOURCE_OPTIONS}
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

export default SeasoningListFilter;
