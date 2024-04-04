/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

function Square(props) {
  return (
    <div 
    onClick={props.onClick}
    className='border-2 border-solid border-green-400 h-20 w-full flex justify-center items-center'>
      <h5>{props.value}</h5>
    </div>
  )
}

export default Square
