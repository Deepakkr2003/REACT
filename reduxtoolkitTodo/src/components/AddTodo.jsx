/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice' 

function AddTodo() {
    // State to manage input value
    const [input, setInput] = useState('')
    const dispatch = useDispatch() // Initialize useDispatch hook to dispatch actions

    // Function to handle adding a new todo
    const addTodoHandler = (e) => {
        e.preventDefault() // Prevent form submission
        dispatch(addTodo(input)) // Dispatch addTodo action with input value
        setInput('') // Clear input after adding todo
    }

    return (
        // Form for adding a new todo
        <form onSubmit={addTodoHandler} className="space-x-3 mt-12 flex justify-center">
            {/* Input field for entering todo text */}
            <input
                type="text"
                className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Enter a Todo..."
                value={input}
                onChange={(e) => setInput(e.target.value)} // Update input state as user types
            />
            {/* Button to submit the form and add todo */}
            <button
                type="submit"
                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
                Add Todo
            </button>
        </form>
    )
}

export default AddTodo
