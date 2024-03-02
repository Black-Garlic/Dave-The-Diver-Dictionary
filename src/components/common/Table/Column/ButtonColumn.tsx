import { Button } from "antd";

interface Props {
  handleClick: () => void;
  label: string;
}

const ButtonColumn = ({ handleClick, label }: Props) => {
  return <Button onClick={() => handleClick()}>{label}</Button>;
};

export default ButtonColumn;
