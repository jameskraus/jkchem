import React from 'react'

// Topic Data
import * as topics from '../../Topics.js'

const syntheis1 = {
    id: 'acetylidesecondaryhalide',
    prompt: <p>
        Which of the following compounds would be a major product of the following reaction?
    </p>,
    explanation:
        <div>
            <p>
                The first step of this reaction would generate an acetylide ion. The acetylide ion is a strong base
                and a strong nucleophile. Given that the leaving group, bromine, is on a secondary carbon, it is more
                likely to undergo an E2 elimination than an Sn2 attack. The elimination would generate the Zeitsev
                product (most substituted double bond) as shown:
            </p>
            <img src={require('./explanation/mechanism.svg')} />

            <p>
                While the most substituted alkene is not an answer choice, acetylene is, so answer D is the correct
                answer.
            </p>
        </div>,
    topic: topics.SUBSTITUTIONELIMINATION,
    graphic: <img src={require('./graphic.svg')} />,
    answers: [
        {choiceId:'A',content:<img src={require('./answers/1.svg')} />},
        {choiceId:'B',content:<img src={require('./answers/2.svg')} />},
        {choiceId:'C',content:<img src={require('./answers/3.svg')} />},
        {choiceId:'D',content:<img src={require('./answers/4.svg')} />}
        ],
    correctAnswer: 'D'
}

export default syntheis1