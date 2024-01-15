import { instance as axios } from "api/axios";

export const getCandidates = () => {
  const url = "Admins/admin/get-candidates";
  axios(url)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error fetching certificates:", error);
    });
};
