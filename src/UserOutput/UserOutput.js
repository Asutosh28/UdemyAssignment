import React from 'react';
import './UserOutput.css'
const userOutput = (props) => {
    return (
        <div className="useroutput">
            <p>Hi this is {props.name1 ? props.name1 : props.name2 ? props.name2 : props.name3}. This is my 1st assignment of udemy</p>
        </div>
    )
};

export default userOutput;
