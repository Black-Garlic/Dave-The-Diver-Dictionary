import { Option } from "@typings/Option.ts";

export interface SelectProps {
  mode?: "multiple";
  width: number;
  value: string;
  onChange: (value: string) => void;
  optionList: Option[];
  placeholder: string;
}

export interface TagSelectProps extends SelectProps {
  getColor: (value: string) => string;
}
