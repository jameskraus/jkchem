import {SELECT_ANSWER} from '../actions'

export function questionHasSelectedAnswer(state, problemId){
    const foundAnswerIndex = state.findIndex((problemAnswer)=>(problemAnswer.problemId === problemId))
    return ( foundAnswerIndex !== -1 )
}

/**
 *
 * @param {Array} state
 * @param {Object} action
 * @param action.type
 * @param action.problemId
 * @param action.answer
 */
function setAnswer( state, action ){

    const {problemId, answer} = action

    if ( questionHasSelectedAnswer(state, problemId) ){
        // Not yet defined, add the problemAnswer

        return [
            ...state.filter( (problemAnswer)=>(problemAnswer.problemId !== problemId)),
            {
                problemId,
                answer
            }
        ]

    } else {
        return [
            ...state,
            {
                problemId,
                answer
            }
        ]

    }
}

export default function selectedAnswers ( state = [], action ){
    if (action.type === SELECT_ANSWER){
        return setAnswer(state, action)
    }

    return state;
}