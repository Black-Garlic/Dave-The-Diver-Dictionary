import { Option } from "@typings/Option.ts";

export enum UNLOCK_TYPE {
  YOSHIE_VISIT = "요시에 방문",
  ENTER_HYDROTHERMAL_VENTS = "열수 분출 구역 진입",
  RESCUE_TSHCHI = "츠치 구조",
  VIP_VINCENT = "빈센트 접대 성공",
  VIP_MICHAEL_BANG = "마이클 방 접대 성공",
  VIP_SAMMY = "새미 접대 성공",
  DJANGO_VISIT = "방랑 상인 장고 방문",
  VIP_DJANGO = "방랑 상인 장고 접대 성공",
  CHALLENGE_WANG_PANG = "왕팡 대결 승리",
  CHALLENGE_ALEX = "알렉스 대결 승리",
  CHALLENGE_PASTRO = "파스트로 대결 승리",
  COOK_STAR_BRONZE = "쿡스타 브론즈 달성",
  COOK_STAR_SILVER = "쿡스타 실버 달성",
  COOK_STAR_GOLD = "쿡스타 골드 달성",
  COOK_STAR_PLATINUM = "쿡스타 플래티넘 달성",
  COOK_STAR_DIA = "쿡스타 다이아몬드 달성",
  PARTY_TUNA = "참치 요트 파티 시작",
  PARTY_MARLIN = "청새치 파티 시작",
  PARTY_CUCUMBER = "오이 파티 시작",
  PARTY_LOBSTER = "랍스터 파티 시작",
  SECRET_RECIPE = "비밀 레시피",
}

export enum PARTY {
  JELLY_FISH = "해파리 파티",
  TUNA = "참치 요트 파티",
  MARLIN = "청새치 파티",
  STORM_SHARK = "스톰 샤크 파티",
  CUCUMBER = "오이 파티",
  CURRY = "카레 파티",
  SHRIMP = "새우 파티",
  LOBSTER = "랍스터 파티",
}

export const PARTY_OPTION: Option[] = [
  { label: PARTY.JELLY_FISH, value: PARTY.JELLY_FISH },
  { label: PARTY.TUNA, value: PARTY.TUNA },
  { label: PARTY.MARLIN, value: PARTY.MARLIN },
  { label: PARTY.STORM_SHARK, value: PARTY.STORM_SHARK },
  { label: PARTY.CUCUMBER, value: PARTY.CUCUMBER },
  { label: PARTY.CURRY, value: PARTY.CURRY },
  { label: PARTY.SHRIMP, value: PARTY.SHRIMP },
  { label: PARTY.LOBSTER, value: PARTY.LOBSTER },
];

export enum RECIPE_TYPE {
  FISH = "해산물",
  PLANT = "부재료",
  SEASONING = "조미료",
}
