import { instance as axios } from "../axios";

export const getCertificates = () =>
  axios("http://localhost:5021/api/Certificates")
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error fetching certificates:", error);
    });
