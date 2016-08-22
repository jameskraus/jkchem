import React, {PropTypes} from 'react';
import {connect} from 'react-redux'
import {checkProblem} from '../actions'
import {questionHasSelectedAnswer} from '../reducers/selectedAnswers'

const AnswerButton = ({onToggleCheck, isEnabled}) => {
    const disabled = !isEnabled ? {disabled: 'disabled'} : {}
    return (
        <button onClick={onToggleCheck} {...disabled}>
            Check Answer
        </button>
    )
}

AnswerButton.propTypes = {
    onToggleCheck: PropTypes.func.isRequired
}

function mapStateToProps(state, ownProps){

    const {problemId} = ownProps

    const isEnabled = questionHasSelectedAnswer(state.selectedAnswers, problemId)

    return {
        isEnabled
    }
}

function mapDispatchToProps(dispatch, ownProps){
    return {
        onToggleCheck: ()=>{
            dispatch( checkProblem(ownProps.problemId) )
        }
    }
}

const CheckAnswerButtonWrapper = connect(
    mapStateToProps,
    mapDispatchToProps
)(AnswerButton)

CheckAnswerButtonWrapper.propTypes = {
    problemId: PropTypes.string.isRequired
}

export default CheckAnswerButtonWrapper;
