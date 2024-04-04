/* eslint-disable no-unused-vars */
import React from "react"
import Header from "./components/Header"
import TodoItem from "./components/TodoItem"
import Button from "./components/Button"


function App() {
 
  return (
    <div className="bg-blue-200 w-full h-full p-5 flex justify-center items-center ">
      <div className="w-[300px] p-15 rounded-xl font-serif bg-white ">
      <Header/>
      <TodoItem text="Eat"/>
      <TodoItem text="Code"/>
      <TodoItem text="Lunch"/>
      <TodoItem text="Play"/>
      <TodoItem text="Sleep"/>
      <Button/>
      
     </div>
    </div>
  )
}

export default App
