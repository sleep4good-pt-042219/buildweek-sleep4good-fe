import React from "react";

export default function Day({fullDate}){
    if(fullDate==null){
        return<div className='EmptyStateDay'/>
    }
    const date=fullDate.getDate();
    const className='Day';
    return(
        <button className={className}>{date}</button>
    )
}