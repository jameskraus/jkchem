import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, Redirect } from 'react-router'

// Redux provider and store
import { Provider } from 'react-redux'
import Store, {history} from './store'

// Components
import App from './components/App/App'
import Index from './components/Index/Index'

//Containers
import topicContainer from './container/TopicContainer'
import AllQuestionsContainer from './container/AllQuestionContainer'
import mainMenuContainer from './container/MainMenuContainer'
import NotFound from './components/NotFound/NotFound'

// Import styles
import css from './styles/index.scss';



const router = (
    <Provider store={Store}>
        <Router history={history}>
            <Redirect from="/" to="/jkchem/" />
            <Redirect from="/topic/:topicId(/)" to="/jkchem/topic/:topicId(/)" />
            <Redirect from="all-problems(/)" to="/jkchem/all-problems(/)" />
            <Route path="/jkchem/" component={App}>
                <IndexRoute components={{menu: mainMenuContainer}}/>
                <Route path = "all-problems(/)" components={{content: AllQuestionsContainer, menu: mainMenuContainer}}/>
                <Route path = "topic/:topicId(/)" components={{content: topicContainer, menu: mainMenuContainer}}/>

                <Route path = "*" components={{content: NotFound, menu: mainMenuContainer}}/>
            </Route>
        </Router>
    </Provider>
);

document.getElementById('root').setAttribute('class', css.root)

ReactDOM.render(router, document.getElementById('root'));

