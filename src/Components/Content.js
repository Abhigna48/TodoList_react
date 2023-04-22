import React, { useState } from 'react';
import './Content.css';
import StopWatch from './Stopwatch';

function Content() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTask = (task, duration) => {
    const newTask = { task, duration };
    setTasks([...tasks, newTask]);
    setInputValue('');
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className='main-content '>
      <div className='d-flex flex-sm-row flex-column cons' style={{ marginTop: 50 }}>
        <div className='input-group input-group-lg' style={{ padding: '10px' }}>
          <input
            className='todo-input'
            type='text-info'
            placeholder='What are you working on?'
            value={inputValue}
            onChange={handleInputChange}
          />
          <StopWatch addTask={addTask} lastDuration={tasks.length > 0 ? tasks[tasks.length - 1].duration : null} />
        </div>
      </div>
      <div>
        {tasks.map((task, index) => (
          <div className='d-flex flex-sm-row flex-column tasks' key={index}>
            <div className='task'>{task.task}</div>
            <div className='duration'>
              <StopWatch lastDuration={task.duration} addTask={addTask} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Content;
