import React, {PropTypes} from 'react';

import style from './Question.scss'

import AnswersList from '../AnswersList/AnswersList'
import AnswerListContainer from '../../container/AnswerListContainer'
import ExplanationContainer from '../../container/ExplanationContainer'
import CheckAnswerButton from '../../container/CheckAnswerButton'

const Question = ({id, prompt, graphic, answers, explanation}) => {

    return (
        <div className={style.question}>
            {prompt}
            <div>{graphic ? graphic : ''}</div>
            <AnswerListContainer problemId={id} answers={answers} />
            <ExplanationContainer id={id} explanation={explanation}/>
            <CheckAnswerButton problemId={id}/>
        </div>
    )
}

Question.propTypes = {
    id: PropTypes.string.isRequired,
    prompt: PropTypes.node.isRequired,
    graphic: PropTypes.node,
    answers: AnswersList.propTypes.answers,
    explanation: PropTypes.node.isRequired
}

export default Question;
