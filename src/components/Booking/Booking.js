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
import {hotelLocations} from '../../actions';

class Booking extends React.Component {

    // state = {     hotels: [] }

    componentDidMount() {
        this.props.hotelLocations();
        // this.setState({ hotels: this.props.hotels })
    }

    render() {
        console.log(this.props);
        if (this.props.fetchingHotels) 
            return <Loader type="Puff" color="#59dab8" height="100" width="100"/>;
        return (
            <div className="hotels">
               
                <h2>Hotels</h2>
                    {this.props.hotels.map((hotel, index) => { return <div id={hotel.id} hotel={hotel} key={index}> 
                        <NavLink>{hotel.id}</NavLink> 
                    </div>})}
            </div>
        );
    }
}

const mapStateToProps = ({usersReducer: state}) => {return {hotels: state.hotels, fetchingHotels: state.fetchingHotels }};

export default withRouter(connect(mapStateToProps, {hotelLocations})(Booking));