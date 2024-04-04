/* eslint-disable no-undef */ // Disable linting for undefined variables
/* eslint-disable no-unused-vars */ // Disable linting for unused variables
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{ id: 1, text: "Hello world" }] // Initial state with a sample todo item
}

export const todoSlice = createSlice({
    name: 'todo', // Slice name
    initialState, // Initial state
    reducers: {
        toggleCompleted: (state, action) => {
            toggleCompleted(todos.id); // This line seems incorrect. It should toggle the completed state of a specific todo.
        },
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), // Generate unique id using nanoid
                text: action.payload // Extract todo text from action payload
            }
            state.todos.push(todo); // Add new todo to the todos array
        },
        removeTodo: (state, action) => {
            // Filter out the todo with the specified id
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
    }
})

// Export action creators
export const { toggleCompleted, addTodo, removeTodo } = todoSlice.actions;

// Export reducer
export default todoSlice.reducer;
