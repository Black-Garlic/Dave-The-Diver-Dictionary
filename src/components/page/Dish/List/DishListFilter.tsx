import { Button, Col, Flex, Row, Select, Tag } from "antd";
import {
  DISH_SORT,
  DISH_SORT_OPTION,
  SORT_DIRECTION,
} from "@constants/Sort.ts";
import Search from "antd/es/input/Search";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  dishDefaultListState,
  dishFilterListState,
  dishLevelListState,
} from "@services/Dish/DishState.ts";
import { useEffect, useState } from "react";
import { DishWithLevel } from "@typings/Dish.ts";
import { getDishWithLevelList, getPartyColor } from "@libs/dishUtil.ts";
import { PARTY_OPTION } from "@constants/Dish.ts";

const DishListFilter = () => {
  const dishDefaultListValue = useRecoilValue(dishDefaultListState);
  const setDishFilterList = useSetRecoilState(dishFilterListState);
  const levelListValue = useRecoilValue(dishLevelListState);

  const [sort, setSort] = useState<string>(DISH_SORT_OPTION[0].value);
  const [party, setParty] = useState<string[]>([]);
  const [keyword, setKeyword] = useState<string>("");

  const sortDish = (
    dishList: DishWithLevel[],
    sort: string,
  ): DishWithLevel[] => {
    const [sortType, sortDirection] = sort.split("-");

    const sortFishList: DishWithLevel[] = [...dishList];

    if (sortType === DISH_SORT.NAME) {
      if (sortDirection === SORT_DIRECTION.ASC) {
        sortFishList.sort((a, b) => a.name.localeCompare(b.name));
      } else if (sortDirection === SORT_DIRECTION.DESC) {
        sortFishList.sort((a, b) => b.name.localeCompare(a.name));
      }
    } else if (sortType === DISH_SORT.COST) {
      if (sortDirection === SORT_DIRECTION.ASC) {
        sortFishList.sort((a, b) => a.maxCost - b.maxCost);
      } else if (sortDirection === SORT_DIRECTION.DESC) {
        sortFishList.sort((a, b) => b.maxCost - a.maxCost);
      }
    } else if (sortType === DISH_SORT.SCORE) {
      if (sortDirection === SORT_DIRECTION.ASC) {
        sortFishList.sort((a, b) => a.maxScore - b.maxScore);
      } else if (sortDirection === SORT_DIRECTION.DESC) {
        sortFishList.sort((a, b) => b.maxScore - a.maxScore);
      }
    } else if (sortType === DISH_SORT.COUNT) {
      if (sortDirection === SORT_DIRECTION.ASC) {
        sortFishList.sort((a, b) => a.maxCount - b.maxCount);
      } else if (sortDirection === SORT_DIRECTION.DESC) {
        sortFishList.sort((a, b) => b.maxCount - a.maxCount);
      }
    }

    return sortFishList;
  };

  const filterParty = (
    dishList: DishWithLevel[],
    party: string[],
  ): DishWithLevel[] => {
    if (party.length > 0) {
      return dishList.filter((dish) =>
        party.some(
          (partyOption) =>
            dish.partyDtoList?.some((partyDto) =>
              partyDto.name.includes(partyOption),
            ),
        ),
      );
    } else {
      return dishList;
    }
  };

  const filterKeyword = (
    dishList: DishWithLevel[],
    keyword: string,
  ): DishWithLevel[] => {
    if (keyword !== "") {
      return dishList.filter((fish) => fish.name.includes(keyword));
    } else {
      return dishList;
    }
  };

  useEffect(() => {
    const dishWithLevelList = getDishWithLevelList(
      dishDefaultListValue,
      levelListValue,
    );
    const dishSortList = sortDish(dishWithLevelList, sort);
    const dishFilterPartyList = filterParty(dishSortList, party);
    const dishFilterKeywordList = filterKeyword(dishFilterPartyList, keyword);

    setDishFilterList(dishFilterKeywordList);
  }, [
    dishDefaultListValue,
    keyword,
    levelListValue,
    party,
    setDishFilterList,
    sort,
  ]);

  const handleResetButtonClick = () => {
    setSort(DISH_SORT_OPTION[0].value);
    setParty([]);
    setKeyword("");
  };

  return (
    <Row>
      <Col flex={"auto"} style={{ margin: "10px 0px" }}>
        <Flex gap={"middle"}>
          <Select
            allowClear
            style={{ width: "200px" }}
            value={sort}
            onChange={setSort}
            options={DISH_SORT_OPTION}
            placeholder="정렬"
            maxTagCount={"responsive"}
          />

          <Select
            mode="multiple"
            allowClear
            style={{ width: "250px" }}
            value={party}
            onChange={setParty}
            options={PARTY_OPTION}
            placeholder="파티"
            maxTagCount={"responsive"}
            tagRender={({ label, value, closable, onClose }) => (
              <Tag
                color={getPartyColor(value)}
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

export default DishListFilter;
