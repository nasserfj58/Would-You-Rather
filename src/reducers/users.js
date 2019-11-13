import { RECEIVE_USERS, ADD_USER_QUESTION, ADD_USER_ANSWER } from '../actions/users'

export const users = (state = {}, action) => {

    switch (action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users,
            }
        case ADD_USER_QUESTION:
            return {
                ...state,
                [action.question.author]: {
                    ...state[action.question.author],
                    questions: [...state[action.question.author].questions, action.question.id]
                }
            };
        case ADD_USER_ANSWER:
            return {
                ...state,
                [action.userId]: {
                    ...state[action.userId],
                    answers: {
                        ...state[action.userId].answers,
                        [action.questionId]: action.option
                    }
                }
            };
        default:
            return state
    }
}