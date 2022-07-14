import React, { useState } from 'react';

import CourseGoalList from './components/CourseGoals/CourseGoalList/CourseGoalList';
import CourseInput from './components/CourseGoals/CourseInput/CourseInput';
import './App.css';

function App() {

  //Initally the courseGoal consiste of 2 object in the array which is inside the useState
  const [courseGoals, setCourseGoals] = useState([
    { text: 'Do all exercises!', id: 'g1' },//obj1
    { text: 'Finish the course!', id: 'g2' }//obj2
  ]);

  //This is a function to add goals
  const addGoalHandler = enteredText => {
    //enteredText will pass the input of new goal
    setCourseGoals(prevGoals => {
      //prevGoals will automatically collect the 2 objs
      const updatedGoals = [...prevGoals];
      //That we are storing in udatedGoals
      updatedGoals.push({ text: enteredText, id: Math.random().toString() });
      //This return is activate as the argument to the setCourseGoals
      return updatedGoals;
    });
  };

  //This function is to delete the goal which we have inserted
  const deleteItemHandler = goalId => {
    //goalId will pass the unique id of the specific goal
    setCourseGoals(prevGoals => {
      //using filterfunction this goalid will filter out from this array object
      const updatedGoals = prevGoals.filter(goal => goal.id !== goalId);
      //This will return
      return updatedGoals;
    });
  };

  //When there is no goals then this will be printing out to the user if length of the array 
  //courseGoal is 0
  let content = (
    <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
  );

  //if the array courseGoal length is greater than 0 
  if (courseGoals.length > 0) {
    //The content will be this 
    content = (
      <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler} />
    );
  }

  return (
    <div>
      <section id="goal-form">
        <CourseInput onAddGoal={addGoalHandler} />
      </section>
      <section id="goals">
        {content}

      </section>
    </div>
  );
};

export default App;
