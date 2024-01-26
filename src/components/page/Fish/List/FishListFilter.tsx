import { Col, Flex, Row, Select, Tag } from "antd";
import { RANK_OPTION } from "@constants/Rank.ts";
import Search from "antd/es/input/Search";
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

const FishListFilter = () => {
  const fishDefaultList = useRecoilValue(fishDefaultListState);
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
        region.some((regionOption) => regionOption === fish.region),
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
        time.some((timeOption) => timeOption === fish.time),
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
          fish.region.includes(keyword) ||
          fish.time.includes(keyword) ||
          fish.dishList.some((dish) => dish.name.includes(keyword)),
      );
    } else {
      return fishList;
    }
  };

  useEffect(() => {
    const fishSortList = sortFish(fishDefaultList, sort);
    const fishFilterRankList = filterRank(fishSortList, rank);
    const fishFilterRegionList = filterRegion(fishFilterRankList, region);
    const fishFilterTimeList = filterTime(fishFilterRegionList, time);
    const fishFilterKeywordList = filterKeyword(fishFilterTimeList, keyword);

    setFishFilterList(fishFilterKeywordList);
  }, [fishDefaultList, keyword, rank, region, setFishFilterList, sort, time]);

  return (
    <Row>
      <Col flex={"auto"} style={{ margin: "10px 0px" }}>
        <Flex gap={"middle"}>
          <Select
            allowClear
            style={{ width: "200px" }}
            onChange={setSort}
            options={FISH_SORT_OPTION}
            placeholder="정렬"
            maxTagCount={"responsive"}
          />

          <Select
            mode="multiple"
            allowClear
            style={{ width: "200px" }}
            onChange={setRank}
            options={RANK_OPTION}
            placeholder="랭크"
            maxTagCount={"responsive"}
          />

          <Select
            mode="multiple"
            allowClear
            style={{ width: "250px" }}
            onChange={setRegion}
            options={REGION_OPTION}
            placeholder="지역"
            maxTagCount={"responsive"}
            tagRender={({ label, value, closable, onClose }) => (
              <Tag
                color={getRegionColor(value)}
                closable={closable}
                onClose={onClose}
              >
                {label}
              </Tag>
            )}
          />

          <Select
            mode="multiple"
            allowClear
            style={{ width: "150px" }}
            onChange={setTime}
            options={TIME_OPTION}
            placeholder="시간대"
            maxTagCount={"responsive"}
            tagRender={({ label, value, closable, onClose }) => (
              <Tag
                color={getTimeColor(value)}
                closable={closable}
                onClose={onClose}
              >
                {label}
              </Tag>
            )}
          />
        </Flex>
      </Col>

      <Col flex={"none"} style={{ margin: "10px 0px" }}>
        <Search
          placeholder="검색"
          allowClear
          onSearch={setKeyword}
          style={{ width: 300 }}
        />
      </Col>
    </Row>
  );
};

export default FishListFilter;
