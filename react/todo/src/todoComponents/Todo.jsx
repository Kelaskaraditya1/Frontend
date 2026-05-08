import { useState } from "react"
import Title from "./Title"
import TodoItem from "./TodoItem"

let Todo = ()=>{

  // States & Functions:

  let [getTodo, setTodo] = useState([])
  let {getTodoName, setTodoName} = useState('')
  let {getTodoDate, setTodoDate} = useState('')

  let addTodo = ()=>{

    let todo = {
      name:getTodoName,
      date:getTodoDate
    }

    console.log("Todo added")
    setTodo([...getTodo,todo])
  }

  let onNameChange = (event)=>{
    console.log(event.target.value)
  }

  let onDateCahnge = (event) =>{
    console.log(event.target.value)
  }

  

  // Components:

  let todoList = getTodo.map(
    (todo)=><TodoItem todoName={getTodoName} todoDate={getTodoDate}/>
  )

  let listEmptyComponent = <h2>Enjoy your day</h2>

  return <>

<div className="bodyContainer">
    <center className="body">
      <Title/>

      <div className="inputContainer">
      <input type="text" placeholder="Enter Todo here" className="inputText" onChange={onNameChange}></input>
      <input type="date" className="inputDate" onChange={onDateCahnge}></input>
      <button type="button" class="btn btn-success addButton" onClick={addTodo}>Add</button>
      </div>

      {
        getTodo.length===0 ? listEmptyComponent : todoList 
      }


  </center>
</div>

  
  </>

}

export default Todo