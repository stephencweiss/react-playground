import React from 'react';

import AddToDo from './AddToDo'
import ToDoItem from './ToDoItem'

const List = (props) => {
  const {toDos, actions} = props;


  const handleSave = (text) => {
    if (text.length > 0) {
      actions.addToDo(text)
    }
  }

  return (
    <>
    <AddToDo onSave={handleSave} />
    <ul>
      {toDos.map(toDo =>
        <ToDoItem removeToDo={actions.removeToDo} toDo={toDo} />)}
    </ul>
    </>
  )
}

export default List;