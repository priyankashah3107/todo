// step 1 creating a context 

import { useContext, createContext } from "react";

export const TodoContext  = createContext({
  todos: [
    {
      id: 1,
      todo: "Todo msg",
      completed: false
    }
  ],

  // making a function what we have to do like crud 
  addTodo: (todo) => {},
  updateTodo:  (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
})



export const TodoProvider = TodoContext.Provider

// custom hook for useTodo

export const useTodo  = ()  => {
    return useContext(TodoContext)
}