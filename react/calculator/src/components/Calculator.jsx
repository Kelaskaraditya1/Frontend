import AppTitle from "./AppTitle";
import Button from "./Button";
import "./style.css";

let Calculator = () => {

  const buttonNames = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '0', '.'];

  return (
    <center className="body">
      <div className="calculator">
        <AppTitle/>
        <input type="display" className="display"></input>
        <div className="buttons">

          {
            buttonNames.map(
              (button)=><Button buttonName={button}/>
            )
          }

        </div>
      </div>
    </center>
  );
};

export default Calculator;
