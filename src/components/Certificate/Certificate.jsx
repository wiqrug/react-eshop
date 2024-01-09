import React, { useState } from "react";
import "./Certificate.css";
import { useCertificate } from "../../hooks";
import { useCandidateInfo } from "hooks/useCandidateInfo";
import { useCertificateInfo } from "hooks/useCertificateInfo";
import { buyCertificate } from "api/certificates/buyCertificate";

const CertificateDetails = ({ certificates, cookieValue }) => {
  const certificate = useCertificate(certificates);
  const candNum = useCandidateInfo(cookieValue);
  const certTitle = useCertificateInfo(certificate);
  const [isBought, setIsBought] = useState(false);

  //make a function that gets available certificates, if this.certificate.!isInAvailableCerts()
  //Change the isBoughtState
  const checkBought = () => {};

  const jsonPayload = {
    candidateNumber: candNum,
    title: certTitle,
  };

  const handleBuy = async () => {
    //PROBLIEMA to trexei pano apo mia fora logo rerendering kai parolo p leitourgei
    await buyCertificate(jsonPayload); //sosta stin consola petaei error. ALEXI KANE TA MAGIKA SOU KAI FTIAKSE CAPTAIN HOOK!!!

    setIsBought(true);
  };

  return (
    certificate && (
      <div className="Certificate-Details-Container">
        <div className="Certificate-Details-Title">
          <h1>{certificate.title}</h1>
        </div>
        <img
          className="Certificate-Logo"
          src="https://raw.githubusercontent.com/wiqrug/wiqrug.github.io/main/images/DALL%C2%B7E%202023-10-26%2018.43.43%20-%20Wide%20cartoon%20artwork%20with%20a%20gentle%20cream-colored%20backdrop.%20Playful%20anime%20clouds%20float%20around%2C%20some%20with%20cute%20expressions%2C%20ensuring%20the%20middle%20remains%20.png"
          alt="Certificate"
        />
        <div className="Certificate-Details-Description">
          <h1>{certificate.description}</h1>
        </div>

        {!isBought && (
          <button className="Purchase-Certificate" onClick={handleBuy}>
            Buy now
          </button>
        )}
        {isBought && <button className="Purchased-Certificate">Bought</button>}
      </div>
    )
  );
};

export default CertificateDetails;
