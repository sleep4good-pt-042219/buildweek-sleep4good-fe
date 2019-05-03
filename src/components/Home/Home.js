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
import {Route, Link, Redirect} from 'react-router-dom';
import {getData} from '../../actions';

class Home extends React.Component {

    // state = {     hotels: [] }

    componentDidMount() {
        this.props.getData();
        // this.setState({ hotels: this.props.hotels })
    }

    render() {
        console.log(this.props);
        if (this.props.fetchingHotels) 
            return <Loader type="Puff" color="#59dab8" height="100" width="100"/>;
        return (
            <div className="hotels">
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
                <h2>Hotels</h2>
                    {this.props.hotels.map((hotel, index) => { return <div id={hotel.id} hotel={hotel} key={index}> 
                    <Link to='/booking'>{hotel.id}+{hotel.hotel_name}</Link>
                       
                    </div>})}
            </div>
        );
    }
}
 function clickHandle(hotel,id){
  

}
const mapStateToProps = ({usersReducer: state}) => {return {hotels: state.hotels, fetchingHotels: state.fetchingHotels }};

export default withRouter(connect(mapStateToProps, {getData})(Home));
