import { instance as axios } from "../axios";

export const buyCertificate = async (jsonPayload) => {
  await axios
    .post("CandidateCertificates", jsonPayload)
    .catch((error) => console.error("Certificate already bought", error));
};
