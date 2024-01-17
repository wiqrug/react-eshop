import { getExams } from "../api";
import { useState, useEffect } from "react";

export const useExams = () => {
  const [exams, setExams] = useState(null);
  const fetchExams = () => {
    getExams().then((data) => {
      const examsWithoutId = data.$values.map(
        ({ $id, questions, certificate, ...rest }) => rest
      );
      setExams(examsWithoutId);
    });
  };

  useEffect(() => {
    fetchExams();
  }, []);

  return { exams, fetchExams };
};
