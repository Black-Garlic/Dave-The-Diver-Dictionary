import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  seasoningDefaultListState,
  seasoningFilterListState,
} from "@services/Seasoning/SeasoningState.ts";
import { useEffect, useState } from "react";
import { Button, Col, Flex, Row, Select, Tag } from "antd";
import { getSourceColor } from "@libs/sourceUtil.ts";
import Search from "antd/es/input/Search";
import { SEASONING_SOURCE_OPTIONS } from "@constants/Seasoning.ts";
import { SeasoningWithDishLevel } from "@typings/Seasoning.ts";

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
        source.some((sourceOption) => sourceOption === seasoning.source),
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
          seasoning.source.includes(keyword) ||
          seasoning.dishList.some((dish) => dish.name.includes(keyword)),
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
    <Row>
      <Col flex={"auto"} style={{ margin: "10px 0px" }}>
        <Flex gap={"middle"}>
          <Select
            mode="multiple"
            allowClear
            style={{ width: "250px" }}
            value={source}
            onChange={setSource}
            options={SEASONING_SOURCE_OPTIONS}
            placeholder="지역"
            maxTagCount={"responsive"}
            tagRender={({ label, value, closable, onClose }) => (
              <Tag
                color={getSourceColor(value)}
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
        <Flex gap={"middle"}>
          <Search
            placeholder="검색"
            allowClear
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            style={{ width: 300 }}
          />

          <Button onClick={handleResetButtonClick} style={{ outline: "none" }}>
            초기화
          </Button>
        </Flex>
      </Col>
    </Row>
  );
};

export default SeasoningListFilter;
