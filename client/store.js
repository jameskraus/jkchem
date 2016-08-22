import { createStore, compose } from 'redux'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

//Import root reducer
import rootReducer from './reducers/index'

import problems from './data/Problems'

// Set up default state of store
const defaultState = {
    problems
};

// Allows use of redux dev tools
const enhancers = compose(
    window.devToolsExtension ? window.devToolsExtension() : (f) => f
);

const store = createStore(rootReducer, defaultState, enhancers);

export const history = syncHistoryWithStore(browserHistory, store);

// Allows for MHR of reducers
if(module.hot) {
    module.hot.accept('./reducers/', () => {
        const nextRootReducer = require('./reducers/index').default
        store.replaceReducer(nextRootReducer);

    })
}

export default store;