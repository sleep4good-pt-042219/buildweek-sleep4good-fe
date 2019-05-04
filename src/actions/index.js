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
        .post('https://sleep4good.herokuapp.com/auth/login', creds)
        .then(res => {
            console.log(res.data);
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('username', res.data.username);
            localStorage.setItem('isLoggedIn', true)
            dispatch({type: LOGIN_SUCCESS, payload: res.data})
        })
        .catch(err => dispatch({type: LOGIN_FAILURE, payload: err}));
};

export const logout = () => dispatch => {
    dispatch({type: LOGOUT_START})
    axios
        .get('https://sleep4good.herokuapp.com/api/users')
        .then(res => {
            localStorage.removeItem('isLoggedIn')
            dispatch({type: LOGOUT_SUCCESS, payload: res.data})
        })
        .catch(err => dispatch({type: LOGOUT_FAILURE, payload: err}))
}

export const LOGIN_STATUS_CHECKING = 'LOGIN_STATUS_CHECKING';
export const LOGIN_STATUS_SUCCESS = 'LOGIN_STATUS_SUCCESS';
export const LOGIN_STATUS_FAILURE = 'LOGIN_STATUS_FAILURE';

export const loginStatus = (username, token, history) => {
    return dispatch => {
        dispatch({type: LOGIN_STATUS_CHECKING})
        const user = {
            username: username,
            token: token
        }
        if (user && token) {
            console.log(token);
            dispatch({type: LOGIN_STATUS_SUCCESS, payload: user})
            // history.push('/')
        } else {
            dispatch({type: LOGIN_STATUS_FAILURE, payload: {}});
            history.push('/login');
        }
    }
}

export const SIGNUP_PARTNER_START = 'SIGNUP_PARTNER_START';
export const SIGNUP_PARTNER_SUCCESS = 'SIGNUP_PARTNER_SUCCESS';
export const SIGNUP_PARTNER_FAILURE = 'SIGNUP_PARTNER_FAILURE';

export const signUpPartner = (creds, history) => dispatch => {
    dispatch({type: SIGNUP_PARTNER_START})
    axios
        .post('https://sleep4good.herokuapp.com/auth/partner/register', creds)
        .then(res => {
            console.log(res.status);
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('username', creds.username);
            localStorage.setItem('isLoggedIn', true);
            dispatch({type: SIGNUP_PARTNER_SUCCESS, payload: res.data});
            // history.push('/login');
        })
        .catch(err => dispatch({type: SIGNUP_PARTNER_FAILURE, payload: err}))
};

export const SIGNUP_PATRON_START = 'SIGNUP_PATRON_START';
export const SIGNUP_PATRON_SUCCESS = 'SIGNUP_PATRON_SUCCESS';
export const SIGNUP_PATRON_FAILURE = 'SIGNUP_PATRON_FAILURE';

export const signUpPatron = (creds, history) => dispatch => {
    dispatch({type: SIGNUP_PATRON_START})
    axios
        .post('https://sleep4good.herokuapp.com/auth/patron/register', creds)
        .then(res => {
            console.log(res.status);
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('username', creds.username);
            localStorage.setItem('isLoggedIn', true);
            dispatch({type: SIGNUP_PATRON_SUCCESS, payload: res.data});
            // history.push('/');
        })
        .catch(err => dispatch({type: SIGNUP_PATRON_FAILURE, payload: err}))
};

export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
export const USER_UNAUTHORIZED = 'FETCH_DATA_FAILURE';

export const getData = () => dispatch => {
    dispatch({type: FETCH_DATA_START})
    axios
        .get(`https://sleep4good.herokuapp.com/api/hotels`, {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
        .then(res => {
            console.log(res);
            dispatch({type: FETCH_DATA_SUCCESS, payload: res.data})
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
