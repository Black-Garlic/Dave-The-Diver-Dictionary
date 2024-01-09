import FishListTable from "@components/page/Fish/List/FishListTable.tsx";
import FishListFilter from "@components/page/Fish/List/FishListFilter.tsx";
import { useState } from "react";
import { FISH } from "@constants/Fish.ts";
import { Fish } from "@typings/Fish.ts";

const FishListPage = () => {
  const [fishList, setFishList] = useState<Fish[]>(FISH);

  return (
    <>
      <FishListFilter setFishList={setFishList} />

      <FishListTable fishList={fishList} />
    </>
  );
};

export default FishListPage;
