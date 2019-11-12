import { showLoading, hideLoading } from 'react-redux-loading';
import { ReceiveUsers, AddUserQuestion } from '../actions/users';
import { ReceiveQuestions } from '../actions/questions';
import { AddQuestion } from '../actions/questions';
import { GetIntialData, SaveQuestion } from '../utils/api';

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
        const { user, users } = getState()
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