
import Container from './components/Container'
import Header from './components/Header'
import Healthy from './components/Healthy'
import Table from './components/Table'
import TodoComponent from './todoComponents/TodoComponent'
import Todo from './todoComponents/TodoComponent'

function App() {

    let foods = ["Shwarma", "Chicker Biryani", "Paneer Chilli", "Pav Bhaji", "Veg Kolhapuri"]

    // let foods =[]

  return <>
     {/* <Header></Header>
     <Table></Table> */}

    {/* <Container>
      <Healthy foodList={foods}></Healthy>
    </Container> */}

    {/* <Container>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, laudantium? Maiores exercitationem autem neque, nihil ut repudiandae dolorem excepturi commodi enim natus? Velit alias deleniti id ullam odio autem expedita!
    </Container> */}

  <TodoComponent/>
        
  </>
}

export default App