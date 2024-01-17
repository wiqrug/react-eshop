import { Button } from "@mui/material";
import { useCandidateCertificates } from "hooks";
import React from "react";
import { useNavigate } from "react-router-dom";

const UnobtainedCertificates = () => {
  const unobtainedCertificates = useCandidateCertificates("unobtained");
  }

  return (
    <section>
      {/* <div className="Certificate-Details-Title">Unobtained Certificates</div> */}
      {unobtainedCertificates
        // @ts-ignore
        ?.map(({ title, description, imageSrc }) => (
          <article key={title}>
            <img
              src={imageSrc? imageSrc : "https://thewisdomofwalt.com/wp-content/uploads/2019/10/Learn-something-new.jpg"}
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
    <>
      <section>
        {unobtainedCertificates
          // @ts-ignore
          ?.map(({ title, description }) => (
            <article key={title}>
              <img
                src="https://raw.githubusercontent.com/wiqrug/wiqrug.github.io/main/images/DALL%C2%B7E%202023-10-26%2018.43.43%20-%20Wide%20cartoon%20artwork%20with%20a%20gentle%20cream-colored%20backdrop.%20Playful%20anime%20clouds%20float%20around%2C%20some%20with%20cute%20expressions%2C%20ensuring%20the%20middle%20remains%20.png"
                alt="img-logo"
              />

              <h4>{title}</h4>
              <h4>{description}</h4>
              <p>Click here to take the exam test</p>
            </article>
          ))}
      </section>
    </>
  );
};

export default UnobtainedCertificates;
