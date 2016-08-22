import {CHECK_PROBLEM, RESET_CHECKED_PROBLEM} from '../actions'

/**
 *
 * @param {Array} state
 * @param action
 * @param action.problemId
 */
function checkAnswer(state, action){
    const {problemId} = action
    const foundIndex = state.findIndex( (id) => (problemId === id))

    if (foundIndex === -1){
        // Not found, just append to array
        return [...state, action.problemId]
    } else {
        /// Already in the state, we're good to go
        return state
    }
}

/**
 *
 * @param {Array} state
 * @param action
 */
function resetCheckedAnswer( state, action ){
    const {problemId} = action
    return state.filter((id)=>(problemId !== id))
}

export default function checkedAnswers( state = [], action ){
    switch(action.type){
        case CHECK_PROBLEM:
            return checkAnswer( state, action )
        case RESET_CHECKED_PROBLEM:
            return resetCheckedAnswer(state, action)
        default:
            return state
    }

}