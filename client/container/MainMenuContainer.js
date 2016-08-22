import MainMenu from '../components/MainMenu/MainMenu'
import {connect} from 'react-redux'

const mapStateToProps = ( state , ownProps ) => {

    const exampleQuestionTopic = {
        id: 'blah',
        title: 'Blah!',
        questionCount: 4
    }

    let {problems} = state

    let topics = new Set()
    let topicQuestionCount = new WeakMap()

    for( var i = 0; i< problems.length ; i++){
        let problem = problems[i]
        let problemTopic = problem.topic

        topics.add( problemTopic )

        if(topicQuestionCount.has(problemTopic)){
            let questionCount = topicQuestionCount.get(problemTopic)
            questionCount++
            topicQuestionCount.set(problemTopic, questionCount )
        } else {
            topicQuestionCount.set(problemTopic, 1)
        }
    }


    const menuItems = [...topics].map( (topic, index)=>{
        return (
                {
                    id: topic.id,
                    'title': topic.title,
                    'questionCount': topicQuestionCount.get(topic)
                }
            )
    })
    return {menuItems};
}

const MainMenuContainer = connect(
    mapStateToProps
)(MainMenu)

export default MainMenuContainer