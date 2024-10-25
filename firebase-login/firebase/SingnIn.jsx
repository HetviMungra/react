import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebaseConfig';

export default function SingnIn() {
    const [email,setEmail]=useState("")
    const [password,setPassword] = useState("");
    const navigate = useNavigate()

    const handleSingIn = async () => {
        let user = await signInWithEmailAndPassword(auth, email, password)
        console.log(user);
        if(user) {
            navigate("/dashbord")
        }

    }
  return (
    <div>
          <h1>SingIn</h1>
          <input type="text" placeholder='Enter Your Email'onChange={(e) => setEmail(e.target.value)} /> <br /><br />
    <input type="text" placeholder='Enter Your Password' onChange={(e) => setPassword(e.target.value)} /> <br /><br />
    <button onClick={handleSingIn}>Sing In</button>
    <Link to={"/dashbord"}>Dashbord</Link>
    </div>
  )
}
