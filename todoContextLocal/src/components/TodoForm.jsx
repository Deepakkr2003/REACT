/* eslint-disable no-unused-vars */
// Importing necessary dependencies
import React, { useState } from 'react';
import { useTodo } from '../contexts/TodoContext';

// Functional component for a TodoForm
function TodoForm() {
    // Local state to manage the input value for a new todo
    const [todo, setTodo] = useState("");
    // Accessing the addTodo function from the TodoContext
    const { addTodo } = useTodo();

    // Function to add a new todo
    const add = (e) => {
        e.preventDefault();
        // Check if the todo input is not empty
        if (!todo) return;
        // Add the new todo with completed status set to false
        addTodo({ todo, completed: false });
        // Clear the input field after adding the todo
        setTodo("");
    }

    // Rendering the form for adding a new todo
    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

// Exporting the TodoForm component
export default TodoForm;