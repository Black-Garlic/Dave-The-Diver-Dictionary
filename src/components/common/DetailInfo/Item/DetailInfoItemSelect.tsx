import { Option } from "@typings/Option.ts";
import DetailInfoItemContent from "@components/common/DetailInfo/Item/DetailInfoItemContent.tsx";
import { Select } from "antd";

interface Props {
  handleChange: (value: string) => void;
  optionList: Option[];
  value: string;
  placeholder: string;
}

const DetailInfoItemSelect = ({
  handleChange,
  optionList,
  value,
  placeholder,
}: Props) => {
  return (
    <DetailInfoItemContent>
      <Select
        style={{ width: "100%" }}
        onChange={(selectedLevel) => handleChange(selectedLevel)}
        options={optionList}
        value={value}
        placeholder={placeholder}
        maxTagCount={"responsive"}
        listHeight={350}
      />
    </DetailInfoItemContent>
  );
};

export default DetailInfoItemSelect;
