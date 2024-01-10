export const deleteCertificate = (certificates, id, fetchCertificates) => {
  const certificate = certificates.find((c) => c.$id === id);
  if (!certificate) {
    console.error("Certificate not found");
    return;
  }
  //%20 = " "

  // const titleForUrl = encodeURIComponent(certificate.title);
  const titleForUrl = certificate.title;
  const url = `http://localhost:5021/api/Certificates/${titleForUrl}`;

  fetch(url, {
    method: "DELETE",
  })
    .then((res) => {
      if (res.ok) {
        fetchCertificates();
      } else {
        // Handle error response
        console.error("Failed to delete certificate");
      }
    })
    .catch((error) => console.error(error));
};
