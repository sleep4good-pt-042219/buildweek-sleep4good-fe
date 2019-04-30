import React from "react";
import {connect} from "react-redux";
import {Route, withRouter, Redirect} from "react-router-dom";
import {Container} from 'reactstrap';

import Login from "../Login/Login";
import App from "../../App";

import axios from "axios";

class Authenticate extends React.Component {
    logOutUser = () => {
        localStorage.setItem("token", "");
        localStorage.setItem("username", "");
        this.setState({
            user: {
                username: "",
                token: ""
            },
        });
        this
            .props
            .history
            .push("/login");
    };

    render() {
        const {
            token,
            errorStatusCode,
            ...rest
        } = this.props;

        return (
            <div>
                <Container>
                    {this.props.isLoggedIn === true
                        ? ( <Route {...rest} path="/home" render={props => <p>Hello</p>}/>)

                        : (<Route
                            {...rest}
                            exact
                            path="/login"
                            render={props => <Login {...this.state} {...props}/>}/>)
}
                </Container>
            </div>
        );
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
    console.log(state);
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
    };
};
export default withRouter(connect(MapStateToProps, {})(Authenticate));
