import { useEffect, useState } from "react"
import { TodoProvider } from "./context"
import { TodoForm, TodoItems } from "./components/index.js"
function App() {
   const [todos, setTodos] = useState([])

   // Now Writting a functionality for addTodo
    
   // addTodo ye name same lena hoga, jo TodoProvider mei liya hai
   // setTodos((prev) => [{id: Date.now(), ...todo}, ...prev])  // ye Date.now() random id generate hoga then todo generate hoga and prev vale le rhe h saath mei 
   const addTodo = (todo) => {
         setTodos((prev) => [{id: Date.now(), ...todo}, ...prev])
   }

   // updateTodo

   const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo === id ? todo : prevTodo)))
   } 

   // Delete Todo Logic 

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo !== id))
  }

// toggleComplete 
const toggleComplete = (id) => {
    //  setTodos((prev) => prev.map((prevTodo) => prevTodo === id ? "true" : "false"))
    setTodos((prev) => prev.map((prevTodo) => prevTodo === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo))
}


// Using useEffect hook for setting  and getting  value from the LocalStorage
// localStorage mei ofcourse phle valueget krte hai then usse set krte hai 

useEffect(() => {
  const todos =  JSON.parse(localStorage.getItem("todos"))
     if(todos && todos.length > 0) {
      setTodos(todos)
     }
},[])

// Getting the items from the localStroage

useEffect(() => {
     localStorage.setItem("todos", JSON.stringify(todos))

}, [todos])

  return (
   <TodoProvider  value={{todos,  addTodo, updateTodo,deleteTodo, toggleComplete}}>
 <div className="bg-[#172842] min-h-screen py-8">
       <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
            <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>

            <div className="mb-4">
              {/* Todos from goes here */}
              <TodoForm />
            </div>

            <div className="flex flex-wrap gap-y-3">
              {/* Loops and todo items here */}
              {todos.map((todo) => (
                 <div className="w-full"
                   key={todo.id}>
                    <TodoItems todo={todo}/>
                   </div>
              ))}
              {/* <TodoItems /> */}
            </div>
       </div> 
 </div>
   </TodoProvider>
  )
}

export default App
