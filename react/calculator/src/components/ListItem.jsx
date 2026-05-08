let ListItem = ({healthyFood,onDelete})=>{

  return <>
  <div className="list-item-container">

    <h2>{healthyFood}</h2>
    <div className="delete-button-container">
      <button type="button" className="btn btn-danger delete-button"  onClick={()=>onDelete(healthyFood)}>Delete</button>
    </div>
    

  </div>
  </>

}

export default ListItem