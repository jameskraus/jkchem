import React, {PropTypes} from 'react';

import SelectableBubble from '../SelectableBubble/SelectableBubble'
import RightWrongMark from '../RightWrongMarker/RightWrongMarker'

import style from './QuestionAnswer.scss'

/**
 *
 * @param answer
 * @param index
 * @param selected
 * @param onClick
 * @param checked Whether the question has been checked
 * @param isCorrectAnswer Whether the answer is "correct"
 * @returns {XML}
 * @constructor
 */
const QuestionAnswer = ({answer, index, selected, checked, onClick, isCorrectAnswer}) => {

    function answerClass(){
        let myclass = style.answer

        if ( checked && selected &&isCorrectAnswer ){
            myclass = style.correct
        } else if ( checked && selected && !isCorrectAnswer ) {
            myclass = style.incorrect
        } else {
            myclass = style.answer
        }

        return `${myclass} ${selected?style.selected:''}`
    }

    return (
        <li className={answerClass()}>
            <QAMark />
            <a className={style.link} onClick={onClick}>
                <div className={style.answerIndex}>{index}.</div>
                <div className={style.answerchoice} >{answer}</div>
                { selected && checked ? <RightWrongMark isCorrect={isCorrectAnswer}/>:'' }
            </a>
        </li>
    )
}

QuestionAnswer.propTypes = {
    index: PropTypes.string.isRequired,
    answer: PropTypes.node.isRequired,
    selected: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    isCorrectAnswer: PropTypes.bool.isRequired,
    checked: PropTypes.bool.isRequired
}

const QAMark = () => {
    return (
        <div className={style.qamark}></div>
    )
}

export default QuestionAnswer;
