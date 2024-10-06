import React from 'react';
import { Link } from 'react-router-dom';

 export default function UserList({ users, setUsers }) {

  const handleDeleteUser = (id) => {
    const updatedUsers = users.filter(user => user.id !== id);
    setUsers(updatedUsers);
  };

  return (
    <div>
     <center>
     <h2>User List</h2>
     </center>
      {users.length > 0 ? (
        <table border="1">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <Link  to={`/edit-user/${user.id}`}><button id='Edit-users'>Edit</button></Link>
                  <button id='del-user' onClick={() => handleDeleteUser(user.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No users found. Add some users!</p>
      )}
    </div>
  );
}

