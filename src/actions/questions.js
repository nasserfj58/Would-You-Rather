export const RECEIVE_Questions = 'RECEIVE_Questions'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ADD_QUESTION_ANSWER = 'ADD_QUESTION_ANSWER';

export const AddQuestionAnswer = (questionId, option, userId) => {

    return {
        type: ADD_QUESTION_ANSWER,
        questionId,
        option,
        userId
    }
}

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