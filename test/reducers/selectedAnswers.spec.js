import expect from 'expect'
import reducer from '../../client/reducers/selectedAnswers'
import {SELECT_ANSWER} from '../../client/actions/index'

describe('selectedAnswers reducer', () => {
    it('should return the initial state', () => {
        expect(
            reducer(undefined, {})
        ).toEqual([])
    })

    it('should handle SELECT_ANSWER - Adding new answer', () => {
        expect(
            reducer([], {
                type: SELECT_ANSWER,
                problemId: 'testProblemId',
                answer: 'A'
            })
        ).toEqual(
            [
                {
                    problemId: 'testProblemId',
                    answer: 'A'
                }
            ]
        )
    })

    it('should handle SELECT_ANSWER - Replacing existing answer', () => {
        expect(
            reducer(
                [{
                problemId: 'testProblemId',
                answer: 'A'
                }],
                {
                type: SELECT_ANSWER,
                problemId: 'testProblemId',
                answer: 'B'
            })
        ).toEqual(
            [{
                problemId: 'testProblemId',
                answer: 'B'
            }]
        )
    })
})