import axios from "axios";

export const getPlantList = () =>
  axios.get(`http://localhost:8080/api/plant`).then((res) => res.data?.data);

export const getPlantDetail = (plantId: string) =>
  axios
    .get(`http://localhost:8080/api/plant/${plantId}`)
    .then((res) => res.data?.data);
