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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNLVJaLYOkdIcEaY4pBVgjc5lmui9cfckSQg&usqp=CAU"
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
