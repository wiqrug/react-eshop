import { Button } from "@mui/material";
import { useCandidateCertificates } from "hooks";
import React from "react";
import { useNavigate } from "react-router-dom";

const UnobtainedCertificates = () => {
  const unobtainedCertificates = useCandidateCertificates("unobtained");
  const navigate = useNavigate();

  const handleTestClick = (title) => {
    navigate(`/Exam/${title}`);
  }

  const handleClick = (title) => {
    navigate(`/Certificate/${title}`);
  }


  return (
    <section>
      {/* <div className="Certificate-Details-Title">Unobtained Certificates</div> */}
      {unobtainedCertificates
        // @ts-ignore
        ?.map(({ title, description, imageSrc }) => (
          <article key={title}>
            <img
              src={imageSrc}
              alt="img-logo"
              style={{ maxWidth: '100%', minHeight: '50%', maxHeight: '50%', cursor: 'pointer' }}
              onClick={() => {handleClick(title)}}
            />
            <h4>{title.substring(0, 30)}...</h4>
            <h4>{description.substring(0, 50)}...</h4>
            <button className="exam-start-btn" onClick={() => {handleTestClick(title)}}>Ready to take the test? Click here!</button>
          </article>
          
        ))}
    </section>
  );
};

export default UnobtainedCertificates;
