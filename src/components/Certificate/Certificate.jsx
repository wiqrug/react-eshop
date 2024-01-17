import React, { useState, useEffect } from "react";
import "./Certificate.css";
import {
  useCandidateCertificates,
  useCertificate,
  useUserCookie,
} from "../../hooks";
import { useCandidateInfo } from "hooks/useCandidateInfo";
import { useCertificateInfo } from "hooks/useCertificateInfo";
import { buyCertificate } from "api/certificates/buyCertificate";
import { Link, useNavigate } from "react-router-dom";

const CertificateDetails = ({ certificates, cookieValue }) => {
  const certificate = useCertificate(certificates);
  const candNum = useCandidateInfo(cookieValue);
  const certTitle = useCertificateInfo(certificate);
  const navigate = useNavigate();
  // @ts-ignore

  // This is a hard one to make custom hook

  const [isBought, setIsBought] = useState(false);
  const availableCertificates = useCandidateCertificates("available");

  useEffect(() => {
    if (
      availableCertificates &&
      Array.isArray(availableCertificates) &&
      certificate
    ) {
      const isCertificateAvailable = availableCertificates.some(
        (cert) => cert.title === certificate.title
      );
      setIsBought(!isCertificateAvailable);
    }
  }, [availableCertificates, certificate]);

  const handleBuy = async () => {
    await buyCertificate({
      candidateNumber: candNum,
      title: certTitle,
    });
    setIsBought(true);
  };

  const handleClick = (title) => {
    navigate(`/Exam/${title}`);
  }

  const { cookie } = useUserCookie();
  //Custom hook should return cookie, isBought, handleBuy
  //Should have as arguments cookieValue

  return (
    certificate && (
      <div className="Certificate-Details-Container">
        <div className="Certificate-Details-Title">
          <h1>{certificate.title}</h1>
        </div>
        <img
          className="Certificate-Logo"
          src={certificate.imageSrc ? certificate.imageSrc : "https://thewisdomofwalt.com/wp-content/uploads/2019/10/Learn-something-new.jpg"}
          alt="Certificate"
        />
        <div className="Certificate-Details-Description">
          <h1>{certificate.description}</h1>
        </div>

        {cookie == null && !isBought && (
          <Link to="/Login">
            <button className="Purchase-Certificate">Buy now</button>
          </Link>
        )}

        {cookie && !isBought && (
          <button className="Purchase-Certificate" onClick={handleBuy}>
            Buy Now
          </button>
        )}

        {cookie && isBought && (
          <>
          <button className="Purchased-Certificate">Bought</button>
          <button className="Purchased-Certificate" onClick={() => {handleClick(certificate.title)}}>Ready to take the test? Click here!</button>
          </>
        )}
      </div>
    )
  );
};

export default CertificateDetails;
