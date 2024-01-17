import { instance as axios } from "api/axios";

export const getCandidatesOfCertainCertificate = async (certificateTitle) => {
  const url = `CandidateCertificates/Certificates/${certificateTitle}`;
  try {
    const response = await axios.get(url);
    const candidatesWithMarks = response.data.$values.map((item) => {
      const {
        $id,
        middleName,
        gender,
        nativeLanguage,
        birthDate,
        photoIDType,
        photoIDIssueDate,
        address,
        addressLine2,
        countryOfResidence,
        stateOrTerritoryOrProvince,
        townOrCity,
        postalCode,
        landlineNumber,
        createdAt,
        userId,
        role,
        photoIDNumber,
        mobileNumber,
        ...candidateDetails
      } = item.candidate;
      return {
        ...candidateDetails,
        mark: item.mark,
        recordId: item.recordId,
      };
    });
    return candidatesWithMarks;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
