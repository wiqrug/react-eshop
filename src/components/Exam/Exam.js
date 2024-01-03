// src/components/Certificates/Certificates.js
import { React, useEffect, useState } from 'react';
import './Exam.css';
import { Link, useParams } from 'react-router-dom';

const Exam = () => {
    const [start, setStart] = useState(false)
    const [answers, setAnswers] = useState([])
    const [answer, setAnswer] = useState("")
    const { id } = useParams()

    const questions = ["Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",]

    const correctAnswers = ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A"]

    const [questionNumber, setQuestionNumber] = useState(0)

    // useEffect(
    //     s
    //     ,questionNumber)

    const handleNext = () => {
        if (answer != "") {
            //Update Answers and move to next question
            setAnswers([...answers, answer])
            setQuestionNumber(questionNumber + 1)

            //Reset the answer value
            setAnswer("")
        }
    }

    //need to fix the unupdated array on last submit
    const handleSubmit = () => {
        // console.log("handlesubmit")
        handleNext()
        // console.log("answers: " + answers)
        // console.log("Correctanswers: " + correctAnswers)

        let count = 0;
        for (let i = 0; i <= correctAnswers.length - 1; i++) { 
            // console.log("i: "+ i)
            if(correctAnswers[i] === answers[i]) 
            {
                // console.log(answers[i])

                count++
            }
        }

        // console.log(count)
        console.log("your score is "+count + " out of " + correctAnswers.length)
    }


    return (
        <>
            <h1>Afou xalia tha grapseis</h1>
            <h1>re</h1>
            {start ?
                <div>
                    <h1>Question {questionNumber + 1}:</h1>
                    <p>{questions[questionNumber]}</p>
                    <div>
                        <label>
                            <input type="radio"
                                name="myRadio"
                                value="A"
                                checked={answer === "A"}
                                onChange={(e) => setAnswer(e.target.value)} />
                            Option 1
                        </label>

                        <label>
                            <input type="radio"
                                name="myRadio"
                                value="B"
                                checked={answer === "B"}
                                onChange={(e) => setAnswer(e.target.value)} />
                            Option 2
                        </label>

                        <label>
                            <input type="radio"
                                name="myRadio"
                                value="C"
                                checked={answer === "C"}
                                onChange={(e) => setAnswer(e.target.value)} />
                            Option 3
                        </label>

                        <label>
                            <input type="radio"
                                name="myRadio"
                                value="D"
                                checked={answer === "D"}
                                onChange={(e) => setAnswer(e.target.value)} />
                            Option 4
                        </label>
                    </div>
                    <h3>Attention: Cannot go back to previous questions!!</h3>

                    {correctAnswers.length - 1 === questionNumber
                        ? <button onClick={handleSubmit}>End Exam</button>
                        : <button onClick={handleNext}>Next Question</button>}

                    {/* <h4>answer: {answer}</h4> */}
                </div>
                : <div>
                    <h1>Exam: Exam name</h1>
                    <p>For this exam you need to answer 10 questions in 60 minutes!</p>
                    <button onClick={() => setStart(!start)}>Let's Start</button>
                </div>
            }
        </>
    );
};

export default Exam;
