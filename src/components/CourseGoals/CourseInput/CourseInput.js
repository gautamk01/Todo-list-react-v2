import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {

  const [enteredValue, setEnteredValue] = useState('');

  const goalInputChangeHandler = event => {
    //When ever there is an input from the user setEnteredValue will be activated
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    props.onAddGoal(enteredValue); //Pass the enter value to the parent component App.js
    setEnteredValue('');
  };

  return (

    //This is a form
    <form onSubmit={formSubmitHandler}>
      {/* on submit this form will activate this function formsubmitHandler */}
      <div className="form-control">
        {/* This section is where we input */}
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} value={enteredValue} />
        {/* when we input something goalInputChangeHandler will be activated */}
      </div>
      <Button type="submit">Add Goal</Button>
      {/* This is the button to submit */}
    </form>
  );
};

export default CourseInput;
