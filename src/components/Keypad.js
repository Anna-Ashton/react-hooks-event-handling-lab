// Code Keypad Component Here
import React from "react";

function Keypad (){
    let passwordHere= 'Entering password...';
    console.log(passwordHere);


    return (
        <div>
            <input type="password" onChange={passwordHere}/>
        </div>
    )
}

export default Keypad;