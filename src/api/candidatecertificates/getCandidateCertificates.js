import { instance as axios } from "../axios";

export const getAllCandidateCertificates = () =>
    axios("CandidateCertificates")
        .then((response) => response.data)
        .catch((error) => {
            console.error("Error fetching CandidateCertificates:", error);
        });
