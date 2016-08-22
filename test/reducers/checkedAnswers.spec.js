import expect from 'expect'
import reducer from '../../client/reducers/checkedAnswers'
import {CHECK_PROBLEM, RESET_CHECKED_PROBLEM} from '../../client/actions/index'

describe('checkedAnswers reducer', () => {
    it('should return the initial state', () => {
        expect(
            reducer(undefined, {})
        ).toEqual([])
    })

    it('Should handle CHECK_PROBLEM if problem is not yet in the state', ()=>{
        expect(
            reducer([], {
                type: CHECK_PROBLEM,
                problemId: 'testProblemId1'
            })
        ).toEqual([
            'testProblemId1'
        ])
    })

    it('Should handle CHECK_PROBLEM if problem is already in the state', ()=>{
        expect(
            reducer(
                ['testProblemId1', 'testProblemId2'],
                {
                    type: CHECK_PROBLEM,
                    problemId: 'testProblemId1'
                }
            )
        ).toEqual(
            [
                'testProblemId1',
                'testProblemId2'
            ]
        )
    })

    it('Should handle RESET_CHECKED_PROBLEM for previously-checked answers', ()=>{
        expect(
            reducer(
                ['testProblemId1', 'testProblemId2'],
                {
                    type: RESET_CHECKED_PROBLEM,
                    problemId: 'testProblemId1'
                }
            )
        ).toEqual(
            [
                'testProblemId2'
            ]
        )
    })

    it('Should handle RESET_CHECKED_PROBLEM for problems not already in the state', ()=>{
        expect(
            reducer(
                ['testProblemId1', 'testProblemId2'],
                {
                    type: RESET_CHECKED_PROBLEM,
                    problemId: 'testIdNotInSet'
                }
            )
        ).toEqual(
            ['testProblemId1', 'testProblemId2']
        )
    })
})