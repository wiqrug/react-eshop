import { getExams } from "../api";
import { useState, useEffect } from "react";

/**
 * Fetches exams, sets state, and returns it
 */
export const useExams = () => {
  const [exams, setExams] = useState(null);
  const fetchExams = () => {
    getExams().then((data) => {
      const examWithoutId = data.$values.map(
        ({ $id, questions, certificate, ...rest }) => rest
      ); // Exclude $id, questions, certificate from data
      setExams(examWithoutId);
    });
  };

  useEffect(() => {
    fetchExams();
  }, []); // Empty dependency array to run only once

  return { exams, fetchExams };
};
