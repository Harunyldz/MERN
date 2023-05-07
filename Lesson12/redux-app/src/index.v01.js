import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createStore} from 'redux';

//Reducer function
function reducer(state,action){
  console.log("REDUCER CALLED =>" ,state,action)
  if(action.type==="changeTheState"){
    return action.payload.newState;
  }
  return 'State01';
}

//create a store
const store=createStore(reducer);
console.log('STORE DATA-01 =>' ,store.getState());

//create an action
const action={
  type: "changeTheState",
  payload: {newState:"State02"}
}

// dispatch the action to the store
store.dispatch(action);
console.log('STORE DATA-02 =>' ,store.getState());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


