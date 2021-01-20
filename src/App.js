import { useState } from "react";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [showForm, setShowForm]=useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Digital Marketing",
      day: "Jan 20th at 3:00pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Slack Studies",
      day: "September 19th at 12:01am",
      reminder: true,
    },
    {
      id: 3,
      text: "Google Marketing",
      day: "Aug 20th at 3:50pm",
      reminder: true,
    },
    {
      id: 4,
      text: "Zoom Meetings",
      day: "Jun 24th at 4:00pm",
      reminder: false,
    },
  ]);

  //add a new task

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newtask = { id, ...task }
    setTasks([newtask,...tasks])
  }

  //remove a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task)=>(task.id!==id)))
  }

  //set a reminder 
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, reminder: !task.reminder }:task)))
  }

  return (
    <div className="container">
      <Header onShow={() => setShowForm(!showForm)} showForm={ showForm}/>
      {showForm&& <AddTask addTask={addTask} />}
      {
        tasks.length>0?
          <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>:"empty task"
      }
    </div>
  );
}

export default App;
