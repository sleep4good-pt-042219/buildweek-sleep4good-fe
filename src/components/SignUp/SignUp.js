import React from 'react';
import {connect} from 'react-redux';
import Login from '../Login/Login';
import {Route, Link} from 'react-router-dom';
import Loader from 'react-loader-spinner';
import {signUp} from '../../actions/index';

import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    FormText
} from 'reactstrap';

class SignUp extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    }

    handleChange = e => {
        this.setState({
            user: {
                ...this.state.user,
                [e.target.name]: e.target.value
            }
        })
    }

    toggleIsSigningUp = () => {
        this.setState({
            signingUp: !this.state.signingUp
        })
    }

    handleSignUp = () => {
        this
            .props
            .signUp(this.state.credentials)
    }

    render() {
        return (
            <div className='signup-form'>
            <h1>Sign Up</h1>
                <Form onSubmit={e => this.handleSignUp(this.state.credentials)}>
                    <Label htmlFor="username">Sign Up</Label>
                    <Input
                        type="text"
                        name="username"
                        placeholder="Username..."
                        value={this.state.credentials.username}
                        onChange={this.handleChange}/>
                    <Label htmlFor="password">Password</Label>
                    <Input
                        type="text"
                        name="password"
                        placeholder="Password..."
                        onChange={this.handleChange}
                        value={this.state.credentials.password}/>

                    <Button>{this.props.signingUp
                            ? (<Loader type="ThreeDots" color="#1f2a38" height="12" width="26"/>)
                            : ('Sign Up')}</Button>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = ({signingUp}) => ({signingUp});

export default connect(mapStateToProps, {signUp})(SignUp);
