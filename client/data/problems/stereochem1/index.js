import React from 'react'

// Topic Data
import * as topics from '../../Topics.js'

const stereochem1 = {
    id: 'stereochem1',
    prompt: 'Which of the following statements is true about compounds I, II and III?',
    explanation:
        <div>
            <p>Compound II is a meso compound (it has an internal plane of symmetry), so it must not be optically active,
                eliminating A. Compound III has no chiral centers (try to do R and S on the carbons to check), so it
                must not be chiral. III is not a meso compound, so answer C must not be correct. This leaves answer D
                as the correct answer.
            </p>

            <p>So what’s going on here? Compound I has undefined stereochemistry (it’s not drawn in the R/S form), but
                the nitrogen atom is a stereocenter. Check out the possible enantiomers:
            </p>

            <img src={require('./explanation/nitrogen-inversion.png')} />
        </div>,
    topic: topics.STEREOCHEMISTRY,
    graphic: <img src={require('./graphic.svg')} />,
    answers: [
        {choiceId:'A',content:'II is Optically Active'},
        {choiceId:'B',content:'III is Chiral'},
        {choiceId:'C',content:'II and III are meso compounds'},
        {choiceId:'D',content:'I and II have stereocenters'}
    ],
    correctAnswer: 'D'
}

export default stereochem1