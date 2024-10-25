import { createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react'
import { useState } from 'react';
import { auth } from '../../firebaseConfig';
import { Link, useNavigate } from 'react-router-dom';

export default function SingUp() {
    const [email,setEmail]=useState("")
    const[password,setPassword] = useState("");
    const navigate = useNavigate();

    const handelSingUp = async () => {
        let user = await createUserWithEmailAndPassword(auth,email,password);
        console.log (user);
        if (user) {
           navigate("/dashbord")
        }
        setEmail("")
        setPassword("")

    }
  return (
    <div>
    <h1>SignUp</h1>
    <input type="text" value={email} placeholder='Enter Your Email'onChange={(e) => setEmail(e.target.value)} /> <br /><br />
    <input type="text" value={password} placeholder='Enter Your Password' onChange={(e) => setPassword(e.target.value)} /> <br /> <br />
    <button onClick={handelSingUp}>Sing Up</button> &nbsp;
    <Link to={"/singin"}>Sign In?</Link>
    </div>
  )
}
