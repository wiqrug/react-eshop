import { instance as axios } from "api/axios";
import { getCertificates } from "./getCertificates";

export const createCertificate = async (certificateData) => {
  console.log("Received data for saving:", certificateData); // Log to verify data structure
  try {
    const response = await axios.post("Certificates", certificateData);
    if (response.status === 200) {
      console.log("Certificate added successfully");
      getCertificates(); // Fetch the updated list of certificates
    }
  } catch (error) {
    console.error("Error adding certificate:", error);
  }
};
