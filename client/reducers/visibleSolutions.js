import {TOGGLE_SOLUTION} from '../actions/'

/**
 *
 * @param state
 * @param action
 * @param action.problemId The ID of the problem to show
 * @returns {*[]}
 */
function show_solution( state, action ){
    return [
        ...state,
        action.problemId
    ]
}

/**
 *
 * @param state
 * @param action
 * @param action.problemId The ID of the problem to hide
 * @returns {*}
 */
function hide_solution( state, action ){
    return state.filter( (solutionId) => ( solutionId !== action.problemId ))
}

/**
 *
 * @param state
 * @param action
 * @param action.problemId The ID of the problem to toggle
 */
function toggle_solution( state, action ){
    const foundSolution = state.find(
        (solutionId) => ( solutionId === action.problemId )
    );

    if ( foundSolution === undefined ){
        // Solution is currently not visible
        return show_solution( state, action )
    } else {
        // Solution is visible
        return hide_solution( state, action )
    }

}

/**
 *
 * @param state The state of the visible solutions
 *
 * @param action A redux action
 * @param action.type The type of the action
 * @returns {*}
 */
export default function visibleSolutions(state = [], action ) {

    if ( action.type === TOGGLE_SOLUTION ){
        const finalState = toggle_solution( state, action );
        return finalState
    }

    return state;
}