import React from 'react';
import'./DatePicker.css';
import Weekday from './weekday';
import Day from './day';

const weekdays=[
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];

class Month extends React.Component{
    constructor(props){
        super(props);
        //bounded
        this.renderWeek=this.renderWeek.bind(this);
    }
    render(){
        // mapping over all of the weekdays to get weekday
        const weekDaysMarkup=weekdays.map(weekday=>{
            return(
                <Weekday
                key={weekday}
                title={abbreviationFromWeekday(weekday)}
                label={weekday}/>
            )
        });

    const weeks= getWeeksForMonth(2,2018);
    
    //return weeks based on month and year in a row
    const weeksMarkup=weeks.map((week,index)=>{
        return(
            <div role="row" className="Week"key={index}>
            {week.map(this.renderWeek)}
            </div>
        )
        })
        return(
            <React.Fragment>
                <div className='WeekdayContainer'>{weekDaysMarkup}</div>
                {weeksMarkup}
            </React.Fragment>
        )
    }

    renderWeek(fullDate,dayIndex){
        console.log(fullDate);
        const date=fullDate.getDate();
       return <div key={dayIndex}>{fullDate}</div>
}
}
// abbreviation function
function abbreviationFromWeekday(weekday){
    return weekday.substring(0,2);
}
//defining week length
const WEEK_LENGTH=7;
function getWeeksForMonth(month,year){
    const firstOfMonth=new Date(year,month,1);
    const firstDayOfWeek=firstOfMonth.getDay();
    //creates an array of arrays
    const weeks=[[]];

    let currentWeek=weeks[0];
    let currentDate=firstOfMonth;

    for(let i = 0;i<firstDayOfWeek;i++){
        currentWeek.push(currentWeek);

        while(currentDate.getMonth()=== month){
            if(currentWeek.length===WEEK_LENGTH){
                currentWeek=[];
                weeks.push(currentWeek);

            }
            currentWeek.push(currentDate);
            currentDate=new Date(year,month,currentDate.getDate()+1);
        }
        while(currentWeek.length<7){
            currentWeek.push(null);
        }
        return weeks;
    }
}
export default Month;