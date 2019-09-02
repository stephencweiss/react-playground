export const addToDo = text => ({
  type: "ADD_TODO",
  text: text,
})

export const removeToDo = id => ({
  type: "REMOVE_TODO",
  id
})

export const editToDo = (id, text) => ({
  type: "EDIT_TODO",
  id,
  text
})

export const completeToDo = id => ({
  type: "COMPLETE_TODO",
  id
})

export const completeAll = () => ({
  type: "COMPLETE_ALL",
})

export const clearCompleted = () => ({
  type: "CLEAR_COMPLETED",
})
