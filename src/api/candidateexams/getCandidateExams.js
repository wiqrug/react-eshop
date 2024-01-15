import { instance as axios } from "../axios";

export const getAllCandidateExams = () =>
    axios("CandidateExams")
        .then((response) => response.data)
        .catch((error) => {
            console.error("Error fetching CandidateExams:", error);
        });
