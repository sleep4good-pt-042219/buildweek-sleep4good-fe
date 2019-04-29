import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';


export const login = creds => dispatch => {
    console.log(creds);
    dispatch({type: LOGIN_START});
    return axios
        .post('https://sleep4good.herokuapp.com/auth/login', creds)
        .then(res => {
            console.log(res.data);
            localStorage.setItem('token', res.data.token);
            dispatch({type: LOGIN_SUCCESS, payload: res.data})
        })
        .catch(err => dispatch({ type: USER_UNAUTHORIZED, payload: err })
        );
};

export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
export const USER_UNAUTHORIZED = 'FETCH_DATA_FAILURE';

// export const getData = () => dispatch => {
//     dispatch({type: FETCH_DATA_START});
//     axios
//         .get(`http://localhost:${PORT}/api/hotels`, {
//         headers: {
//             Authorization: localStorage.getItem('token')
//         }
//     })
//         .then(res => {
//             dispatch({type: FETCH_DATA_SUCCESS, payload: res})
//         })
//         .catch(err => {
//             console.log(err);
//             if (err.response.status === 403) {
//                 dispatch({type: USER_UNAUTHORIZED, payload: err.response})
//             } else {
//                 dispatch({type: FETCH_DATA_FAILURE, payload: err.response})
//             }
//         });
// };