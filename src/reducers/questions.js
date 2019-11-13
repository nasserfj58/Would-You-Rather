import { RECEIVE_Questions, ADD_QUESTION, ADD_QUESTION_ANSWER } from '../actions/questions'

export const questions = (state = {}, action) => {

    switch (action.type) {
        case RECEIVE_Questions:
            return {
                ...state,
                ...action.questions,
            }
        case ADD_QUESTION:
            return {
                ...state,
                [action.question.id]: action.question
            };
        case ADD_QUESTION_ANSWER:
            return {
                
                ...state,
                [action.questionId]: {
                    ...state[action.questionId],
                    [action.option]: {
                        ...state[action.questionId][action.option],
                        votes: state[action.questionId][action.option].votes.concat([action.userId])
                    }
                }
            };
        default:
            return state
    }
}