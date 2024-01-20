import { instance as axios } from "../axios";
const Cookies = require("js-cookie");

export const getExam = async (Title) => {
  try {
    const response = await axios.get(`Exams/${Title}`);
    // const cookie = Cookies.get("currentUser");
    // const parsedCookie = cookie ? JSON.parse(cookie) : "";
    // console.log("cookie.candidateNumber:" + parsedCookie.candidateNumber);
    //console.log("Title:" + Title);

    // const response2 = await axios.get(`CandidateCertificates/${parsedCookie.candidateNumber}/Exam`, { params: { Title: Title } })
    // console.log("response2:" + response2)
    // console.log("response2:" + Object.keys(response2))
    // console.log("response2DATA:" + response2.data)

    // const mark = response2.data
    // Destructure the properties you want to exclude
    const { $id, examId, certificateId, questions, certificate, ...Exam } =
      response.data;

    const Questions = questions.$values.map(({ $id, exam, ...rest }) => rest); // Exclude $id, exam from data

    console.log("from GETexam EXAM:");
    console.log("from :");

    Object.entries(Exam).forEach(([key, value]) => {
      console.log(key, value);
    });
    // console.log("HFCJHFASHFDKASGKH: " + Exam);

    // console.log("HFCJHFASHFDKASGKH: " + Questions);
    // console.log("questionsTYPE: " + typeof Questions);

    // console.log("from getExam   QUESTION:");
    // Object.entries(Questions).forEach(([key, value]) => {
    //   console.log(key, value);
    // });
    // console.log("END EXAM.JSX:");
    // return { Exam, Questions, mark }; // Assuming the response data contains the candidate details
    return { Exam, Questions }; // Assuming the response data contains the candidate details
  } catch (error) {
    console.log(`Error fetching GET Exams/${Title}:`, error.message);
    console.error(`Error fetching Exams/${Title}:`, error);
    throw error; // Re-throw the error to handle it in the calling function
  }
};
