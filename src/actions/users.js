export const RECEIVE_USERS = 'RECEIVE_USERS'

export const ReceiveUsers = (users) => {
    return {
        type: RECEIVE_USERS,
        users,
    }
}