import React, {PropTypes} from 'react';
import {Link} from 'react-router'

import style from './TopicMenuItem.scss'



class TopicMenuItem extends React.Component {

    onHover(){

    }

    render() {
        const {url, title, questionCount, isCurrent} = this.props
        return (
            <li>
                <Link to={url} className={isCurrent?style.current:style.menuitem}>
                    <div className={style.title} >{title}</div>
                    <div className={style.problemCount}> {questionCount} Problem{questionCount>1?'s':''}</div>
                </Link>
            </li>
        );
    }
}


TopicMenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    questionCount: PropTypes.number.isRequired,
    isCurrent: PropTypes.bool.isRequired
}

export default TopicMenuItem;
