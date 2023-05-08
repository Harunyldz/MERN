import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createSlice, configureStore } from '@reduxjs/toolkit';

//Step01: Reducer function
const counterReducer = createSlice({
  name: 'counter',
  initialState: { count: 0 },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    }
  }
});

//Step02: configure a store
const myStore = configureStore({
  reducer: counterReducer.reducer
});

//Step03: Create an action 
const { increment, decrement } = counterReducer.actions;

// Subscribe to the store
myStore.subscribe(() => console.log("STORE DATA(State List)=>", myStore.getState()))

//Step04: Dispatch the action to the store
myStore.dispatch(increment());
myStore.dispatch(increment());
myStore.dispatch(increment());
myStore.dispatch(decrement());


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
