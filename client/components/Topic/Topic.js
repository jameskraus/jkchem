import React, {PropTypes} from 'react';

import Question from '../Question/Question'

const Topic = ({title, problems}) => {

    return (
        <div>
            <h2>{title}</h2>
            {
                problems.map( (problem, index)=>(
                    <div key={index}>
                        <h3> Problem {index + 1} </h3>
                        <Question {...problem} />
                    </div>
                ))
            }
        </div>
    )
}

Topic.propTypes = {
    title: PropTypes.string.isRequired,
    problems : PropTypes.arrayOf(PropTypes.shape(Question.propTypes)).isRequired
}

export default Topic;
