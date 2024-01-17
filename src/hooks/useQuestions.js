import { getQuestions } from "../api";
import { useState, useEffect } from "react";

export const useQuestions = () => {
  const [questions, setQuestions] = useState(null);
  const fetchQuestions = () => {
    getQuestions().then((data) => {
      const questionsWithoutId = data.$values.map(
        ({ $id, exam, ...rest }) => rest
      ); // Exclude $id, exam from data
      setQuestions(questionsWithoutId);
    });
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  return { questions, fetchQuestions };
};
