import React, { useEffect, useState } from 'react';
import './Timer.css'

const Exam = [
    {
        examName: "Exam Name",
        examDescriprion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        Time: 1
    }]



// Converts int to string with 2 digits
const convert = (n) => {
    n = String(n)
    if (n.length === 1)
        n = '0' + n
    return n
}

const calculateBorderColor = ({ examTimeLimit }, timeLeft) => {
    // Constants for threshold percentage values, exam time must be converted to milliseconds
    const ALERT_THRESHOLD_PERCENTAGE = (15 / 100) * ({ examTimeLimit } * 60 * 1000)
    const WARNING_THRESHOLD_PERCENTAGE = (40 / 100) * ({ examTimeLimit } * 60 * 1000)


    // Function to calculate border color based on time left
    if (timeLeft <= ALERT_THRESHOLD_PERCENTAGE) {
        return 'red'
    } else if (timeLeft <= WARNING_THRESHOLD_PERCENTAGE) {
        return 'orange'
    } else {
        return 'green'
    }
}

// PROPS: {examTimeLimit}, timeWhenExamStarted 
// start and examEnded need to be updated from here to parent
const Timer = ({ examTimeLimit, examStartedTime }) => {
    const [start, setStart] = useState(false)
    const [examEnded, setExamEnded] = useState(false)

    // Additional state for border color
    const [borderColor, setBorderColor] = useState('green')



    // Function to calculate time left
    const calculateTimeLeft = () => {

        // Initiate time left
        let timeLeft = {}

        // Calculate time difference
        let fixedTime = new Date(examStartedTime)
        fixedTime = fixedTime.setMinutes(fixedTime.getMinutes() + { examTimeLimit })
        const difference = fixedTime - new Date()

        // Convert difference to time left
        if (difference > 0) {
            timeLeft = {
                hours: convert(Math.floor((difference / (1000 * 60 * 60)) % 24)),
                minutes: convert(Math.floor((difference / 1000 / 60) % 60)),
                seconds: convert(Math.floor((difference / 1000) % 60)),
            };

            // Update border color based on time left
            const calculatedBorderColor = calculateBorderColor(difference)
            setBorderColor(calculatedBorderColor)

        } else if (difference <= 0) {
            setStart(false)
            setExamEnded(true)
        }

        return timeLeft
    }








    const [timeLeft, setTimeLeft] = useState()

    useEffect(() => {
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
            clearInterval(timerInterval);
        };
    }, []);








    return (
        <div className={`timer ${borderColor}`}>
            <span className="clock">{timeLeft["hours"]}:{timeLeft["minutes"]}:{timeLeft["seconds"]}</span>
        </div>
    );
};

export default Timer;