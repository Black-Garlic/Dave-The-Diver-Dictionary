import { Dish } from "@typings/Dish.ts";

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
  PARTY_BLUE_FIN = "청새치 파티 시작",
  PARTY_CUCUMBER = "오이 파티 시작",
  PARTY_LOBSTER = "랍스터 파티 시작",
  SECRET_RECIPE = "비밀 레시피",
}

export enum PARTY {
  TUNA = "참치 요트 파티",
  BLUE_FIN = "청새치 파티",
  CUCUMBER = "오이 파티",
  CURRY = "카레 파티",
}

export enum RECIPE_TYPE {
  FISH = "FISH",
  INGREDIENT = "INGREDIENT",
  SEASONING = "SEASONING",
}

export const DISH_LIST: Dish[] = [
  // 기본 초밥
  {
    id: "Clownfish_Sushi",
    name: "흰동가리 초밥",
    maxCost: 7,
    maxScore: 120,
    maxCount: 1,
  },
  {
    id: "Comber_Sushi",
    name: "콤버 초밥",
    maxCost: 7,
    maxScore: 140,
    maxCount: 1,
  },
  {
    id: "Cardinal_Fish_Sushi",
    name: "지중해카디널피쉬 초밥",
    maxCost: 11,
    maxScore: 100,
    maxCount: 1,
  },
  {
    id: "Sea_Goldie_Sushi",
    name: "금강바리",
    maxCost: 11,
    maxScore: 130,
    maxCount: 1,
  },
  {
    id: "Pyramid_Butterflyfish_Sushi",
    name: "안개나비고기 초밥",
    maxCost: 14,
    maxScore: 100,
    maxCount: 1,
  },
  {
    id: "Yellow_Tang_Sushi",
    name: "옐로우탱 초밥",
    maxCost: 14,
    maxScore: 100,
    maxCount: 1,
  },
  {
    id: "Salema_Porgy_Sushi",
    name: "사르파살파 초밥",
    maxCost: 18,
    maxScore: 110,
    maxCount: 1,
  },
  {
    id: "Orbicular_Batfish_Fry",
    name: "원반제비활치 튀김",
    maxCost: 18,
    maxScore: 110,
    maxCount: 1,
  },
  {
    id: "Blue_Tang_Sushi",
    name: "블루탱 초밥",
    maxCost: 22,
    maxScore: 110,
    maxCount: 1,
  },
  {
    id: "Rainbow_Wrasse_Sushi",
    name: "무지개놀래기 초밥",
    maxCost: 22,
    maxScore: 130,
    maxCount: 1,
  },
  {
    id: "Lagoon_Triggerfish_Sushi",
    name: "배주름쥐치 초밥",
    maxCost: 22,
    maxScore: 130,
    maxCount: 1,
  },
  {
    id: "Small_Spotted_Dart_Sushi",
    name: "빨판매가리 초밥",
    maxCost: 29,
    maxScore: 120,
    maxCount: 1,
  },
  {
    id: "Yellowback_Fusilier_Sushi",
    name: "황등어 초밥",
    maxCost: 25,
    maxScore: 120,
    maxCount: 1,
  },
  {
    id: "Ornate_Wrasse_Sushi",
    name: "오네이트놀래기 초밥",
    maxCost: 29,
    maxScore: 130,
    maxCount: 1,
  },
  {
    id: "Longfin_Batfish_Sushi",
    name: "깃털제비활치 초밥",
    maxCost: 37,
    maxScore: 130,
    maxCount: 1,
  },
  {
    id: "Mediterranean_Parrotfish_Sushi",
    name: "지중해비늘돔 초밥",
    maxCost: 37,
    maxScore: 140,
    maxCount: 1,
  },
  {
    id: "Redtooth_Triggerfish_Sushi",
    name: "붉은이빨쥐치 초밥",
    maxCost: 33,
    maxScore: 150,
    maxCount: 1,
  },
  {
    id: "Black_And_White_Snapper_Sushi",
    name: "블랙스내퍼 초밥",
    maxCost: 33,
    maxScore: 150,
    maxCount: 1,
  },
  {
    id: "Green_Humphead_Parrotfish_Sushi",
    name: "버팔로피쉬 초밥",
    maxCost: 59,
    maxScore: 230,
    maxCount: 1,
  },
  {
    id: "Barrel_Jellyfish_Sushi",
    name: "배럴해파리 군함 초밥",
    maxCost: 37,
    maxScore: 160,
    maxCount: 1,
  },
  {
    id: "Fried_Egg_Jellyfish_Sushi",
    name: "달걀프라이해파리 군함 초밥",
    maxCost: 29,
    maxScore: 160,
    maxCount: 1,
  },
  {
    id: "Whitetip_Reefshark_Sushi",
    name: "백기흉상어 초밥",
    maxCost: 88,
    maxScore: 270,
    maxCount: 1,
  },
  {
    id: "Moray_Eel_Sushi",
    name: "곰치 초밥",
    maxCost: 185,
    maxScore: 250,
    maxCount: 1,
  },
  {
    id: "Red_Lionfish_Sushi",
    name: "쏠배감펭 초밥",
    maxCost: 37,
    maxScore: 200,
    maxCount: 1,
  },
  {
    id: "Titan_Triggerfish_Sushi",
    name: "타이탄트리거피쉬 초밥",
    maxCost: 55,
    maxScore: 200,
    maxCount: 1,
  },
  {
    id: "Blacktip_Reefshark_Sushi",
    name: "흑기흉상어 초밥",
    maxCost: 222,
    maxScore: 270,
    maxCount: 1,
  },
  {
    id: "Copper_Shark_Sushi",
    name: "무태상어 초밥",
    maxCost: 240,
    maxScore: 280,
    maxCount: 1,
  },
  {
    id: "Box_Jellyfish_Sushi",
    name: "상자해파리 군함 초밥",
    maxCost: 203,
    maxScore: 270,
    maxCount: 1,
  },
  {
    id: "Bluefin_Tuna_Akami_Sushi",
    name: "참다랑어 붉은살 초밥",
    maxCost: 296,
    maxScore: 240,
    maxCount: 1,
  },
  {
    id: "Bluefin_Tuna_Chutoro_Sushi",
    name: "참다랑어 중뱃살 초밥",
    maxCost: 351,
    maxScore: 241,
    maxCount: 1,
  },
  {
    id: "Bluefin_Tuna_Otoro_Sushi",
    name: "참다랑어 대뱃살 초밥",
    maxCost: 499,
    maxScore: 330,
    maxCount: 1,
  },
  {
    id: "Yellowfin_Tuna_Akami_Sushi",
    name: "황다랑어 붉은살 초밥",
    maxCost: 270,
    maxScore: 235,
    maxCount: 1,
  },
  {
    id: "Yellowfin_Tuna_Chutoro_Sushi",
    name: "황다랑어 중뱃살 초밥",
    maxCost: 333,
    maxScore: 238,
    maxCount: 1,
  },
  {
    id: "Yellowfin_Tuna_Otoro_Sushi",
    name: "황다랑어 대뱃살 초밥",
    maxCost: 462,
    maxScore: 315,
    maxCount: 1,
  },
  {
    id: "Flame_Angelfish_Sushi",
    name: "라마엔젤피쉬 초밥",
    maxCost: 18,
    maxScore: 150,
    maxCount: 1,
  },
  {
    id: "Sheepshead_Sushi",
    name: "혹돔 초밥",
    maxCost: 55,
    maxScore: 240,
    maxCount: 1,
  },
  {
    id: "Emperor_Angelfish_Sushi",
    name: "황제엔젤피쉬 초밥",
    maxCost: 37,
    maxScore: 150,
    maxCount: 1,
  },
  {
    id: "Stingray_Sushi",
    name: "노랑가오리 초밥",
    maxCost: 92,
    maxScore: 260,
    maxCount: 1,
  },
  {
    id: "Marbled_Electric_Ray_Sushi",
    name: "마블전기가오리 초밥",
    maxCost: 333,
    maxScore: 300,
    maxCount: 1,
  },
  {
    id: "Cooked_Whiteleg_Shrimp_Sushi",
    name: "흰다리자숙새우 초밥",
    maxCost: 129,
    maxScore: 220,
    maxCount: 1,
  },
  {
    id: "Striped_Catfish_Sushi",
    name: "쏠종개 초밥",
    maxCost: 18,
    maxScore: 260,
    maxCount: 1,
  },
  {
    id: "Purple_Sea_Urchin_Sushi",
    name: "보라성게 초밥",
    maxCost: 222,
    maxScore: 270,
    maxCount: 1,
  },
  {
    id: "Shortfin_Mako_Sushi",
    name: "청상아리 초밥",
    maxCost: 388,
    maxScore: 360,
    maxCount: 1,
  },
  {
    id: "Zebra_Shark_Sushi",
    name: "지브라상어 초밥",
    maxCost: 399,
    maxScore: 360,
    maxCount: 1,
  },
  {
    id: "Marlin_Sushi",
    name: "청새치 초밥",
    maxCost: 341,
    maxScore: 370,
    maxCount: 1,
  },
  {
    id: "Thresher_Shark_Sushi",
    name: "환도상어 초밥",
    maxCost: 588,
    maxScore: 390,
    maxCount: 1,
  },
  {
    id: "American_Lobster_Sushi",
    name: "미국바닷가재 초밥",
    maxCost: 0,
    maxScore: 0,
    maxCount: 1,
  },
  {
    id: "European_Lobster_Sushi",
    name: "유렵바닷가재 초밥",
    maxCost: 0,
    maxScore: 0,
    maxCount: 1,
  },
  {
    id: "Bluehead_Tilefish_Sushi",
    name: "블루헤드타일피쉬 초밥",
    maxCost: 55,
    maxScore: 140,
    maxCount: 1,
  },
  {
    id: "Clown_Frogfish_Sushi",
    name: "무당씬벵이 초밥",
    maxCost: 55,
    maxScore: 150,
    maxCount: 1,
  },
  {
    id: "Painted_Comber_Sushi",
    name: "페인티드콤버 초밥",
    maxCost: 32,
    maxScore: 140,
    maxCount: 1,
  },
  {
    id: "Bigeye_Scad_Sushi",
    name: "새가라지 초밥",
    maxCost: 62,
    maxScore: 140,
    maxCount: 1,
  },
  {
    id: "Striped_Red_Mullet_Sushi",
    name: "노랑촉수 초밥",
    maxCost: 59,
    maxScore: 140,
    maxCount: 1,
  },
  {
    id: "Mackerel_Scad_Sushi",
    name: "풀가라지 초밥",
    maxCost: 55,
    maxScore: 150,
    maxCount: 1,
  },
  {
    id: "Harleqiun_Hind_Sushi",
    name: "청줄바리 초밥",
    maxCost: 66,
    maxScore: 180,
    maxCount: 1,
  },
  {
    id: "Bigeye_Trevally_Sushi",
    name: "줄전갱이 초밥",
    maxCost: 70,
    maxScore: 170,
    maxCount: 1,
  },
  {
    id: "Coral_Trout_Sushi",
    name: "무늬바리 초밥",
    maxCost: 66,
    maxScore: 170,
    maxCount: 1,
  },
  {
    id: "Grey_Triggerfish_Sushi",
    name: "갈쥐치 초밥",
    maxCost: 62,
    maxScore: 170,
    maxCount: 1,
  },
  {
    id: "Atlantic_Bonito_Sushi",
    name: "대서양보니토 초밥",
    maxCost: 77,
    maxScore: 180,
    maxCount: 1,
  },
  {
    id: "White_Trevally_Sushi",
    name: "흑점줄전갱이 초밥",
    maxCost: 81,
    maxScore: 190,
    maxCount: 1,
  },
  {
    id: "Cuttlefish_Sushi",
    name: "갑오징어 초밥",
    maxCost: 74,
    maxScore: 200,
    maxCount: 1,
  },
  {
    id: "Dusky_Grouper_Sushi",
    name: "머구리농어 초밥",
    maxCost: 81,
    maxScore: 200,
    maxCount: 1,
  },
  {
    id: "Atlantic_Mackerel_Sushi",
    name: "대서양고등어 초밥",
    maxCost: 77,
    maxScore: 190,
    maxCount: 1,
  },
  {
    id: "Giant_Trevally_Sushi",
    name: "무명갈전갱이 초밥",
    maxCost: 111,
    maxScore: 250,
    maxCount: 1,
  },
  {
    id: "White_Spotted_Jellyfish_Sushi",
    name: "흰점박이해파리 군함 초밥",
    maxCost: 66,
    maxScore: 180,
    maxCount: 1,
  },
  {
    id: "Tiger_Shark_Sushi",
    name: "뱀상어 초밥",
    maxCost: 185,
    maxScore: 290,
    maxCount: 1,
  },
  {
    id: "Great_Barracuda_Sushi",
    name: "큰꼬치고기 초밥",
    maxCost: 74,
    maxScore: 220,
    maxCount: 1,
  },
  {
    id: "Narrow_Barred_Spanish_Mackerel_Sushi",
    name: "동갈삼치 초밥",
    maxCost: 74,
    maxScore: 190,
    maxCount: 1,
  },
  {
    id: "Longnose_Sawshark_Sushi",
    name: "톱상어 초밥",
    maxCost: 129,
    maxScore: 290,
    maxCount: 1,
  },
  {
    id: "Atlantic_Anglerfish_Sushi",
    name: "대서양아귀 초밥",
    maxCost: 76,
    maxScore: 240,
    maxCount: 1,
  },
  {
    id: "Sally_Lightfoot_Crab_Sushi",
    name: "갈라파고스붉은게살 초밥",
    maxCost: 185,
    maxScore: 320,
    maxCount: 1,
  },
  {
    id: "Raw_Black_Tiger_Shrimp_Sushi",
    name: "블랙타이거생새우 초밥",
    maxCost: 185,
    maxScore: 240,
    maxCount: 1,
  },
  {
    id: "Smooth_Hammerhead_Sushi",
    name: "귀상어 초밥",
    maxCost: 521,
    maxScore: 390,
    maxCount: 1,
  },
  {
    id: "Sailfish_Sushi",
    name: "돛새치 초밥",
    maxCost: 336,
    maxScore: 400,
    maxCount: 1,
  },
  {
    id: "California_Spiny_Lobster_Sushi",
    name: "캘리포니아닭새우 초밥",
    maxCost: 0,
    maxScore: 0,
    maxCount: 1,
  },
  {
    id: "Tropical_Rock_Lobster_Sushi",
    name: "비단닭새우 초밥",
    maxCost: 0,
    maxScore: 0,
    maxCount: 1,
  },
  {
    id: "Clearfin_Lionfish_Sushi",
    name: "방사쏠배감펭 초밥",
    maxCost: 0,
    maxScore: 0,
    maxCount: 1,
  },
  {
    id: "Longspine_Squirrelfish_Sushi",
    name: "롱스파인 다람쥐고기 초밥",
    maxCost: 0,
    maxScore: 0,
    maxCount: 1,
  },
  {
    id: "White_Shrimp_Sushi",
    name: "흰보리새우 초밥",
    maxCost: 196,
    maxScore: 280,
    maxCount: 1,
  },
  {
    id: "Red_Banded_Lobster_Sushi",
    name: "가시발새우 초밥",
    maxCost: 0,
    maxScore: 0,
    maxCount: 1,
  },
  {
    id: "Blue_Lobster_Sushi",
    name: "블루랍스터 초밥",
    maxCost: 0,
    maxScore: 0,
    maxCount: 1,
  },
  {
    id: "Blackfin_Barracuda_Sushi",
    name: "검정핀꼬치고기 초밥",
    maxCost: 0,
    maxScore: 0,
    maxCount: 1,
  },
  {
    id: "Spear_Squid_Sushi",
    name: "화살오징어 초밥",
    maxCost: 0,
    maxScore: 0,
    maxCount: 1,
  },
  {
    id: "Humboldt_Squid_Sushi",
    name: "훔볼트오징어 초밥",
    maxCost: 536,
    maxScore: 350,
    maxCount: 1,
  },
  {
    id: "Devil_Scorpion_Fish_Sushi",
    name: "데빌스콜피온피쉬 초밥",
    maxCost: 499,
    maxScore: 350,
    maxCount: 1,
  },
  {
    id: "Fan_Lobster_Sushi",
    name: "부채새우 초밥",
    maxCost: 0,
    maxScore: 0,
    maxCount: 1,
  },
  {
    id: "Crystal_Lobster_Sushi",
    name: "크리스탈랍스터 초밥",
    maxCost: 0,
    maxScore: 0,
    maxCount: 1,
  },
  {
    id: "Chambered_Nautilus_Sushi",
    name: "앵무조개 초밥",
    maxCost: 129,
    maxScore: 220,
    maxCount: 1,
  },
  {
    id: "Fangtooth_Sushi",
    name: "귀신고기 초밥",
    maxCost: 166,
    maxScore: 260,
    maxCount: 1,
  },
  {
    id: "Frilled_Shark_Sushi",
    name: "주름상어 초밥",
    maxCost: 314,
    maxScore: 280,
    maxCount: 1,
  },
  {
    id: "Bluespotted_Stargazer_Sushi",
    name: "푸렁통구멍 초밥",
    maxCost: 199,
    maxScore: 280,
    maxCount: 1,
  },
  {
    id: "Rhinochimaeridae_Sushi",
    name: "코은상어 초밥",
    maxCost: 333,
    maxScore: 290,
    maxCount: 1,
  },
  {
    id: "Spider_Crab_Sushi",
    name: "키다리게 초밥",
    maxCost: 185,
    maxScore: 290,
    maxCount: 1,
  },
  {
    id: "Megamouth_Shark_Sushi",
    name: "메가마우스상어 초밥",
    maxCost: 351,
    maxScore: 300,
    maxCount: 1,
  },
  {
    id: "Cookiecutter_Shark_Sushi",
    name: "쿠키커터상어 초밥",
    maxCost: 277,
    maxScore: 270,
    maxCount: 1,
  },
  {
    id: "Clione_Sushi",
    name: "클리오네 초밥",
    maxCost: 129,
    maxScore: 220,
    maxCount: 1,
  },
  {
    id: "Sea_Toad_Sushi",
    name: "점씬벵이 초밥",
    maxCost: 203,
    maxScore: 230,
    maxCount: 1,
  },
  {
    id: "Salmon_Snailfish_Sushi",
    name: "분홍꼼치 초밥",
    maxCost: 222,
    maxScore: 230,
    maxCount: 1,
  },
  {
    id: "Pacific_Fanfish_Sushi",
    name: "벤텐어 초밥",
    maxCost: 240,
    maxScore: 240,
    maxCount: 1,
  },
  {
    id: "Threetooth_Puffer_Sushi",
    name: "불뚝복 초밥",
    maxCost: 259,
    maxScore: 250,
    maxCount: 1,
  },
  {
    id: "Comb_Jelly_Sushi",
    name: "감투빗해파리 초밥",
    maxCost: 166,
    maxScore: 250,
    maxCount: 1,
  },
  {
    id: "Blood_belly_Comb_Jelly_Sushi",
    name: "붉은배빗해파리 초밥",
    maxCost: 185,
    maxScore: 250,
    maxCount: 1,
  },
  {
    id: "Red_Bream_Sushi",
    name: "금눈돔 초밥",
    maxCost: 129,
    maxScore: 270,
    maxCount: 1,
  },
  {
    id: "Norway_Lobster_Sushi",
    name: "네점발빨간새우 초밥",
    maxCost: 0,
    maxScore: 0,
    maxCount: 1,
  },
  {
    id: "Eastern_Rock_Lobster_Sushi",
    name: "동부바위바닷가재 초밥",
    maxCost: 0,
    maxScore: 0,
    maxCount: 1,
  },
  {
    id: "Peacock_Squid_Sushi",
    name: "공작오징어 초밥",
    maxCost: 277,
    maxScore: 290,
    maxCount: 1,
  },
  {
    id: "Dumbo_Octopus_Sushi",
    name: "덤보문어 초밥",
    maxCost: 296,
    maxScore: 330,
    maxCount: 1,
  },
  {
    id: "Barreleye_Sushi",
    name: "배럴아이 초밥",
    maxCost: 259,
    maxScore: 280,
    maxCount: 1,
  },
  {
    id: "Blob_Fish_Sushi",
    name: "블롭피쉬 초밥",
    maxCost: 444,
    maxScore: 310,
    maxCount: 1,
  },
  {
    id: "Vampire_Squid_Sushi",
    name: "흡혈오징어",
    maxCost: 425,
    maxScore: 340,
    maxCount: 1,
  },
  {
    id: "Pelican_Eel_Sushi",
    name: "펠리칸장어 초밥",
    maxCost: 666,
    maxScore: 360,
    maxCount: 1,
  },
  {
    id: "Arctic_Cod_Sushi",
    name: "극지대구 초밥",
    maxCost: 351,
    maxScore: 340,
    maxCount: 1,
  },
  {
    id: "Gelatinous_Snailfish_Sushi",
    name: "남극꼼치 초밥",
    maxCost: 314,
    maxScore: 330,
    maxCount: 1,
  },
  {
    id: "Antarctic_Octopus_Sushi",
    name: "남극문어 초밥",
    maxCost: 444,
    maxScore: 360,
    maxCount: 1,
  },
  {
    id: "Greenland_Shark_Sushi",
    name: "그린란드상어 초밥",
    maxCost: 592,
    maxScore: 370,
    maxCount: 1,
  },
  {
    id: "Polar_Eelpout_Sushi",
    name: "북극등가시치 초밥",
    maxCost: 333,
    maxScore: 320,
    maxCount: 1,
  },
  {
    id: "Porbeagle_Shark_Sushi",
    name: "비악상어 초밥",
    maxCost: 610,
    maxScore: 380,
    maxCount: 1,
  },
  {
    id: "Ice_Fish_Sushi",
    name: "아이스피쉬 초밥",
    maxCost: 351,
    maxScore: 320,
    maxCount: 1,
  },
  {
    id: "Capelin_Sushi",
    name: "열빙어 초밥",
    maxCost: 166,
    maxScore: 330,
    maxCount: 1,
  },
  {
    id: "Narwhal_Sushi",
    name: "일각고래 초밥",
    maxCost: 518,
    maxScore: 400,
    maxCount: 1,
  },
  {
    id: "Haddock_Sushi",
    name: "해덕대구 초밥",
    maxCost: 407,
    maxScore: 340,
    maxCount: 1,
  },
  {
    id: "Starry_Skate_Sushi",
    name: "땅가오리 초밥",
    maxCost: 481,
    maxScore: 360,
    maxCount: 1,
  },
  {
    id: "Arctic_Telescope_Fish_Sushi",
    name: "북극 망원경 물고기 초밥",
    maxCost: 444,
    maxScore: 350,
    maxCount: 1,
  },
  {
    id: "Alaska_Pollock_Sushi",
    name: "알래스카 명태 초밥",
    maxCost: 499,
    maxScore: 380,
    maxCount: 1,
  },
  {
    id: "Lumpfish_Sushi",
    name: "럼프피쉬 초밥",
    maxCost: 444,
    maxScore: 370,
    maxCount: 1,
  },
  {
    id: "Snub_Nosed_Spiny_Eel_Sushi",
    name: "들창코가시장어 초밥",
    maxCost: 666,
    maxScore: 390,
    maxCount: 1,
  },
  {
    id: "Golden_King_Crab_Sushi",
    name: "황색왕게 초밥",
    maxCost: 0,
    maxScore: 0,
    maxCount: 1,
  },
  {
    id: "Snow_Crab_Sushi",
    name: "대게 초밥",
    maxCost: 0,
    maxScore: 0,
    maxCount: 1,
  },
  {
    id: "Horsehair_Crab_Sushi",
    name: "털게 초밥",
    maxCost: 0,
    maxScore: 0,
    maxCount: 1,
  },
  {
    id: "Waptia_Sushi",
    name: "왑티아 초밥",
    maxCost: 381,
    maxScore: 400,
    maxCount: 1,
  },
  {
    id: "Pikaia_Sushi",
    name: "피카이아 초밥",
    maxCost: 425,
    maxScore: 360,
    maxCount: 1,
  },
  {
    id: "Allenypterus_Sushi",
    name: "알레니프테루스 초밥",
    maxCost: 462,
    maxScore: 360,
    maxCount: 1,
  },
  {
    id: "Qingmendous_Sushi",
    name: "칭멘도스 초밥",
    maxCost: 444,
    maxScore: 310,
    maxCount: 1,
  },
  {
    id: "Falcatus_Sushi",
    name: "팔카투스 초밥",
    maxCost: 481,
    maxScore: 380,
    maxCount: 1,
  },
  {
    id: "Drepanaspis_Sushi",
    name: "드레파나스피스 초밥",
    maxCost: 555,
    maxScore: 400,
    maxCount: 1,
  },
  {
    id: "Dunkleosteus_Sushi",
    name: "둔클레오스테우스 초밥",
    maxCost: 629,
    maxScore: 420,
    maxCount: 1,
  },
  {
    id: "Megalograptus_Sushi",
    name: "메갈로그랍투스 초밥",
    maxCost: 518,
    maxScore: 400,
    maxCount: 1,
  },
  {
    id: "Xenacanthus_Sushi",
    name: "제나칸투스 초밥",
    maxCost: 592,
    maxScore: 430,
    maxCount: 1,
  },
  {
    id: "Dollocaris_Ingens_Sushi",
    name: "돌로카리스인겐스 초밥",
    maxCost: 0,
    maxScore: 0,
    maxCount: 1,
  },
  {
    id: "Tokummia_Katalepsis_Sushi",
    name: "토큐미아카탈렙시스 초밥",
    maxCost: 0,
    maxScore: 0,
    maxCount: 1,
  },
  {
    id: "Young_Anomalocaris_Sushi",
    name: "아노말로칼리스 새끼 초밥",
    maxCost: 224,
    maxScore: 125,
    maxCount: 1,
  },
  {
    id: "Seahorse_Sewers",
    name: "해마 꼬치구이",
    maxCost: 111,
    maxScore: 220,
    maxCount: 1,
  },
  {
    id: "Seadragon_Onigiri",
    name: "해룡 주먹밥",
    maxCost: 388,
    maxScore: 470,
    maxCount: 1,
  },
  {
    id: "Whole_Roasted_Shark_Head",
    name: "백기흉상어 머리 통구이",
    unlock: UNLOCK_TYPE.YOSHIE_VISIT,
    maxCost: 196,
    maxScore: 150,
    maxCount: 7,
  },
  {
    id: "Falcatus Soybean Paste Soup",
    name: "팔카투스 된장국",
    unlock: UNLOCK_TYPE.ENTER_HYDROTHERMAL_VENTS,
    maxCost: 1554,
    maxScore: 382,
    maxCount: 7,
  },
  {
    id: "Pikaia Ramen",
    name: "피카이아 라멘",
    unlock: UNLOCK_TYPE.ENTER_HYDROTHERMAL_VENTS,
    maxCost: 1554,
    maxScore: 360,
    maxCount: 10,
  },
  {
    id: "Steamed_Hyalonema_Angler_Fish",
    name: "히알로네마 아귀찜",
    unlock: UNLOCK_TYPE.RESCUE_TSHCHI,
    maxCost: 1650,
    maxScore: 248,
    maxCount: 1,
  },
  {
    id: "Hyalonema_Tuna_Sashimi",
    name: "히알로네마 참치회",
    unlock: UNLOCK_TYPE.RESCUE_TSHCHI,
    maxCost: 1683,
    maxScore: 265,
    maxCount: 1,
  },
  {
    id: "Seagrapes Jellyfish Sushi",
    name: "바다포도 해파리 초밥",
    unlock: UNLOCK_TYPE.VIP_VINCENT,
    maxCost: 832,
    maxScore: 280,
    maxCount: 1,
  },
  {
    id: "Tropical Fish Sushi Set",
    name: "화려한 특초밥 세트",
    unlock: UNLOCK_TYPE.VIP_MICHAEL_BANG,
    maxCost: 1387,
    maxScore: 346,
    maxCount: 9,
  },
  {
    id: "Vegetable Sushi",
    name: "채소 초밥",
    unlock: UNLOCK_TYPE.VIP_SAMMY,
    maxCost: 1387,
    maxScore: 390,
    maxCount: 1,
  },
  {
    id: "Hotpeppertuna",
    name: "핫페퍼튜나",
    unlock: UNLOCK_TYPE.DJANGO_VISIT,
    maxCost: 0,
    maxScore: 0,
    maxCount: 1,
  },
  {
    id: "Boiled_Asian_Sheepshead_Wrasse And Truffle",
    name: "트러플 혹돔 조림",
    unlock: UNLOCK_TYPE.VIP_DJANGO,
    maxCost: 1661,
    maxScore: 280,
    maxCount: 2,
  },
  {
    id: "Sweet_And_Sour_Stargazer",
    name: "푸렁통구멍 탕수어",
    unlock: UNLOCK_TYPE.CHALLENGE_WANG_PANG,
    maxCost: 1443,
    maxScore: 395,
    maxCount: 6,
  },
  {
    id: "Fried Rice With Galapagos Red Crab",
    name: "갈라파고스붉은게 볶음밥",
    unlock: UNLOCK_TYPE.CHALLENGE_WANG_PANG,
    maxCost: 1424,
    maxScore: 305,
    maxCount: 10,
  },
  {
    id: "Blobfish Spring Roll",
    name: "블롭피쉬 춘권",
    unlock: UNLOCK_TYPE.CHALLENGE_WANG_PANG,
    maxCost: 1387,
    maxScore: 322,
    maxCount: 10,
  },
  {
    id: "Tomato Egg Soup",
    name: "토마토 계란탕",
    unlock: UNLOCK_TYPE.CHALLENGE_WANG_PANG,
    maxCost: 1406,
    maxScore: 309,
    maxCount: 12,
  },
  {
    id: "Mianbao Xia",
    name: "멘보샤",
    unlock: UNLOCK_TYPE.CHALLENGE_WANG_PANG,
    maxCost: 1387,
    maxScore: 305,
    maxCount: 10,
  },
  {
    id: "Fried Tomato And Snailfish",
    name: "토마토 꼼치 볶음",
    unlock: UNLOCK_TYPE.CHALLENGE_WANG_PANG,
    maxCost: 1443,
    maxScore: 335,
    maxCount: 1,
  },
  {
    id: "Deep Fish Tempura",
    name: "심해어 덴뿌라",
    unlock: UNLOCK_TYPE.CHALLENGE_ALEX,
    maxCost: 1461,
    maxScore: 320,
    maxCount: 7,
  },
  {
    id: "Plotosid Pie",
    name: "쏠종개 파이",
    unlock: UNLOCK_TYPE.CHALLENGE_ALEX,
    maxCost: 1424,
    maxScore: 420,
    maxCount: 7,
  },
  {
    id: "Pelican Eel Jelly",
    name: "펠리칸장어 젤리",
    unlock: UNLOCK_TYPE.CHALLENGE_ALEX,
    maxCost: 1380,
    maxScore: 439,
    maxCount: 9,
  },
  {
    id: "Smoked Atlantic Mackerel Scramble",
    name: "훈제 대서양고등어 스크램블",
    unlock: UNLOCK_TYPE.CHALLENGE_ALEX,
    maxCost: 1431,
    maxScore: 460,
    maxCount: 6,
  },
  {
    id: "Comber Sandwich",
    name: "콤버 샌드위치",
    unlock: UNLOCK_TYPE.CHALLENGE_ALEX,
    maxCost: 1443,
    maxScore: 420,
    maxCount: 6,
  },
  {
    id: "Humboldt Ink Pasta",
    name: "훔볼트 먹물 파스타",
    unlock: UNLOCK_TYPE.CHALLENGE_PASTRO,
    maxCost: 1554,
    maxScore: 375,
    maxCount: 10,
  },
  {
    id: "Narrow_Barred Spanish Mackerel Arancini",
    name: "동갈삼치 아란치니",
    unlock: UNLOCK_TYPE.CHALLENGE_PASTRO,
    maxCost: 1443,
    maxScore: 364,
    maxCount: 7,
  },
  {
    id: "Antarctic Octopus Carpaccio",
    name: "남극문어 카르파초",
    unlock: UNLOCK_TYPE.CHALLENGE_PASTRO,
    maxCost: 1498,
    maxScore: 408,
    maxCount: 7,
  },
  {
    id: "Arctic Cod Risotto",
    name: "극지대구 리조토",
    unlock: UNLOCK_TYPE.CHALLENGE_PASTRO,
    maxCost: 1509,
    maxScore: 377,
    maxCount: 9,
  },
  {
    id: "Peacock Squid Ripieni",
    name: "공작오징어 리피에니",
    unlock: UNLOCK_TYPE.CHALLENGE_PASTRO,
    maxCost: 1517,
    maxScore: 360,
    maxCount: 7,
  },
  {
    id: "Haddock Acqua Pazza",
    name: "해덕대구 아쿠아파짜",
    unlock: UNLOCK_TYPE.CHALLENGE_PASTRO,
    maxCost: 1498,
    maxScore: 400,
    maxCount: 9,
  },
  {
    id: "Boiled Yellowback Fusilier",
    name: "황등어 간장조림",
    unlock: UNLOCK_TYPE.COOK_STAR_BRONZE,
    maxCost: 185,
    maxScore: 255,
    maxCount: 7,
  },
  {
    id: "Salt_Grilled Redtoothed Triggerfish",
    name: "붉은이빨쥐치 소금구이",
    unlock: UNLOCK_TYPE.COOK_STAR_BRONZE,
    maxCost: 177,
    maxScore: 241,
    maxCount: 6,
  },
  {
    id: "Agar Tokoroten",
    name: "도코로텐",
    unlock: UNLOCK_TYPE.COOK_STAR_BRONZE,
    maxCost: 188,
    maxScore: 266,
    maxCount: 7,
  },
  {
    id: "Seasoned Kajime",
    name: "감태 초무침",
    unlock: UNLOCK_TYPE.COOK_STAR_BRONZE,
    maxCost: 185,
    maxScore: 245,
    maxCount: 6,
  },
  {
    id: "Moray Eel Curry",
    name: "곰치 커리",
    unlock: UNLOCK_TYPE.COOK_STAR_SILVER,
    maxCost: 351,
    maxScore: 273,
    maxCount: 6,
  },
  {
    id: "Striped Red Mullet Tangle Roll",
    name: "노랑촉수 다시마 말이",
    unlock: UNLOCK_TYPE.COOK_STAR_SILVER,
    maxCost: 296,
    maxScore: 270,
    maxCount: 7,
  },
  {
    id: "White Trevally Kombu Ochazuke",
    name: "다시마 흑점줄전갱이 오차즈케",
    unlock: UNLOCK_TYPE.COOK_STAR_SILVER,
    maxCost: 344,
    maxScore: 266,
    maxCount: 7,
  },
  {
    id: "Stellate Puffer Special Sushi",
    name: "복어 특초밥",
    unlock: UNLOCK_TYPE.COOK_STAR_GOLD,
    maxCost: 814,
    maxScore: 340,
    maxCount: 1,
  },
  {
    id: "Seagrapes Special Sushi",
    name: "바다포도 특초밥",
    unlock: UNLOCK_TYPE.COOK_STAR_GOLD,
    maxCost: 740,
    maxScore: 390,
    maxCount: 1,
  },
  {
    id: "Trout Sea Grapes Ricebowl",
    name: "바다포도 무늬바리 회덮밥",
    unlock: UNLOCK_TYPE.COOK_STAR_GOLD,
    maxCost: 647,
    maxScore: 290,
    maxCount: 7,
  },
  {
    id: "Big_Eyed Scad and Soybean Paste Roast",
    name: "새가라지 된장구이",
    unlock: UNLOCK_TYPE.COOK_STAR_GOLD,
    maxCost: 684,
    maxScore: 348,
    maxCount: 7,
  },
  {
    id: "Seahorse Udon",
    name: "해마 우동",
    unlock: UNLOCK_TYPE.COOK_STAR_PLATINUM,
    maxCost: 1387,
    maxScore: 353,
    maxCount: 4,
  },
  {
    id: "Black Vinegar Braised Parrotfish",
    name: "비늘돔 흑식초 조림",
    unlock: UNLOCK_TYPE.COOK_STAR_PLATINUM,
    maxCost: 1424,
    maxScore: 406,
    maxCount: 6,
  },
  {
    id: "Atlantic Bonito Curry",
    name: "대서양보니토 커리",
    unlock: UNLOCK_TYPE.COOK_STAR_PLATINUM,
    maxCost: 1406,
    maxScore: 389,
    maxCount: 7,
  },
  {
    id: "Humphead Parrotfish Curry",
    name: "버팔로피쉬 커리",
    unlock: UNLOCK_TYPE.COOK_STAR_PLATINUM,
    maxCost: 1387,
    maxScore: 347,
    maxCount: 6,
  },
  {
    id: "Great Barracuda Canape",
    name: "큰꼬치고기 카나페",
    unlock: UNLOCK_TYPE.COOK_STAR_DIA,
    maxCost: 1572,
    maxScore: 372,
    maxCount: 6,
  },
  {
    id: "Nasu Dengaku",
    name: "나스 덴가쿠",
    unlock: UNLOCK_TYPE.COOK_STAR_DIA,
    maxCost: 1535,
    maxScore: 317,
    maxCount: 4,
  },
  {
    id: "Dumbo Takoyaki",
    name: "덤보 타코야끼",
    unlock: UNLOCK_TYPE.COOK_STAR_DIA,
    maxCost: 1554,
    maxScore: 390,
    maxCount: 9,
  },
  {
    id: "Rice With Great Spider Crab Meat",
    name: "키다리게 덮밥 ",
    unlock: UNLOCK_TYPE.COOK_STAR_DIA,
    maxCost: 1517,
    maxScore: 330,
    maxCount: 7,
  },
  {
    id: "Bluefin Tuna Rice Bowl",
    name: "마구로동",
    unlock: UNLOCK_TYPE.PARTY_TUNA,
    maxCost: 1332,
    maxScore: 400,
    maxCount: 9,
  },
  {
    id: "Hawaiian Poke",
    name: "하와이안 포케",
    unlock: UNLOCK_TYPE.PARTY_TUNA,
    maxCost: 980,
    maxScore: 348,
    maxCount: 9,
  },
  {
    id: "Yellowfin Tuna Steak",
    name: "황다랑어 스테이크",
    unlock: UNLOCK_TYPE.PARTY_TUNA,
    maxCost: 1128,
    maxScore: 332,
    maxCount: 9,
  },
  {
    id: "Marlin_And_Soybean_Paste_Roast",
    name: "청새치 된장구이",
    unlock: UNLOCK_TYPE.PARTY_BLUE_FIN,
    maxCost: 1406,
    maxScore: 272,
    maxCount: 9,
  },
  {
    id: "Boiled_Sailfish_And_Seaweed",
    name: "돛새치 해초조림",
    unlock: UNLOCK_TYPE.PARTY_BLUE_FIN,
    maxCost: 1572,
    maxScore: 300,
    maxCount: 9,
  },
  {
    id: "Pickled Vegetables",
    name: "채소절임",
    unlock: UNLOCK_TYPE.PARTY_CUCUMBER,
    maxCost: 1169,
    maxScore: 364,
    maxCount: 3,
  },
  {
    id: "Deep_Fried Vegetables",
    name: "채소튀김",
    unlock: UNLOCK_TYPE.PARTY_CUCUMBER,
    maxCost: 1154,
    maxScore: 396,
    maxCount: 3,
  },
  {
    id: "Skewered Cucumber",
    name: "오이꼬치",
    unlock: UNLOCK_TYPE.PARTY_CUCUMBER,
    maxCost: 1184,
    maxScore: 340,
    maxCount: 1,
  },
  {
    id: "Sea Toad and Cucumber Gunkan Sushi",
    name: "점씬벵이 오이 군함 초밥",
    unlock: UNLOCK_TYPE.PARTY_CUCUMBER,
    maxCost: 1184,
    maxScore: 367,
    maxCount: 1,
  },
  {
    id: "Great Spider Crab and Cucumber Sushi",
    name: "키다리게 오이 초밥",
    unlock: UNLOCK_TYPE.PARTY_CUCUMBER,
    maxCost: 1198,
    maxScore: 385,
    maxCount: 1,
  },
  {
    id: "Trevally Sandwich",
    name: "전갱이 샌드",
    unlock: UNLOCK_TYPE.PARTY_CUCUMBER,
    maxCost: 1154,
    maxScore: 260,
    maxCount: 7,
  },
  {
    id: "Seasoned_Waptia_fieldensis",
    name: "왑티아 필덴시스 초무침",
    unlock: UNLOCK_TYPE.PARTY_CUCUMBER,
    maxCost: 0,
    maxScore: 0,
    maxCount: 1,
  },
  {
    id: "Stir_Fried_Habanero_Lobster",
    name: "하바네로 가재 볶음",
    unlock: UNLOCK_TYPE.PARTY_LOBSTER,
    maxCost: 1443,
    maxScore: 320,
    maxCount: 6,
  },
  {
    id: "Steamed_Eastern_Rock_Lobster_And_Egg",
    name: "동부바위바닷가재 계란찜",
    unlock: UNLOCK_TYPE.PARTY_LOBSTER,
    maxCost: 1406,
    maxScore: 455,
    maxCount: 7,
  },
  {
    id: "Crystal_Lobster_Roll",
    name: "크리스탈랍스터 롤",
    unlock: UNLOCK_TYPE.PARTY_LOBSTER,
    maxCost: 1369,
    maxScore: 305,
    maxCount: 9,
  },
  {
    id: "Stellate Puffer Nicogori",
    name: "복어 니코고리",
    unlock: "직원 Lv.5 달성",
    maxCost: 666,
    maxScore: 381,
    maxCount: 7,
  },
  {
    id: "Special Fried Shrimp Sushi",
    name: "새우튀김 특초밥",
    unlock: "드레 Lv.5 달성",
    maxCost: 1406,
    maxScore: 317,
    maxCount: 1,
  },
  {
    id: "Boiled and Deep_Fried White Shrimp",
    name: "흰다리자숙새우 튀김",
    unlock: "랩터 Lv.5 달성",
    maxCost: 832,
    maxScore: 330,
    maxCount: 10,
  },
  {
    id: "Smallspotted Dart Kajime Soup",
    name: "빨판매가리 감태국",
    unlock: "마키 Lv.5 달성",
    maxCost: 555,
    maxScore: 367,
    maxCount: 7,
  },
  {
    id: "Fried Seahorses",
    name: "해마 튀김",
    unlock: "코카니지 Lv.5 달성",
    maxCost: 814,
    maxScore: 362,
    maxCount: 4,
  },
  {
    id: "Roasted Capelin",
    name: "열빙어 구이",
    unlock: "드레 Lv.10 달성",
    maxCost: 1443,
    maxScore: 345,
    maxCount: 7,
  },
  {
    id: "Rice with Purple Sea Urchin Sushi",
    name: "보라성게 덮밥",
    unlock: "랩터 Lv.10 달성",
    maxCost: 1424,
    maxScore: 320,
    maxCount: 4,
  },
  {
    id: "Deep_Fried Luna Lionfish",
    name: "쏠배감펭 튀김",
    unlock: "코카니지 Lv.10 달성",
    maxCost: 1443,
    maxScore: 366,
    maxCount: 4,
  },
  {
    id: "Narwhal Miso Soup",
    name: "일각고래 미소된장국",
    unlock: "다비나 Lv.15 달성",
    maxCost: 1480,
    maxScore: 420,
    maxCount: 12,
  },
  {
    id: "Ice Fish Curry",
    name: "아이스피쉬 커리",
    unlock: "드레 Lv.15 달성",
    maxCost: 1480,
    maxScore: 317,
    maxCount: 9,
  },
  {
    id: "Boiled Porbeagle Shark",
    name: "비악상어 조림",
    unlock: "라울 Lv.15 달성",
    maxCost: 1480,
    maxScore: 332,
    maxCount: 7,
  },
  {
    id: "Fried Onion Cuttlefish",
    name: "갑오징어 어니언링",
    unlock: "랩터 Lv.15 달성",
    maxCost: 1480,
    maxScore: 360,
    maxCount: 7,
  },
  {
    id: "Three_Colored Squid Roast",
    name: "삼색오징어구이",
    unlock: "리우 Lv.15 달성",
    maxCost: 1480,
    maxScore: 335,
    maxCount: 12,
  },
  {
    id: "Latok Omelet",
    name: "바다포도 계란덮밥",
    unlock: "마사요시 Lv.15 달성",
    maxCost: 1480,
    maxScore: 260,
    maxCount: 9,
  },
  {
    id: "Trevally Nanbanzuke",
    name: "전갱이 난반즈케",
    unlock: "마키 Lv.15 달성",
    maxCost: 1480,
    maxScore: 343,
    maxCount: 7,
  },
  {
    id: "Batfish Ricebowl",
    name: "활치 오야코동",
    unlock: "미첼 Lv.15 달성",
    maxCost: 1480,
    maxScore: 447,
    maxCount: 7,
  },
  {
    id: "Crimson Fish Roll",
    name: "다홍빛 생선 롤",
    unlock: "빌리 Lv.15 달성",
    maxCost: 1480,
    maxScore: 285,
    maxCount: 9,
  },
  {
    id: "Dusky Grouper Steak",
    name: "머구리농어 스테이크",
    unlock: "엘 니뇨 Lv.15 달성",
    maxCost: 1480,
    maxScore: 328,
    maxCount: 7,
  },
  {
    id: "Seahorse Salad",
    name: "해마해초 샐러드",
    unlock: "요네 Lv.15 달성",
    maxCost: 1480,
    maxScore: 295,
    maxCount: 6,
  },
  {
    id: "Deep_Fried Eggplant Shrimp Meatballs",
    name: "가지 새우완자 튀김",
    unlock: "유스케 Lv.15 달성",
    maxCost: 1480,
    maxScore: 460,
    maxCount: 7,
  },
  {
    id: "Shark Karaage",
    name: "상어 가라아게",
    unlock: "이츠키 Lv.15 달성",
    maxCost: 1480,
    maxScore: 380,
    maxCount: 9,
  },
  {
    id: "Wrasse Curry",
    name: "놀래기 커리",
    unlock: "잔디 Lv.15 달성",
    maxCost: 1480,
    maxScore: 330,
    maxCount: 6,
  },
  {
    id: "Seasoned Jellyfish",
    name: "해파리 무침",
    unlock: "제임스 Lv.15 달성",
    maxCost: 1480,
    maxScore: 298,
    maxCount: 6,
  },
  {
    id: "Great Spider Crab Curry",
    name: "키다리게 커리",
    unlock: "찰리 Lv.15 달성",
    maxCost: 1480,
    maxScore: 290,
    maxCount: 9,
  },
  {
    id: "Dried Stingray",
    name: "가오리포",
    unlock: "카롤리나 Lv.15 달성",
    maxCost: 1480,
    maxScore: 225,
    maxCount: 12,
  },
  {
    id: "Mackerel Scad Hotdog",
    name: "풀가라지 핫도그",
    unlock: "코카니지 Lv.15 달성",
    maxCost: 1480,
    maxScore: 340,
    maxCount: 6,
  },
  {
    id: "Rice With White Shrimp Meat",
    name: "흰보리새우 덮밥",
    unlock: "쿄코 Lv.15 달성",
    maxCost: 1480,
    maxScore: 400,
    maxCount: 9,
  },
  {
    id: "Roasted Tropical Fish And Garlic",
    name: "열대어 마늘구이",
    unlock: "토호쿠 Lv.15 달성",
    maxCost: 1480,
    maxScore: 236,
    maxCount: 9,
  },
  {
    id: "Seaweed Rolled Omelet",
    name: "해초 계란말이",
    unlock: "파이 Lv.15 달성",
    maxCost: 1480,
    maxScore: 300,
    maxCount: 9,
  },
  {
    id: "Fried_Habanero_FangTooth",
    name: "하바네로 귀신고기 튀김",
    unlock: UNLOCK_TYPE.SECRET_RECIPE,
    maxCost: 1517,
    maxScore: 420,
    maxCount: 7,
  },
  {
    id: "Moonlight_Bladderwrack_Roll",
    name: "달빛 블래더랙 롤",
    unlock: UNLOCK_TYPE.SECRET_RECIPE,
    maxCost: 1498,
    maxScore: 360,
    maxCount: 9,
  },
  {
    id: "Secret_1",
    name: "하바네로 장어 구이",
    unlock: UNLOCK_TYPE.SECRET_RECIPE,
    maxCost: 1572,
    maxScore: 335,
    maxCount: 9,
  },
  {
    id: "Lobster_Platter",
    name: "랍스터 플래터",
    unlock: UNLOCK_TYPE.SECRET_RECIPE,
    maxCost: 1609,
    maxScore: 375,
    maxCount: 6,
  },
  {
    id: "Pufferfish_Dumpling_Soup",
    name: "복어 완자탕",
    unlock: UNLOCK_TYPE.SECRET_RECIPE,
    maxCost: 1554,
    maxScore: 420,
    maxCount: 9,
  },
  {
    id: "Soy_Sauce_Marinated_Crab",
    name: "간장 게장",
    unlock: UNLOCK_TYPE.SECRET_RECIPE,
    maxCost: 1609,
    maxScore: 505,
    maxCount: 6,
  },
  {
    id: "Secret_2",
    name: "트러플 돛새치 타르타르",
    unlock: UNLOCK_TYPE.SECRET_RECIPE,
    maxCost: 1727,
    maxScore: 295,
    maxCount: 2,
  },
  {
    id: "Secret_3",
    name: "트러플 상어 샌드",
    unlock: UNLOCK_TYPE.SECRET_RECIPE,
    maxCost: 0,
    maxScore: 0,
    maxCount: 1,
  },
  {
    id: "Secret_4",
    name: "트러플 남극문어 구이",
    unlock: UNLOCK_TYPE.SECRET_RECIPE,
    maxCost: 0,
    maxScore: 0,
    maxCount: 1,
  },
  {
    id: "Secret_5",
    name: "트러블 블루랍스터 꼬리회",
    unlock: UNLOCK_TYPE.SECRET_RECIPE,
    maxCost: 0,
    maxScore: 0,
    maxCount: 1,
  },
];