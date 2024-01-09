export const buyCertificate = async (jsonPayload) => {

    await fetch("http://localhost:5021/api/CandidateCertificates", {
        method: "POST",
        body: JSON.stringify(jsonPayload),
        headers: {
        "Content-Type": "application/json",
        },
    })
    .then((response) => response.json())
    .catch((error) =>
     console.error("Certificate already bought", error));
}