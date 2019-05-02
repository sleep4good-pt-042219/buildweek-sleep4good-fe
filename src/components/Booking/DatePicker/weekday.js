import React from 'react';
// label and title are props
export default function Weekday(label,title){
    return(
        <div aria-label={label} className="Weekday">
        {title}
        </div>
    );
}