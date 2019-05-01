import React from 'react';
import {BrowserRouter as Router, Route, withRouter, Redirect, Switch} from 'react-router-dom';
import {connect} from 'react-redux';

// will need to import components and set up Routes import HotelList from
// './components/HotelList/HotelList';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Home from './components/Home/Home';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.toggle = this
            .toggle
            .bind(this);
        this.state = {
            isOpen: false,
            isLoggedIn: false
        };
    }

    componentDidMount = () => {
        if (!localStorage.getItem('isLoggedIn')) {
            this.setState({isLoggedIn: false})
        } else {
            this.setState({isLoggedIn: true})
        }
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

                    <Switch>
                        <Route
                            path='login'
                            render={() => (this.state.isLoggedIn === true
                            ? (<Redirect to='/'/>)
                            : (<Login/>))}/>
                            <Route path='/signup'
                            render={() => (this.state.isLoggedIn ? (<Redirect to='/login' />) : (<Home />))} />
                    </Switch>

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
        </Navbar> */}
                </div>

                {this.props.isLoggedIn && <Home/>}

                <Route exact path="/" component={Home}/>
                <Route path="/login" component={Login}/>
                <Route path="/signup" component={SignUp}/>
            </div>
        );
    }
}

const mapStateToProps = ({isLoggedIn}) => ({isLoggedIn})

export default withRouter(connect(mapStateToProps, {})(App));
