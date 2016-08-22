import React, {PropTypes} from 'react';

import style from './Explanation.scss'

const Explanation = ({onToggleExplanation, explanation, explanationVisible}) => {

    const solutionToggleText = !explanationVisible ? 'Help! Show me the solution' : 'Hide the solution'

    return (
        <div>
            <a className={style.toggle} onClick={onToggleExplanation}>
                { solutionToggleText }
            </a>
            <div className={style.explanation}>
                {
                    explanationVisible ? explanation : ''
                }
            </div>
        </div>
    )
}

Explanation.propTypes = {
    onToggleExplanation: PropTypes.func.isRequired,
    explanation: PropTypes.node.isRequired,
    explanationVisible: PropTypes.bool.isRequired
}

export default Explanation;
