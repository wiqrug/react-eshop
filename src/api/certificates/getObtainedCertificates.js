import Cookies from "js-cookie";

const currentUser = JSON.parse(Cookies.get("currentUser"));

const url =
  "http://localhost:5021/api/CandidateCertificates/obtained/" +
  currentUser.candidateNumber;

export const getObtainedCertificates = () =>
  fetch(url)
    .then((response) => response.json())
    .catch((error) =>
      console.error("Error fetching candidates obtained certificates", error)
    );
