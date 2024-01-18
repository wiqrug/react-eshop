import { useCandidateCertificates } from "hooks";
import React from "react";
import { Link } from "react-router-dom";
const AvailableCertificates = () => {
  const availableCertificates = useCandidateCertificates("available");

  return (
    <section>
      {availableCertificates
        // @ts-ignore
        ?.map(({ title, description, price, imageSrc }) => (
          <article key={title}>
            <img
              src={
                imageSrc
                  ? imageSrc
                  : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNLVJaLYOkdIcEaY4pBVgjc5lmui9cfckSQg&usqp=CAU"
              }
              alt="img-logo"
              style={{ maxWidth: "100%", minHeight: "50%", maxHeight: "50%" }}
            />

            <h4>{title.substring(0, 30)}...</h4>
            <h4>{description.substring(0, 20)}...</h4>
            <h4>{price}€</h4>
            <Link to={`/Certificate/${title}`}>See Details</Link>
          </article>
          //</button>
        ))}
    </section>
  );
};

export default AvailableCertificates;
