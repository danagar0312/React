import React from 'react';

const validater = (props) => {

    let validationMessage = "Input Text too Long";

    if (props.inputLength){
            validationMessage = "Text too long";
    }

    return(
        <div>
        <p>{validationMessage}</p>  
        </div>
    );

};

export default validater;
