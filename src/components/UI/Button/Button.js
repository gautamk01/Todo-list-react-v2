import React from 'react';

//This is the css file for Button
import './Button.css';

//Function Button starts
const Button = props => {
  return (
    //Type - reset,submit , etc
    //className - For styling perpose
    //onclick the function activate on click
    //It will add the children which is wrapped under button tag
    <button type={props.type} className="button" onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
