import { useCandidateCertificates } from "hooks";
import React from "react";
import { useNavigate } from "react-router-dom";

const ObtainedCertificates = () => {
  const obtainedCertificates = useCandidateCertificates("obtained");
  const navigate = useNavigate();

  const handleClick = (title) => {
    navigate(`/Certificate/${title}`);
  }

  return (
    <section>
      {/* <div className="Certificate-Details-Title">Obtained Certificates</div> */}
      {obtainedCertificates?.map(({ title, description, imageSrc }) => (
          <button style={{ textDecoration: 'none', border: 'none', cursor: 'pointer'}} onClick={() => {handleClick(title)}}>
          <article key={title}>
            <img
              src={imageSrc? imageSrc : "https://thewisdomofwalt.com/wp-content/uploads/2019/10/Learn-something-new.jpg"}
              alt="img-logo"
              style={{ maxWidth: '100%', minHeight: '50%', maxHeight: '50%' }}
            />

            <h4>{title.substring(0, 30)}...</h4>
            <h4>{description.substring(0, 50)}...</h4>
            <h4>Successfully completed! :)</h4>
          </article>
        </button>
    ))}
    </section>
  );
};

export default ObtainedCertificates;
