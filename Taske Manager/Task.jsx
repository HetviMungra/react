import React, { useEffect, useState } from 'react';

export default function Task() {
  const [name, setName] = useState('');
  const [taskList, setTaskList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('Tasks')) || [];
    setTaskList(data);
  }, []);

  const handleAdd = (e) => {
    e.preventDefault();

    const newTask = { id: Date.now(), name, completed: false };

    // Edit existing task
    if (editIndex !== null) {
      const updatedTasks = taskList.map((task) =>
        task.id === editIndex ? { ...task, name } : task
      );
      setTaskList(updatedTasks);
      localStorage.setItem('Tasks', JSON.stringify(updatedTasks));
      setEditIndex(null);
    } 
    // Add new task
    else {
      const updatedTaskList = [...taskList, newTask];
      setTaskList(updatedTaskList);
      localStorage.setItem('Tasks', JSON.stringify(updatedTaskList));
    }

    setName(''); // Clear input field after adding/editing
  };

  const handleDelete = (id) => {
    const updatedTasks = taskList.filter((task) => task.id !== id);
    setTaskList(updatedTasks);
    localStorage.setItem('Tasks', JSON.stringify(updatedTasks));
  };

  const handleEdit = (id) => {
    const taskToEdit = taskList.find((task) => task.id === id);
    setName(taskToEdit.name);
    setEditIndex(id);
  };

  const toggleCompletion = (id) => {
    const updatedTasks = taskList.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTaskList(updatedTasks);
    localStorage.setItem('Tasks', JSON.stringify(updatedTasks));
  };

  return (
    <div>
    <div className="taskManager" style={styles.container}>
      <div className="card" style={styles.card}>
        <h1>Task Manager ✅</h1>
        <form id="taskForm" onSubmit={handleAdd}>
          <input type="text" id="taskInput" value={name}
            placeholder="Add a task..."
            onChange={(e) => setName(e.target.value)} style={styles.input}
            />
          <button type="submit" style={styles.button}>
            {
            editIndex !== null ? 'Edit Task' : 'Add Task'
            }
          </button>
        </form>
      </div>

      <section id="taskContainer">
        <ul style={styles.taskList}>
          {taskList.map((task) => (
            <li key={task.id} style={styles.taskItem}>
              <span
                style={{...styles.taskName,
                  textDecoration: task.completed ? 'line-through' : 'none',
                }}
              >
                {task.name}
              </span>

              <button
                onClick={() => toggleCompletion(task.id)}
                style={styles.toggleButton}
              >
                {task.completed ? 'Mark as Pending' : 'Mark as Completed'}
              </button>

              <button onClick={() => handleEdit(task.id)} style={styles.editButton}>
                Edit
              </button>

              <button onClick={() => handleDelete(task.id)} style={styles.deleteButton}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </section>
    </div>
    </div>
  );
}

const styles = {
  
  
  container: {
    margin: 'auto',
    width: '80%',
    padding: '25px',
    backgroundColor: '#f4f4f9',
    backgroundImage: 'linear-gradient(90deg, #5f72bb 0%, #9b23ea 100%)',
    fontFamily: 'Arial, sans-serif',
    textTransform:' capitalize',

    borderRadius: '10px',
    
  },
  card: {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    borderRadius: '10px',
  },
  input: {
    padding: '10px',
    width: '70%',
    marginRight: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    // backgroundColor: '#4CAF50',
    backgroundImage: 'linear-gradient(315deg, #ff4e00 0%, #ec9f05 74%)',

    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  taskList: {
    listStyle: 'none',
    padding: 0,
  },
  taskItem: {
    padding: '15px',
    marginBottom: '10px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: '4px',
  },
  taskName: {
    fontSize: '18px',
  },
  toggleButton: {
    backgroundColor: '#f1c40f',
    color: '#fff',
    boxShadow: '5px 5px 20px rgba(208, 205, 222, 0.10)',

    padding: '10px 15px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    marginRight: '-400px',
   
  },
  editButton: {
    backgroundColor: '#3498db',
    color: '#fff',
    boxShadow: '5px 5px 20px rgba(208, 205, 222, 0.10)',

    padding: '10px 15px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    marginRight: '-400px',
  },
  deleteButton: {
    backgroundColor: '#e74c3c',
    color: '#fff',
    boxShadow: '5px 5px 20px rgba(208, 205, 222, 0.10)',

    padding: '10px 15px',
    borderRadius: '6px',
    border: 'none',
    cursor: 'pointer',

  },
};
