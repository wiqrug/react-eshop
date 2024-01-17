import { instance as axios } from "../axios";

export const getExam = ({ Title }) =>
  axios
    .get(`Exams/${Title}`)
    .then((response) => response.data)
    .catch((error) => {
      console.error(`Error fetching Exams/${Title}:`, error);
    });
