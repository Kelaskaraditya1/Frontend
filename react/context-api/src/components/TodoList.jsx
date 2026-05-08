import { useContext, useState } from "react";
import "./Style.css";
import TodoItem from "./TodoItem";
import { TodoItemContext } from "../TodoItemStore";

let TodoList = () => {
  // Functions & State

  let todoStore = useContext(TodoItemContext)

  let [getTodoName, setTodoName] = useState("");
  let [getTodoDate, setTodoDate] = useState("");

  let onTodoNameChange = (event) => setTodoName(event.target.value);
  let onTodoDateChange = (event) => setTodoDate(event.target.value);

  // Component

  let emptyListComponent = <h2 className="emptyListComponent">
    Enjoy your day.
  </h2>

  let listComponent = todoStore.todoList.map(
    (todo)=>
      <TodoItem todo={todo.name}/>

  )

  return (
    <>

      <input
        type="text"
        placeholder="Enter Todo here"
        className="TodoNameContainer"
        onChange={onTodoNameChange}
      />
      <input type="date" className="TodoDateContainer" onChange={onTodoDateChange}/>
      <button type="button" class="btn btn-success AddButton" onClick={
        ()=>todoStore.add(getTodoName,getTodoDate)
      }>
        Add
      </button>

      {
        todoStore.todoList.length===0 ? emptyListComponent : listComponent
      }

    </>
  );
};

export default TodoList;
