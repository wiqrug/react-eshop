import { instance as axios } from "api/axios";

export const updateExam = async (Title, payload) => {
  try {
    const response = await axios.put(`Exams/${Title}`, payload);
    return response.data;
  } catch (error) {
    console.error("Error updating exam ", error);
    throw error;
  }
};
