import React from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useCandidateCertificates } from "hooks";
import React from "react";
import { useNavigate } from "react-router-dom";

const ObtainedCertificates = () => {
  const obtainedCertificates = useCandidateCertificates("obtained");
  const navigate = useNavigate();

  const handleClick = (title) => {
    navigate(`/Certificate/${title}`);
  }

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
