import React from 'react';
import {connect} from 'react-redux';
import {Route, withRouter, Redirect} from 'react-router-dom';

import Login from '../Login/Login';
import App from '../../App';

import axios from 'axios';

class Authenticate extends React.Component {

    logOutUser = () => {
        localStorage.setItem('token', '');
        localStorage.setItem('username', '');
        this.setState({
            user: {
                username: '',
                token: ''
            },
            isLoggedIn: false
        })
        this
            .props
            .history
            .push('/')
    }

    render() {

        const {
            token,
            errorStatusCode,
            ...rest
        } = this.props;

        return (
            <div>
                <Route
                    {...rest}
                    render={props => this.props.isLoggedIn === true && token && errorStatusCode !== 403
                    ? (<App {...props} logOutUser={this.logOutUser}/>)
                    : (<Redirect to='/login'/>)}/>
            </div>
        )
    }
}

const MapStateToProps = ({
    usersReducer: state,
    token,
    errorStatusCode,
    isLoggedIn,
    loggingIn,
    loginError
}) => {
    console.log(state)
    return {
        user: {
            username: state.username.name,
            token: state.username.token
        },
        token,
        errorStatusCode,
        isLoggedIn,
        loggingIn,
        loginError
    }
}
export default withRouter(connect(MapStateToProps, {})(Authenticate));