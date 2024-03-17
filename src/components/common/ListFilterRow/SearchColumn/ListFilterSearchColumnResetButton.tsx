import { Button } from "antd";

interface Props {
  handleResetButtonClick: () => void;
}

const ListFilterSearchColumnResetButton = ({
  handleResetButtonClick,
}: Props) => {
  return (
    <Button onClick={handleResetButtonClick} style={{ outline: "none" }}>
      초기화
    </Button>
  );
};

export default ListFilterSearchColumnResetButton;
