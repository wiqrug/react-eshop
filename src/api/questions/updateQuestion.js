import { instance as axios } from "api/axios";

export const updateQuestion = async(id, question) => {
  try {
    console.log("From updateQuestion ID:"+ id)
    console.log("From updateQuestion QUESTION:"+ question)
    console.log("examdata from updateExam:")
    Object.entries(question).forEach(([key, value]) => {
      console.log(key, value);
   });

    await axios.put(`Questions/${id}`, question);

  } catch (error) {
    console.log("Error updating question ", error.message);
    console.error("Error updating question ", error);
  }
};
