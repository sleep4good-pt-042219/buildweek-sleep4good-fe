import {
    USER_UNAUTHORIZED,
    LOGIN_START,
    LOGIN_SUCCESS,
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
    LOGIN_FAILURE,
    SIGNUP_PARTNER_START,
    SIGNUP_PARTNER_SUCCESS,
    SIGNUP_PARTNER_FAILURE,
    SIGNUP_PATRON_START,
    SIGNUP_PATRON_SUCCESS,
    SIGNUP_PATRON_FAILURE,
    LOGIN_STATUS_CHECKING,
    LOGIN_STATUS_SUCCESS,
    LOGIN_STATUS_FAILURE
} from '../actions';

const initialState = {
    hotels: [],
    partners: [],
    patrons: [],
    loggingIn: false,
    isLoggedIn: false,
    signingUp: false,
    error: '',
    errorStatusCode: null,
    fetchingHotels: false,
    user: {
        username: null,
        token: null
    }
};

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_STATUS_CHECKING:
            return {
                ...state,
                loggingIn: true,
                user: {
                    username: '',
                    token: ''
                },
                isLoggedIn: false,
                error: false
            }

        case LOGIN_STATUS_SUCCESS:
            return {
                ...state,
                loggingIn: false,
                user: action.payload,
                isLoggedIn: false,
                error: false
            }

        case LOGIN_STATUS_FAILURE:
            return {
                ...state,
                loggingIn: false,
                user: {
                    username: '',
                    token: ''
                },
                isLoggedIn: false,
                error: true
            }
        case SIGNUP_PARTNER_START:
            return {
                ...state,
                signingUp: true
            }
        case SIGNUP_PARTNER_SUCCESS:
            return {
                ...state,
                signingUp: false,
                partners: action.payload

            }
        case SIGNUP_PARTNER_FAILURE:
            return {
                ...state,
                signingUp: false,
                error: action.payload
            }
        case SIGNUP_PATRON_START:
            return {
                ...state,
                signingUp: true
            }
        case SIGNUP_PATRON_SUCCESS:
            return {
                ...state,
                signingUp: false,
                patrons: action.payload

            }
        case SIGNUP_PATRON_FAILURE:
            return {
                ...state,
                signingUp: false,
                error: action.payload
            }
        case LOGIN_START:
            return {
                ...state,
                loggingIn: true
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                loggingIn: false,
                user: action.payload,
                isLoggedIn: true
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                loggingIn: false,
                isLoggedIn: false,
                error: action.payload
            }
        case FETCH_DATA_START:
            return {
                ...state,
                fetchingHotels: true
            };
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                error: '',
                errorStatusCode: null,
                fetchingHotels: false,
                hotels: action.payload
            };
        case USER_UNAUTHORIZED:
            return {
                ...state,
                error: action.payload.data.error,
                errorStatusCode: action.payload.status,
                fetchingHotels: false
            };
        default:
            return state
    }
};

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
};
