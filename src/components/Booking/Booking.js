import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {getData} from '../../actions/index.js';
import DatePicker from '../DatePicker/datePicker';


class Booking extends React.Component{
    state = {
        credentials:{
            username:'',
            password:''
        },
        hotels:[],
        isLoggedIn:true
    }
   

    componentDidMount() {
        this
            .props
            .getData();
            //this.setState({ hotels: this.props.hotels.data})
    }
    render(){
        if(this.props.fetchingHotels)
            return <div>Fetching</div>;
        return(
            <div className="hotels">
                
                <h2>Hotels</h2>
                <div>{this.state.hotels.map(hotel=><p>{hotel.hotel_name}</p>)}</div>
            
            <form>
                <DatePicker/>
                <button>Confirm</button>
                <button>Reset</button>
            </form>
            </div>
        )
    }
};

const mapStateToProps = ({hotels, fetchingHotels}) => ({hotels, fetchingHotels});

export default withRouter(connect(mapStateToProps, {getData})(Booking));
