import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function EditUser({ users, setUsers }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const userToEdit = users.find(user => user.id === parseInt(id));

  const [name, setName] = useState(userToEdit.name);
  const [email, setEmail] = useState(userToEdit.email);

  const handleUpdateUser = (e) => {
    e.preventDefault();
    const updatedUsers = users.map(user => 
      user.id === parseInt(id) ? { ...user, name, email } : user
    );
    setUsers(updatedUsers);
    navigate('/user-list');
  };

  return (
    <div>
      <center>
      <h2>Edit User</h2>
      <div className="con1">
      <form onSubmit={handleUpdateUser}>
        <label>Name : </label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        <br />
        <label>Email : </label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <br />
        <button id='update-ed' type="submit">Update User</button>
      </form>

      </div>
            </center>
    </div>
  );
}

