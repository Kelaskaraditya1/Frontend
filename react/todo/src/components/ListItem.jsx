import listItemStyle from './ListItem.module.css'


let ListItem = ({foodItem})=>{
  return <li key={foodItem} className="list-group-item text-style">{foodItem}</li>
}

export default ListItem