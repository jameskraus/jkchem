export default function topics(state = [] ) {
    if ( state.topics === 'undefined' ){
        return {
            ...state,
            topics: []
        }
    }
    return state;
}