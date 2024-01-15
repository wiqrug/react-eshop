import { getAllCandidateCertificates } from "../api";
import { useState, useEffect } from "react";

/**
 * Fetches candidatecertificates, sets state, and returns it
 */
export const useAllCandidateCertificates = () => {
    const [allCC, setallCC] = useState(null);
    const fetchAllCC = () => {
        getAllCandidateCertificates().then((data) => {
            const allCCWithoutId = data.$values.candidatecertificates.$values.map(({ $id, candidate, ...rest }) => rest);      // Exclude $id, candidate from data
            setallCC(allCCWithoutId);
        });
    };

    useEffect(() => {
        fetchAllCC();
    }, []); // Empty dependency array to run only once

    return { allCC, fetchAllCC };
};
