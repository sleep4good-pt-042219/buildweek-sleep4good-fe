import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import {   Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
    } from 'reactstrap';
import {getData} from '../../actions';

class Home extends React.Component {

    state = {
        hotels: []
    }

    componentDidMount() {
        this
            .props
            .getData();
            this.setState({ hotels: this.props.hotels })
    }

    render() {
        if (this.props.fetchingHotels) 
            return <Loader type="Puff" color="#59dab8" height="100" width="100"/>;
        return (
            <div className="hotels">
            <Navbar color="light" light expand="md">
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
        </Navbar>
                <h2>Hotels</h2>

                {this
                    .state
                    .hotels
                    .map(hotel => (
                        <div className="hotel-card">
                            <h4>{hotel.hotel_name}</h4>
                        </div>

                    ))}
            </div>
        );
    }
}

const mapStateToProps = ({hotels, fetchingHotels}) => ({hotels, fetchingHotels});

export default withRouter(connect(mapStateToProps, {getData})(Home));
