import React from 'react';
import './DatePicker.css';
import Month from './month';
class DatePicker extends React.Component{
    render(){
        return(
            <div className='DatePickerContainer'>
                <div className='DatePickerContainer_Title'></div>
                <Month/>
            </div>
        )
    }
}
export default DatePicker;