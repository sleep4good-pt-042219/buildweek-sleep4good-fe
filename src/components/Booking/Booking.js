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
        console.log('anything')
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
                    {this.props.locations.map((location, index) => { return <div id={location.id}  key={index}> 
                        <NavLink></NavLink> 
                    </div>})}
            </div>
        );
    }
}

const mapStateToProps = ({hotelReducer: state}) => ({locations: state.locations, fetchingHotels: state.fetchingHotels});

export default withRouter(connect(mapStateToProps, {hotelLocations})(Booking));