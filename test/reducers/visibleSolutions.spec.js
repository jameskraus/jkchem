import expect from 'expect'
import reducer from '../../client/reducers/visibleSolutions'
import {TOGGLE_SOLUTION} from '../../client/actions/index'



describe('viibleSolutions reducer', () => {
    it('should return the initial state', () => {
        expect(
            reducer(undefined, {})
        ).toEqual([])
    })

    it('should handle TOGGLE_SOLUTION', () => {
        expect(
            reducer([], {
                type: TOGGLE_SOLUTION,
                problemId: 'testProblemId'
            })
        ).toEqual(
            ['testProblemId']
        )

        expect(
            reducer(
                ['testProblemId'],
                {
                    type: TOGGLE_SOLUTION,
                    problemId: 'testProblemId'
                }
            )
        ).toEqual(
            []
        )
    })
})