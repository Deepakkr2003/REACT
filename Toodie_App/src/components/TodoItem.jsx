/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

function TodoItem(props) {
  return (
    <div className='flex justify-between items-center p-5 '>
        <div className='flex'>
            <input type="checkbox"/>
            <p>{props.text}</p>
        </div>
        <div>
            <p>...</p>
        </div>
    </div>
  )
}

export default TodoItem
