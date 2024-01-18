import { instance as axios } from "api/axios";

export const updateExam = async(Title, examData) => {
  try {
    // const certificateTitle = encodeURIComponent(examData.certificateTitle);

    // const url = `Exams/${Title}?certificateTitle=${certificateTitle}`;

    console.log("examdata from updateExam cert Title:"+ examData.certificateTitle)
    console.log("examdata from updateExam:")
    Object.entries(examData).forEach(([key, value]) => {
      console.log(key, value);
   });
    console.log("Title from updateExam:"+Title)

    await axios.put(`Exams/${Title}`, examData);
    // await axios.put(url, examData);

  } catch (error) {
    console.error("Error updating exam ", error);
    throw error; // Re-throw the error to handle it in the calling function
  }
};
