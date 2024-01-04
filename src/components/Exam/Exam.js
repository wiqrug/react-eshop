// src/components/Certificates/Certificates.js
import { React, useEffect, useState } from 'react';
import './Exam.css';
import { Link, useParams } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group'
// import Button from '@mui/material/Button';

const Exam = () => {
    const [start, setStart] = useState(false)
    const [examEnded, setExamEnded] = useState(false)
    const [nextQuestion, setNextQuestion] = useState(false)
    const [mark, setMark] = useState()
    const [answers, setAnswers] = useState([])
    const [answer, setAnswer] = useState("")
    const [questionNumber, setQuestionNumber] = useState(0)
    const { id } = useParams()

    const Exam = [
        {
            examName: "Exam Name",
            examDescriprion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            Time: 60
        }]

    const Questions = [
        {
            question: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            A: "A",
            B: "B",
            C: "C",
            D: "D",
            correctAnswer: "A"
        },
        {
            question: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            A: "A",
            B: "B",
            C: "C",
            D: "D",
            correctAnswer: "A"
        },
        {
            question: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            A: "A",
            B: "B",
            C: "C",
            D: "D",
            correctAnswer: "A"
        },
        {
            question: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            A: "A",
            B: "B",
            C: "C",
            D: "D",
            correctAnswer: "A"
        },
        {
            question: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            A: "A",
            B: "B",
            C: "C",
            D: "D",
            correctAnswer: "A"
        },
        {
            question: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            A: "A",
            B: "B",
            C: "C",
            D: "D",
            correctAnswer: "A"
        },
        {
            question: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            A: "A",
            B: "B",
            C: "C",
            D: "D",
            correctAnswer: "A"
        },
        {
            question: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            A: "A",
            B: "B",
            C: "C",
            D: "D",
            correctAnswer: "A"
        },
        {
            question: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            A: "A",
            B: "B",
            C: "C",
            D: "D",
            correctAnswer: "A"
        },
        {
            question: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            A: "A",
            B: "B",
            C: "C",
            D: "D",
            correctAnswer: "A"
        }]

    const handleNext = () => {
        if (answer !== "") {
            //Update Answers and move to next question
            setAnswers([...answers, answer])
            setQuestionNumber(questionNumber + 1)

            //Reset the answer value
            setAnswer("")

            // Move to next question
            setNextQuestion(true)
        }
    }

    //need to fix the unupdated array on last submit
    const handleSubmit = () => {
        // console.log("answers:[" + answers + "]=" + answers.length)
        // console.log("handlesubmit")
        // answer !== "" && setQuestionNumber(questionNumber + 1)
        // console.log("answers:[" + answers + "]=" + answers.length)

        // console.log("Questions[Correctanswer]: " + Questions[correctAnswer])

        // let count = 0;
        // for (let i = 0; i <= Questions.length - 1; i++) {
        //     // console.log("i: " + i)

        //     if (Questions[i]["correctAnswer"] === answers[i]) {
        //         // console.log(answers[i])

        //         count++
        //     }
        // }
        handleNext()
        // Exam has ended
        setStart(false)
        setExamEnded(true)

        // // Set Mark 
        // console.log("your score is " + count + " out of " + Questions.length)
    }



    // const evaluateMark = () => {
    //     console.log("evaluate mark has been called")
    //     let count = 0;
    //     for (let i = 0; i < Questions.length; i++) {
    //         // console.log("i: " + i)

    //         if (Questions[i]["correctAnswer"] === answers[i]) {
    //             // console.log(answers[i])

    //             count++
    //         }
    //     }
    //     console.log("your score is " + count + " out of " + Questions.length)
    //     console.log("Answers: " + answers + " , length of " + answers.length)
    //     setMark(count)
    // }

    // Evaluate Mark
    useEffect(() => {

        let count = 0;

        // For each question check if the answeer is correct
        for (let i = 0; i < Questions.length; i++) {
            if (Questions[i]["correctAnswer"] === answers[i]) {
                count++
            }
        }
        // Set Mark
        setMark(count)
    }

        , [examEnded])

    return (
        <>
            {/* <CSSTransition
            in={start}
            // nodeRef={nodeRef}
            timeout={800}
            transitionName = "fade"
            classNames="container result"
            unmountOnExit
            onEnter={() => setShowButton(false)}
            onExited={() => setNextQuestion(false)} 


            // className="container result"
            // component="div"
            // transitionName="fade"
            // transitionEnterTimeout={800}
            // transitionLeaveTimeout={500}
            // transitionAppear
            // transitionAppearTimeout={500}
            >*/}
            {/* </CSSTransition> */}
            {/* TODO: use csstransition on close setStart(false)
         <CSSTransition
            in={i === questionNumber}
            nodeRef=null
            timeout={800}
            transitionName = "fade"
            classNames="container result"
            unmountOnExit
            onEnter={}
            onExited={} */}
            {start ?
                <div className="container">
                    <CSSTransition
                        in={0 === questionNumber}
                        nodeRef={null}
                        timeout={800}
                        transitionName="fade"
                        classNames="container result"
                        unmountOnExit
                    // onEnter={}
                    // onExited={}
                    >
                        <div className="container">
                            <div className="questionCount">Question {questionNumber + 1} of {Questions.length}:</div>
                            <h2 className="question">{Questions[questionNumber]["question"]}</h2>
                            <div className="answerOptions">
                                <ul className="answerOptions">
                                    <li className="answerOption">
                                        <label className="radioCustomLabel">
                                            <input type="radio"
                                                className="radioCustomButton"
                                                name="myRadio"
                                                value="A"
                                                checked={answer === "A"}
                                                onChange={(e) => setAnswer(e.target.value)} />
                                            {Questions[questionNumber]["A"]}
                                        </label>
                                    </li>
                                    <li className="answerOption">
                                        <label className="radioCustomLabel">
                                            <input type="radio"
                                                className="radioCustomButton"
                                                name="myRadio"
                                                value="B"
                                                checked={answer === "B"}
                                                onChange={(e) => setAnswer(e.target.value)} />
                                            {Questions[questionNumber]["B"]}
                                        </label>
                                    </li>
                                    <li className="answerOption">
                                        <label className="radioCustomLabel">
                                            <input type="radio"
                                                className="radioCustomButton"
                                                name="myRadio"
                                                value="C"
                                                checked={answer === "C"}
                                                onChange={(e) => setAnswer(e.target.value)} />
                                            {Questions[questionNumber]["C"]}
                                        </label>
                                    </li>
                                    <li className="answerOption">
                                        <label className="radioCustomLabel">
                                            <input type="radio"
                                                className="radioCustomButton"
                                                name="myRadio"
                                                value="D"
                                                checked={answer === "D"}
                                                onChange={(e) => setAnswer(e.target.value)} />
                                            {Questions[questionNumber]["D"]}
                                        </label>
                                    </li>
                                </ul>
                            </div>

                            {Questions.length - 1 === questionNumber
                                // ? <Button variant="contained" disableElevation onClick={handleSubmit}>End Exam</Button>
                                // : <Button variant="contained" disableElevation onClick={handleNext}>Next Question</Button>}
                                ? <button onClick={handleSubmit}>End Exam</button>
                                : <button onClick={handleNext}>Next Question</button>} 
                        </div>
                    </CSSTransition>



                    {/* <h1>Question {questionNumber + 1} of {Questions.length}:</h1>
                    <p>{Questions[questionNumber]["question"]}</p>
                    <div>
                        <label>
                            <input type="radio"
                                name="myRadio"
                                value="A"
                                checked={answer === "A"}
                                onChange={(e) => setAnswer(e.target.value)} />
                            {Questions[questionNumber]["A"]}
                        </label>

                        <label>
                            <input type="radio"
                                name="myRadio"
                                value="B"
                                checked={answer === "B"}
                                onChange={(e) => setAnswer(e.target.value)} />
                            {Questions[questionNumber]["B"]}
                        </label>

                        <label>
                            <input type="radio"
                                name="myRadio"
                                value="C"
                                checked={answer === "C"}
                                onChange={(e) => setAnswer(e.target.value)} />
                            {Questions[questionNumber]["C"]}
                        </label>

                        <label>
                            <input type="radio"
                                name="myRadio"
                                value="D"
                                checked={answer === "D"}
                                onChange={(e) => setAnswer(e.target.value)} />
                            {Questions[questionNumber]["D"]}
                        </label>
                    </div>
                    <h3>Attention: Cannot go back to previous questions!!</h3>

                    {Questions.length - 1 === questionNumber
                        ? <button onClick={handleSubmit}>End Exam</button>
                        : <button onClick={handleNext}>Next Question</button>} */}

                    {/* // answer !== "" && setQuestionNumber(questionNumber + 1)
                            // console.log("answers:[" + answers + "]=" + answers.length) */}

                </div>

                // Page before and after starting the exam 
                : <div>
                    <h1>Exam: {Exam[0]["examName"]}</h1>
                    <p>Exam: {Exam[0]["examDescriprion"]}</p>

                    {/*  Page after exam has ended */}
                    {examEnded
                        ? <div>
                            <div>Exam Completed</div>
                            <div>Your Mark is {mark} / 10</div>
                        </div>
                        // Page before exam starts
                        : <div>
                            <p>For this exam you need to answer {Questions.length} questions in {Exam[0]["Time"]} minutes!</p>
                            <button onClick={() => setStart(!start)}>Let's Start</button>
                        </div>}
                </div>

            }

        </>
    );
};

export default Exam;
