import React from 'react'

// Topic Data
import * as topics from '../../Topics.js'

const syntheis1 = {
    id: 'synthesis1',
    prompt: <p>
        Reagent X will not react with Lucas reagent (HCl, ZnCl<sub>2</sub>) at room temperature,
        but it will react slowly at high temperatures.
        Which of the following reaction sequences could generate reagent X?
    </p>,
    explanation:
        <div>
            <p>
              Since we need to synthesize the hypothetical reagent X,
              we need to check each of the possible syntheses for their product.
              Then, with all the products, we need to determine which could be reagent X.
            </p>
            <p>
                Here are the products after each step of each synthesis:
            </p>
            <img src={require('./explanation/solutions.svg')} />
            <p>
                Since reagent X will react with Lucas reagent, it must be some type of alcohol,
                so answer C is eliminated. Lucas reagent will readily react with tertiary alcohols,
                so choice D is eliminated.
            </p>
            <p>
                While we didn’t cover the mechanism for the Lucas reagent this semester,
                you need to know it goes through an Sn1 mechanism. Sn1 reactions are slow at secondary
                carbons and nearly impossible at primary carbons. Since reagent X requires a lot of heat
                to react at all, it is probably a primary alcohol undergoing an Sn1 reaction. Synthesis A
                is correct because it generates a primary alcohol.
            </p>
        </div>,
    topic: topics.SYNTHESIS,
    answers: [
        {choiceId:'A',content:<img src={require('./answers/1.svg')} />},
        {choiceId:'B',content:<img src={require('./answers/2.svg')} />},
        {choiceId:'C',content:<img src={require('./answers/3.svg')} />},
        {choiceId:'D',content:<img src={require('./answers/4.svg')} />}
        ],
    correctAnswer: 'A'
}

export default syntheis1