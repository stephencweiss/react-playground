import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddToDo from './AddToDo';
import ToDoItem from './ToDoItem';

const List = props => {
  const { toDos, actions } = props;

  const handleSave = text => {
    if (text.length > 0) {
      actions.addToDo(text);
    }
  };

  return (
    <>
      <AddToDo onSave={handleSave} />
      <ul>
        {toDos.map(toDo => (
          <ToDoItem key={toDo.id} removeToDo={actions.removeToDo} toDo={toDo} />
        ))}
      </ul>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        pauseOnHover={true}
      />
    </>
  );
};

export default List;
