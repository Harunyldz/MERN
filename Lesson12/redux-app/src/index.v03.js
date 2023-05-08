import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createStore} from 'redux';

//reducer function
function counterReducer(state={count:0},action){
  switch (action.type) {
    case "counter/incremented":
      return {count:state.count+1};
    case "counter/decremented":
      return {count:state.count-1};
    default:
      return state;
  }
}

// create a store
const myStore=createStore(counterReducer);

//show the state from myStore
myStore.subscribe(()=>{console.log("STORE DATA(State lists)=>",myStore.getState())})

//create an action and dispatch the action01 to the store
myStore.dispatch({type:"counter/incremented"} )
myStore.dispatch({type:"counter/incremented"} )
myStore.dispatch({type:"counter/incremented"} )

//create an action and dispatch the action01 to the store
myStore.dispatch({type:"counter/decremented"});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


