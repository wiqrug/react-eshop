const { useState, useEffect } = require("react");

export const UseBuyCertificate = async (cookieValue, certificate) => {
    const [candNum, setCandNum] = useState(null);
    const [certTitle, setCertTitle] = useState(null);

    useEffect(() => {
        if(cookieValue){
            setCandNum(cookieValue.candidateNumber);
        }
    }, []);

    useEffect(() => {
        if(certificate){
            setCertTitle(certificate.title);
        }
    }, []);

    const jsonPayload = {
        candidateNumber: candNum,
        title: certTitle
    };

    const response = await fetch("http://localhost:5021/api/CandidateCertificates", {
        method: "POST",
        body: JSON.stringify(jsonPayload),
        headers: {
        "Content-Type": "application/json",
        },
    });
    return response;
}