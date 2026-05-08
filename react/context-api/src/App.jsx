import { useState } from "react"
import Todo from "./components/Todo"
import { TodoItemContext } from "./TodoItemStore"
import TodoItem from "./components/TodoItem"

let App = ()=>{

  let [getTodo,setTodo] = useState([])

  let addTodo = (todoName,todoDate)=>{

    setTodo(
      [
      ...getTodo,
      {
        name:todoName,
        date:todoDate
      }
      ]
    )
  }

  let deleteTodo = (todoName)=>{

    let newList = getTodo.map(
      (todo)=>todo.todoName!=todoName
    )

    setTodo(newList)

  }

  return <>
  <TodoItemContext.Provider value={
    {
      todoList:getTodo,
      add:addTodo,
      delete:deleteTodo
    }
  }>
    <Todo/>
  </TodoItemContext.Provider>
  
  </>

}

export default App