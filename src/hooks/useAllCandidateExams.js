import { getAllCandidateExams } from "../api";
import { useState, useEffect } from "react";

/**
 * Fetches candidateExams, sets state, and returns it
 */
export const useAllCandidateExams = () => {
    const [allCE, setallCE] = useState(null);
    const fetchAllCE = () => {
        getAllCandidateExams().then((data) => {
            const allCEWithoutId = data.$values.candidateExams.$values.map(({ $id, candidate, ...rest }) => rest);      // Exclude $id, candidate from data
            setallCE(allCEWithoutId);
        });
    };

    useEffect(() => {
        fetchAllCE();
    }, []); // Empty dependency array to run only once

    return { allCE, fetchAllCE };
};
