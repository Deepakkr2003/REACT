/* eslint-disable no-unused-vars */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, toggleCompleted } from '../features/todo/todoSlice'

function Todos() {
    // Retrieve todos state from Redux store
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch() // Initialize useDispatch hook to dispatch actions

    // Function to handle toggling completed status of a todo item
    const handleToggleCompleted = (id) => {
        dispatch(toggleCompleted(id)) // Dispatch toggleCompleted action with todo ID
    }

    return (
        <>
            {/* Render list of todos */}
            <ul className="list-none">
                {/* Map over todos array and render todo items */}
                {todos.map((todo) => (
                    <li
                        // Apply dynamic class based on todo completion status
                        className={`mt-6 mx-10 flex justify-between items-center ${todo.completed ? 'bg-gray-300' : 'bg-zinc-800'} px-4 py-2 rounded`}
                        key={todo.id} // Set unique key for each todo item
                        onClick={() => handleToggleCompleted(todo.id)} // Toggle completed status when clicked
                        style={{ cursor: 'pointer' }} // Change cursor to pointer to indicate clickable
                    >
                        {/* Checkbox for toggling completion status */}
                        <input
                            type="checkbox"
                            checked={todo.completed} // Set checkbox checked state based on todo completion status
                            onChange={() => handleToggleCompleted(todo.id)} // Toggle completed status when checkbox is changed
                            className="form-checkbox h-5 w-5 text-gray-600" // Apply Tailwind CSS styles
                        />
                        {/* Render todo text */}
                        <div className={`text-white ${todo.completed ? 'line-through' : ''}`}>{todo.text}</div>
                        {/* Button to remove todo */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation(); // Prevent event bubbling to li element
                                dispatch(removeTodo(todo.id)); // Dispatch removeTodo action with todo ID
                            }}
                            className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md" // Apply Tailwind CSS styles
                        >
                            {/* Icon for remove button */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                />
                            </svg>
                        </button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Todos
