import ListItem from "./ListItem";
import headerStyle from './Header.module.css'

function Healthy({foodList}){

  let healthyFoods = foodList

  let listItems = healthyFoods.map(
    (item)=><ListItem foodItem={item}></ListItem>
  )

  let emptyListMessage = <h2>No items added yet.</h2>

  return <>
  <ul className="list-group ">
  <li className= {`list-group-item active ${headerStyle['text-style']}`} aria-current="true">Healthy Foods</li>
  <li className={`${headerStyle['text-style']}`}>Healthy Foods</li>
  {
    healthyFoods.length===0?emptyListMessage:listItems

  }

</ul>
  </>

}

export default Healthy;