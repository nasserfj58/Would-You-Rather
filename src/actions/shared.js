import { showLoading, hideLoading } from 'react-redux-loading';
import { ReceiveUsers, AddUserQuestion, AddUserAnswer } from '../actions/users';
import { ReceiveQuestions, AddQuestion, AddQuestionAnswer } from '../actions/questions';
import { GetIntialData, SaveQuestion, SaveQuestionAnswer } from '../utils/api';

export const Handle_IntialData = 'Handle_IntialData';

export function handleIntialData() {
    return (dispatch) => {
        dispatch(showLoading())
        return GetIntialData().then(({ users, questions }) => {
            dispatch(ReceiveUsers(users))
            dispatch(ReceiveQuestions(questions))
            dispatch(hideLoading())
        })
    }

}
export function handleSaveQuestion(option1, option2) {
    return (dispatch, getState) => {
        const { user } = getState()
        dispatch(showLoading())

        return SaveQuestion({
            optionOneText: option1,
            optionTwoText: option2,
            author: user
        })
            .then((question) => {
                dispatch(AddQuestion(question))
                dispatch(AddUserQuestion(question));

            })
            .then(() => dispatch(hideLoading()))
    }

}
export function handleSaveAnswer(qId, option) {
    

    return (dispatch, getState) => {
        dispatch(showLoading());
    
        const {user} = getState();
    
        SaveQuestionAnswer({
            authedUser:user,
            qid: qId,
            answer: option
        }).then(() => {
            dispatch(AddQuestionAnswer(qId, option, user))
            dispatch(AddUserAnswer(qId, option, user));
            dispatch(hideLoading());
        });
    }

}