/* eslint-disable no-unused-vars */ // Disable linting for unused variables

// Importing CSS file for styling
import './App.css'

// Importing AddTodo component
import AddTodo from './components/AddTodo'

// Importing Todos component
import Todos from './components/Todos'

// Main component App
function App() {
  // Render the components
  return (
    <>
      {/* Header */}
      <h1 className='flex justify-center text-3xl mt-5 font-bold'>MANAGE YOUR TODOS</h1>
      
      {/* AddTodo component to add new todos */}
      <AddTodo/>

      {/* Todos component to display todos */}
      <Todos/>
    </>
  )
}

// Export the App component
export default App
