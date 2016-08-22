import React, {PropTypes} from 'react';
import {Link} from 'react-router'
import TopicMenuItem from '../TopicMenuItem/TopicMenuItem'

import style from './MainMenu.scss'

const MainMenu = ({menuItems, params}) => {
    return (
        <div className={style.menuContainer}>

            <ul className={style.menu}>
                <li className={style.menuTitle}>
                    <Link to={'/all-problems'} ><h3>
                        All Problems
                    </h3></Link>
                </li>
                <li className={style.menuTitle}>
                    <h3>
                        Problems by Topic
                    </h3>
                </li>
                {
                    menuItems.map((menuItem, index)=>(
                        <TopicMenuItem
                            title={menuItem.title}
                            url={`/topic/${menuItem.id}/`}
                            questionCount={menuItem.questionCount}
                            isCurrent={params.topicId? menuItem.id === params.topicId: false}
                            key={index}
                        />
                    ))
                }
            </ul>
        </div>
    )
}

MainMenu.propTypes = {
    menuItems: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        questionCount: PropTypes.number.isRequired
    })),
    params: PropTypes.shape({
            topicId: PropTypes.string
        }
    ).isRequired
}

export default MainMenu;
