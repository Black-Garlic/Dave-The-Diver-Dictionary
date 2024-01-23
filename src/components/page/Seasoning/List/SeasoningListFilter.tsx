import { useSetRecoilState } from "recoil";
import { seasoningWithDishLevelListState } from "@services/Seasoning/SeasoningState.ts";
import { useEffect, useState } from "react";
import { Col, Flex, Row, Select, Tag } from "antd";
import { getSourceColor } from "@libs/sourceUtil.ts";
import Search from "antd/es/input/Search";
import { getSeasoningWithDishLevelList } from "@libs/recipeUtil.ts";
import {
  SEASONING_LIST,
  SEASONING_SOURCE_OPTIONS,
} from "@constants/Seasoning.ts";
import { SeasoningWithDishLevel } from "@typings/Seasoning.ts";

const SeasoningListFilter = () => {
  const setSeasoningList = useSetRecoilState(seasoningWithDishLevelListState);

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
    const seasoningWithDishList = getSeasoningWithDishLevelList(SEASONING_LIST);
    const seasoningFilterSourceList = filterSource(
      seasoningWithDishList,
      source,
    );
    const seasoningFilterKeywordList = filterKeyword(
      seasoningFilterSourceList,
      keyword,
    );

    setSeasoningList(seasoningFilterKeywordList);
  }, [keyword, setSeasoningList, source]);

  return (
    <Row>
      <Col flex={"auto"} style={{ margin: "10px 0px" }}>
        <Flex gap={"middle"}>
          <Select
            mode="multiple"
            allowClear
            style={{ width: "250px" }}
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

export default SeasoningListFilter;
