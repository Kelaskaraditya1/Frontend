/*

Implementing Redux using plain npm.
there are 4 components to itReducer,Store , Subscriber and  Action

1) Reducer: This is a abstract layer which takes action and performs the value which we get from the store and returns the new value.

fn reducer(store,action)=>{  takes the current state and returns the new state
  return {newStore}
  }

2) Store: This is the central place where all the data is being stored 

3) Subscriber: Subscriber could be a function which subscribes to the store fo  r getting the value.

4) Action: this is the actioin which has to be given to Reducer , like what operation has to be performed

*/ 

const redux = require('redux')  // import statement in node.

let INITIAL_VALUE = {  // initial value for state/store
  counter:0
}

const reducer = (store=INITIAL_VALUE,action)=>{  // abstract layer which takes the action and current state and returns the new state.

  let newStore = store;

  if(action.type === 'INCREMENT'){
    return {
      counter: store.counter+1
    }
  }else if(action.type === 'DECREMENT'){
    return {
      counter: store.counter -1
    }
  }else if(action.type === 'ADDITION'){
    return {
      counter:store.counter + action.payload.number
    }
  }

  return store;
}

const store = redux.createStore(reducer);  // creating a global store.

let subscriber = ()=>{ // subsriber function which listens to the changes made in the store.
    let state = store.getState();
    console.log(state);
}

store.subscribe(subscriber);

store.dispatch({  // dispatch method expects a object and this object will be passed for the action parameter in reducer function. 
  type: "INCREMENT"
});

store.dispatch({
  // dispatch method expects a object and this object will be passed for the action parameter in reducer function.
  type: "DECREMENT",
});

store.dispatch({
  // dispatch method expects a object and this object will be passed for the action parameter in reducer function.
  type: "INCREMENT",
});

store.dispatch({
  // dispatch method expects a object and this object will be passed for the action parameter in reducer function.
  type: "DECREMENT",
});

store.dispatch({type:"ADDITION", payload:{number:7}});  // if we want to pass payload as well we have to pass with type
store.dispatch({type:'DECREMENT'})






