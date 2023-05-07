import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createStore} from 'redux';

//reducer function
function counterReducer(state={count:20},action){
  switch (action.type) {
    case "counter/incremented":
      return {count:action.payload.newCount};
    case "counter/decremented":
      return {count:state.count-1};
    default:
      return state;
  }
}

// create a store
const myStore=createStore(counterReducer);
console.log('STORE DATA-V1 =>' ,myStore.getState());

// create an action
const action01={type:"counter/incremented",payload: {newCount:12}}
const action02={type:"counter/decremented"};

//dispatch the action01 to the store
myStore.dispatch(action01 )

console.log('STORE DATA-V2 =>' ,myStore.getState());

//dispatch the action02 to the store
myStore.dispatch(action02);
console.log('STORE DATA-V3 =>' ,myStore.getState());


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


