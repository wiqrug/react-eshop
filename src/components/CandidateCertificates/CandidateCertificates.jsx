import { useObtainedCertificates } from "hooks/useObtainedCertificates";
import React from "react";
import { useUnobtainedCertificates } from "hooks/useUnobtainedCertificates";
import "./candidate-certificate.css";
import { useAvailableCertificates } from "hooks/useAvailableCertificates";

// O 1003 exei to certificate obtained

//TODOS: find what you're gonna do with the image.
//
//      the image will be rendered by the app so maybe pass it as a prop

//TODOv2: Instead of successfully completed, have a button to export the certificate as PDF

//Maybe i should export all these components for cleaner code

//TODOv3: Instead of rendering all these componens, create a menu
//So user can choose if he wants to see the Obtained, Unobtained, Remaining certificates
//By default the Obtained should be loaded
//Need to fix css caps and lower cases

function ObtainedCertificates() {
  const obtainedCertificates = useObtainedCertificates();
  return (
    <div>
      <div className="Certificate-Details-Title">Obtained Certificates</div>
      {obtainedCertificates?.map(({ title, description }) => (
        <article key={title}>
          <img
            src="https://raw.githubusercontent.com/wiqrug/wiqrug.github.io/main/images/DALL%C2%B7E%202023-10-26%2018.43.43%20-%20Wide%20cartoon%20artwork%20with%20a%20gentle%20cream-colored%20backdrop.%20Playful%20anime%20clouds%20float%20around%2C%20some%20with%20cute%20expressions%2C%20ensuring%20the%20middle%20remains%20.png"
            alt="img-logo"
          />

          <h4>{title}</h4>
          <h4>{description}</h4>
          <p>Successfully Completed :)</p>
          {/* Render other details as needed */}
        </article>
      ))}
    </div>
  );
}

function UnobtainedCertificates() {
  const unobtainedCertificates = useUnobtainedCertificates();
  return (
    <div>
      <div className="Certificate-Details-Title">Unobtained Certificates</div>
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
    </div>
  );
}

function AvailableCertificates() {
  const availableCertificates = useAvailableCertificates();
  return (
    <div>
      <div className="Certificate-Details-Title">Available Certificates</div>
      {availableCertificates
        // @ts-ignore
        ?.map(({ title, description }) => (
          <article key={title}>
            <img
              src="https://raw.githubusercontent.com/wiqrug/wiqrug.github.io/main/images/DALL%C2%B7E%202023-10-26%2018.43.43%20-%20Wide%20cartoon%20artwork%20with%20a%20gentle%20cream-colored%20backdrop.%20Playful%20anime%20clouds%20float%20around%2C%20some%20with%20cute%20expressions%2C%20ensuring%20the%20middle%20remains%20.png"
              alt="img-logo"
            />

            <h4>{title}</h4>
            <h4>{description}</h4>
            <p>Buy this certificate</p>
          </article>
        ))}
    </div>
  );
}

const CandidateCertificates = () => {
  return (
    <>
      <ObtainedCertificates />
      <UnobtainedCertificates />
      <AvailableCertificates />
    </>
  );
};

export default CandidateCertificates;
