import { getSpecificExam } from "../api";
import { getQuestionsForExam } from "../api";
import { getCandidateExam } from "../api";
import { useState, useEffect } from "react";

/**
 * Fetches specificExam, sets state, and returns it
 */
const useSpecificExam = ({ Title }) => {
  const [specificExam, setSpecificExam] = useState(null);
  const fetchSpecificExam = () => {
    getSpecificExam({ Title }).then((data) => {
      const specificExamWithoutId = data.$values.map(
        ({ $id, questions, certificate, ...rest }) => rest
      ); // Exclude $id, questions, certificate from data
      setSpecificExam(specificExamWithoutId);
    });
  };

  useEffect(() => {
    fetchSpecificExam();
  }, []);

  return { specificExam, fetchSpecificExam };
};

const useQuestionsForExam = ({ Title }) => {
  const [questionsForExam, setQuestionsForExam] = useState(null);
  const fetchQuestionsForExam = () => {
    getQuestionsForExam({ Title }).then((data) => {
      const QuestionsForExamWithoutId = data.$values.map(
        ({ $id, exam, ...rest }) => rest
      );
      setQuestionsForExam(QuestionsForExamWithoutId);
    });
  };

  useEffect(() => {
    fetchQuestionsForExam();
  }, []);

  return { questionsForExam, fetchQuestionsForExam };
};

const useCandidateExam = ({ Title, CandidateNumber }) => {
  const [candidateExam, setCandidateExam] = useState(null);
  const fetchCandidateExam = () => {
    getCandidateExam({ Title, CandidateNumber }).then((data) => {
      const candidateExamWithoutId = data.$values.map(
        ({ $id, ...rest }) => rest
      );
      setCandidateExam(candidateExamWithoutId);
    });
  };

  useEffect(() => {
    fetchCandidateExam();
  }, []);

  return { candidateExam, fetchCandidateExam };
};

export const useExam = () => {
  return { useSpecificExam, useQuestionsForExam, useCandidateExam };
};
