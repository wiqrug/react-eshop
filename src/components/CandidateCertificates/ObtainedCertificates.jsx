import React from "react";
import { useObtainedCertificates } from "hooks/useObtainedCertificates";

const ObtainedCertificates = () => {
  const obtainedCertificates = useObtainedCertificates();
  return (
    <section>
      {/* <div className="Certificate-Details-Title">Obtained Certificates</div> */}
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
    </section>
  );
};

export default ObtainedCertificates;