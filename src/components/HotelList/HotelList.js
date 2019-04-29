import React from './node_modules/react';
import { withRouter } from './node_modules/react-router-dom';
import { connect } from './node_modules/react-redux';
import Loader from './node_modules/react-loader-spinner';

import {getData} from '../actions';

class HotelList extends React.Component {
    state = {}

    // componentDidMount() {
    //     this
    //         .props
    //         .getData();
    // }

    render() {
        if (this.props.fetchingHotels) 
            return <Loader type="Puff" color="#59dab8" height="100" width="100"/>;
        return (
            <div className="hotels">
                <h2>Hotels</h2>
                {this
                    .props
                    .hotels
                    .map(hotel => (
                        <div className="hotel-card">
                            <h4>{hotel.name}</h4>
                            <p>{hotel.email}</p>
                        </div>
                    ))}
            </div>
        );
    }
}

const mapStateToProps = ({hotels, fetchingHotels}) => ({hotels, fetchingHotels});

export default withRouter(connect(mapStateToProps, {getData})(HotelList));