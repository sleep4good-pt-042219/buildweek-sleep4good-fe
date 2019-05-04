import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Loader from 'react-loader-spinner';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import {getData, loginStatus} from '../../actions';

class Home extends React.Component {

    constructor(props) {
        super(props);

        this.toggle = this
            .toggle
            .bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    componentDidMount() {
        const name = localStorage.getItem('name')
        const token = localStorage.getItem('token');
        this
            .props
            .getData();
        this.setState({
            username: {
                name,
                token
            },
            isLoggedIn: true
        })
    }

    logOutUser = e => {
        // console.log(e)
        e.preventDefault();
        localStorage.setItem('token', '');
        localStorage.setItem('username', '');
        console.log(this.props);
        const username = localStorage.getItem('username')
        const token = localStorage.getItem('token');
        this
            .props
            .loginStatus(username, token, this.props.history)
    }

    render() {
        if (this.props.fetchingHotels) {
            return <Loader type="Puff" color="#59dab8" height="100" width="100"/>;
        }
        return (

            <div className="hotels">
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">Sleep4Good</NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
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
                </Navbar>
                <h2>Hotels</h2>
                {this
                    .props
                    .hotels
                    .map((hotel, index) => {
                        return <div id={hotel.id} hotel={hotel} key={index}>
                            <p>{hotel.hotel_name}</p>
                        </div>
                    })}
                <button type='submit' onClick={this.logOutUser}>Logout</button>
            </div>
        );
    }
}

const mapStateToProps = ({usersReducer: state}) => ({hotels: state.hotels, fetchingHotels: state.fetchingHotels, isLoggedIn: state.isLoggedIn});

export default withRouter(connect(mapStateToProps, {getData, loginStatus})(Home));
