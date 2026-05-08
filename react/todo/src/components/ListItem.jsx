import './style.css'

let ListItem = ({foodItem, onClick})=>{

  // let onClick = ()=>{
  //   console.log(`${foodItem} is being ordered`)
  // }

  return <>
  <div className='row'>
      <li key={foodItem} className="list-group-item text-style">{foodItem} 
  </li>
  <li><button type="button" className={`${'btn btn-danger'} delete-button`} onClick={onClick}>Delete</button>
  </li>
  
  </div>

  </>
}

export default ListItem