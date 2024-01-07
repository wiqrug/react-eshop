import { getObtainedCertificates } from "api/certificates/getObtainedCertificates";
import React, { useEffect } from "react";

//Too see the obtaned and unobtained certificates is pretty simple
//For now i just fetch obtained and unobtained certificates
//I dont care about user, if he is the current
//This will be handled by the token

//Step 1. Fetch the Obtained Certificates
//Step 2. Display the Obtained Certificates of that candidate
//Obtained certificates are being get by candidate number, so i will suppose that i ahve a candidate

// O 1003 exei to certificate obtained

//TODOS: Create custom hook for this
//      find what you're gonna do with the image.
//      the image will be rendered by the app so maybe pass it as a prop

//
import { useState } from "react";

function CandidateCertificates() {
    const [obtainedCertificates,setObtainedCertificates] = useState(null);

    useEffect(()=>{
       
        getObtainedCertificates().then((data)=>{
            // @ts-ignore
            setObtainedCertificates(data.$values);
        });
    },[] )
    return (
        <div>
            {obtainedCertificates && obtainedCertificates.map(({title,description}) => (
                <article key={title}>
                    <img src="https://raw.githubusercontent.com/wiqrug/wiqrug.github.io/main/images/DALL%C2%B7E%202023-10-26%2018.43.43%20-%20Wide%20cartoon%20artwork%20with%20a%20gentle%20cream-colored%20backdrop.%20Playful%20anime%20clouds%20float%20around%2C%20some%20with%20cute%20expressions%2C%20ensuring%20the%20middle%20remains%20.png" alt="img-logo"/>

                    <h4>{title}</h4>
                    <h4>{description}</h4>
                    <p>Successfully Completed :)</p>
                    {/* Render other details as needed */}
                </article>
            ))}
        </div>
    );
}

export default CandidateCertificates;