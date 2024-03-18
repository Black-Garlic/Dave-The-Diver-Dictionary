import { Option } from "@typings/Option.ts";
import { Dispatch, SetStateAction } from "react";

interface SelectProps {
  mode?: "multiple";
  width: number;
  optionList: Option[];
  placeholder: string;
}

export interface SingleSelectProps extends SelectProps {
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
}

export interface MultiSelectProps extends SelectProps {
  value: string[];
  onChange: Dispatch<SetStateAction<string[]>>;
}

export interface TagSelectProps extends MultiSelectProps {
  getColor: (value: string) => string;
}
