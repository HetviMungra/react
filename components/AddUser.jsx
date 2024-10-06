import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function AddUser({ users, setUsers }) {
    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleAddUser = (e) => {
    e.preventDefault();
    const newUser = {
      id: users.length + 1,
      name,
      email
    };
    setUsers([...users, newUser]);
    navigate('/user-list');
  };
  return (
    <div id='add'>
        <center> <h2>Add New User</h2>
      <form onSubmit={handleAddUser}>
        <label>Name : </label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        <br />
        <label>Email : </label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <br />
        <button id='Add-user' type="submit">Add User</button>
      </form>

      </center>

    </div>
  )
}
