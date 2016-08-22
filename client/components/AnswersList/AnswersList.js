import React, {PropTypes} from 'react';

import QuestionAnswer from '../QuestionAnswer/QuestionAnswer'
import style from './AnswersList.scss'

const AnswersList = ({answers, selectedAnswer, onAnswerClick, correctAnswer, answerIsChecked}) => {
    return (
        <ol className={style.list}>
            {answers.map((answer, index)=>{
                const selected = selectedAnswer === answer.choiceId
                return (
                <QuestionAnswer
                    onClick={onAnswerClick.bind(this, answer)}
                    index={answer.choiceId}
                    key={answer.choiceId}
                    answer={answer.content}
                    selected={selected}
                    checked={answerIsChecked}
                    isCorrectAnswer={selectedAnswer ? answer.choiceId === correctAnswer : false }
                />
            )})}
        </ol>
    )
}

AnswersList.propTypes = {
    answers: PropTypes.arrayOf(PropTypes.shape({
        choiceId: PropTypes.string.isRequired,
        content: PropTypes.node.isRequired
    })).isRequired,
    selectedAnswer: PropTypes.string,
    onAnswerClick: PropTypes.func.isRequired,
    correctAnswer: PropTypes.string.isRequired,
    answerIsChecked: PropTypes.bool.isRequired
}

export default AnswersList;
