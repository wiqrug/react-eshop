/*
    This fetch returns JSON which includes 2 properties
    one property is $id and one property is $values
    ~ Values property contains an array of JSON which is the List of certificates i wanna catch

    {
  "$id": "1",
  "$values": [
    {
      "$id": "2",
      "certificateID": "d6d4e565-2249-4037-8e38-1d28fa9a64a3",
      "titleOfCertificate": "Learn React",
      "examinationDate": "2024-01-04T10:31:13.582",
      "scoreReportDate": "2024-01-04T10:31:13.582",
      "maximumScore": 0,
      "description": "If you really wanna use arrow functions, then learn react",
      "price": 0,
      "createdAt": "2024-01-04T12:32:05.5740567",
      "exams": null
    },
  ]
}
*/

//NOTE: This fetch doesnt need any interaction with token because its in the default UI
// let certificatet;
//     fetch("http://localhost:5021/api/Certificates")
//         .then(response => response.json())
//         .then(data => {
//             certificates = data.$values;
//            console.log(certificatet);
//         })
//         .catch(error => {
//             console.error('Error fetching certificates:', error);
//         });

// function getCertificateByTitle(title) {
//     fetch("http://localhost:5021/api/Certificates")
//         .then(response => response.json())
//         .then(data => {
//             const certificates = data.$values;
//             const certificate = certificates.find(certificate => certificate.titleOfCertificate === title);
//             console.log(certificate);
//         })
//         .catch(error => console.error('Error:', error));
// }

// getCertificateByTitle("Learn React");


//this function gets certificate by titleOfCertificate.

//What i need to do, is:
// When clicked on the certificate, take the certificate title and adjust to the find method 
// in order to print the details of that certain certificate
// to implement this, maybe we need to use Link! 
// console.log("hello");

//         fetch("http://localhost:5021/api/Certificates")
//             .then(response => response.json())
//             .then(data => {
//                 const certificates = data.$values;
//                 const certificate = certificates.find(certificate => certificate.titleOfCertificate === "Learn React");
//                 console.log("psoli");
//                 console.log(certificate);
//             })
//             .catch(error => console.error('Error:', error));



