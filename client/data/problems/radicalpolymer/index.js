import React from 'react'

// Topic Data
import * as topics from '../../Topics.js'

const radicalpolymer = {
    id: 'radicalpolymer',
    prompt: 'Which is a plausible intermediate for the polymerization reaction shown?',
    explanation:
        <div>
            <p>First, you have to know that the peroxide, CH3OOH will result in a radical polymerization, excluding
                answer B as a possible intermediate.
            </p>
            <p>
                Numbering out the polymer, we can predict what the starting alkene looked like by drawing C-1 and C-2,
                every substituent attached to them, and placing a double bond between C-1 and C-2:
            </p>
            <img src={require('./explanation/numbered-polymer.svg')} />
            <p>
                Then, by propagating a radical with this starting alkene, we get the intermediate from answer D.
            </p>
            <img src={require('./explanation/propagation-step.svg')} />
            <p>
                Answer choice C would have required a double bond between carbon 1 and the methyl attached to carbon 1.
            </p>
            <p>
                Answer choice A would polymerize to form an alkene polymer, while the boxed polymer is an alkane, so
                answer A would not work.
            </p>
        </div>,
    topic: topics.POLYMERIZATION,
    graphic: <img src={require('./graphic.svg')} />,
    answers: [
        {choiceId:'A',content:<img src={require('./answers/1.svg')} />},
        {choiceId:'B',content:<img src={require('./answers/2.svg')} />},
        {choiceId:'C',content:<img src={require('./answers/3.svg')} />},
        {choiceId:'D',content:<img src={require('./answers/4.svg')} />}
    ],
    correctAnswer: 'D'
}

export default radicalpolymer