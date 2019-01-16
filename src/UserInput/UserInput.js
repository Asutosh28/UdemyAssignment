import React from 'react';
import './UserInput.css';
const userInput = (props) => {
    return (
        <div >
            <input className="userinput1 " type="text" onChange={props.change1} value={props.name1}/>
            <input className="userinput2" type="text" onChange={props.change2} value={props.name2}/>
        </div>
    )
};

export default userInput;
