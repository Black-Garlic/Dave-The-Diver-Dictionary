import { Descriptions, DescriptionsProps, Row, Select } from "antd";
import { SALES_OPTIONS } from "@constants/Sales.ts";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { salesListState } from "@services/Sales/SalesState.ts";

const SalesInfo = () => {
  const [cookStar, setCookStar] = useState<string>("0");
  const salesList = useRecoilValue(salesListState);

  console.log(salesList);

  const getSalesCount = () => {
    return salesList.reduce(
      (accumulator, currentValue) =>
        accumulator + currentValue.count * currentValue.dish.maxCount,
      0,
    );
  };

  const borderedItems: DescriptionsProps["items"] = [
    {
      key: "CookStar",
      label: "쿡스타 등급",
      children: (
        <Select
          placeholder={"쿡스타 등급"}
          style={{ width: "200px" }}
          onChange={setCookStar}
          options={SALES_OPTIONS}
        />
      ),
      span: 1,
    },
    {
      key: "LimitCount",
      label: "그릇 수",
      children: cookStar,
      span: 1,
    },
    {
      key: "SelectedCount",
      label: "선택된 그릇 수",
      children: getSalesCount(),
      span: 1,
    },
  ];

  return (
    <Row style={{ marginBottom: "20px" }}>
      <Descriptions
        bordered
        size={"default"}
        items={borderedItems}
        style={{ flex: 1 }}
        column={3}
      />
    </Row>
  );
};

export default SalesInfo;
