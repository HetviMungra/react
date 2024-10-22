import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function ApiwithAxios() {
  const [record, setRecord] = useState([]);
  const [newId, setNewId] = useState('');
  const [newTitle, setNewTitle] = useState('');
  const [newViews, setNewViews] = useState('');
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    let response = await axios.get('http://localhost:5000/posts');
    console.log(response.data);
    setRecord(response.data);
  };

  const addData = async () => {
    let addResponse = await axios.post('http://localhost:5000/posts', {
      id: newId, // Manual ID entry
      title: newTitle,
      views: newViews,
    });
    console.log(addResponse);
    setRecord([...record, addResponse.data]); // Add new record to list
    setNewId(''); // Clear input fields
    setNewTitle('');
    setNewViews('');
  };

  const deleteData = async (id) => {
    let deleteResponse = await axios.delete(`http://localhost:5000/posts/${id}`);
    console.log(deleteResponse);
    setRecord(record.filter((item) => item.id !== id)); // Remove record from list
  };

  const updateData = async (id) => {
    let updatedResponse = await axios.put(`http://localhost:5000/posts/${id}`, {
      title: newTitle,
      views: newViews,
    });
    console.log(updatedResponse);
    setRecord(record.map((item) => (item.id === id ? updatedResponse.data : item))); // Update record
    setEditId(null); // Reset edit mode
    setNewId(''); // Clear ID field
    setNewTitle('');
    setNewViews('');
  };

  return (
    <div>
      <h1>Api with Axios CRUD Operations</h1>
      <input
        type="text"
        placeholder="Enter ID"
        value={newId}
        onChange={(e) => setNewId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter title"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter views"
        value={newViews}
        onChange={(e) => setNewViews(e.target.value)}
      />
      <button onClick={editId ? () => updateData(editId) : addData}>
        {editId ? 'Update Data' : 'Add Data'}
      </button>

      {record &&
        record.map((e, i) => {
          return (
            <ul key={i}>
              <li>ID: {e.id}</li>
              <li>Title: {e.title}</li>
              <li>Views: {e.views}</li>
              <li>
                <button onClick={() => deleteData(e.id)}>Delete</button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setEditId(e.id); // Set current record to edit
                    setNewId(e.id); // Populate ID input with current ID
                    setNewTitle(e.title); // Populate inputs with current values
                    setNewViews(e.views);
                  }}
                >
                  Edit
                </button>
              </li>
            </ul>
          );
        })}
    </div>
  );
}
// i json-server
// npx json-server --watch dba.json --port 5000    json server and dba.json is file name