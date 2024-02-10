import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  plantDefaultListState,
  plantFilterListState,
} from "@services/Plant/PlantState.ts";
import { useEffect, useState } from "react";
import { PlantWithDishLevel } from "@typings/Plant.ts";
import { PLANT_SOURCE, PLANT_SOURCE_OPTION } from "@constants/Plant.ts";
import { Col, Flex, Row, Select, Tag } from "antd";
import Search from "antd/es/input/Search";
import { getSourceColor } from "@libs/sourceUtil.ts";

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

      return plantList.filter((plant) => filterSourceSet.has(plant.source));
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
          plant.source.includes(keyword) ||
          plant.dishList.some((dish) => dish.name.includes(keyword)),
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

  return (
    <Row>
      <Col flex={"auto"} style={{ margin: "10px 0px" }}>
        <Flex gap={"middle"}>
          <Select
            mode="multiple"
            allowClear
            style={{ width: "250px" }}
            onChange={setSource}
            options={PLANT_SOURCE_OPTION}
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

export default PlantListFilter;
