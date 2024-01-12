import { Button, Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import { FishWithDish } from "@typings/Fish.ts";
import { getRegionColor } from "@libs/regionUtil.ts";
import { getTimeColor } from "@libs/timeUtil.ts";
import { useRecoilValue } from "recoil";
import { fishListState } from "@services/Fish/FishState.ts";

const FishListTable = () => {
  const fishRecoilList = useRecoilValue(fishListState);

  const columns: ColumnsType<FishWithDish> = [
    {
      key: "rank",
      title: "랭크",
      dataIndex: "rank",
      align: "center",
      width: 100,
    },
    {
      key: "name",
      title: "이름",
      dataIndex: "name",
      align: "center",
    },
    {
      key: "region",
      title: "지역",
      dataIndex: "region",
      align: "center",
      width: 150,
      render: (_, { region }, index) => (
        <Tag color={getRegionColor(region)} key={`${region}-${index}`}>
          {region}
        </Tag>
      ),
    },
    {
      key: "time",
      title: "시간대",
      dataIndex: "time",
      align: "center",
      width: 150,
      render: (_, { time }, index) => (
        <Tag color={getTimeColor(time)} key={`${time}-${index}`}>
          {time}
        </Tag>
      ),
    },
    {
      key: "dish",
      title: "음식",
      dataIndex: "dish",
      align: "center",
      width: 500,
      render: (_, { dishList }) => (
        <Space direction={"vertical"} style={{ width: "100%" }}>
          {dishList.map((dish) => (
            <Space.Compact key={dish.id} style={{ width: "100%" }}>
              <Button style={{ width: "100%", textAlign: "start" }}>
                {dish.name}
              </Button>
            </Space.Compact>
          ))}
        </Space>
      ),
    },
  ];

  return (
    <Table columns={columns} dataSource={fishRecoilList} pagination={false} />
  );
};

export default FishListTable;
