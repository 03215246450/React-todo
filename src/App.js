// import './App.css';
// import React,{useState} from"react"


// function App() {
//   return (
//     <div className="App">
//       <h1 className="text-center my-4">Todo with react</h1>
//       <div className='container text-center '>
//         <input className='w-25 p-2 border rounded-0 shadow' />
//          </div>
//     </div>
//   );
// }

// export default App;



import React, { useState } from 'react';
import './App.css';

function App() {
  let [tasks, setTasks] = useState([]);
  let [taskInput, setTaskInput] = useState('');

  let addTask = () => {
    if (taskInput !== '') {
      setTasks([...tasks, { text: taskInput, completed: false }]);
      setTaskInput('');
    }
  };

  let completeTask = (index) => {
    let updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  let removeTask = (index) => {
    let updatedTasks = tasks.filter((task, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <div className="task-container">
        <input
          type="text"
          placeholder="Add a task"
          // value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className={task.completed ? 'completed' : ''}>
            <span onClick={() => completeTask(index)}>{task.text}</span>
            <button onClick={() => removeTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

