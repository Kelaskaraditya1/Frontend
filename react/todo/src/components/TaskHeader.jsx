let TaskHeader = ()=>{
          return <tr>
            <th scope="col">#</th>
            <th scope="col"><input type="text" placeholder="Todo"></input></th>
            <th scope="col"><input type="date"></input></th>
            <th scope="col"><button type="button" className="btn btn-success">Submit</button></th>
          </tr>
}

export default TaskHeader;