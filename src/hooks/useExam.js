import { getExam } from "../api";
import { useState, useEffect } from "react";

export const useExam = (Title) => {
  const [exam, setExam] = useState({});
  const [questions, setQuestions] = useState({});
  // const [mark, setMark] = useState();

  const fetchExam = async () => {
    // const { Exam, Questions, mark } = await getExam(Title);
    const { Exam, Questions } = await getExam(Title);

    // setMark(mark);
    setExam(Exam);
    setQuestions(Questions);
  };

  useEffect(() => {
    // console.log("here")
    fetchExam();
  }, []); // Empty dependency array to run only once

  // console.log("from useexam EXAM:");
  // console.log("from JGSGSGSDGFHDALHFLAJGSJFGALJGH:");

  // Object.entries(exam).forEach(([key, value]) => {
  //   console.log(key, value);
  // });
  // console.log("HFCJHFASHFDKASGKH: " + exam);

  // console.log("HFCJHFASHFDKASGKH: " + questions);
  // console.log("questionsTYPE: " + typeof questions);

  // console.log("from getExam   QUESTION:");
  // Object.entries(questions).forEach(([key, value]) => {
  //   console.log(key, value);
  // });
  // console.log("END EXAM.JSX:");

  return { exam, questions, fetchExam };
  // return { exam, questions, mark, fetchExam };
};
