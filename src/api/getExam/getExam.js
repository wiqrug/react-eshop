export const getExam = (examTitle) =>
  fetch(`http://localhost:5021/api/Exam/${examTitle}`)
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error fetching exam:", error);
    });
