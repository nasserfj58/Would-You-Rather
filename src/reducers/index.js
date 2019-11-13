import {combineReducers} from 'redux';
import {users} from './users';
import {user} from './user';
import {questions} from './questions';
import {loadingBarReducer} from 'react-redux-loading';

export default combineReducers({
    users,
    loadingBar: loadingBarReducer,
    user,
    questions,
})