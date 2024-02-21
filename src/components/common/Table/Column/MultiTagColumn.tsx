import MultiColumn from "@components/common/Table/Column/MultiColumn.tsx";
import TagColumn from "@components/common/Table/Column/TagColumn.tsx";

interface Props {
  color: string;
  value: string | number;
}

const MultiTagColumn = ({ color, value }: Props) => {
  return (
    <MultiColumn.Item>
      <div style={{ width: "100%" }}>
        <TagColumn color={color} value={value} />
      </div>
    </MultiColumn.Item>
  );
};

export default MultiTagColumn;
