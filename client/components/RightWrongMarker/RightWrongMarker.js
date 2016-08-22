import React, {PropTypes} from 'react';
/**
 *
 * @TODO Fix importing these icons. Currently returns an error. https://github.com/jameskraus/jkchem/issues/1
 */
import Correct   from '../../icons/correct.svg'
import Incorrect from '../../icons/incorrect.svg'


const MarkerStyle = {
    width: '1.5em',
    height: '1.5em',
    display: 'block',
    alignSelf: 'center'
}


class RightWrongMarker extends React.Component {


    render() {

        const {isCorrect} = this.props;

        return (
            isCorrect ? <Correct style={MarkerStyle}/> : <Incorrect style={MarkerStyle}/>
        );
    }
}

RightWrongMarker.propTypes = {
    isCorrect: PropTypes.bool.isRequired,
}

export default RightWrongMarker;
