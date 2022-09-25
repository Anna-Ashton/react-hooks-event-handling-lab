// Code Keypad Component Here
import React from "react";

function Keypad (){
    function passwordHere() {
        console.log(passwordHere);
    }


    return (
        <div>
            <input type="password" onChange={passwordHere}/>
        </div>
    )
}

export default Keypad;