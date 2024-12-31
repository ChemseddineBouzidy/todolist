import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HelloWorld from './helloWorld/HelloWorld';
import TextField from './Forms/TextField';
import Fruit from './Fruits/Fruit';
import Counter from './Forms/Counter/Counter';
import Event from './Event/Event';

const root = ReactDOM.createRoot(document.getElementById('root'));
const fruitsArray = [
  'Apple',
  'Apple',
  'Lemon',
  'Orange'
]
root.render(
  <React.StrictMode>
    <App />
    <HelloWorld  name="chems" age="22" />
    <HelloWorld  name="ilyas" age="15"/>
  <TextField  inputName="name" inputLabel='firstName'>
    this is children
    </TextField>
    <Fruit Fruits={fruitsArray} />
    <Counter />
    <Event />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
