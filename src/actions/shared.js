import { showLoading, hideLoading } from 'react-redux-loading';
import { ReceiveUsers } from '../actions/users';
import { GetIntialData } from '../utils/api';

export const Handle_IntialData = 'Handle_IntialData';

export function handleIntialData() {
    return (dispatch) => {
        dispatch(showLoading())
        return GetIntialData().then(({ users, questions }) => {
            dispatch(ReceiveUsers(users))
            dispatch(hideLoading())
        })
    }

}