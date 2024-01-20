import { instance as axios } from "../axios";

export const getQuestion = (Title) =>
  axios
    .get(`Questions/${Title}`)
    .then((response) => response.data)
    .catch((error) => {
      console.error(`Error fetching Questions/${Title}:`, error);
    });
