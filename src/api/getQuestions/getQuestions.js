export const getQuestions = (examTitle) =>
  fetch(`http://localhost:5021/api/Exam/${examTitle}/Questions`)
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error fetching Questions:", error);
    });
