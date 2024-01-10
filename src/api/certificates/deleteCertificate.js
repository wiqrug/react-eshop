export const deleteCertificate = (certificate) => {
  // const titleForUrl = encodeURIComponent(certificate.title);
  const titleForUrl = certificate.title;
  const url = `http://localhost:5021/api/Certificates/${titleForUrl}`;

  return fetch(url, {
    method: "DELETE",
  })
    .then((res) => {
      if (res.ok) {
        console.log("deleted");
      } else {
        // Handle error response
        console.error("Failed to delete certificate");
      }
    })
    .catch((error) => console.error(error));
};
