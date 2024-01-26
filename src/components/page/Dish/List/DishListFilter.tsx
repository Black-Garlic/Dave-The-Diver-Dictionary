import { Col, Flex, Row, Select, Tag } from "antd";
import {
  DISH_SORT,
  DISH_SORT_OPTION,
  SORT_DIRECTION,
} from "@constants/Sort.ts";
import Search from "antd/es/input/Search";
import { useSetRecoilState } from "recoil";
import { dishFilterListState } from "@services/Dish/DishState.ts";
import { useEffect, useState } from "react";
import { DishWithLevel } from "@typings/Dish.ts";
import {
  getDishLevelCookie,
  getDishWithLevelList,
  getPartyColor,
} from "@libs/dishUtil.ts";
import { DISH_LIST, PARTY, PARTY_OPTION } from "@constants/Dish.ts";

const DishListFilter = () => {
  const setDishFilterList = useSetRecoilState(dishFilterListState);

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
        party.some((partyOption) => dish.party?.includes(partyOption as PARTY)),
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
      DISH_LIST,
      getDishLevelCookie(),
    );
    const dishSortList = sortDish(dishWithLevelList, sort);
    const dishFilterPartyList = filterParty(dishSortList, party);
    const dishFilterKeywordList = filterKeyword(dishFilterPartyList, keyword);

    setDishFilterList(dishFilterKeywordList);
  }, [keyword, party, setDishFilterList, sort]);

  return (
    <Row>
      <Col flex={"auto"} style={{ margin: "10px 0px" }}>
        <Flex gap={"middle"}>
          <Select
            allowClear
            style={{ width: "200px" }}
            onChange={setSort}
            options={DISH_SORT_OPTION}
            placeholder="정렬"
            maxTagCount={"responsive"}
          />

          <Select
            mode="multiple"
            allowClear
            style={{ width: "250px" }}
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

export default DishListFilter;
