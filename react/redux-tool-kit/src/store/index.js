import {createStore} from 'redux'

import {configureStore, createSlice} from '@reduxjs/toolkit'

// let INITIAL_VALUE={
//   counter:0
// }

// let reducer = (store=INITIAL_VALUE,action)=>{  // Reducer object
//   if(action.type==='INCREMENT'){
//     return{
//       counter: store.counter + 1
//     }

//   } else if(action.type === 'DECREMENT'){
//     return {
//       counter: store.counter - 1
//     }
//   } else if(action.type === "ADDITION"){
//     return {
//       counter: store.counter + action.payload.number
//     }
//   }else if (action.type === "SUBTRACTION"){
//         return {
//           counter: store.counter - action.payload.number,
//         }
//   }
//   return store;
// }

// let counterStore = createStore(reducer); // Store object.

let counterSlice = createSlice({
  name: "counter",
  initialState: {
    counter: 0,
  },
  reducers: {
    increment: (state) => {
      console.log("increment called")
      state.counter++;
    },
    decrement: (state) => {state.counter--},
    addition: (state,action) => {state.counter += Number(action.payload.number);},
    subtraction: (state,action) => {state.counter -= Number(action.payload);},
  },
});

let counterStore = configureStore(
  {
    reducer:{
      counter:counterSlice.reducer
    }
  }
)

export const counterActions = counterSlice.actions; // exporting the actions

export default counterStore; // expporting Store.