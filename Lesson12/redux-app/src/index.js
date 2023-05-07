import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createSlice,configureStore} from '@reduxjs/toolkit';

//Step01 Reducer function
const counterReducer=createSlice({
  name:'counter',
  initialState:{count:0},
  reducers:{
    increment:(state)=>{state.count+=1},
    decrement:(state)=>{state.count-=1}
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


