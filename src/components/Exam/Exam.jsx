// src/components/Certificates/Certificates.js
import React, { useEffect, useState, useMemo } from 'react';
import './Exam.css';
// import { useParams } from 'react-router-dom';
// import Button from '@mui/material/Button';
import { Button } from '../mui';

const Exam = () => {
    const Exam = [
        {
            examName: "Exam Name",
            examDescriprion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            Time: 1
        }]

    const dummyAnswer = (question) => ({
        question,
        A: "A",
        B: "B",
        C: "C",
        D: "D",
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
            dummyAnswer("Lorem Ipsum is simply du industry."),
            dummyAnswer("xt of the printing and typesetting industry."),
            dummyAnswer("Lorem Ipsum is simstry."),
            dummyAnswer(
                "Lorem IpLorem Ipsum is simply dummy text of the printing and typesetting industry.printing and typesetting industry."
            ),
            dummyAnswer("Lorem Ipsum is simply dummy ustry."),
        ],
        // Create array once on initial render, never re-create the object
        []
    )

    // Constants for threshold percentage values, exam time must be converted to milliseconds
    const ALERT_THRESHOLD_PERCENTAGE = (15 / 100) * (Exam[0].Time * 60 * 1000)
    const WARNING_THRESHOLD_PERCENTAGE = (40 / 100) * (Exam[0].Time * 60 * 1000)

    const [start, setStart] = useState(false)
    const [examEnded, setExamEnded] = useState(false)
    const [mark, setMark] = useState()
    const [answers, setAnswers] = useState([])
    const [answerOptionClassName, setAnswerOptionClassName] = useState(["", "", "", ""])
    const [answer, setAnswer] = useState("")
    const [questionNumber, setQuestionNumber] = useState(0)
    const [questionClassName, setQuestionClassName] = useState()
    const [answerFieldClassName, setAnswerFieldClassName] = useState()

    // Additional state for border color
    const [borderColor, setBorderColor] = useState('green');



    // Function to calculate border color based on time left
    const calculateBorderColor = (timeLeft) => {
        if (timeLeft <= ALERT_THRESHOLD_PERCENTAGE) {
            return 'red';
        } else if (timeLeft <= WARNING_THRESHOLD_PERCENTAGE) {
            return 'orange';
        } else {
            return 'green';
        }
    }

    const handleNext = () => {
        if (answer !== "") {
            setAnswers([...answers, answer]) //Update Answers 
            setAnswer("") //Reset the answer value

            // Add a class to fade out the current answer options
            setAnswerFieldClassName("answerField-hidden");

            // Add a class to fade out the current question
            setQuestionClassName("question-hidden");

            // Set a timeout to move to the next question after the fade-out effect
            setTimeout(() => {
                setQuestionNumber(questionNumber + 1) //Move to next question
                setAnswerFieldClassName("") // Remove the fade-out class for the new answer options
                setQuestionClassName("") // Remove the fade-out class for the new question
                setAnswerOptionClassName(["", "", "", ""]);
            }, 500); // Adjust the duration based on your transition duration
        }
    }

    //need to fix the unupdated array on last submit
    const handleSubmit = () => {
        //Handle Next Question
        handleNext()

        // Exam has ended
        setStart(false)
        setExamEnded(true)
    }

    // Evaluate Mark
    useEffect(() => {

        let count = 0.0;

        // For each question check if the answeer is correct
        for (let i = 0; i < Questions.length; i++) {
            console.log("answers.length:" + answers.length)
            if (Questions[i]["correctAnswer"] === answers[i]) {
                count++
            }
        }
        // Set Mark
        console.log("count: "+ count)
        console.log("qLength: "+ Questions.length)
        console.log("100* divide: "+ (100*count / Questions.length))
        console.log("typeof: "+ typeof(100*count / Questions.length))
        console.log("Math: "+ Math.round(100*count / Questions.length))
        console.log("Math Type: "+ typeof(Math.round(count / Questions.length)))

        setMark(Math.round(100*count / Questions.length))
    }, [examEnded])

    const [timeWhenExamStarted, setTimeWhenExamStarted] = useState()

    // Converts int to string with 2 digits
    const convert = (n) => {
        n = String(n)
        if (n.length === 1)
            n = '0' + n
        return n
    }








    const [timeLeft, setTimeLeft] = useState()

    useEffect(() => {
        // Function to calculate time left
        const calculateTimeLeft = () => {
            let timeLeft = {};

            // Check if timeStart is not yet defined
            if (!timeWhenExamStarted) {
                return timeLeft;
            }

            // Calculate time difference
            let fixedTime = new Date(timeWhenExamStarted)
            fixedTime = fixedTime.setMinutes(fixedTime.getMinutes() + Exam[0].Time)
            const difference = fixedTime - new Date();

            // Convert difference to time left
            if (difference > 0) {
                timeLeft = {
                    hours: convert(Math.floor((difference / (1000 * 60 * 60)) % 24)),
                    minutes: convert(Math.floor((difference / 1000 / 60) % 60)),
                    seconds: convert(Math.floor((difference / 1000) % 60)),
                };

                // Update border color based on time left
                const calculatedBorderColor = calculateBorderColor(difference);
                setBorderColor(calculatedBorderColor)

            } else if (difference <= 0) {
                setStart(false);
                setExamEnded(true);
            }

            return timeLeft;
        };

        // Calculate initial time left
        const initialTimeLeft = calculateTimeLeft();

        // Update the time left state
        setTimeLeft(initialTimeLeft);

        // Set interval to update time every 1000ms
        const timerInterval = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        // Clear interval on component unmount or when exam ends
        return () => {
            clearInterval(timerInterval)
        };
    }, [timeWhenExamStarted, examEnded])

    return (
        <>
            {start ?
                <div className="container">
                    {/* Question */}
                    <div className="questionAndTimer">
                        <div className={`questionContainer ${questionClassName}`}>
                            <div className="questionCount">Question {questionNumber + 1} of {Questions.length}:</div>
                            <h2 className="question">{Questions[questionNumber].question}</h2>
                        </div>

                        <div className={`timer ${borderColor}`}>
                            <span className="clock">{timeLeft["hours"]}:{timeLeft["minutes"]}:{timeLeft["seconds"]}</span>
                        </div>

                        {/* <Timer /> */}

                    </div>
                    {/* End Question */}

                    {/* AnswerField */}
                    <div className={`answerField ${answerFieldClassName}`}>
                        <ul className={`answerField ${answerFieldClassName}`}>
                            <li className={`answerOption ${answerOptionClassName[0]}`} onClick={() =>
                                setAnswerOptionClassName(["selected", "", "", ""])}>
                                <label className='radioCustomLabel'>
                                    <input type="radio"
                                        className="radioCustomButton"
                                        name="myRadio"
                                        value="A"
                                        checked={answer === "A"}
                                        onClick={(e) => setAnswer(e.target.value)} />
                                    {Questions[questionNumber].A}
                                </label>
                            </li>
                            <li className={`answerOption ${answerOptionClassName[1]}`} onClick={() =>
                                setAnswerOptionClassName(["", "selected", "", ""])}>
                                <label className="radioCustomLabel">
                                    <input type="radio"
                                        className="radioCustomButton"
                                        name="myRadio"
                                        value="B"
                                        checked={answer === "B"}
                                        onChange={(e) => setAnswer(e.target.value)} />
                                    {Questions[questionNumber].B}
                                </label>
                            </li>
                            <li className={`answerOption ${answerOptionClassName[2]}`} onClick={() =>
                                setAnswerOptionClassName(["", "", "selected", ""])}>
                                <label className="radioCustomLabel">
                                    <input type="radio"
                                        className="radioCustomButton"
                                        name="myRadio"
                                        value="C"
                                        checked={answer === "C"}
                                        onChange={(e) => setAnswer(e.target.value)} />
                                    {Questions[questionNumber].C}
                                </label>
                            </li>
                            <li className={`answerOption ${answerOptionClassName[3]}`} onClick={() =>
                                setAnswerOptionClassName(["", "", "", "selected"])}>
                                <label className="radioCustomLabel">
                                    <input type="radio"
                                        className="radioCustomButton"
                                        name="myRadio"
                                        value="D"
                                        checked={answer === "D"}
                                        onChange={(e) => setAnswer(e.target.value)} />
                                    {Questions[questionNumber].D}
                                </label>
                            </li>
                        </ul>
                    </div>
                    {/* End AnswerField */}

                    <div className='container'>
                        <div className='center'>
                            {Questions.length - 1 === questionNumber
                                ? <Button variant="contained" disableElevation onClick={handleSubmit}>End Exam</Button>
                                : <Button variant="contained" disableElevation onClick={handleNext}>Next Question</Button>}
                        </div>
                    </div>

                </div>
                // </div>

                // Page before and after starting the exam 
                : <div className="container result">
                    <h1>Exam: {Exam[0].examName}</h1>
                    <p>Exam: {Exam[0].examDescriprion}</p>


                    {/*  Page after exam has ended */}
                    {examEnded
                        ? <div>Exam Completed! Your Mark is {mark} / {Questions.length}</div>

                        // Page before exam starts
                        : <div>
                            <p>For this exam you need to answer {Questions.length} questions in {Exam[0].Time} minutes!</p>
                            <Button variant="contained" disableElevation
                                onClick={() => {
                                    setStart(!start)
                                    setTimeWhenExamStarted(new Date())
                                }}
                            >Let's Start</Button>
                        </div>}
                </div>

            }

        </>
    );
};

export default Exam;