import { instance as axios } from "api/axios";

export const deleteExam = async (title) => {
  //   const titleForUrl = encodeURIComponent(certificate.title);

  try {
    const url = `Exams/${title}`;
    const response = await axios.delete(url);

    if (response.status === 200) {
      console.log("Certificate deleted successfully");
    } else {
      console.error("Failed to delete certificate with non-200 response");
    }
  } catch (error) {
    console.error("Error in DELETE request:", error);
  }
};
