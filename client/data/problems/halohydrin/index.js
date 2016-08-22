import React from 'react'

// Topic Data
import * as topics from '../../Topics.js'

const halohydrin = {
    id: 'halohydrin',
    prompt: 'What is the major product of the following reaction?',
    explanation:
        <div>
            <p>
                This is a halohydrin formation reaction. First, you have to understand that once the bromonium bridge
                forms on either the top or the bottom of the compound, water will be the nucleophile which attacks and
                opens the bridge, eliminating choice D.
            </p>
            <img src={require('./intermediate.svg')} />
            <p>
                Water must attack the bromonium bridge at the most substituted carbon, eliminating answer A. Because the
                water must attack on the opposite side of the bromonium bridge, it will be trans to bromine in the product,
                so answer choice B must be the correct answer.
            </p>

        </div>,
    topic: topics.ELECTROPHILICADDITION,
    graphic: <img src={require('./graphic.svg')} />,
    answers: [
        {choiceId:'A',content:<img src={require('./answers/1.svg')} />},
        {choiceId:'B',content:<img src={require('./answers/2.svg')} />},
        {choiceId:'C',content:<img src={require('./answers/3.svg')} />},
        {choiceId:'D',content:<img src={require('./answers/4.svg')} />}
    ],
    correctAnswer: 'B'
}

export default halohydrin