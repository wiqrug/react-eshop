export const getObtainedCertificates = () =>
  fetch("http://localhost:5021/api/CandidateCertificates/obtained/1003")
    .then((response) => response.json())
    .catch((error) =>
      console.error("Error fetching candidates obtained certificates", error)
    );

// export const getCertificates = () => {

//   const url = "http://localhost:5021/api/Certificates" + Cookies.get("currentUser").candidateNumber;
//   fetch(url)
//     .then((response) => response.json())
//     .catch((error) => {
//       console.error("Error fetching certificates:", error);
//     });
//   }      paradeigma gia dinamiki allagi candidate meso cookie

//Try this, maybe its better

// const url = http://localhost:5021/api/Certificates${candidateNumber};

// return fetch(url)
//   .then((response) => {
//     if (!response.ok) {
//       // Handle non-200 responses
//       throw new Error(HTTP error! status: ${response.status});
//     }
//     return response.json();
//   })
//   .catch((error) => {
//     console.error("Error fetching certificates:", error);
//     // Optionally, re-throw the error or handle it as needed
//     throw error;
//   });
// };
