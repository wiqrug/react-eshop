// src/components/Certificates/Certificates.js
import { React, useEffect, useState } from 'react';
import './Exam.css';
// import { useParams } from 'react-router-dom';
import Button from '@mui/material/Button';

const Exam = () => {
    const [start, setStart] = useState(false)
    const [examEnded, setExamEnded] = useState(false)
    const [mark, setMark] = useState()
    const [answers, setAnswers] = useState([])
    const [listClassName, setListClassName] = useState(["answerOption", "answerOption", "answerOption", "answerOption"])
    const [answer, setAnswer] = useState("")
    const [questionNumber, setQuestionNumber] = useState(0)
    // const { id } = useParams()

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
            question: "Lorem Ipsum is simply dummLorem Ipsum is simply dummy text of the printing and typesetting industry.and typesetting industry.",
            A: "A",
            B: "B",
            C: "C",
            D: "D",
            correctAnswer: "A"
        },
        {
            question: "ply dummy text of the printing and typesetting industry.",
            A: "A",
            B: "B",
            C: "C",
            D: "D",
            correctAnswer: "A"
        },
        {
            question: " Ipsum is simply dummy text of the printing and typesetLorem Ipsum is simply dummy text of the printing and typesetting industry.ting industry.",
            A: "A",
            B: "B",
            C: "C",
            D: "D",
            correctAnswer: "A"
        },
        {
            question: "Lorem Ipsum is simply du industry.",
            A: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            B: "B",
            C: "C",
            D: "D",
            correctAnswer: "A"
        },
        {
            question: "xt of the printing and typesetting industry.",
            A: "A",
            B: "B",
            C: "C",
            D: "D",
            correctAnswer: "A"
        },
        {
            question: "LoremLoremLorem Ipsum is simply dummy text of the printing and typesetting industry..",
            A: "A",
            B: "B",
            C: "C",
            D: "D",
            correctAnswer: "A"
        },
        {
            question: "Lorem Ipsum is simstry.",
            A: "A",
            B: "B",
            C: "C",
            D: "D",
            correctAnswer: "A"
        },
        {
            question: "Lorem IpLorem Ipsum is simply dummy text of the printing and typesetting industry.printing and typesetting industry.",
            A: "A",
            B: "B",
            C: "C",
            D: "D",
            correctAnswer: "A"
        },
        {
            question: "Lorem Ipsum is simply dummy ustry.",
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

            //Refresh selected
            setListClassName(["answerOption", "answerOption", "answerOption", "answerOption"])
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
            {start ?
                <div className="container">
                    <div className="container">
                        <div className="questionCount">Question {questionNumber + 1} of {Questions.length}:</div>
                        <h2 className="question">{Questions[questionNumber]["question"]}</h2>
                        <div className="answerOptions">
                            <ul className="answerOptions">
                                <li className={listClassName[0]} onClick={(e) =>
                                    setListClassName(["answerOptionSelected", "answerOptions", "answerOptions", "answerOptions"])}>
                                    <label className='radioCustomLabel'>
                                        <input type="radio"
                                            className="radioCustomButton"
                                            name="myRadio"
                                            value="A"
                                            checked={answer === "A"}
                                            onClick={(e) => setAnswer(e.target.value)} />
                                        {Questions[questionNumber]["A"]}
                                    </label>
                                </li>
                                <li className={listClassName[1]} onClick={(e) =>
                                    setListClassName(["answerOption", "answerOptionSelected", "answerOptions", "answerOptions"])}>
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
                                <li className={listClassName[2]} onClick={(e) =>
                                    setListClassName(["answerOptions", "answerOptions", "answerOptionSelected", "answerOptions"])}>
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
                                <li className={listClassName[3]} onClick={(e) =>
                                    setListClassName(["answerOptions", "answerOptions", "answerOptions", "answerOptionSelected"])}>
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

                        <div className='container'>
                            <div className='center'>
                                {Questions.length - 1 === questionNumber
                                    ? <Button variant="contained" disableElevation onClick={handleSubmit}>End Exam</Button>
                                    : <Button variant="contained" disableElevation onClick={handleNext}>Next Question</Button>}
                            </div>
                        </div>
                    </div>
                </div>

                // Page before and after starting the exam 
                : <div className="container result">
                    <h1>Exam: {Exam[0]["examName"]}</h1>
                    <p>Exam: {Exam[0]["examDescriprion"]}</p>

                    {/*  Page after exam has ended */}
                    {examEnded
                        ? <div>Exam Completed!       Your Mark is {mark} / 10</div>

                        // Page before exam starts
                        : <div>
                            <p>For this exam you need to answer {Questions.length} questions in {Exam[0]["Time"]} minutes!</p>
                            <Button variant="contained" disableElevation onClick={() => setStart(!start)}>Let's Start</Button>
                        </div>}
                </div>

            }

        </>
    );
};

export default Exam;