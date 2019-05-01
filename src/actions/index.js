import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const LOGOUT_START = 'LOGOUT_START';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';


export const login = creds => dispatch => {
    console.log(creds);
    dispatch({type: LOGIN_START});
    return axios
        .get('https://sleep4good.herokuapp.com/api/users', creds)
        .then(res => {
            console.log(res.data);
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('username', creds.username);
            localStorage.setItem('isLoggedIn', true)
            window.location.reload();
            dispatch({type: LOGIN_SUCCESS, payload: res.data})
        })
        .catch(err => dispatch({ type: LOGIN_FAILURE, payload: err })
        );
};

export const logout = () => dispatch => {
    dispatch({ type: LOGOUT_START })
    axios.get('https://sleep4good.herokuapp.com/api/users')
    .then(res => {
        localStorage.removeItem('isLoggedIn')
        window.location.reload();
        dispatch({ type: LOGOUT_SUCCESS, payload: res.data })
    })
    .catch(err => dispatch({ type: LOGOUT_FAILURE, payload: err }))
}

export const SIGNUP_USER_START = 'SIGNUP_USER_START';
export const SIGNUP_USER_SUCCESS = 'SIGNUP_USER_SUCCESS';
export const SIGNUP_USER_FAILURE = 'SIGNUP_USER_FAILURE';

export const signUp = creds => dispatch => {
    dispatch({ type: SIGNUP_USER_START })
    axios.post('https://sleep4good.herokuapp.com/api/users', creds)
    .then(res => dispatch({ type: SIGNUP_USER_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: SIGNUP_USER_FAILURE, payload: err }))
};

export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
export const USER_UNAUTHORIZED = 'FETCH_DATA_FAILURE';

export const getData = () => dispatch => {
    dispatch({type: FETCH_DATA_START});
    axios
        .get(`https://sleep4good.herokuapp.com/api/hotels`, {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
        .then(res => {
            dispatch({type: FETCH_DATA_SUCCESS, payload: res})
        })
        .catch(err => {
            console.log(err);
            if (err.response.status === 403) {
                dispatch({type: USER_UNAUTHORIZED, payload: err.response})
            } else {
                dispatch({type: FETCH_DATA_FAILURE, payload: err.response})
            }
        });
};
