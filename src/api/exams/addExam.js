import { instance as axios } from "api/axios";

export const addExam = async (exam) => {
  console.log(
    "Received data for saving associating with cert title:",
    exam.Title
  );
  console.log("Received data for saving:", exam);
  try {
    const response = await axios.post(`Exams`, exam, {
      params: { Title: exam.Title },
    });
    if (response.status === 200) {
      console.log("Certificate added successfully");
    }
  } catch (error) {
    console.error("Error adding certificate:", error);
  }
};
