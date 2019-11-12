import { RECEIVE_USERS,ADD_USER_QUESTION } from '../actions/users'

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
        default:
            return state
    }
}