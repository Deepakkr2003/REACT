/* eslint-disable no-const-assign */
/* eslint-disable no-unused-vars */

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]=useState(15)

  // let counter = 5

  const addValue=()=>{
    // counter=counter+1
    setCounter(counter+1)
    // setCounter(prevcounter=>prevcounter+1)  //to increase counter more than one using this 
  }

  const removeValue=()=>{
    setCounter(counter-1)
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value {counter}</button>
      <br />
      <button
      onClick={removeValue}
      >Remove value {counter}</button>
    </>
  )
}

export default App
