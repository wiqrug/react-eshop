import React, { useEffect, useState, useMemo } from 'react'
import './Exam.css'
import { Button } from '../mui'
import Timer from './Timer'
import AnswerField from './AnswerField'
import AnswerOptionContext from './AnswerOptionContext';
import TimerContext from './TimerContext';

const Exam = () => {
    const Exam = [
        {
            examName: "Exam Name",
            examDescriprion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            Time: 10
        }]

    const dummyAnswer = (question) => ({
        question,
        A: "A",
        B: "B",
        C: "C",
        D: "D",
        correctAnswer: "A",
    })

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
            {question: "Lorem IpLorem Ipsum is simply dummy texLorem IpLorem Ipsum is simply dummy text of the printing and typesetting industry.printing and typesetting industry.Lorem IpLorem Ipsum is simply dummy text of the printing and typesetting industry.printing and typesetting industry.t of the printing and typesetting industry.printing and typesetting industry.",
            A: "Lorem IpLorem Ipsum is simply dummy text of the printing and typesetting industry.printing and typesetting industry.Lorem IpLorem Ipsum is simply dummy text of the printing and typesetting industry.printing and typesetting industry.Lorem IpLorem Ipsum is simply dummy text of the printing and typesetting industry.printing and typesetting industry.",
            B: "Lorem IpLorem Ipsum is simply dummy text of the printing and typesetting industry.printing and typesetting industry.Lorem IpLorem Ipsum is simply dummy text of the printing and typesetting industry.printing and typesetting industry.Lorem IpLorem Ipsum is simply dummy text of the printing and typesetting industry.printing and typesetting industry.",
            C: "Lorem IpLorem Ipsum is simply dummy text of the printing and typesetting industry.printing and typesetting industry.",
            D: "Lorem IpLorem Ipsum is simply dummy text of the printing and typesetting industry.printing and typesetting industry.Lorem IpLorem Ipsum is simply dummy text of the printing and typesetting industry.printing and typesetting industry.Lorem IpLorem Ipsum is simply dummy text of the printing and typesetting industry.printing and typesetting industry.Lorem IpLorem Ipsum is simply dummy text of the printing and typesetting industry.printing and typesetting industry.Lorem IpLorem Ipsum is simply dummy text of the printing and typesetting industry.printing and typesetting industry.Lorem IpLorem Ipsum is simply dummy text of the printing and typesetting industry.printing and typesetting industry.Lorem IpLorem Ipsum is simply dummy text of the printing and typesetting industry.printing and typesetting industry.Lorem IpLorem Ipsum is simply dummy text of the printing and typesetting industry.printing and typesetting industry.",
            correctAnswer: "D"}
        ],
        // Create array once on initial render, never re-create the object
        []
    )

    const [start, setStart] = useState(false)
    const [examEnded, setExamEnded] = useState(false)
    const [mark, setMark] = useState()
    const [answers, setAnswers] = useState([])
    const [answerOptionClassName, setAnswerOptionClassName] = useState(["", "", "", ""])
    const [answer, setAnswer] = useState("")
    const [questionNumber, setQuestionNumber] = useState(0)
    const [questionClassName, setQuestionClassName] = useState("")
    const [answerFieldClassName, setAnswerFieldClassName] = useState("")
    const [timeWhenExamStarted, setTimeWhenExamStarted] = useState()

    // Evaluate Mark
    useEffect(() => {

        let count = 0

        // For each question check if the answeer is correct
        for (let i = 0; i < Questions.length; i++) {
            if (Questions[i]["correctAnswer"] === answers[i]) {
                count++
            }
        }

        // Set Mark
        setMark(Math.round(100 * count / Questions.length))
    }, [examEnded])


    // Handles submit button click
    const handleNext = () => {
        if (answer !== "") {
            setAnswers([...answers, answer])                // Update Answers 
            setAnswer("")                                   // Reset the answer value
            setAnswerFieldClassName("answerField-hidden")   // Add a class to fade out the current answer options
            setQuestionClassName("question-hidden")         // Add a class to fade out the current question

            // Set a timeout to move to the next question after the fade-out effect
            setTimeout(() => {
                setQuestionNumber(questionNumber + 1)       // Move to next question
                setAnswerFieldClassName("")                 // Remove the fade-out class for the new answer options
                setQuestionClassName("")                    // Remove the fade-out class for the new question
                setAnswerOptionClassName(["", "", "", ""])  // Restart the style of the answer options
            }, 500);                                        // Adjust the duration based on your transition duration
        }
    }

    // Handles submit button click
    const handleSubmit = () => {
        handleNext()            // Handle Next Question
        setStart(false)         // Change Star to false 
        setExamEnded(true)      // Change ExamEnded to true 
    }

    // This functions is called int Timer Child Component when the timer hits zero
    const timeEnded = () => {
        setStart(false)
        setExamEnded(true)
    }

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

                        {/* <Timer /> */}
                       <TimerContext.Provider value={timeEnded}>
                            <Timer examTimeLimit={Exam[0].Time} examStartedTime={timeWhenExamStarted} />
                        </TimerContext.Provider>
                    </div>

                    {/* AnswerField */}
                    <AnswerOptionContext.Provider value={{ answer, setAnswer, answerOptionClassName, setAnswerOptionClassName }}>
                        <AnswerField answerOptions={Questions[questionNumber]} answerFieldClassName={answerFieldClassName} />
                    </AnswerOptionContext.Provider>

                    <div className='container'>
                        <div className='center'>
                            {Questions.length - 1 === questionNumber
                                ? <Button variant="contained" disableElevation onClick={handleSubmit}>End Exam</Button>
                                : <Button variant="contained" disableElevation onClick={handleNext}>Next Question</Button>}
                        </div>
                    </div>

                </div>

                // Page before and after starting the exam 
                : <div className="container result">
                    <h1>{Exam[0].examName}</h1>
                    <hr />
                    <p>About the exam:</p>
                    <p>{Exam[0].examDescriprion}</p>


                    {/*  Page after exam has ended */}
                    {examEnded
                        ? <div>Exam Completed! Your Mark is {mark} %</div>

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
    )
}

export default Exam
