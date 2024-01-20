import { instance as axios } from "api/axios";

export const addQuestion = async (examTitle, question) => {
  try {
    const response = await axios.post(`Questions`, question, {
      params: { Title: examTitle },
    });
    if (response.status === 200) {
      console.log("Question added successfully");
    }
  } catch (error) {
    console.log("Error adding Question:", error.message);
    console.error("Error adding Question:", error);
  }
};
