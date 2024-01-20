import { instance as axios } from "api/axios";

export const addExam = async (exam) => {
  console.log(
    "Received data for saving associating with cert title:",
    exam.certificateTitle
  ); // Log to verify data structure
  console.log("Received data for saving:", exam); // Log to verify data structure
  try {
    const response = await axios.post(`Exams`, exam, {
      params: { Title: exam.certificateTitle },
    });
    if (response.status === 200) {
      console.log("Exam added successfully");
    }
  } catch (error) {
    console.error("Error adding Exam:", error);
  }
};
