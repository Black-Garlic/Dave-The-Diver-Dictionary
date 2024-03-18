import { RANK_OPTION } from "@constants/Rank.ts";
import { useEffect, useState } from "react";
import { REGION_OPTION } from "@constants/Region.ts";
import { TIME_OPTION } from "@constants/Time.ts";
import { getRegionColor } from "@libs/regionUtil.ts";
import { getTimeColor } from "@libs/timeUtil.ts";
import { FishWithDishLevel } from "@typings/Fish.ts";
import {
  FISH_SORT,
  FISH_SORT_OPTION,
  SORT_DIRECTION,
} from "@constants/Sort.ts";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  fishDefaultListState,
  fishFilterListState,
} from "@services/Fish/FishState.ts";
import ListFilterRow from "@components/common/ListFilterRow/ListFilterRow.tsx";
import ListFilterSelectColumn from "@components/common/ListFilterRow/SelectColumn/ListFilterSelectColumn.tsx";
import ListFilterSearchColumn from "@components/common/ListFilterRow/SearchColumn/ListFilterSearchColumn.tsx";

const FishListFilter = () => {
  const fishDefaultListValue = useRecoilValue(fishDefaultListState);
  const setFishFilterList = useSetRecoilState(fishFilterListState);

  const [sort, setSort] = useState<string>(FISH_SORT_OPTION[0].value);
  const [rank, setRank] = useState<string[]>([]);
  const [region, setRegion] = useState<string[]>([]);
  const [time, setTime] = useState<string[]>([]);
  const [keyword, setKeyword] = useState<string>("");

  const sortFish = (
    fishList: FishWithDishLevel[],
    sort: string,
  ): FishWithDishLevel[] => {
    const [sortType, sortDirection] = sort.split("-");

    const sortFishList: FishWithDishLevel[] = [...fishList];

    if (sortType === FISH_SORT.RANK) {
      if (sortDirection === SORT_DIRECTION.ASC) {
        sortFishList.sort((a, b) => a.rank - b.rank);
      } else if (sortDirection === SORT_DIRECTION.DESC) {
        sortFishList.sort((a, b) => b.rank - a.rank);
      }
    } else if (sortType === FISH_SORT.NAME) {
      if (sortDirection === SORT_DIRECTION.ASC) {
        sortFishList.sort((a, b) => a.name.localeCompare(b.name));
      } else if (sortDirection === SORT_DIRECTION.DESC) {
        sortFishList.sort((a, b) => b.name.localeCompare(a.name));
      }
    }

    return sortFishList;
  };

  const filterRank = (
    fishList: FishWithDishLevel[],
    rank: string[],
  ): FishWithDishLevel[] => {
    if (rank.length > 0) {
      return fishList.filter((fish) =>
        rank.some((rankOption) => rankOption === fish.rank.toString()),
      );
    } else {
      return fishList;
    }
  };

  const filterRegion = (
    fishList: FishWithDishLevel[],
    region: string[],
  ): FishWithDishLevel[] => {
    if (region.length > 0) {
      return fishList.filter((fish) =>
        region.some((regionOption) => regionOption === fish.regionDto.name),
      );
    } else {
      return fishList;
    }
  };

  const filterTime = (
    fishList: FishWithDishLevel[],
    time: string[],
  ): FishWithDishLevel[] => {
    if (time.length > 0) {
      return fishList.filter((fish) =>
        time.some((timeOption) => timeOption === fish.timeDto.name),
      );
    } else {
      return fishList;
    }
  };

  const filterKeyword = (
    fishList: FishWithDishLevel[],
    keyword: string,
  ): FishWithDishLevel[] => {
    if (keyword !== "") {
      return fishList.filter(
        (fish) =>
          fish.name.includes(keyword) ||
          fish.regionDto.name.includes(keyword) ||
          fish.timeDto.name.includes(keyword) ||
          fish.dishDtoList.some((dish) => dish.name.includes(keyword)),
      );
    } else {
      return fishList;
    }
  };

  useEffect(() => {
    const fishSortList = sortFish(fishDefaultListValue, sort);
    const fishFilterRankList = filterRank(fishSortList, rank);
    const fishFilterRegionList = filterRegion(fishFilterRankList, region);
    const fishFilterTimeList = filterTime(fishFilterRegionList, time);
    const fishFilterKeywordList = filterKeyword(fishFilterTimeList, keyword);

    setFishFilterList(fishFilterKeywordList);
  }, [
    fishDefaultListValue,
    keyword,
    rank,
    region,
    setFishFilterList,
    sort,
    time,
  ]);

  const handleResetButtonClick = () => {
    setSort(FISH_SORT_OPTION[0].value);
    setRank([]);
    setRegion([]);
    setTime([]);
    setKeyword("");
  };

  return (
    <ListFilterRow>
      <ListFilterSelectColumn>
        <ListFilterSelectColumn.Select
          width={200}
          value={sort}
          onChange={setSort}
          optionList={FISH_SORT_OPTION}
          placeholder="정렬"
        />

        <ListFilterSelectColumn.MultiSelect
          width={200}
          value={rank}
          onChange={setRank}
          optionList={RANK_OPTION}
          placeholder="랭크"
        />

        <ListFilterSelectColumn.TagSelect
          width={250}
          value={region}
          onChange={setRegion}
          optionList={REGION_OPTION}
          placeholder="지역"
          getColor={getRegionColor}
        />

        <ListFilterSelectColumn.TagSelect
          width={150}
          value={time}
          onChange={setTime}
          optionList={TIME_OPTION}
          placeholder="시간대"
          getColor={getTimeColor}
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

export default FishListFilter;
