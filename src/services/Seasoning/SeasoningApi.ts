import axios from "axios";

export const getSeasoningList = () =>
  axios
    .get(`http://localhost:8080/api/seasoning`)
    .then((res) => res.data?.data);

export const getSeasoningDetail = (seasoningId: string) =>
  axios
    .get(`http://localhost:8080/api/seasoning/${seasoningId}`)
    .then((res) => res.data?.data);
