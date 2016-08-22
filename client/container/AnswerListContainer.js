import React, {PropTypes} from 'react';
import {connect} from 'react-redux'
import {selectAnswer, resetCheckedProblem} from '../actions'
import AnswersList from '../components/AnswersList/AnswersList'


//
//  {
// problemId,
//     answer
// }
//
function mapStateToProps(state, ownProps){
    const selectedAnswerForProblem = state.selectedAnswers.find((answer)=>(answer.problemId === ownProps.problemId))
    const selectedAnswer = selectedAnswerForProblem !== undefined ? selectedAnswerForProblem.answer : undefined

    const correctAnswer = state.problems.find( (problem) => (problem.id === ownProps.problemId ) ).correctAnswer
    //Finds out whether or not the current problem is checked
    const answerIsChecked = state
            .checkedAnswers
            .findIndex( (problemId) => (problemId === ownProps.problemId ) ) !== -1
    return {
        selectedAnswer,
        correctAnswer,
        answerIsChecked
    }
}



function mapDispatchToProps(dispatch, ownProps){
    const onAnswerClick = (answer) =>{
        dispatch(resetCheckedProblem(ownProps.problemId))
        dispatch(selectAnswer(ownProps.problemId, answer.choiceId ))
    }
    return {
        onAnswerClick
    }
}

const AnswerListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AnswersList)

AnswerListContainer.propTypes = {
    problemId: PropTypes.string.isRequired
}

export default AnswerListContainer