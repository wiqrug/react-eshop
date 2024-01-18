import { instance as axios } from "api/axios";

export const deleteCandidateOfCertainCertificate = async (recordId) => {
  try {
    const url = `CandidateCertificates/Certificates/${recordId}`;
    const response = await axios.delete(url);

    if (response.status === 200) {
      console.log("Record deleted successfully");
    } else {
      console.error("Failed to delete Record with non-200 response");
    }
  } catch (error) {
    console.error("Error request:", error);
  }
};
