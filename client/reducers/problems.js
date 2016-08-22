export default function problems(state = [] ) {
    if ( state.problems === 'undefined' ){
        return {
            ...state,
            problems: []
        }
    }
    return state;
}