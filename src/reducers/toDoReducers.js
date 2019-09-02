import {
  ADD_TODO,
  REMOVE_TODO,
  EDIT_TODO,
  COMPLETE_TODO,
  COMPLETE_ALL,
  CLEAR_COMPLETED,
} from '../constants/ActionTypes';

const initialState = [{
  text: 'Add redux',
  id: 0,
  modified: new Date(),
  completed: false,
}];

export default function toDoReducers (state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: state.reduce((maxId, toDo) => Math.max(toDo.id, maxId), -1) + 1,
          completed: false,
          modified: new Date(),
          text: action.text,
        },
      ];

    case REMOVE_TODO:
      console.log({state, action})
      return state.filter(toDo => toDo.id !== action.id);

    case EDIT_TODO:
      return state.map(toDo =>
        toDo.id === action.id ? Object.assign({}, toDo, { text: action.text, modified: new Date() }) : toDo,
      );

    case COMPLETE_TODO:
      return state.map(toDo =>
        toDo.id === action.id ? Object.assign({}, toDo, { completed: !toDo.completed, modified: new Date() }) : toDo,
      );

    case COMPLETE_ALL: // Worth walking through this one
      const areAllMarked = state.every(toDo => toDo.completed);
      return state.map(toDo =>
        Object.assign({}, toDo, {
          completed: !areAllMarked,
          modified: new Date(),
        }),
      );

    case CLEAR_COMPLETED:
      return state.filter(toDo => toDo.completed === false);

    default:
      return state;
  }
};

