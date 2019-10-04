import React from 'react';
import './TextInput.css';


const TextInput = (props) => {

    let width = props.placeholder.length;
    return (
        // <div className="form-group">
            <input {...props} size={width}/>
        // </div>
    );


}


export default TextInput;
