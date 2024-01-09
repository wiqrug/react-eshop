
export const UseBuyCertificate = async (jsonPayload) => {

    const response = await fetch("http://localhost:5021/api/CandidateCertificates", {
        method: "POST",
        body: JSON.stringify(jsonPayload),
        headers: {
        "Content-Type": "application/json",
        },
    });
    return response;
}