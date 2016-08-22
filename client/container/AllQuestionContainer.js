import {connect} from 'react-redux'

import AllQuestions from '../components/AllQustions/AllQuestions'

function mapStateToProps(state){
    return {problems: state.problems}
}

const AllQuestionContainer = connect(
    mapStateToProps
)(AllQuestions)

export default AllQuestionContainer