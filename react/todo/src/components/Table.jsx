import "./style.css"
import TaskHeader from "./TaskHeader";
import TaskItem from "./TaskItem";

function Table() {

  let tableData = [
    {
     title:"Buy Milk",
     date:"4/10/2023"
    },
        {
     title:"Running",
     date:"4/10/2023"
    },
        {
     title:"Meditation",
     date:"4/10/2023"
    },
        {
     title:"Workout",
     date:"4/10/2023"
    }
  ]
  
  return (
    <center className="table-content">
      <table className="table" >
        <thead>
          <TaskHeader/>
        </thead>
        <tbody>

          {

            tableData.map(
              (data)=><TaskItem tableData={data}></TaskItem>
            )
          }

        </tbody>
      </table>
    </center>
  );
}

export default Table;
