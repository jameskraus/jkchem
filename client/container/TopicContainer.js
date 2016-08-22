import Topic from '../components/Topic/Topic'

import {connect} from 'react-redux'

const mapStateToProps = (state, ownProps) => {

    const {topicId} = ownProps.params

    const title = state.problems.map((problem)=>(problem.topic)).find((topic)=>( topic.id === topicId)).title
    const problems = state.problems.filter((problem)=>(problem.topic.id === topicId))

    return {title, problems}
}

const TopicContainer = connect(
    mapStateToProps
)(Topic)

export default TopicContainer