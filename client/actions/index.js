

export const TOGGLE_SOLUTION = 'TOGGLE_SOLUTION'

/**
 *
 * @param {string} problemId
 * @returns {{type: string, problemId: *}}
 */
export function toggleSolution(problemId){
    return {
        type: TOGGLE_SOLUTION,
        problemId
    }
}

export const SELECT_ANSWER = 'SELECT_ANSWER'

/**
 *
 * @param {string} problemId The ID of the problem
 * @param {string} answer The selected answer. i.e. A, B, C, or D
 * @returns {{type: string, problemId: *, answer: *}}
 */
export function selectAnswer(problemId, answer){
    return {
        type: SELECT_ANSWER,
        problemId,
        answer
    }
}

export const CHECK_PROBLEM = 'CHECK_PROBLEM'

/**
 * Check a problem for correctness
 * @param problemId
 * @returns {{type: string, problemId: *}}
 */
export function checkProblem(problemId){
    return {
        type: CHECK_PROBLEM,
        problemId
    }
}

export const RESET_CHECKED_PROBLEM = 'RESET_CHECKED_PROBLEM'

/**
 * Resets a problem which has already been checked
 * @param problemId
 * @returns {{type: string, problemId: *}}
 */
export function resetCheckedProblem(problemId){
    return {
        type: RESET_CHECKED_PROBLEM,
        problemId
    }
}