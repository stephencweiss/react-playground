import { toast } from 'react-toastify';
import {
  ADD_TODO,
  REMOVE_TODO,
  EDIT_TODO,
  COMPLETE_TODO,
  COMPLETE_ALL,
  CLEAR_COMPLETED,
} from '../constants/ActionTypes';

export const addToDo = text => {
  return function(dispatch) {
    dispatch({
      type: ADD_TODO,
      text,
    });

    toast.success('Great success');
  };
};

export const removeToDo = id => {
  return function(dispatch) {
    dispatch({
      type: REMOVE_TODO,
      id,
    });
    toast.success('removed');
  };
};

export const editToDo = (id, text) => ({
  type: EDIT_TODO,
  id,
  text,
});

export const completeToDo = id => ({
  type: COMPLETE_TODO,
  id,
});

export const completeAll = () => ({
  type: COMPLETE_ALL,
});

export const clearCompleted = () => ({
  type: CLEAR_COMPLETED,
});
