import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebaseConfig';

export default function SingnIn() {
    const [email,setEmail]=useState("")
    const [password,setPassword] = useState("");
    const navigate = useNavigate()

    // const handleSingIn = async () => {
    //     let user = await signInWithEmailAndPassword(auth, email, password)
    //     console.log(user);
    //     if(user) {
    //         navigate("/dashbord")
    //     }
    // }

    const handleSingIn =()=>{
      signInWithEmailAndPassword(auth, email, password)
      .then(user=>{
        navigate("/dashbord")
      })
    }
  return (
    <div className="signin-container">
      <div className="signin-box">
        <h1 className="signin-title">Sign In</h1>
        <input
          type="text"
          placeholder="Enter Your Email"
          className="signin-input"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter Your Password"
          className="signin-input"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="signin-button" onClick={handleSingIn}>
          Sign In
        </button>
        <p className="signup-link">
          Don't have an account? <Link to="/">Sign Up</Link>
        </p>
      </div>
    </div>
  )
}
