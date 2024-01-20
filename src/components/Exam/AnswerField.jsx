import React from "react";
import "./AnswerField.css";
import AnswerOption from "./AnswerOption";

const AnswerField = ({ answerOptions, answerFieldClassName }) => {
  return (
    <ul className={`answerField ${answerFieldClassName}`}>
      <AnswerOption index={0} question={answerOptions.answerA} />
      <AnswerOption index={1} question={answerOptions.answerB} />
      <AnswerOption index={2} question={answerOptions.answerC} />
      <AnswerOption index={3} question={answerOptions.answerD} />
    </ul>
  );
};
export default AnswerField;
