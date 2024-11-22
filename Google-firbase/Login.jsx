import { signInWithPopup } from 'firebase/auth'
import React, { useState } from 'react'
import { auth, provider } from '../FirebaseConfing'
import {  Navigate, useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate();
  const [name,SetName] = useState("")
  const [password, setPassword] = useState("")
  const [user, setUser] = useState(null);

    const handleLogin = async ()=> {
       await signInWithPopup(auth,provider).then((user) =>{
            console.log(user);
            navigate('/dashbord');

        })
    
       

  
    }
  return (
    <div className="login-container">
    <h1>  Login with Google</h1>
    <label htmlFor="name"> 👤 Name : </label><br />
    <input    type="text"      id="name" placeholder="Enter Name" value={name}onChange={(e) => SetName(e.target.value)}/><br /><br />
    <label htmlFor="password"> 🔒 Password :</label><br />

    <input type="password" id="password" placeholder="Enter Password"  value={password} onChange={(e) => setPassword(e.target.value)}/><br /><br />
    
    <button onClick={handleLogin}>Login</button>
  </div>
  )
}
