import React, { useEffect, useState, useMemo } from "react";
import "./Exam.css";
import { Button } from "../mui";
import Timer from "./Timer";
import AnswerField from "./AnswerField";
import AnswerOptionContext from "./AnswerOptionContext";
import TimerContext from "./TimerContext";
import { useExam, useLocalStorage } from "hooks";

const Exam = () => {
  const Exam = [
    {
      examName: "Exam Name",
      examDescriprion:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      Time: 10,
    },
  ];

  const dummyAnswer = (question) => ({
    question,
    A: "A",
    B: "B",
    C: "C",
    D: "D",
    image:
      "https://www.ticketmastersport.com/wp-content/uploads/2019/09/Iraklis20FC-1.jpg",
    correctAnswer: "A",
  });

  // dependency arrays should have all the variables warned by the linter
  // useMemo allows us to add Questions into the dependency array by persisting
  // a reference to the array between renders
  const Questions = useMemo(
    () => [
      dummyAnswer(
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      ),
      dummyAnswer("ply dummy text of the printing and typesetting industry."),
      dummyAnswer(
        "Lorem IpLorem Ipsum is simply dummy text of the printing and typesetting industry.printing and typesetting industry."
      ),
      dummyAnswer("Lorem Ipsum is simply dummy ustry."),
      {
        question:
          "Lorem IpLorem Ipsum is simply dummy texLorem IpLorem Ipsum is simply dummy text of the printing and typesetting industry.printing and typesetting industry.Lorem IpLorem Ipsum is simply dummy text of the printing and typesetting industry.printing and typesetting industry.t of the printing and typesetting industry.printing and typesetting industry.",
        A: "Lorem IpLorem Ipsum is simply dummy text of the printing and typesetting industry.printing and typesetting industry.Lorem IpLorem Ipsum is simply dummy text of the printing and typesetting industry.printing and typesetting industry.Lorem IpLorem Ipsum is simply dummy text of the printing and typesetting industry.printing and typesetting industry.",
        B: "Lorem IpLorem Ipsum is simply dummy text of the printing and typesetting industry.printing and typesetting industry.Lorem IpLorem Ipsum is simply dummy text of the printing and typesetting industry.printing and typesetting industry.Lorem IpLorem Ipsum is simply dummy text of the printing and typesetting industry.printing and typesetting industry.",
        C: "Lorem IpLorem Ipsum is simply dummy text of the printing and typesetting industry.printing and typesetting industry.",
        D: "Lorem IpLorem Ipsum is simply dummy text of the printing and typesetting industry.printing and typesetting industry.Lorem IpLorem Ipsum is simply dummy text of the printing and typesetting industry.printing and typesetting industry.Lorem IpLorem Ipsum is simply dummy text of the printing and typesetting industry.printing and typesetting industry.Lorem IpLorem Ipsum is simply dummy text of the printing and typesetting industry.printing and typesetting industry.Lorem IpLorem Ipsum is simply dummy text of the printing and typesetting industry.printing and typesetting industry.Lorem IpLorem Ipsum is simply dummy text of the printing and typesetting industry.printing and typesetting industry.Lorem IpLorem Ipsum is simply dummy text of the printing and typesetting industry.printing and typesetting industry.Lorem IpLorem Ipsum is simply dummy text of the printing and typesetting industry.printing and typesetting industry.",
        image: "",
        correctAnswer: "D",
      },
      {
        question: "",
        A: "Lorem IpLorem Ipsum is simply dummy text of the printing and typesetting industry.printing and typesetting industry.Lorem IpLorem Ipsum is simply dummy text of the printing and typesetting industry.printing and typesetting industry.Lorem IpLorem Ipsum is simply dummy text of the printing and typesetting industry.printing and typesetting industry.",
        B: "Lorem IpLorem Ipsum is simply dummy text of the printing and typesetting industry.printing and typesetting industry.Lorem IpLorem Ipsum is simply dummy text of the printing and typesetting industry.printing and typesetting industry.Lorem IpLorem Ipsum is simply dummy text of the printing and typesetting industry.printing and typesetting industry.",
        C: "Lorem IpLorem Ipsum is simply dummy text of the printing and typesetting industry.printing and typesetting industry.",
        D: "Lorem IpLorem Ipsum is simply dummy text of the printing and typesetting industry.printing and typesetting industry.Lorem IpLorem Ipsum is simply dummy text of the printing and typesetting industry.printing and typesetting industry.Lorem IpLorem Ipsum is simply dummy text of the printing and typesetting industry.printing and typesetting industry.Lorem IpLorem Ipsum is simply dummy text of the printing and typesetting industry.printing and typesetting industry.Lorem IpLorem Ipsum is simply dummy text of the printing and typesetting industry.printing and typesetting industry.Lorem IpLorem Ipsum is simply dummy text of the printing and typesetting industry.printing and typesetting industry.Lorem IpLorem Ipsum is simply dummy text of the printing and typesetting industry.printing and typesetting industry.Lorem IpLorem Ipsum is simply dummy text of the printing and typesetting industry.printing and typesetting industry.",
        image:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.cG9zeaNG2T9xG1xOKNDXdQHaIG%26pid%3DApi&f=1&ipt=e38a4a26c79740fe3a03a579c48a3be44a202dd41ddb4508c14c2eda24d98481&ipo=images",
        correctAnswer: "D",
      },
    ],
    // Create array once on initial render, never re-create the object
    []
  );

  const CandidateExam = [
    {
      examMark: null,
    },
  ];



















  const { getItem, setItem, removeItem } = useLocalStorage()


  const Answers = useMemo(() => { return getItem("Answers") ?? "" }, [])     // Check if there is Answers in local storage 
  const timer = useMemo(() => { return getItem("Timer") ?? null }, [])       // Check if there is timer in local storage





  // const { useCandidateExam, useQuestionsForExam, useSpecificExam } = useExam()
  // const { candidateExam, fetchCandidateExam } = useCandidateExam()
  // const { questionsForExam, fetchQuestionsForExam } = useQuestionsForExam()
  // const { specificExam, fetchSpecificExam } = useSpecificExam()

  // useEffect(() => {
  //   try {
  //     fetchCandidateExam()                                  // Fetch
  //     fetchQuestionsForExam()                               // Fetch
  //     fetchSpecificExam()                                   // Fetch
  //   } catch (error) {
  //     console.error("Failed to fetch Exam:", error);
  //   }
  // }, []);





  const [start, setStart] = useState(false);
  const [examEnded, setExamEnded] = useState(false);
  const [mark, setMark] = useState(NaN);
  const [answers, setAnswers] = useState(Answers);
  const [answerOptionClassName, setAnswerOptionClassName] = useState(["", "", "", "",]);
  const [answer, setAnswer] = useState("");
  const [questionNumber, setQuestionNumber] = useState(Answers.length);
  const [questionClassName, setQuestionClassName] = useState("");
  const [answerFieldClassName, setAnswerFieldClassName] = useState("");
  const [timeWhenExamStarted, setTimeWhenExamStarted] = useState();

  // Evaluate Mark
  useEffect(() => {
    let count = 0;
    for (let i = 0; i < Questions.length; i++) {
      if (Questions[i]["correctAnswer"] === answers[i]) {       // For each question check if the answeer is correct
        count++;
      }
    }

    setMark(Math.round((100 * count) / Questions.length));      // Set Mark
    removeItem("Answers")                                       // Remove Answers from Local Storage
    removeItem("Timer")                                       // Remove Timer from Local Storage

  }, [examEnded]);

  // Handles submit button click
  const handleNext = () => {
    if (answer !== "") {

      setAnswers([...answers, answer]);                   // Update Answers
      setAnswer("");                                      // Reset the answer value
      setAnswerFieldClassName("answerField-hidden");      // Add a class to fade out the current answer options
      setQuestionClassName("question-hidden");            // Add a class to fade out the current question
      setItem("Answers", [...answers, answer]);           // Save Answers to local storage

      setTimeout(() => {                                  // Set a timeout to move to the next question after the fade-out effect

        setQuestionNumber(questionNumber + 1);            // Move to next question
        setAnswerFieldClassName("");                      // Remove the fade-out class for the new answer options
        setQuestionClassName("");                         // Remove the fade-out class for the new question
        setAnswerOptionClassName(["", "", "", ""]);       // Restart the style of the answer options

      }, 500);                                            // Adjust the duration based on your transition duration
    }
  };

  const handleSubmit = () => {         // Handles submit button click

    handleNext();                     // Handle Next Question
    setStart(false);                  // Change Star to false
    setExamEnded(true);               // Change ExamEnded to true
    // Must set mark to candidateExam throught post request

  };

  // This functions is called int Timer Child Component when the timer hits zero
  const timeEnded = () => {
    setStart(false);
    setExamEnded(true);
  };


  const handleStart = () => {

    setStart(!start);
    if (!timer) {
      const newDate = new Date();
      // @ts-ignore
      setTimeWhenExamStarted(newDate);
    }
    else {

      const datetimeNow = new Date();
      const time = new Date(
        datetimeNow.getFullYear(),
        datetimeNow.getMonth(),
        datetimeNow.getDate(),
        datetimeNow.getHours(),
        datetimeNow.getMinutes(),
        datetimeNow.getSeconds() - (Exam[0].Time * 60 - Number(timer.hours) * 60 * 60 - Number(timer.minutes) * 60 - Number(timer.seconds))
      );

      // @ts-ignore
      setTimeWhenExamStarted(time);
    }
  }


  if (CandidateExam[0].examMark !== null) {
    return (
      <>
        <div className="container result">
          <h1>{Exam[0].examName}</h1>
          <hr />
          <p className="paragraph">About the exam:</p>
          <p className="paragraph">{Exam[0].examDescriprion}</p>

          {/*  Page after exam has ended */}
          <div>Your Mark is {CandidateExam[0].examMark} %</div>
        </div>
      </>
    );
  } else {
    return (
      <>
        {start ? (
          <div className="container">
            {/* Question */}
            <div className="questionAndTimer">
              <div className={`questionContainer ${questionClassName}`}>
                <div className="questionCount">
                  Question {questionNumber + 1} of {Questions.length}:
                </div>
                <h2 className="question">
                  {Questions[questionNumber].question}
                </h2>
              </div>

              {/* <Timer /> */}
              <TimerContext.Provider value={timeEnded}>
                <Timer
                  examTimeLimit={Exam[0].Time}
                  examStartedTime={timeWhenExamStarted}
                />
              </TimerContext.Provider>
            </div>
            {Questions[questionNumber].image !== "" && (
              <div className={`questionContainer ${questionClassName}`}>
                <img
                  src={Questions[questionNumber].image}
                  // src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.PvQ6hvlsjJhHpuP5qZfNrAHaHa%26pid%3DApi&f=1&ipt=d9cf3324541dff5b768690113a9f99d6a472aac8c0f18dc45495f2ed2b8cb28b&ipo=images"
                  // src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.cG9zeaNG2T9xG1xOKNDXdQHaIG%26pid%3DApi&f=1&ipt=e38a4a26c79740fe3a03a579c48a3be44a202dd41ddb4508c14c2eda24d98481&ipo=images"
                  alt="QuestionImage"
                  className="image"
                />
              </div>
            )}
            {/* AnswerField */}
            <AnswerOptionContext.Provider
              value={{
                answer,
                setAnswer,
                answerOptionClassName,
                setAnswerOptionClassName,
              }}
            >
              <AnswerField
                answerOptions={Questions[questionNumber]}
                answerFieldClassName={answerFieldClassName}
              />
            </AnswerOptionContext.Provider>

            <div className="container">
              <div className="center">
                {Questions.length - 1 === questionNumber ? (
                  <Button
                    variant="contained"
                    disableElevation
                    onClick={handleSubmit}
                  >
                    End Exam
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    disableElevation
                    onClick={handleNext}
                  >
                    Next Question
                  </Button>
                )}
              </div>
            </div>
          </div>
        ) : (
          // Page before and after starting the exam
          <div className="container result">
            <h1>{Exam[0].examName}</h1>
            <hr />
            <p className="paragraph">About the exam:</p>
            <p className="paragraph">{Exam[0].examDescriprion}</p>

            {/*  Page after exam has ended */}
            {examEnded ? (
              <div>Exam Completed! Your Mark is {mark} %</div>
            ) : (
              // Page before exam starts
              <div>
                <p className="paragraph">
                  For this exam you need to answer {Questions.length} questions
                  in {Exam[0].Time} minutes!
                </p>
                <Button
                  variant="contained"
                  disableElevation
                  onClick={handleStart}
                >
                  Let's Start
                </Button>
              </div>
            )}
          </div>
        )}
      </>
    );
  }
};

export default Exam;
