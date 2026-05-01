import "./style.css"

function Table() {
  return (
    <center className="table-content">
      <table className="table" >
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col"><input type="text" placeholder="Todo"></input></th>
            <th scope="col"><input type="date"></input></th>
            <th scope="col"><button type="button" className="btn btn-success">Submit</button></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Buy Milk</td>
            <td>4/10/2023</td>
            <td><button type="button" className="btn btn-danger">Delete</button></td>
          </tr>

          <tr>
            <th scope="row">2</th>
            <td>Go to college</td>
            <td>5/10/2023</td>
            <td><button type="button" className="btn btn-danger">Delete</button></td>
          </tr>
        </tbody>
      </table>
    </center>
  );
}

export default Table;
