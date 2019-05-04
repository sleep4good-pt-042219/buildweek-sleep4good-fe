import React from 'react';
import {connect} from 'react-redux';
import Login from '../Authenticate/Login';
import {Route, Link} from 'react-router-dom';
import Loader from 'react-loader-spinner';
import {signUpPatron, signUpPartner} from '../../actions/index';

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
        },
        selectValue: ''
    }

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    }

    toggleIsSigningUp = () => {
        this.setState({
            signingUp: !this.state.signingUp
        })
    }

    handleSignUp = (e) => {
        e.preventDefault();
        if (this.state.selectValue === 'Partner') {
            this
                .props
                .signUpPartner(this.state.credentials)
        } else {
            this
                .props
                .signUpPatron(this.state.credentials)
        }
    }

    render() {
        return (
            <div className='signup-form'>
                <h1>Sign Up</h1>
                <Form onSubmit={this.handleSignUp}>
                    <FormGroup>
                        <Label htmlFor="username">Sign Up</Label>
                        <Input
                            type="text"
                            name="username"
                            placeholder="Username..."
                            value={this.state.credentials.username}
                            onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="password">Password</Label>
                        <Input
                            type="text"
                            name="password"
                            placeholder="Password..."
                            onChange={this.handleChange}
                            value={this.state.credentials.password}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="exampleSelect">Patron or Partner?</Label>
                        <select
                            type="select"
                            name="select"
                            onChange={this.handleChange}
                            value={this.state.selectValue}>
                            <option value='Patron'>Patron</option>
                            <option value='Partner'>Partner</option>
                        </select>
                    </FormGroup>

                    <Button type='submit'>{this.props.signingUp
                            ? (<Loader type="ThreeDots" color="#1f2a38" height="12" width="26"/>)
                            : ('Sign Up')}</Button>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = ({signUpPatron, signUpPartner}) => ({signUpPatron, signUpPartner});

export default connect(mapStateToProps, {signUpPatron, signUpPartner})(SignUp);
