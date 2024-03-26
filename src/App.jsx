import { useState } from 'react'
import './App.css'
import Task from './Task';
import SearchTask from './SearchTask';


function App() {
  const TASKS = [
    {
      dueDate: "2024-03-30",
      completed: false,
      name: "Finish project proposal",
    },
    {
      dueDate: "2024-03-27",
      completed: false,
      name: "Meet with mentor",
    },
    {
      dueDate: "2024-03-28",
      completed: true,
      name: "Review study notes",
    },
    {
      dueDate: "2024-03-29",
      completed: false,
      name: "Practice coding exercises",
    },
    {
      dueDate: "2024-04-01",
      completed: false,
      name: "Plan weekend trip",
    },
    {
      dueDate: "2024-03-26",
      completed: true,
      name: "Attend yoga class",
    },
    {
      dueDate: "2024-03-31",
      completed: false,
      name: "Update resume",
    },
    {
      dueDate: "2024-04-02",
      completed: false,
      name: "Research career options",
    },
    {
      dueDate: "2024-04-03",
      completed: true,
      name: "Start reading new book",
    },
    {
      dueDate: "2024-04-04",
      completed: true,
      name: "Schedule dentist appointment",
    },
  ];
  const [filteredTasks, setFilteredTasks] = useState(TASKS);
  const handleInputTextChange = (inputedText) => {
      const filtered = TASKS.filter((task) => {
        return task.name.toLowerCase().indexOf(inputedText.toLowerCase()) !== -1;
    });
    setFilteredTasks(filtered);
  };
 const handleShowCompletedChange = (showCompleted) => {
  if (showCompleted){
    const filtered = TASKS.filter((task) => {return showCompleted && task.completed} );
    setFilteredTasks(filtered);
  }else{
    setFilteredTasks(TASKS);
  }
};


  return (
    <>
      <h1>To do List</h1>
      <SearchTask handleInputTextChange={handleInputTextChange} handleShowCompletedChange={handleShowCompletedChange}/>
      <Task tasks={filteredTasks}/>  
    </>
  )
}

export default App
