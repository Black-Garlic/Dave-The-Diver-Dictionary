import { Option } from "@typings/Option.ts";

export enum REGION {
  BLUE_HOLE_SHALLOWS = "블루홀 초입",
  BLUE_HOLE_MEDIUM_DEPTH = "블루홀 중간수역",
  BLUE_HOLE_DEPTH = "블루홀 심해",
  GLACIER_PASSAGE = "빙하 통로",
  GLACIER_ZONE = "빙하 지역",
  HYDROTHERMAL_VENTS = "열수 분출 구역",
  ETC = "기타",
}

export const REGION_OPTION: Option[] = [
  { label: REGION.BLUE_HOLE_SHALLOWS, value: REGION.BLUE_HOLE_SHALLOWS },
  {
    label: REGION.BLUE_HOLE_MEDIUM_DEPTH,
    value: REGION.BLUE_HOLE_MEDIUM_DEPTH,
  },
  { label: REGION.BLUE_HOLE_DEPTH, value: REGION.BLUE_HOLE_DEPTH },
  { label: REGION.GLACIER_PASSAGE, value: REGION.GLACIER_PASSAGE },
  { label: REGION.GLACIER_ZONE, value: REGION.GLACIER_ZONE },
  { label: REGION.HYDROTHERMAL_VENTS, value: REGION.HYDROTHERMAL_VENTS },
  { label: REGION.ETC, value: REGION.ETC },
];
