// Root Reducer


import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

import topics from './topics'
import problems from './problems'
import visibleSolutions from './visibleSolutions'
import checkedAnswers from './checkedAnswers'
import selectedAnswers from './selectedAnswers'

const rootReducer = combineReducers(
    {
        selectedAnswers,
        checkedAnswers,
        visibleSolutions,
        problems,
        topics,
        routing: routerReducer
    }
)

export default rootReducer