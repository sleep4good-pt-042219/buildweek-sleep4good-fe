import React from 'react';
import Loader from 'react-loader-spinner';
import {connect} from 'react-redux';
import {login} from '../../actions';
import {Link} from 'react-router-dom';

import './Login.css';
import Home from '../Home/Home';

import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    FormText
} from 'reactstrap';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            credentials: {
                username: '',
                password: ''
            },
            isLoggedIn: false
        }
    }

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state.credentials);
        this.props.login(this.state.credentials)
        const { history } = this.props;
        history.push("/")
    };

    render() {
        return (
            <div className="login-form">
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label htmlFor="username">Account</Label>
                        <Input
                            type="text"
                            name="username"
                            placeholder="Username..."
                            value={this.state.credentials.username}
                            onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Input
                            type="text"
                            name="password"
                            placeholder="Password..."
                            onChange={this.handleChange}
                            value={this.state.credentials.password}/>
                        <Label htmlFor="password">Password</Label>
                    </FormGroup>

                    <Button type='submit'>{this.props.loggingIn
                            ? (<Loader type="ThreeDots" color="#1f2a38" height="12" width="26"/>)
                            : ('Login')}</Button>
                </Form>
                <p>Don't have an account?
                    <Link to='/signup'>Sign Up!</Link>
                </p>


            </div>
        )
    };
};

const mapStateToProps = ({loggingIn}) => ({loggingIn});

export default connect(mapStateToProps, {login})(Login);
