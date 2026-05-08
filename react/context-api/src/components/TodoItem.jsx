import { useContext } from "react";
import { TodoItemContext } from "../TodoItemStore";

let TodoItem = ({ todo }) => {

  let storeContext = useContext(TodoItemContext)

  return (
    <>
      <div className="container text-center ItemContainer" >
        <div className="row align-items-start">
          <div className="col">{todo.name}</div>
          <div className="col">{todo.date}</div>
          <div className="col">
            <button type="button" class="btn btn-danger" onClick={()=>storeContext.delete(todo.name)}>Delete</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoItem;
