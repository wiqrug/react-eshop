import React, { useEffect, useState, useMemo } from "react";
import "./Exam.css";
import { Button } from "../mui";
import Timer from "./Timer";
import AnswerField from "./AnswerField";
import AnswerOptionContext from "./AnswerOptionContext";
import TimerContext from "./TimerContext";
import { useExam, useLocalStorage } from "hooks";

import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { useParams } from "react-router-dom";

const Exam = () => {
  // const exam =
  // {
  //   title: "Exam Name",
  //   description:
  //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  //   time: 10,
  // };

  // const dummyAnswer = (question) => ({
  //   question,
  //   answerA: "A",
  //   answerB: "B",
  //   answerC: "C",
  //   answerD: "D",
  //   imageSrc:
  //     "https://www.ticketmastersport.com/wp-content/uploads/2019/09/Iraklis20FC-1.jpg",
  //   correctAnswer: "A",
  // });

  // // dependency arrays should have all the variables warned by the linter
  // // useMemo allows us to add Questions into the dependency array by persisting
  // // a reference to the array between renders
  // const Questions = useMemo(
  //   () => [
  //     dummyAnswer(
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  //     ),
  //     dummyAnswer("ply dummy text of the printing and typesetting industry."),
  //     dummyAnswer(
  //       "Lorem IpLorem Ipsum is simply dummy text of the printing and typesetting industry.printing and typesetting industry."
  //     ),
  //     dummyAnswer("Lorem Ipsum is simply dummy ustry."),
  //     {
  //       question:
  //         "Lorem IpLorem Ipsum is simply dummy texLorem IpLorem Ipsum is simply dummy text of the printing and typesetting industry.printing and typesetting industry.Lorem IpLorem Ipsum is simply dummy text of the printing and typesetting industry.printing and typesetting industry.t of the printing and typesetting industry.printing and typesetting industry.",
  //       answerA: "Lorem IpLorem Ipsum is simply dummy text of the printing and typesetting industry.printing and typesetting industry.Lorem IpLorem Ipsum is simply dummy text of the printing and typesetting industry.printing and typesetting industry.Lorem IpLorem Ipsum is simply dummy text of the printing and typesetting industry.printing and typesetting industry.",
  //       answerB: "Lorem IpLorem Ipsum is simply dummy text of the printing and typesetting industry.printing and typesetting industry.Lorem IpLorem Ipsum is simply dummy text of the printing and typesetting industry.printing and typesetting industry.Lorem IpLorem Ipsum is simply dummy text of the printing and typesetting industry.printing and typesetting industry.",
  //       answerC: "Lorem IpLorem Ipsum is simply dummy text of the printing and typesetting industry.printing and typesetting industry.",
  //       answerD: "Lorem IpLorem Ipsum is simply dummy text of the printing and typesetting industry.printing and typesetting industry.Lorem IpLorem Ipsum is simply dummy text of the printing and typesetting industry.printing and typesetting industry.Lorem IpLorem Ipsum is simply dummy text of the printing and typesetting industry.printing and typesetting industry.Lorem IpLorem Ipsum is simply dummy text of the printing and typesetting industry.printing and typesetting industry.Lorem IpLorem Ipsum is simply dummy text of the printing and typesetting industry.printing and typesetting industry.Lorem IpLorem Ipsum is simply dummy text of the printing and typesetting industry.printing and typesetting industry.Lorem IpLorem Ipsum is simply dummy text of the printing and typesetting industry.printing and typesetting industry.Lorem IpLorem Ipsum is simply dummy text of the printing and typesetting industry.printing and typesetting industry.",
  //       imageSrc: "",
  //       correctAnswer: "D",
  //     },
  //     {
  //       question: "",
  //       answerA: "Lorem IpLorem Ipsum is simply dummy text of the printing and typesetting industry.printing and typesetting industry.Lorem IpLorem Ipsum is simply dummy text of the printing and typesetting industry.printing and typesetting industry.Lorem IpLorem Ipsum is simply dummy text of the printing and typesetting industry.printing and typesetting industry.",
  //       answerB: "Lorem IpLorem Ipsum is simply dummy text of the printing and typesetting industry.printing and typesetting industry.Lorem IpLorem Ipsum is simply dummy text of the printing and typesetting industry.printing and typesetting industry.Lorem IpLorem Ipsum is simply dummy text of the printing and typesetting industry.printing and typesetting industry.",
  //       answerC: "Lorem IpLorem Ipsum is simply dummy text of the printing and typesetting industry.printing and typesetting industry.",
  //       answerD: "Lorem IpLorem Ipsum is simply dummy text of the printing and typesetting industry.printing and typesetting industry.Lorem IpLorem Ipsum is simply dummy text of the printing and typesetting industry.printing and typesetting industry.Lorem IpLorem Ipsum is simply dummy text of the printing and typesetting industry.printing and typesetting industry.Lorem IpLorem Ipsum is simply dummy text of the printing and typesetting industry.printing and typesetting industry.Lorem IpLorem Ipsum is simply dummy text of the printing and typesetting industry.printing and typesetting industry.Lorem IpLorem Ipsum is simply dummy text of the printing and typesetting industry.printing and typesetting industry.Lorem IpLorem Ipsum is simply dummy text of the printing and typesetting industry.printing and typesetting industry.Lorem IpLorem Ipsum is simply dummy text of the printing and typesetting industry.printing and typesetting industry.",
  //       imageSrc:
  //         "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.cG9zeaNG2T9xG1xOKNDXdQHaIG%26pid%3DApi&f=1&ipt=e38a4a26c79740fe3a03a579c48a3be44a202dd41ddb4508c14c2eda24d98481&ipo=images",
  //       correctAnswer: "D",
  //     },
  //   ],
  //   // Create array once on initial render, never re-create the object
  //   []
  // );

  const CandidateExam = [
    {
      examMark: null,
    },
  ];

  const { Title } = useParams();

  const { getItem, setItem, removeItem } = useLocalStorage();
  // const { exam: Exam, questions: Questions, mark: userMark, fetchExam } = useExam(Title)
  const { exam: Exam, questions: Questions, fetchExam } = useExam(Title)
  const userMark = 0

  // console.log("from Exam.jsx EXAM:")

  // console.log("exam:" + typeof(Exam.time))
  // Object.entries(Exam).forEach(([key, value]) => {
  //   console.log(key, value);
  // });

  // console.log("questions: " + Questions)
  // console.log("questionsTYPE: " + typeof(Questions))


  // console.log("from getExam   QUESTION:")
  // Object.entries(Questions).forEach(([key, value]) => {
  //   console.log(key, value);
  // });
  // console.log("END EXAM.JSX:")

  const Answers = useMemo(() => {
    return getItem("Answers") ?? "";
  }, []); // Check if there is Answers in local storage
  const timer = useMemo(() => {
    return getItem("Timer") ?? null;
  }, []); // Check if there is timer in local storage

  const [alert, setAlert] = useState(false);
  const [start, setStart] = useState(false); // Used in start Exam
  const [examEnded, setExamEnded] = useState(false); // Used when Exam ends
  const [mark, setMark] = useState(NaN); // Used when calculate Mark
  const [answers, setAnswers] = useState(Answers); // Contains user Answers, equal to Answers from Local Storage
  const [answerOptionClassName, setAnswerOptionClassName] = useState([
    "",
    "",
    "",
    "",
  ]); // Used to fade an answer option
  const [answer, setAnswer] = useState(""); // Used when user chooses an option-answer
  const [questionNumber, setQuestionNumber] = useState(Answers.length); // The question number equals to as many answers are in Local Storage
  const [questionClassName, setQuestionClassName] = useState(""); // Used to fade the Question and Image
  const [answerFieldClassName, setAnswerFieldClassName] = useState(""); // Used to fade the answer field
  const [timeWhenExamStarted, setTimeWhenExamStarted] = useState(); // Contains the time when the button start is pressed, considered by the time left from Local Storage

  // Evaluate Mark
  useEffect(() => {
    let count = 0;
    const length = Object.keys(Questions).length
    for (let i = 0; i < length; i++) {
      if (Questions[i].correctAnswer === answers[i]) {
        // For each question check if the answeer is correct
        count++;
      }
    }

    setMark(Math.round((100 * count) / length)); // Set Mark
    removeItem("Answers"); // Remove Answers from Local Storage
    removeItem("Timer"); // Remove Timer from Local Storage
    removeItem("Exam"); // Remove Timer from Local Storage
  }, [examEnded]);

  // Handles submit button click
  const handleNext = () => {
    if (answer !== "") {
      setAnswers([...answers, answer]); // Update Answers
      setAnswer(""); // Reset the answer value
      setAnswerFieldClassName("answerField-hidden"); // Add a class to fade out the current answer options
      setQuestionClassName("question-hidden"); // Add a class to fade out the current question
      setItem("Answers", [...answers, answer]); // Save Answers to local storage

      setTimeout(() => {
        // Set a timeout to move to the next question after the fade-out effect

        setQuestionNumber(questionNumber + 1); // Move to next question
        setAnswerFieldClassName(""); // Remove the fade-out class for the new answer options
        setQuestionClassName(""); // Remove the fade-out class for the new question
        setAnswerOptionClassName(["", "", "", ""]); // Restart the style of the answer options
      }, 500); // Adjust the duration based on your transition duration
    }
  };

  const handleSubmit = () => {
    // Handles submit button click

    handleNext(); // Handle Next Question
    setStart(false); // Change Star to false
    setExamEnded(true); // Change ExamEnded to true
    // Must set mark to candidateExam throught post request
  };

  
  // This functions is called int Timer Child Component when the timer hits zero
  const timeEnded = () => {
    setStart(false);
    setExamEnded(true);
  };

  const handleStart = () => {
    if (getItem("Exam") && getItem("Exam") !== Exam.title) {
      console.log("getItem from local: " + getItem("Exam"))
      console.log("getItem from local!=Exxam.title: " + Exam.title)

      console.log(
        "Your previous exam given is unfinished. You must complete that in order to start a new one!"
      );
      setAlert(true);
      return;
    }

    setStart(!start);
    setItem("Exam", Exam.title); // Set the name of the exam in local storage
    let time;

    if (!timer) {
      // When no timer exists in Local storage set time as Now
      time = new Date();
    } else {
      const datetimeNow = new Date();
      time = new Date( // Calculate the time now minus the time that remains from Local Storage
        datetimeNow.getFullYear(),
        datetimeNow.getMonth(),
        datetimeNow.getDate(),
        datetimeNow.getHours(),
        datetimeNow.getMinutes(),
        datetimeNow.getSeconds() -
        (Exam.time * 60 -
          Number(timer.hours) * 60 * 60 -
          Number(timer.minutes) * 60 -
          Number(timer.seconds))
      );
    }

    // @ts-ignore
    setTimeWhenExamStarted(time); // Set time
  };

  console.log("mark:"+userMark)
  if (userMark === -1) {
    return (
      // Return a Page with the mark shown
      <>
        <div className="container result">
          <h1>{Exam.title}</h1>
          <hr />
          <p className="paragraph">About the exam:</p>
          <p className="paragraph">{Exam.description}</p>

          {/*  Page after exam has ended */}
          <div>You cannot take this Exam!</div>
        </div>
      </>
    );
  }
  else if (userMark>50) 
  {
    // Consider if the exam has been already taken
    return (
      // Return a Page with the mark shown
      <>
        <div className="container result">
          <h1>{Exam.title}</h1>
          <hr />
          <p className="paragraph">About the exam:</p>
          <p className="paragraph">{Exam.description}</p>

          {/*  Page after exam has ended */}
          <div>Your Mark is {userMark} %</div>
        </div>
      </>
    );
  } else {
    return (
      // Return a Page with the Exam Shield
      <>
        {start ? (
          <div className="container">
            {/* Question */}
            <div className="questionAndTimer">
              <div className={`questionContainer ${questionClassName}`}>
                <div className="questionCount">
                  Question {questionNumber + 1} of {Object.keys(Questions).length}:
                </div>
                <h2 className="question">
                  {Questions[questionNumber].question}
                </h2>
              </div>

              {/* <Timer /> */}
              <TimerContext.Provider value={timeEnded}>
                <Timer
                  examTimeLimit={Exam.time}
                  examStartedTime={timeWhenExamStarted}
                />
              </TimerContext.Provider>
            </div>
            {Questions[questionNumber].imageSrc !== "" && (
              <div className={`questionContainer ${questionClassName}`}>
                <img
                  src={Questions[questionNumber].imageSrc}
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
                {Object.keys(Questions).length - 1 === questionNumber ? (
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
            {alert && (
              <Alert
                severity="error"
                onClose={() => {
                  setAlert(false);
                }}
              >
                <AlertTitle>Error</AlertTitle>
                Your previous exam you given is unfinished. You must complete
                that in order to start a new one!
              </Alert>
            )}
            <h1>{Exam.title}</h1>
            <hr />
            <p className="paragraph">About the exam:</p>
            <p className="paragraph">{Exam.description}</p>

            {/*  Page after exam has ended */}
            {examEnded ? (
              <div>Exam Completed! Your Mark is {mark} %</div>
            ) : (
              // Page before exam starts
              <div>
                <p className="paragraph">
                  For this exam you need to answer {Object.keys(Questions).length} questions
                  in {Exam.time} minutes!
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
