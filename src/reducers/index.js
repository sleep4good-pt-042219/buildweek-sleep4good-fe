import {
    USER_UNAUTHORIZED,
    LOGIN_START,
    LOGIN_SUCCESS,
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
    LOGIN_FAILURE,
    SIGNUP_USER_START,
    SIGNUP_USER_SUCCESS,
    SIGNUP_USER_FAILURE
} from '../actions';

const initialState = {
    hotels: [],
    users: [],
    loggingIn: false,
    isLoggedIn: false,
    signingUp: false,
    error: '',
    errorStatusCode: null,
    fetchingHotels: false,
    username: {
        name: null,
        token: null
    }
};

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP_USER_START:
        return {
            ...state,
            signingUp: true
        }
        case SIGNUP_USER_SUCCESS:
        return {
            ...state,
            signingUp: false,
            users: action.payload
            
        }
        case SIGNUP_USER_FAILURE: 
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
                username: action.payload,
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
export const hotelSelector = (state=initialState,action)=>{
    switch(action.type){
        default:
            return state
    }
}