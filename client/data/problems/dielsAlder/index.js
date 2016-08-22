import React from 'react'

// Topic Data
import * as topics from '../../Topics.js'

const halohydrin = {
    id: 'dielsalder',
    prompt: 'Which of the following products could have been produced by a Diels-Alder reaction?',
    explanation:
        <div>
            <p>
                Because the Diels-Alder reaction always forms rings of 6 (4 + 2), product II could not have been formed
                from a Diels-Alder, so answers C and D cannot be correct. Product III could have formed from the
                reaction between a diene and an alkyne dienophile, so answer B must be the correct answer.
            </p>

        </div>,
    topic: topics.ELECTROPHILICADDITION,
    graphic: <img src={require('./graphic.svg')} />,
    answers: [
        {
            choiceId: 'A',
            content: 'I Only'
        },
        {choiceId:'B',content:'I and III'},
        {choiceId:'C',content:'II and III'},
        {choiceId:'D',content:'I, II, and III'}

    ],
    correctAnswer: 'B'
}

export default halohydrin