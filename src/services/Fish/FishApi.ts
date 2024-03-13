import axios from "axios";

export const getFishList = () =>
  axios.get(`http://localhost:8080/api/fish`).then((res) => res.data?.data);

export const getFishDetail = (fishId: string) =>
  axios
    .get(`http://localhost:8080/api/fish/${fishId}`)
    .then((res) => res.data?.data);
