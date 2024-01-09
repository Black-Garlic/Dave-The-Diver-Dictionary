import { Col, Flex, Row, Select, Tag } from "antd";
import { RANK_OPTION } from "@constants/Rank.ts";
import Search from "antd/es/input/Search";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { REGION_OPTION } from "@constants/Region.ts";
import { TIME_OPTION } from "@constants/Time.ts";
import { getRegionColor } from "@libs/regionUtil.ts";
import { getTimeColor } from "@libs/timeUtil.ts";
import { Fish } from "@typings/Fish.ts";
import { FISH_LIST } from "@constants/Fish.ts";
import {
  FISH_SORT,
  FISH_SORT_OPTION,
  SORT_DIRECTION,
} from "@constants/Sort.ts";

interface Props {
  setFishList: Dispatch<SetStateAction<Fish[]>>;
}

const FishListFilter = ({ setFishList }: Props) => {
  const [sort, setSort] = useState<string>(FISH_SORT_OPTION[0].value);
  const [rank, setRank] = useState<string[]>([]);
  const [region, setRegion] = useState<string[]>([]);
  const [time, setTime] = useState<string[]>([]);
  const [keyword, setKeyword] = useState<string>("");

  const sortFish = (fishList: Fish[], sort: string) => {
    const [sortType, sortDirection] = sort.split("-");

    if (sortType === FISH_SORT.RANK) {
      if (sortDirection === SORT_DIRECTION.ASC) {
        fishList.sort((a, b) => a.rank - b.rank);
      } else if (sortDirection === SORT_DIRECTION.DESC) {
        fishList.sort((a, b) => b.rank - a.rank);
      }
    } else if (sortType === FISH_SORT.NAME) {
      if (sortDirection === SORT_DIRECTION.ASC) {
        fishList.sort((a, b) => a.name.localeCompare(b.name));
      } else if (sortDirection === SORT_DIRECTION.DESC) {
        fishList.sort((a, b) => b.name.localeCompare(a.name));
      }
    }

    return fishList;
  };

  const filterRank = (fishList: Fish[], rank: string[]): Fish[] => {
    if (rank.length > 0) {
      return fishList.filter((fish) =>
        rank.some((rankOption) => rankOption === fish.rank.toString()),
      );
    } else {
      return fishList;
    }
  };

  const filterRegion = (fishList: Fish[], region: string[]): Fish[] => {
    if (region.length > 0) {
      return fishList.filter((fish) =>
        region.some((regionOption) => regionOption === fish.region),
      );
    } else {
      return fishList;
    }
  };

  const filterTime = (fishList: Fish[], time: string[]): Fish[] => {
    if (time.length > 0) {
      return fishList.filter((fish) =>
        time.some((timeOption) => timeOption === fish.time),
      );
    } else {
      return fishList;
    }
  };

  const filterKeyword = (fishList: Fish[], keyword: string): Fish[] => {
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
    const fishSortList = sortFish(FISH_LIST, sort);

    const fishFilterRankList = filterRank(fishSortList, rank);
    const fishFilterRegionList = filterRegion(fishFilterRankList, region);
    const fishFilterTimeList = filterTime(fishFilterRegionList, time);
    const fishFilterKeywordList = filterKeyword(fishFilterTimeList, keyword);

    console.log(fishSortList);
    console.log(fishFilterKeywordList);

    setFishList(fishFilterKeywordList);
  }, [keyword, rank, region, setFishList, sort, time]);

  return (
    <Row style={{ marginBottom: "10px" }}>
      <Col flex={"auto"}>
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

      <Col flex={"none"}>
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
