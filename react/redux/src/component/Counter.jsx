import { useDispatch, useSelector } from "react-redux"
import '../App.css'
import { useState } from "react"

let Counter = () => {

  const dispatch = useDispatch()

  let counterValue = useSelector(
    (store) => store.counter
  )

  let [getInput, setInput] = useState('')

  let onInputChange = (event) =>{
    setInput(event.target.value)
  }

  let increment = () => {
    dispatch({ type: "INCREMENT" })
  }

  let decrement = () => {
    dispatch({ type: "DECREMENT" })
  }

  let addition = ()=>{
    dispatch({type:"ADDITION", payload:{number:Number(getInput)}})
  }

  let subtraction = ()=>{
    dispatch({type: "SUBTRACTION", payload:{number:Number(getInput)}})
  }

  return (
    <div>

      <div className="px-4 py-5 my-5 text-center">

        <h1 className="display-5 fw-bold text-body-emphasis">
          Counter
        </h1>

        <div className="col-lg-6 mx-auto">

          <p className="lead mb-4">
            Counter value {counterValue}
          </p>

          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">

            <button
              type="button"
              className="btn btn-success"
              onClick={increment}
            >
              Increment
            </button>

            <button
              type="button"
              className="btn btn-danger"
              onClick={decrement}
            >
              Decrement
            </button>

            <button type="button" className="btn btn-primary" onClick={addition}>Addition</button>
            <button type="button" className="btn btn-warning" onClick={subtraction}>Subtract</button>


          </div>

          <input className="input" placeholder="Enter number" onChange={onInputChange}></input>
        </div>
      </div>
    </div>
  )
}

export default Counter