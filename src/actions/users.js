export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ADD_USER_QUESTION = 'ADD_USER_QUESTION';
export const ADD_USER_ANSWER = 'ADD_USER_ANSWER';

export const AddUserAnswer = (questionId,option,userId) => {

    return {
        type: ADD_USER_ANSWER,
        questionId,
        option,
        userId
    }
}

export const AddUserQuestion = (question) => {

    return {
        type: ADD_USER_QUESTION,
        question,
    }
}
export const ReceiveUsers = (users) => {
  
    return {
        type: RECEIVE_USERS,
        users,
    }
}