import React, { useContext, useEffect, useState } from 'react';
import './Timer.css'
import { TimerContext } from './Exam';

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

// PROPS: {examTimeLimit}, timeWhenExamStarted                          DONE
// start and examEnded need to be updated from here to parent
const Timer = ({ examTimeLimit, examStartedTime }) => {

    // Additional state for border color
    const [borderColor, setBorderColor] = useState('green')

    const timerEnded = useContext(TimerContext)

    // Function to calculate time left
    const calculateTimeLeft = (examtimelimit) => {

        // Initiate time left
        let timeLeft = {}

        // Calculate time difference
        var fixedTime = new Date(examStartedTime)
        // console.log("FIXED:"+ fixedTime)
        // console.log("FIXEDMinituesFGET:"+ fixedTime.getMinutes())
        // // console.log("FIXEDsET:"+ fixedTime.setMinutes(fixedTime.getMinutes() + { examTimeLimit }))
        // console.log("TYPE+EXAMTIME:"+ typeof(fixedTime.getMinutes() + 1))
        // console.log("add:"+ (fixedTime.getMinutes() + 1))
        // console.log("set:"+ fixedTime.setMinutes(fixedTime.getMinutes() + 1))



        // fixedTime = fixedTime.setMinutes(fixedTime.getMinutes() + 1,0,0)
        fixedTime.setHours(fixedTime.getHours(),fixedTime.getMinutes()+examtimelimit,0,0);
        // console.log("fixed"+fixedTime.setMinutes(fixedTime.getMinutes()))
        const difference = fixedTime - new Date()
        console.log("FIXED:"+ fixedTime)
        console.log("DIFFERENCE:"+ difference)

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
            // setStart(false)
            // setExamEnded(true)
            timerEnded()
        }

        return timeLeft
    }







    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft({examTimeLimit}))


    useEffect(() => {
        console.log("useEffect entered")
        // Calculate initial time left
        const initialTimeLeft = calculateTimeLeft({examTimeLimit});
        console.log("time left:"+ timeLeft["minutes"]+":"+timeLeft["seconds"])
        // Update the time left state
        setTimeLeft(initialTimeLeft);
        console.log("time left2:"+ timeLeft["minutes"]+":"+timeLeft["seconds"])

        // Set interval to update time every 1000ms
        const timerInterval = setInterval(() => {
            setTimeLeft(calculateTimeLeft({examTimeLimit}));
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