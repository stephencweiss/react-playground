import React from 'react';

const ToDoItem = props => {
  const handleClick = () => {
    props.removeToDo(props.toDo.id);
  };

  return (
    <li onClick={handleClick}>
      {props.toDo.text}
    </li>
  );
};

export default ToDoItem;
