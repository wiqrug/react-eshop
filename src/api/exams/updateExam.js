import { instance as axios } from "api/axios";

export const updateExam = async(Title, payload) => {
  try {
    const response = await axios.put(`Exams/${Title}`, payload);
    return response.data; // Assuming the response data contains the candidate details
  } catch (error) {
    console.error("Error updating exam ", error);
    throw error; // Re-throw the error to handle it in the calling function
  }
};
