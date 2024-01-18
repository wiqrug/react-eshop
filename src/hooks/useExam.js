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

  return { exam, questions,  fetchExam };
  // return { exam, questions, mark, fetchExam };

};
