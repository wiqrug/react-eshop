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
    <div style="background-color: ivory; border: 10px double darkslategray; padding: 50px; text-align: center; width: 100vw; height: 100vh; box-sizing: border-box; display: flex; flex-direction: column; justify-content: center; align-items: center; font-family: 'Times New Roman', serif;">
    <h1 style="font-size: 4vw; color: darkslategray; margin-bottom: 0.5em;">${title}</h1>
    <hr style="border: none; height: 4px; background-color: darkslategray; width: 50%; margin: 0 auto 20px;"/>
    <h2 style="font-size: 3vw; color: darkslategray; margin-top: 0; margin-bottom: 1em;">${description}</h2>
    <p style="font-size: 2vw; font-weight: bold; margin-top: 0;">Congratulations, you have successfully completed this course.</p>
</div>

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
        {obtainedCertificates?.map(({ title, description, imageSrc }) => (
          <article key={title}>
            <img
              src={
                imageSrc
                  ? imageSrc
                  : "https://thewisdomofwalt.com/wp-content/uploads/2019/10/Learn-something-new.jpg"
              }
              style={{ maxWidth: "100%", maxHeight: "50%", minHeight: "50%" }}
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
