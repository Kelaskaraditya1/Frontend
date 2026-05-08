import AppTitle from "./components/AppTitle"
import Calculator from "./components/Calculator"
import List from "./components/List"

function App(){

  // let healthyFoods = ["Shwarma", "Pav Bhaji", "PaniPuri", "ShevPuri", "Chicken Biryani"]

  let healthyFoods =[]

  return <>
  {/* <Calculator/> */}
  <List foodList={healthyFoods}></List>
  </>
}

export default App