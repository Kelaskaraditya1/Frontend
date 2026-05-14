import {createStore} from 'redux'

let INITIAL_VALUE={
  counter:0
}

let reducer = (store=INITIAL_VALUE,action)=>{  // Reducer object
  if(action.type==='INCREMENT'){
    return{
      counter: store.counter + 1
    }

  } else if(action.type === 'DECREMENT'){
    return {
      counter: store.counter - 1
    }
  } else if(action.type === "ADDITION"){
    return {
      counter: store.counter + action.payload.number
    }
  }else if (action.type === "SUBTRACTION"){
        return {
          counter: store.counter - action.payload.number,
        }
  }
  return store;
}

let counterStore = createStore(reducer); // Store object.

export default counterStore;