import React, {PropTypes} from 'react';

import Topic from '../Topic/Topic'
import Question from '../Question/Question'

const AllQuestions = ({problems}) => {

    console.log(problems)

    let topicsMap = new Map();

    problems.map( (problem)=>{
        if (problem.hasOwnProperty('topic')){
            const topicProblems = topicsMap.get( problem.topic ) || []
            console.log('starting topicsProblems', topicProblems)
            topicProblems.push(problem);
            const newTopicProblems = topicProblems
            console.log('new topic problems', newTopicProblems)
            topicsMap.set( problem.topic, newTopicProblems )
        } else {
            console.error('Problem did not have topic set')
        }
    })

    let topics = [...topicsMap.keys()];

    console.log('topicsMap', topicsMap)
    console.log('topics', topics)

    return (
        <div>
            {
                topics.map( (topic) => (<Topic title={topic.title} problems={topicsMap.get(topic)}/>))
            }
        </div>
    )
}

AllQuestions.propTypes = {
    problems: PropTypes.arrayOf(PropTypes.shape(Question.propTypes)).isRequired
}

export default AllQuestions;
