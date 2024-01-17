import { instance as axios } from "api/axios";

export const addExam = async(certificateTitle, exam) => {
        console.log("Received data for saving associating with cert title:", certificateTitle); // Log to verify data structure
        console.log("Received data for saving:", exam); // Log to verify data structure
        try {
          const response = await axios.post(`Exams`, {Title: certificateTitle, exam});                      // This could not work 
          if (response.status === 200) {
            console.log("Certificate added successfully");
          }
        } catch (error) {
          console.error("Error adding certificate:", error);
        }
};
