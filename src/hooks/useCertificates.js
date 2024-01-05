import { useState, useEffect } from "react";

export const useCertificates = () => {
  const [certificates, setCertificates] = useState(null);

  const fetchMyData = () =>
    fetch("http://localhost:5021/api/Certificates")
      .then((response) => response.json())
      .catch((error) => {
        console.error("Error fetching certificates:", error);
      });

  useEffect(() => {
    fetchMyData().then((data) => setCertificates(data.$values));
  }, []); // Empty dependency array to run only once

  return certificates;
};
