// import React from "react";
   
const formValidator = (value, rules) =>{
    let isValid = true;
    for (let rule in rules){
        switch (rule){
            case 'minLength': isValid = isValid && miniValidator(value, rules[rule]); break;

            default: isValid = true;
        }
    }
    return isValid;
}

//validate minimum length
const miniValidator = (value, miniLength) =>{
    return value.length >= miniLength;
}

export default formValidator;