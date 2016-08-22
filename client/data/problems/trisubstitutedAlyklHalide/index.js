import React from 'react'

// Topic Data
import * as topics from '../../Topics.js'

const stereochem1 = {
    id: 'trisubstitutedAlkylHalide',
    prompt: 'The reaction between tert-butyl bromide and NaSCH3 is shown in the box. If the solvent volume was doubled' +
    ' and the NaSCH3 concentration was halved, what would be the ratio of the original rate of reaction to the new rate?',
    explanation:
        <div>
            <p>Since tert-butyl bromide is a tertiary halide, it cannot react in a Sn2 fashion. So this replacement
                reaction must occur by Sn1 mechanism. The rate of an Sn1 reaction is only dependent on the concentration
                of the substrate, so the rate equation would be given as:</p>
            <p>
                Rate<sub>1</sub> = k * [ (CH<sub>3</sub>)<sub>3</sub>CBr ]
            </p>
            <p>
                The concentration of NaSCH3 has no effect on the rate of reaction, since it is not in the rate equation.
                Doubling the solvent concentration effectively halves the concentration of (CH3)3CBr. This can be
                represented in the Rate equation as:
            </p>
            <p>
                Rate<sub>2</sub>  = k * ½[ (CH<sub>3</sub>)<sub>3</sub>CBr ]
            </p>
            <p>
                So the new rate will be 1/2 the rate of the old rate. This can be represented as a ratio of 1:1/2 or
                2:1, so answer A is the correct answer.
            </p>
        </div>,
    topic: topics.SUBSTITUTIONELIMINATION,
    graphic: <img src={require('./graphic.svg')} />,
    answers: [
        {choiceId:'A',content:'2:1'},
        {choiceId:'B',content:'1:2'},
        {choiceId:'C',content:'1:1'},
        {choiceId:'D',content:'4:1'}
    ],
    correctAnswer: 'A'
}

export default stereochem1