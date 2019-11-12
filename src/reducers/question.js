import { ADD_QUESTION } from '../actions/question'

export const question = (state = {}, action) => {
    
    switch (action.type) {
        case ADD_QUESTION:
                return {
                    ...state,
                    [action.question.id]: action.question
                };
        default:
            return state
    }
}