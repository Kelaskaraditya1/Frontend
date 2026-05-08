  import { useState } from 'react'
import './style.css'
import ListItem from './ListItem'

  let List = ({foodList})=>{

    // Functions & States

    let [getDisplayText,setDisplayText] = useState("Healthy Food")

    let onTextChange = (event) =>{
      setDisplayText(event.target.value)
    }

    let [getFoodList, setFoodList] = useState(foodList)

    let addHealthyFood = ()=>{
      if(getDisplayText.trim()==='')
        return

      setFoodList([...getFoodList,getDisplayText.trim()])
      setDisplayText('')

    }

    let deleteHealthyFood = (item)=>{

      let newList = getFoodList.filter(
        (food)=>food!==item
      )

      setFoodList(newList)

    }

    // Component

    let emptyListComponent = <h2>No Healthy Food added yet.</h2>

    let healthyFoodList = getFoodList.map(
      (item)=><ListItem key={item} healthyFood={item} onDelete={deleteHealthyFood}/>
    )

    return <>
      <center className="body-container">
        <h1>Healthy Foods</h1>

        <div className='column-container'>

          {/* Input component */}

          <input type='display' className='display-text' value={getDisplayText} onChange={onTextChange} readOnly></input>
          <input type='text' placeholder='Enter healthy food' className='input-text' onChange={onTextChange}></input> 
          <button type="button" className="btn btn-success add-button" onClick={
            addHealthyFood }>Add</button>
          <hr></hr>

          {/* List component */}

          {
            getFoodList.length ===0? emptyListComponent:healthyFoodList
          }

        </div>

      </center> 

    </>
  }

  export default List