import { useState } from "react";
import AppTitle from "./AppTitle";
import Button from "./Button";
import "./style.css";

let Calculator = () => {

const buttonNames = [
  'C', '/', '*', '-',
  '7', '8', '9', '+',
  '4', '5', '6', '=',
  '1', '2', '3', '0',
  '.'
];


let onButtonClicked = (newText)=>{

  if(newText ==='C')
    setDisplayText("")
  else if(newText==='='){
    let result = eval(getDisplayText)
    setDisplayText(result)
  }else{
    setDisplayText(getDisplayText+newText)
  }

  

}

let [getDisplayText, setDisplayText]= useState("")

  return (
    <center className="body">
      <div className="calculator">
        <AppTitle/>
        <input type="display" className="display" readOnly value={getDisplayText}></input>
        <div className="buttons">

          {
            buttonNames.map(
              (button)=><Button buttonName={button} onButtonClick={()=>onButtonClicked(button)}/>
            )
          }

        </div>
      </div>
    </center>
  );
};

export default Calculator;
