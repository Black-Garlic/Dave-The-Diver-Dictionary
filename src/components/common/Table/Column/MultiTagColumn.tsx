import MultiColumn from "@components/common/Table/Column/MultiColumn.tsx";
import TagColumn from "@components/common/Table/Column/TagColumn.tsx";
import { TagInfo } from "@typings/Tag.ts";

const MultiTagColumn = ({ color, value }: TagInfo) => {
  return (
    <MultiColumn.Item>
      <div style={{ width: "100%" }}>
        <TagColumn color={color} value={value} />
      </div>
    </MultiColumn.Item>
  );
};

export default MultiTagColumn;
