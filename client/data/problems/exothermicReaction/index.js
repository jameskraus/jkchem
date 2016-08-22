import React from 'react'

// Topic Data
import * as topics from '../../Topics.js'

const syntheis1 = {
    id: 'exothermicReaction',
    prompt: <p>
        Assuming an overall exothermic reaction, which of the following reaction diagrams correspond to the reaction in the box?
    </p>,
    explanation:
        <div>
            <p>
                For this reaction, you must know that Azide (N<sub>3</sub><sup>+</sup>) is a strong nucleophile and a weak base.
                A strong nucleophile will be expected to undergo an Sn2-style reaction. Answer A is eliminated because
                it is endothermic (among other reasons). Since Sn2 reactions are concerted, there should only be one
                step in the reaction and one intermediate, leaving answer B as the correct answer. Answers C and D both
                have two intermediates, indicating two different steps, which is characteristic of Sn1 or E1 reactions,
                but not Sn2.
            </p>
        </div>,
    topic: topics.SUBSTITUTIONELIMINATION,
    graphic: <img src={require('./graphic.svg')} />,
    answers: [
        {choiceId:'A',content:<img src={require('./answers/1.svg')} />},
        {choiceId:'B',content:<img src={require('./answers/3.svg')} />},
        {choiceId:'C',content:<img src={require('./answers/2.svg')} />},
        {choiceId:'D',content:<img src={require('./answers/4.svg')} />}
        ],
    correctAnswer: 'B'
}

export default syntheis1