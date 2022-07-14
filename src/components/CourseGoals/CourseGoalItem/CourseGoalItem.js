import React from 'react';

import './CourseGoalItem.css';

const CourseGoalItem = props => {

  const deleteHandler = () => {
    props.onDelete(props.id); //This will pass the id of the perticular goal to the parent compoent 
  };

  return (
    <li className="goal-item" onClick={deleteHandler}>
      {/* if We desn't click any thing it will just print the goal which is between <CourseGoalItem> Children </CourseGoalItem>*/}
      {/* If we click on it the deleteHandler pass the id of the particular goal in the list */}
      {props.children}
    </li>
  );
};

export default CourseGoalItem;
