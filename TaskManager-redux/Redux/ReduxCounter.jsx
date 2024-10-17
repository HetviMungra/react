// Redux/ReduxCounter.jsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, deleteTask, updateTask } from '../Features/TodoSlice';
import './ReduxCounter.css'; // Optional CSS file for styles

export default function ReduxCounter() {
    const [task, setTask] = useState('');
    const [description, setDescription] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [status, setStatus] = useState('pending');
    const [check ,setCheck] = useState('');
    const [editId, setEditId] = useState(null);

    const tasks = useSelector((state) => state.todoKey.tasks);
    const dispatch = useDispatch();

    const addRecord = () => {
        if (editId === null) {
            dispatch(addTask({
                id: Date.now(),
                task,
                description,
                startDate,
                endDate,
                status,
                
            }));
        } else {
            dispatch(updateTask({
                id: editId,
                task,
                description,
                startDate,
                endDate,
                status,
                
            }));
            setEditId(null);
        }

        // Reset fields
        setTask('');
        setDescription('');
        setStartDate('');
        setEndDate('');
        setStatus('pending');
        // setCheck('');
        setCheck("")
    };

    const deleteRecord = (id) => {
        dispatch(deleteTask(id));
    };

    const editRecord = (task) => {
        setTask(task.task);
        setDescription(task.description);
        setStartDate(task.startDate);
        setEndDate(task.endDate);
        setStatus(task.status);
        setEditId(task.id);
    };

    return (
        <div className="task-container">
            <h1 id='ti'>Task Manager</h1>
            <label>Task:</label>
            <input type="text" value={task} placeholder="Task" onChange={(e) => setTask(e.target.value)} />
            <label>Description :</label>
            <input type="text" value={description} placeholder="Description" onChange={(e) => setDescription(e.target.value)} />
            <label>Start Date :</label>
            <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
            <label>End Date :</label>
            <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
            <label htmlFor=""> status :</label>
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="pending">Pending</option>
                <option value="processing">Processing</option>
                <option value="completed">Completed</option>
            </select>
            <div className="check">
            <input type="checkbox" value={check} onChange={(e) => setCheck(e.target.value)} id="vehicle1" /><span for="vehicle1"> I agree to the task and conditions .....</span><br />

            </div>
            <br />

            <button onClick={addRecord}>{editId ? "Update Task" : "Add Task"}</button>

            <div className="task-list">
                {tasks.length > 0 ? (
                    tasks.map((task) => (
                        <div className="main" >
                            <div key={task.id} className="task-card" style={{backgroundColor:task.status==="pending"?"rgb(254,240,138)":task.status==="processing"?"rgb(191,219,254)":task.status==="completed"?"rgb(187,247,208) ":"white",color:task.status==="pending"?"rgb(133,79,22)":task.status==="processing"?"rgb(51,76,176)":task.status==="completed"?"rgb(26,106,63) ":"white"}
                        }>
                            <h3>Task : {task.task}</h3>
                            <p>{task.description}</p>
                            <p>Start Date : {task.startDate}</p>
                            <p>End Date : {task.endDate}</p>
                            <p>Status : {task.status}</p>
                            <button onClick={() => editRecord(task)}>Edit</button>
                            <button onClick={() => deleteRecord(task.id)}>Delete</button>
                        </div>
                        </div>
                    ))
                ) : (
                    <p>No tasks available</p>
                )}
            </div>
        </div>
    );
}
