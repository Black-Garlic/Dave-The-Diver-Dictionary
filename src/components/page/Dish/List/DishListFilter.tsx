import {
  DISH_SORT,
  DISH_SORT_OPTION,
  SORT_DIRECTION,
} from "@constants/Sort.ts";
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
import ListFilterRow from "@components/common/ListFilterRow/ListFilterRow.tsx";
import ListFilterSearchColumn from "@components/common/ListFilterRow/SearchColumn/ListFilterSearchColumn.tsx";
import ListFilterSelectColumn from "@components/common/ListFilterRow/SelectColumn/ListFilterSelectColumn.tsx";

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
    <ListFilterRow>
      <ListFilterSelectColumn>
        <ListFilterSelectColumn.Select
          width={200}
          value={sort}
          onChange={setSort}
          optionList={DISH_SORT_OPTION}
          placeholder="정렬"
        />

        <ListFilterSelectColumn.TagSelect
          width={250}
          value={party}
          onChange={setParty}
          optionList={PARTY_OPTION}
          placeholder="파티"
          getColor={getPartyColor}
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

export default DishListFilter;
