import {connect} from 'react-redux'
import {PropTypes} from 'react'
import {toggleSolution} from '../actions'
import Explanation from '../components/Explanation/Explanation'

// needs onToggleExplanation, explanation, explanationVisible

const mapStateToProps = (state, ownProps) => {
    const {id, explanation} = ownProps

    return {
        explanation,
        explanationVisible: state.visibleSolutions.includes(id)
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onToggleExplanation: () => {
            dispatch(toggleSolution(ownProps.id))
        }
    }
}

const ExplanationContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Explanation)

ExplanationContainer.propTypes = {
    id: PropTypes.string.isRequired,
    explanation: PropTypes.node.isRequired
}

export default ExplanationContainer