import axios from "axios";
import { UpdateDishLevel } from "@typings/Dish.ts";

export const getDishList = () =>
  axios.get(`http://localhost:8080/api/dish`).then((res) => res.data?.data);

export const getDishDetail = (dishId: string) =>
  axios
    .get(`http://localhost:8080/api/dish/${dishId}`)
    .then((res) => res.data?.data);

export const getDishLevelList = (profileId: string) =>
  axios
    .get(`http://localhost:8080/api/dish-level?profileId=${profileId}`)
    .then((res) => res.data?.data);

export const postDishLevel = (updateDishLevel: UpdateDishLevel) =>
  axios
    .post(`http://localhost:8080/api/dish-level`, updateDishLevel)
    .then((res) => res.data);
