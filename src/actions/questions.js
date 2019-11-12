export const RECEIVE_Questions = 'RECEIVE_Questions'
export const ADD_QUESTION = 'Add_Question'

export const AddQuestion = (question) => {
    
    return {
        type: ADD_QUESTION,
        question,
    }
}


export const ReceiveQuestions = (questions) => {
    
    return {
        type: RECEIVE_Questions,
        questions,
    }
}