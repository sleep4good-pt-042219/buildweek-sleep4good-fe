import React from "react";
import Loader from "react-loader-spinner";
import {connect} from "react-redux";
import {login} from "../../actions";

import './Login.css';

import {
    Container,
    Col,
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';

class Login extends React.Component {
    state = {
        credentials: {
            username: "",
            password: ""
        }
    };

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    login = e => {
        e.preventDefault();
        this
            .props
            .login(this.state.credentials)
            // update route
            .then(() => this.props.history.push("/home"))
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div className="login">
                <Container fluid className="App">
                    <h2>Sign In</h2>
                    <Form onSubmit={this.login} className="login-form">
                        <Col>
                            <FormGroup>
                                <Label>Email</Label>
                                <Input
                                    type="text"
                                    name="username"
                                    placeholder="Username..."
                                    value={this.state.credentials.username}
                                    onChange={this.handleChange}/>
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for="examplePassword">Password</Label>
                                <Input
                                    type="text"
                                    name="password"
                                    placeholder="Password..."
                                    onChange={this.handleChange}
                                    value={this.state.credentials.password}/>
                            </FormGroup>
                        </Col>
                        <Button>Submit</Button>
                    </Form>
                </Container>
            </div>
        );
    }
}

const mapStateToProps = ({error, loggingIn}) => ({error, loggingIn});

export default connect(mapStateToProps, {login})(Login);
