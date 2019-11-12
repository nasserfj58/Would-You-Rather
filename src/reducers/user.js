import { AUTHORIZE_USER, UAUTHORIZE_USER, GET_AUTHORIZE_USER } from '../actions/user';

export const user = (state = null, action) => {

    switch (action.type) {
        case AUTHORIZE_USER:
            return action.id;
        case UAUTHORIZE_USER:
            return null;
        case GET_AUTHORIZE_USER:
            return state;
        default:
            return state
    }
}