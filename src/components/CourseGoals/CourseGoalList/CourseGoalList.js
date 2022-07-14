import React from 'react';

import CourseGoalItem from '../CourseGoalItem/CourseGoalItem';
import './CourseGoalList.css';

//This where the list of the goal is comming from
const CourseGoalList = props => {
  return (
    //There is an unorderlist tag with class goal-list
    <ul className="goal-list">
      {/* item - the coursegoal array of object and it is passing through map */}
      {props.items.map(goal => (
        //This CourseGo alItem is another component with key,id,onDelete as props 
        <CourseGoalItem
          key={goal.id} //key should be unique
          id={goal.id} //id also should be unique
          onDelete={props.onDeleteItem} // THis props will activate when we click
        >
          {goal.text}
          {/* This is where goal text will be present */}
        </CourseGoalItem>
      ))}
    </ul>
  );
};

export default CourseGoalList;
