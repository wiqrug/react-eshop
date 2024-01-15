import { useCandidateCertificates } from "hooks";
import React from "react";
import { useNavigate } from "react-router-dom";
const AvailableCertificates = () => {
  const availableCertificates = useCandidateCertificates("available");
  const navigate = useNavigate();

  const handleClick = (title) => {
    navigate(`/Certificate/${title}`);
  }

  return (
    <section>
      {/* <div className="Certificate-Details-Title">Available Certificates</div> */}
      {availableCertificates
        // @ts-ignore
        ?.map(({ title, description, price, imageSrc }) => (
          <button style={{ textDecoration: 'none', border: 'none', cursor: 'pointer'}} onClick={() => {handleClick(title)}}>
            <article key={title}>
              <img
                src={imageSrc}
                alt="img-logo"
                style={{ maxWidth: '100%', minHeight: '50%', maxHeight: '50%' }}
              />

              <h4>{title.substring(0, 30)}...</h4>
              <h4>{description.substring(0, 50)}...</h4>
              <h4>{price}€</h4>
            </article>
          </button>
        ))}
    </section>
  );
};
export default AvailableCertificates;
