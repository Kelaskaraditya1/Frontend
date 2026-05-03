let TaskItem = ({tableData})=>{
  return <>
            <tr>
            <th scope="row">1</th>
            <td>{tableData.title}</td>
            <td>{tableData.date}</td>
            <td><button type="button" className="btn btn-danger">Delete</button></td>
          </tr>
  </>
}

export default TaskItem