import React, {PropTypes} from 'react';
import {Link} from 'react-router'

import style from './Header.scss'
import Logo from '../../icons/jklogo.svg'

const Header = () => {
    return (
        <header>
            <Link to="/" className={style.header}>
                <Logo className={style.logo}/>
                {/*<img className={style.logo} src={require('../../images/jklogo.svg')}/>*/}
                <h1 className={style.title}>
                    <span>James Kraus</span>  <span className={style.ochem}>Organic Chemistry</span>
                </h1>
            </Link>
        </header>
    )
}

Header.propTypes = {}

export default Header;
