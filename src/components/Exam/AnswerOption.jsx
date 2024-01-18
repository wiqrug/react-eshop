import React, { useContext } from "react";
import "./AnswerOption.css";
import AnswerOptionContext from "./AnswerOptionContext";

// Make the new array which is going to replace the old one in answer option
const newClassNameArray = (i) => {
  let array = ["", "", "", ""];
  array[i] = "selected";
  return array;
};

const AnswerOption = ({ index, question }) => {
  // Configute which answer letter is this index
  let answerOption;
  switch (index) {
    case 0:
      answerOption = "a";
      break;
    case 1:
      answerOption = "b";
      break;
    case 2:
      answerOption = "c";
      break;
    case 3:
      answerOption = "d";
      break;
  }

  const { answer, setAnswer, answerOptionClassName, setAnswerOptionClassName } =
    useContext(AnswerOptionContext);

  return (
    <li
      className={`answerOption ${answerOptionClassName[index]}`}
      onClick={() => setAnswerOptionClassName(newClassNameArray(index))}
    >
      <label className="radioCustomLabel">
        <input
          type="radio"
          className="radioCustomButton"
          name="myRadio"
          value={answerOption}
          checked={answer === answerOption}
          onChange={(e) => setAnswer(e.target.value)}
        />
        {question}
      </label>
    </li>
  );
};

export default AnswerOption;
