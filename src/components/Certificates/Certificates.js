// src/components/Certificates/Certificates.js
import React from "react";
import "./Certificates.css";
import { Link } from "react-router-dom";

//TODOS IN THIS COMPONENT
/* 
    1)Fetch to get the certificates
    2)Each certificate should have an id starting from 1
      increasing +1 each time a certificate gets fetched
      (This also means that we should remove index, im keeping it atm)
    3)Add image through link (upload somwhere in the internet)
    4)Maybe adjust box sizes in order to be fixed and images to be fixed
    5)Another problem is that if i only have 1 certificate, its very very fkin large
    
*/

//Code id for each certificate here in the frontend


//Hard coding some certificates

//get certificates


const certificates = [
  {
    src: "https://lh3.googleusercontent.com/pw/ABLVV87UCWlMU4AGVBH90RRyu8vMqUSvN-yGQBbExUkZ9mxY6yR32XKUapy3LAqhAUNQ-TNizEzpkLpNx4vBelcCoHKK-2bbTwwXRhkqYprRYmkc7ppP-fZHSUIMJOL_GUnopJHbKPB-Ca9kID5i6eXX6YrjssywCU5vs7C7Yg2IN5ZC6VXEdL_wb98HOqwFaD6N201mF_SzoJW2-omeERE0-g75cZI_hfThqjMbb-NakrsU20GebBPLaBCVNtOnKbVQVXUbaF4lrAeWDNF9JtwCDXtDCtQKqptnqq7b7hJj_vu_qMsBZNew5R7oGx9kI9k9d9ZBj5OPwE5_ZNNhAUo5MWrtiyBbFrzCDz-DU349kDXZHNr01hElGiineYBsT_fvu4xiqGobDkmFcC_vaD5I5zpv8g74n-UqsiHy4x1O7WWg8WCtTEC2ypYlJw-0aCqvuKCtBMjrvcLlZcfySimOWKArkUmfJlUvEOpWqD7DVw4o-Sb5kFrW-feKC7KpmqTqSENN2_IYnyNRxW510v6G50f7YG2PI603O9rZRms_v1dyfB3wIaBvdlSg5gNSm9fUzJXFGQDFNQk-QawtdHlUr1ju5m6qmlqbMQTOCz8KYqb6oQ2YwIr6vSjkWquBwHt9tt3HmxYjN3q58UWKzeBFZVjupIpl2VFJDqf-nC2yXksD-McpO9rNXMabFinPGI93Y2ZdoLS-W_PSEyGzU3EglSIy03jqHzIwMqT6jHSWEgjQDDBI2UUwRXXy4RSvhwdJAN3x57-KJgvru8u_HnNZ8dfHZEaB_-sFz44LqQ5XngApesRqAl_HLFIUs5igUqB98-sDT4idYncK5B9ZHdCuwGZqjah5aO570mRunK4EWTwDGoeNy4Amz_i0KNL5OcRP1SWtujzNaP-GSTt3blWCJr-AT3rY50r5Uoc1fo4-7agnti3OsbvZ-1WJzKxgd0N2POfp695Q=w939-h939-s-no-gm?authuser=0",
    title: "Learn React",
    price: 50,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/ABLVV87UCWlMU4AGVBH90RRyu8vMqUSvN-yGQBbExUkZ9mxY6yR32XKUapy3LAqhAUNQ-TNizEzpkLpNx4vBelcCoHKK-2bbTwwXRhkqYprRYmkc7ppP-fZHSUIMJOL_GUnopJHbKPB-Ca9kID5i6eXX6YrjssywCU5vs7C7Yg2IN5ZC6VXEdL_wb98HOqwFaD6N201mF_SzoJW2-omeERE0-g75cZI_hfThqjMbb-NakrsU20GebBPLaBCVNtOnKbVQVXUbaF4lrAeWDNF9JtwCDXtDCtQKqptnqq7b7hJj_vu_qMsBZNew5R7oGx9kI9k9d9ZBj5OPwE5_ZNNhAUo5MWrtiyBbFrzCDz-DU349kDXZHNr01hElGiineYBsT_fvu4xiqGobDkmFcC_vaD5I5zpv8g74n-UqsiHy4x1O7WWg8WCtTEC2ypYlJw-0aCqvuKCtBMjrvcLlZcfySimOWKArkUmfJlUvEOpWqD7DVw4o-Sb5kFrW-feKC7KpmqTqSENN2_IYnyNRxW510v6G50f7YG2PI603O9rZRms_v1dyfB3wIaBvdlSg5gNSm9fUzJXFGQDFNQk-QawtdHlUr1ju5m6qmlqbMQTOCz8KYqb6oQ2YwIr6vSjkWquBwHt9tt3HmxYjN3q58UWKzeBFZVjupIpl2VFJDqf-nC2yXksD-McpO9rNXMabFinPGI93Y2ZdoLS-W_PSEyGzU3EglSIy03jqHzIwMqT6jHSWEgjQDDBI2UUwRXXy4RSvhwdJAN3x57-KJgvru8u_HnNZ8dfHZEaB_-sFz44LqQ5XngApesRqAl_HLFIUs5igUqB98-sDT4idYncK5B9ZHdCuwGZqjah5aO570mRunK4EWTwDGoeNy4Amz_i0KNL5OcRP1SWtujzNaP-GSTt3blWCJr-AT3rY50r5Uoc1fo4-7agnti3OsbvZ-1WJzKxgd0N2POfp695Q=w939-h939-s-no-gm?authuser=0",

    title: "Do Not Learn Angular",
    price: 50,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/ABLVV87UCWlMU4AGVBH90RRyu8vMqUSvN-yGQBbExUkZ9mxY6yR32XKUapy3LAqhAUNQ-TNizEzpkLpNx4vBelcCoHKK-2bbTwwXRhkqYprRYmkc7ppP-fZHSUIMJOL_GUnopJHbKPB-Ca9kID5i6eXX6YrjssywCU5vs7C7Yg2IN5ZC6VXEdL_wb98HOqwFaD6N201mF_SzoJW2-omeERE0-g75cZI_hfThqjMbb-NakrsU20GebBPLaBCVNtOnKbVQVXUbaF4lrAeWDNF9JtwCDXtDCtQKqptnqq7b7hJj_vu_qMsBZNew5R7oGx9kI9k9d9ZBj5OPwE5_ZNNhAUo5MWrtiyBbFrzCDz-DU349kDXZHNr01hElGiineYBsT_fvu4xiqGobDkmFcC_vaD5I5zpv8g74n-UqsiHy4x1O7WWg8WCtTEC2ypYlJw-0aCqvuKCtBMjrvcLlZcfySimOWKArkUmfJlUvEOpWqD7DVw4o-Sb5kFrW-feKC7KpmqTqSENN2_IYnyNRxW510v6G50f7YG2PI603O9rZRms_v1dyfB3wIaBvdlSg5gNSm9fUzJXFGQDFNQk-QawtdHlUr1ju5m6qmlqbMQTOCz8KYqb6oQ2YwIr6vSjkWquBwHt9tt3HmxYjN3q58UWKzeBFZVjupIpl2VFJDqf-nC2yXksD-McpO9rNXMabFinPGI93Y2ZdoLS-W_PSEyGzU3EglSIy03jqHzIwMqT6jHSWEgjQDDBI2UUwRXXy4RSvhwdJAN3x57-KJgvru8u_HnNZ8dfHZEaB_-sFz44LqQ5XngApesRqAl_HLFIUs5igUqB98-sDT4idYncK5B9ZHdCuwGZqjah5aO570mRunK4EWTwDGoeNy4Amz_i0KNL5OcRP1SWtujzNaP-GSTt3blWCJr-AT3rY50r5Uoc1fo4-7agnti3OsbvZ-1WJzKxgd0N2POfp695Q=w939-h939-s-no-gm?authuser=0",

    title: "Learn Bootstrap haha",
    price: 50,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/ABLVV87UCWlMU4AGVBH90RRyu8vMqUSvN-yGQBbExUkZ9mxY6yR32XKUapy3LAqhAUNQ-TNizEzpkLpNx4vBelcCoHKK-2bbTwwXRhkqYprRYmkc7ppP-fZHSUIMJOL_GUnopJHbKPB-Ca9kID5i6eXX6YrjssywCU5vs7C7Yg2IN5ZC6VXEdL_wb98HOqwFaD6N201mF_SzoJW2-omeERE0-g75cZI_hfThqjMbb-NakrsU20GebBPLaBCVNtOnKbVQVXUbaF4lrAeWDNF9JtwCDXtDCtQKqptnqq7b7hJj_vu_qMsBZNew5R7oGx9kI9k9d9ZBj5OPwE5_ZNNhAUo5MWrtiyBbFrzCDz-DU349kDXZHNr01hElGiineYBsT_fvu4xiqGobDkmFcC_vaD5I5zpv8g74n-UqsiHy4x1O7WWg8WCtTEC2ypYlJw-0aCqvuKCtBMjrvcLlZcfySimOWKArkUmfJlUvEOpWqD7DVw4o-Sb5kFrW-feKC7KpmqTqSENN2_IYnyNRxW510v6G50f7YG2PI603O9rZRms_v1dyfB3wIaBvdlSg5gNSm9fUzJXFGQDFNQk-QawtdHlUr1ju5m6qmlqbMQTOCz8KYqb6oQ2YwIr6vSjkWquBwHt9tt3HmxYjN3q58UWKzeBFZVjupIpl2VFJDqf-nC2yXksD-McpO9rNXMabFinPGI93Y2ZdoLS-W_PSEyGzU3EglSIy03jqHzIwMqT6jHSWEgjQDDBI2UUwRXXy4RSvhwdJAN3x57-KJgvru8u_HnNZ8dfHZEaB_-sFz44LqQ5XngApesRqAl_HLFIUs5igUqB98-sDT4idYncK5B9ZHdCuwGZqjah5aO570mRunK4EWTwDGoeNy4Amz_i0KNL5OcRP1SWtujzNaP-GSTt3blWCJr-AT3rY50r5Uoc1fo4-7agnti3OsbvZ-1WJzKxgd0N2POfp695Q=w939-h939-s-no-gm?authuser=0",

    title: "Learn MIPS",
    price: 50,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/ABLVV87UCWlMU4AGVBH90RRyu8vMqUSvN-yGQBbExUkZ9mxY6yR32XKUapy3LAqhAUNQ-TNizEzpkLpNx4vBelcCoHKK-2bbTwwXRhkqYprRYmkc7ppP-fZHSUIMJOL_GUnopJHbKPB-Ca9kID5i6eXX6YrjssywCU5vs7C7Yg2IN5ZC6VXEdL_wb98HOqwFaD6N201mF_SzoJW2-omeERE0-g75cZI_hfThqjMbb-NakrsU20GebBPLaBCVNtOnKbVQVXUbaF4lrAeWDNF9JtwCDXtDCtQKqptnqq7b7hJj_vu_qMsBZNew5R7oGx9kI9k9d9ZBj5OPwE5_ZNNhAUo5MWrtiyBbFrzCDz-DU349kDXZHNr01hElGiineYBsT_fvu4xiqGobDkmFcC_vaD5I5zpv8g74n-UqsiHy4x1O7WWg8WCtTEC2ypYlJw-0aCqvuKCtBMjrvcLlZcfySimOWKArkUmfJlUvEOpWqD7DVw4o-Sb5kFrW-feKC7KpmqTqSENN2_IYnyNRxW510v6G50f7YG2PI603O9rZRms_v1dyfB3wIaBvdlSg5gNSm9fUzJXFGQDFNQk-QawtdHlUr1ju5m6qmlqbMQTOCz8KYqb6oQ2YwIr6vSjkWquBwHt9tt3HmxYjN3q58UWKzeBFZVjupIpl2VFJDqf-nC2yXksD-McpO9rNXMabFinPGI93Y2ZdoLS-W_PSEyGzU3EglSIy03jqHzIwMqT6jHSWEgjQDDBI2UUwRXXy4RSvhwdJAN3x57-KJgvru8u_HnNZ8dfHZEaB_-sFz44LqQ5XngApesRqAl_HLFIUs5igUqB98-sDT4idYncK5B9ZHdCuwGZqjah5aO570mRunK4EWTwDGoeNy4Amz_i0KNL5OcRP1SWtujzNaP-GSTt3blWCJr-AT3rY50r5Uoc1fo4-7agnti3OsbvZ-1WJzKxgd0N2POfp695Q=w939-h939-s-no-gm?authuser=0",

    title: "Learn MATLAB",
    price: 50,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/ABLVV87UCWlMU4AGVBH90RRyu8vMqUSvN-yGQBbExUkZ9mxY6yR32XKUapy3LAqhAUNQ-TNizEzpkLpNx4vBelcCoHKK-2bbTwwXRhkqYprRYmkc7ppP-fZHSUIMJOL_GUnopJHbKPB-Ca9kID5i6eXX6YrjssywCU5vs7C7Yg2IN5ZC6VXEdL_wb98HOqwFaD6N201mF_SzoJW2-omeERE0-g75cZI_hfThqjMbb-NakrsU20GebBPLaBCVNtOnKbVQVXUbaF4lrAeWDNF9JtwCDXtDCtQKqptnqq7b7hJj_vu_qMsBZNew5R7oGx9kI9k9d9ZBj5OPwE5_ZNNhAUo5MWrtiyBbFrzCDz-DU349kDXZHNr01hElGiineYBsT_fvu4xiqGobDkmFcC_vaD5I5zpv8g74n-UqsiHy4x1O7WWg8WCtTEC2ypYlJw-0aCqvuKCtBMjrvcLlZcfySimOWKArkUmfJlUvEOpWqD7DVw4o-Sb5kFrW-feKC7KpmqTqSENN2_IYnyNRxW510v6G50f7YG2PI603O9rZRms_v1dyfB3wIaBvdlSg5gNSm9fUzJXFGQDFNQk-QawtdHlUr1ju5m6qmlqbMQTOCz8KYqb6oQ2YwIr6vSjkWquBwHt9tt3HmxYjN3q58UWKzeBFZVjupIpl2VFJDqf-nC2yXksD-McpO9rNXMabFinPGI93Y2ZdoLS-W_PSEyGzU3EglSIy03jqHzIwMqT6jHSWEgjQDDBI2UUwRXXy4RSvhwdJAN3x57-KJgvru8u_HnNZ8dfHZEaB_-sFz44LqQ5XngApesRqAl_HLFIUs5igUqB98-sDT4idYncK5B9ZHdCuwGZqjah5aO570mRunK4EWTwDGoeNy4Amz_i0KNL5OcRP1SWtujzNaP-GSTt3blWCJr-AT3rY50r5Uoc1fo4-7agnti3OsbvZ-1WJzKxgd0N2POfp695Q=w939-h939-s-no-gm?authuser=0",

    title: "Learn Ancient Greek",
    price: 50,
  },
];

//When destructuring an array we use [], when destructuring an object we use {}

//PAIDIA DEITE AUTO
//<Menu>
/* <MenuItem component={Link} to={'/first'}>Team 1</MenuItem>
<MenuItem component={Link} to={'/second'}>Team 2</MenuItem>
</Menu> */

const Certificate = ({ src, title, price, id }) => {
  return (
    <Link
      to={`/Certificate/${id}`}
      style={{ textDecoration: "none" }}
      className="certificate-link"
    >
      <article>
        <img src={src} alt="Certificate" />
        <h4 className="certificate-title">{title}</h4>
        <h4>{price}</h4>
      </article>
    </Link>
  );
};
const CertificatesList = () => {
  return (
    <section>
      {certificates.map((certificate, index) => (
        <Certificate
          key={index}
          id={index + 1} // Assuming index+1 as the unique ID for each certificate
          src={certificate.src}
          title={certificate.title}
          price={certificate.price}
        />
      ))}
    </section>
  );
};

export default CertificatesList;
