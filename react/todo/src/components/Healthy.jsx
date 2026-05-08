import ListItem from "./ListItem";
import headerStyle from './Header.module.css'
import { useState } from "react";

function Healthy({foodList}){

  // Fucntions

  let healthyFoods = foodList

  let displayState = useState("Enter food")
  let getDisplayText = displayState[0]
  let setDisplayText = displayState[1]

  let onTextChange = (event) =>{
    console.log(event.target.value);
    setDisplayText(event.target.value)  
  }


  let newFoodList = [...foodList]
  let [getListItems,setItemList] = useState([...foodList])

  let addFoodItem = ()=>{
    if(getDisplayText.trim()==='')
      return

    let newItemList = [...getListItems,getDisplayText.trim()]
    setItemList(newItemList)
    setDisplayText("")
    console.log(getListItems)
  }

  // Components

  let listItems = getListItems.map(
    (item)=><ListItem foodItem={item} onClick={()=>console.log(`${item} bought`)}></ListItem>
  )

  let emptyListMessage = <h2>No items added yet.</h2>

  return <>
  <ul className="list-group ">
  <li className= {`list-group-item active ${headerStyle['text-style']}`} aria-current="true">Healthy Foods</li>
      <li input="display" className={headerStyle['display']}>{getDisplayText}</li>
      <li> <input type="text" className={`${headerStyle['input-text']}`} onChange={(event)=>setDisplayText(event.target.value)}></input></li>

      <li className={headerStyle['addButtonContainer']}><button type="button" className={` btn btn-success`}onClick={addFoodItem}>Add</button>
      </li>

  {
    healthyFoods.length===0?emptyListMessage:listItems

  }

</ul>
  </>

}

export default Healthy;