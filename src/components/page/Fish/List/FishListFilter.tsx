import { Col, Flex, Row, Select, Tag } from "antd";
import { RANK_OPTION } from "@constants/Rank.ts";
import Search from "antd/es/input/Search";
import { useEffect, useState } from "react";
import { REGION_OPTION } from "@constants/Region.ts";
import { TIME_OPTION } from "@constants/Time.ts";
import { Option } from "@typings/Option.ts";
import { getRegionColor } from "@libs/regionUtil.ts";
import { getTimeColor } from "@libs/timeUtil.ts";

const FishListFilter = () => {
  const [rank, setRank] = useState<Option[]>([]);
  const [region, setRegion] = useState<Option[]>([]);
  const [time, setTime] = useState<Option[]>([]);
  const [keyword, setKeyword] = useState<string>("");

  useEffect(() => {
    console.log("Rank", rank);
    console.log("Region", region);
    console.log("Time", time);
    console.log("Keyword", keyword);
  }, [keyword, rank, region, time]);

  return (
    <Row style={{ marginBottom: "10px" }}>
      <Col flex={"auto"}>
        <Flex gap={"middle"}>
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
