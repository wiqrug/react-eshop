import React from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useCandidateCertificates } from "hooks";

const ObtainedCertificates = () => {
  const obtainedCertificates = useCandidateCertificates("obtained");

  const downloadPDF = (title, description) => {
    const tempDiv = document.createElement("div");
    tempDiv.className = "receipt";
    tempDiv.innerHTML = `
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <h1 style="font-size: 20vh;">${title}</h1>
    <h2 style="font-size: 20vh;">${description}</h2>
    <p style="font-size: 20vh;">Congratulations, you just completed this course.</p>
  `;
    document.body.appendChild(tempDiv);

    html2canvas(tempDiv, {
      scale: 1,
      useCORS: true,
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const doc = new jsPDF("p", "mm", "a4");
      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();
      const canvasRatio = canvas.width / canvas.height;

      let finalWidth = pageWidth;
      let finalHeight = finalWidth / canvasRatio;

      if (finalHeight > pageHeight) {
        finalHeight = pageHeight;
        finalWidth = finalHeight * canvasRatio;
      }

      const xOffset = (pageWidth - finalWidth) / 2;
      const yOffset = 10; // Adjusted to position image at the top

      doc.addImage(imgData, "PNG", xOffset, yOffset, finalWidth, finalHeight);
      doc.save(`${title}-certificate.pdf`);
      document.body.removeChild(tempDiv); // Clean up
    });
  };

  const handleShowPDF = (certificate) => {
    downloadPDF(certificate.title, certificate.description);
  };
  //merge this
  return (
    <>
      <section>
        {obtainedCertificates?.map(({ title, description }) => (
          <article key={title}>
            <img
              src="https://raw.githubusercontent.com/wiqrug/wiqrug.github.io/main/images/DALL%C2%B7E%202023-10-26%2018.43.43%20-%20Wide%20cartoon%20artwork%20with%20a%20gentle%20cream-colored%20backdrop.%20Playful%20anime%20clouds%20float%20around%2C%20some%20with%20cute%20expressions%2C%20ensuring%20the%20middle%20remains%20.png"
              alt="img-logo"
            />
            <h4>{title}</h4>
            <h4>{description}</h4>
            <button onClick={() => handleShowPDF({ title, description })}>
              Download PDF
            </button>
          </article>
        ))}
      </section>
    </>
  );
};

export default ObtainedCertificates;
