import React, { useContext, useEffect, useState } from "react";
import "./Timer.css";
import TimerContext from "./TimerContext";

// Converts int to string with 2 digits
const convert = (n) => {
  n = String(n);
  if (n.length === 1) n = "0" + n;
  return n;
};

const Timer = ({ examTimeLimit, examStartedTime }) => {
  // Additional state for border color
  const [borderColor, setBorderColor] = useState("green");

  const calculateBorderColor = (timeleft) => {
    // Constants for threshold percentage values, exam time must be converted to milliseconds
    const ALERT_THRESHOLD_PERCENTAGE = (15 / 100) * (examTimeLimit * 60 * 1000);
    const WARNING_THRESHOLD_PERCENTAGE =
      (40 / 100) * (examTimeLimit * 60 * 1000);

    // Condition to calculate border color based on time left
    if (timeleft <= ALERT_THRESHOLD_PERCENTAGE) {
      return "red";
    } else if (timeleft <= WARNING_THRESHOLD_PERCENTAGE) {
      return "orange";
    } else {
      return "green";
    }
  };

  const timerEnded = useContext(TimerContext);

  // Function to calculate time left
  const calculateTimeLeft = () => {
    // Initiate time left
    let timeLeft = {};

    // Calculate time difference
    var fixedTime = new Date(examStartedTime);
    fixedTime.setMinutes(fixedTime.getMinutes() + examTimeLimit);
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
      setBorderColor(calculatedBorderColor);
    } else if (difference <= 0) {
      timerEnded();
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(new Date());

  useEffect(() => {
    const initialTimeLeft = calculateTimeLeft(); // Calculate initial time left
    setTimeLeft(initialTimeLeft); // Update the time left state

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
      <span className="clock">
        {timeLeft["hours"]}:{timeLeft["minutes"]}:{timeLeft["seconds"]}
      </span>
    </div>
  );
};

export default Timer;
