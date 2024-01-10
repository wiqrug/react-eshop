import React, { useState } from 'react';
import './AnswerField.css'
import AnswerOption from './AnswerOption'

const AnswerField = ({ answerOptions, answerFieldClassName }) => {

    const [answerOptionClassName, setAnswerOptionClassName] = useState(["", "", "", ""])

    return (
        // <div className={`answerField ${answerFieldClassName}`}>
            <ul className={`answerField ${answerFieldClassName}`}>
                <AnswerOption index={0} question={answerOptions.A} />

                <AnswerOption index={1} question={answerOptions.B} />

                <AnswerOption index={2} question={answerOptions.C} />

                <AnswerOption index={3} question={answerOptions.D} />
            </ul>
        // </div>
    );
}
export default AnswerField