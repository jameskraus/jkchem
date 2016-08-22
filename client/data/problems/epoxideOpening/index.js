import React from 'react'

// Topic Data
import * as topics from '../../Topics.js'

const epoxideopening = {
    id: 'epoxideOpening',
    prompt: <p>
        What is the product when this epoxide reacts with H<sub>3</sub>O<sup>+</sup>?
    </p>,
    explanation:
        <div>
            <p>
                For this question, you must understand the reaction mechanism for the acid catalyzed epoxide opening
                and the meaning of radiolabeled elements. Radiolabeling  an element, such as 18O, is a way of keeping
                track of which oxygen is which. After the epoxide is protonated, water in solution will attack at the
                most substituted carbon.
            </p>
            <img src={require('./explanation/mechanism.png')} />
            <p>
                Because the non-radiolabeled oxygen attaches to the most substituted carbon, choices A and D are
                eliminated. The water cannot attack on top of the bridge due to steric hindrance, so it must sneak
                underneath and perform a “backside” attack (also known as an Sn2 attack). This backside attack will
                cause the stereochemistry of the attacked carbon to flip. Answer choice C correctly represents this
                inversion of stereochemistry.
            </p>
        </div>,
    topic: topics.NUCLEOPHILICADDITION,
    graphic: <img src={require('./graphic.svg')} />,
    answers: [
        {choiceId:'A',content:<img src={require('./answers/1.svg')} />},
        {choiceId:'B',content:<img src={require('./answers/2.svg')} />},
        {choiceId:'C',content:<img src={require('./answers/3.svg')} />},
        {choiceId:'D',content:<img src={require('./answers/4.svg')} />}
        ],
    correctAnswer: 'C'
}

export default epoxideopening