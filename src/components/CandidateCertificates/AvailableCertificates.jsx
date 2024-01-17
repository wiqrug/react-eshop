import { useCandidateCertificates } from "hooks";
import React from "react";
import { Link } from "react-router-dom";
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
                src={imageSrc? imageSrc : "https://thewisdomofwalt.com/wp-content/uploads/2019/10/Learn-something-new.jpg"}
                alt="img-logo"
                style={{ maxWidth: '100%', minHeight: '50%', maxHeight: '50%' }}
              />

            <h4>{title}</h4>
            <h4>{description}</h4>
            <h4>{price}€</h4>
            <Link to={`/Certificate/${title}`}>See Details</Link>
          </article>
        ))}
    </section>
  );
};
export default AvailableCertificates;
