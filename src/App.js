import React from 'react';
import {BrowserRouter as Router, Route, withRouter, Redirect, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import { Container } from 'reactstrap';

// will need to import components and set up Routes import HotelList from
// './components/HotelList/HotelList';
import Login from './components/Authenticate/Login';
import SignUp from './components/SignUp/SignUp';
import Home from './components/Home/Home';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.toggle = this
            .toggle
            .bind(this);
        this.state = {
            isOpen: false
        };
    }

    componentDidMount() {
        const username = localStorage.getItem('username')
        const token = localStorage.getItem('token');
        this.setState({
            username: {
                username,
                token
            },
            isLoggedIn: true
        })
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div className="App">
                <div className="navigation">

                    <Container className="content">
                        <Route exact path="/" component={Home}/>
                        <Route path="/login" component={Login}/>
                    </Container>

                </div>
            
            </div>
        );
    }
}

{/* <Navbar color="light" light expand="md">
<NavbarBrand href="/">Sleep4Good</NavbarBrand>
<NavbarToggler onClick={this.toggle} />
<Collapse isOpen={this.state.isOpen} navbar>
<Nav className="ml-auto" navbar>
<NavItem>
<NavLink href="/">Home</NavLink>
</NavItem>
<NavItem>
<NavLink href="/login">Login</NavLink>
</NavItem>
</Nav>
</Collapse>
</Navbar> */
}
const mapStateToProps = ({isLoggedIn}) => ({isLoggedIn})

export default withRouter(connect(mapStateToProps, {})(App));
