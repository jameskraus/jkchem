import React from 'react'

import style from './App.scss'

import Index from '../Index/Index'
import Header from '../Header/Header'
import MainMenuContainer from '../../container/MainMenuContainer'

class App extends React.Component {

    render() {

        const {content, menu} = this.props

        return (
            <div>
                <Header />
                <div className={style.container}>
                    {menu}
                    <section className={style.content}>
                        {content || <Index/>}
                    </section>
                </div>
            </div>
        );
    }
}

export default App;
