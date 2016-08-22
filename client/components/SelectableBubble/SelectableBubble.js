import React, {PropTypes} from 'react';

import style from './SelectableBubble.scss'

const SelectableBubble = ({content, selected}) => {
    const bubbleClass = selected ?  style.selected : style.bubble
    return (
        <div className={bubbleClass}>
            {content}
        </div>
    )
}

SelectableBubble.propTypes = {
    content: PropTypes.node.isRequired,
    selected: PropTypes.bool.isRequired
}

export default SelectableBubble;
