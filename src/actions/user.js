export const AUTHORIZE_USER = 'AUTHORIZE_USER';
export const UAUTHORIZE_USER = 'UAUTHORIZE_USER';
export const GET_AUTHORIZE_USER = 'GET_AUTHORIZE_USER';

export const AuthorizeUser = (id) => {
    console.log(id);
    return {
        type: AUTHORIZE_USER,
        id,
    }
}
export const UauthorizeUser = () => {
    return {
        type: UAUTHORIZE_USER,

    }
}
export const GetauthorizeUser = () => {
    return {
        type: GET_AUTHORIZE_USER,

    }
}