// Code EyesOnMe Component Here
import React from "react";


function EyesOnMe() {
    function focusHere(){
        console.log('Good!');
    }
    function blurHere(){
        console.log('Hey! Eyes on me!')
    };

    return(
        <div>
            <button onFocus={focusHere} onBlur={blurHere}>Eyes on me</button>
        </div>

    )
}

    export default EyesOnMe;