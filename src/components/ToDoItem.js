import React from 'react';

const ToDoItem = props => {
  const handleClick = () => {
    const id = props.toDo.id;
    props.removeToDo(id);
  };

  return (
    <li onClick={handleClick} key={props.toDo.id}>
      {props.toDo.text}
    </li>
  );
};

export default ToDoItem;
