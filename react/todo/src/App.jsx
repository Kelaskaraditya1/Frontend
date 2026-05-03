
import Header from './components/Header'
import Healthy from './components/Healthy'
import Table from './components/Table'

function App() {

    let foods = ["Shwarma", "Chicker Biryani", "Paneer Chilli", "Pav Bhaji", "Veg Kolhapuri"]

    // let foods =[]

  return <>
    <Header></Header>
    <Table></Table>

        {/* <Healthy foodList={foods}></Healthy> */}
  </>
}

export default App