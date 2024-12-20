import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  addTask,
  editTask,
  deleteTask,
  toggleComplete,
} from '../features/TodoSlice';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const TaskDashboard = () => {
  const [newTask, setNewTask] = useState({ title: '', description: '', dueDate: '' });
  const [editingTask, setEditingTask] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [taskToDelete, setTaskToDelete] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all'); 
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (newTask.title && newTask.description && newTask.dueDate) {
      dispatch(addTask({ ...newTask, id: Date.now(), completed: false }));
      setNewTask({ title: '', description: '', dueDate: '' });
    }
  };

  const handleEditTask = () => {
    if (editingTask && editingTask.title && editingTask.description && editingTask.dueDate) {
      dispatch(editTask({ id: editingTask.id, updates: editingTask }));
      setEditingTask(null);
    }
  };

  const handleDragEnd = (result) => {
    if (!result.destination) return;
  };

  const confirmDeleteTask = () => {
    dispatch(deleteTask(taskToDelete));
    setTaskToDelete(null);
  };

  const filterTasks = () => {
    const currentDate = new Date().toISOString().split('T')[0];
    switch (activeFilter) {
      case 'completed':
        return tasks.filter((task) => task.completed);
      case 'pending':
        return tasks.filter((task) => !task.completed);
      case 'overdue':
        return tasks.filter((task) => !task.completed && task.dueDate < currentDate);
      default:
        return tasks;
    }
  };

  const filterBySearch = (tasks) => {
    return tasks.filter((task) => task.title.toLowerCase().includes(searchTerm.toLowerCase()));
  };

  const filteredTasks = filterBySearch(filterTasks());

  return (
    <div className="min-h-screen bg-gray-200 py-8 px-4 sm:px-12">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">Task Manager</h1>

      <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Search tasks..."
          className="flex-1 px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {['all', 'completed', 'pending', 'overdue'].map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-lg font-medium shadow-md ${
              activeFilter === filter
                ? 'bg-green-500 text-white'
                : 'bg-gray-300 hover:bg-gray-400 text-gray-800'
            } w-full sm:w-auto`}
          >
            {filter.charAt(0).toUpperCase() + filter.slice(1)} Tasks
          </button>
        ))}
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Add a New Task</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Task Title"
            className="px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
            value={newTask.title}
            onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
          />
          <input
            type="text"
            placeholder="Description"
            className="px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
            value={newTask.description}
            onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
          />
          <input
            type="date"
            className="px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
            value={newTask.dueDate}
            onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
          />
        </div>
        <button
          onClick={handleAddTask}
          className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium shadow-md"
        >
          Add Task
        </button>
      </div>

      {editingTask && (
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Edit Task</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Task Title"
              className="px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={editingTask.title}
              onChange={(e) => setEditingTask({ ...editingTask, title: e.target.value })}
            />
            <input
              type="text"
              placeholder="Description"
              className="px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={editingTask.description}
              onChange={(e) => setEditingTask({ ...editingTask, description: e.target.value })}
            />
            <input
              type="date"
              className="px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={editingTask.dueDate}
              onChange={(e) => setEditingTask({ ...editingTask, dueDate: e.target.value })}
            />
          </div>
          <button
            onClick={handleEditTask}
            className="mt-4 w-full bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg font-medium shadow-md"
          >
            Save Changes
          </button>
        </div>
      )}

      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="tasks">
          {(provided) => (
            <ul
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="space-y-4"
            >
              {filteredTasks.map((task, index) => (
                <Draggable key={task.id} draggableId={task.id.toString()} index={index}>
                  {(provided) => (
                  <li
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  className={`bg-white rounded-lg shadow-md p-4 flex justify-between items-center ${
                    activeFilter === 'overdue' && task.dueDate < new Date().toISOString().split('T')[0]
                      ? 'border-l-4 border-red-500'
                      : ''
                  }`}
                >
                  <div>
                    <h3
                      className={`text-lg font-bold ${
                        task.completed ? 'text-green-500 line-through' : 'text-gray-700'
                      }`}
                    >
                      {task.title}
                    </h3>
                    <p
                      className={`text-sm ${
                        task.completed ? 'text-green-500 line-through' : 'text-gray-500'
                      }`}
                    >
                      {task.description}
                    </p>
                    <p className="text-xs text-gray-400">Due: {task.dueDate}</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    {/* Checkbox for marking complete */}
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id={`task-${task.id}`}
                        checked={task.completed}
                        onChange={() => dispatch(toggleComplete(task.id))}
                        className="w-4 h-4 text-green-500 border-gray-300 rounded focus:ring-green-500"
                      />
                      <label htmlFor={`task-${task.id}`} className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium">
                        Completed
                      </label>
                    </div>
                    {/* Disable Edit button for completed tasks */}
                    <button
                      onClick={() => !task.completed && setEditingTask(task)}
                      disabled={task.completed}
                      className={`px-4 py-2 rounded-lg font-medium ${
                        task.completed
                          ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                          : 'bg-yellow-500 hover:bg-yellow-600 text-white'
                      }`}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => setTaskToDelete(task.id)}
                      className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg"
                    >
                      Delete
                    </button>
                  </div>
                </li>
                
                  
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>

      {taskToDelete && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-lg font-bold text-gray-700 mb-4">Are you sure you want to delete this task?</h3>
            <div className="flex justify-between gap-4">
              <button
                onClick={confirmDeleteTask}
                className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg"
              >
                Yes, Delete
              </button>
              <button
                onClick={() => setTaskToDelete(null)}
                className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-lg"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskDashboard;