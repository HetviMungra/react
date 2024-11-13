import { createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react'
import { useState } from 'react';
import { auth, db } from '../../firebaseConfig';
import { Link,useNavigate } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';

export default function SingUp() {

    // const [email,setEmail]=useState("")
    // const[password,setPassword] = useState("");
    // const navigate = useNavigate();

    // const handelSingUp = async () => {
    //     let user = await createUserWithEmailAndPassword(auth,email,password);
    //     console.log (user);
    //     if (user) {
    //        navigate("/dashbord")
    //     }
    //     setEmail("")
    //     setPassword("")

    // }

    //print data code in below............

    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword] = useState("");
    const [city,setCity]=useState("")
    const [hobby,setHobby]=useState("")

    const navigate = useNavigate();

    const handelSubmit =()=> {
      createUserWithEmailAndPassword(auth,email,password)
      .then (data =>{
        setDoc(doc(db,"users",data.user.uid),{
          name,email,city,hobby
        })
        console.log("added");
        navigate("/dashbord")
      })
    }

  return (
    <div className="signup-container">
    <div className="signup-box">
      <h1 className="signup-title">Sign Up</h1>
      <input
        type="text"
        placeholder="Enter Your Name"
        className="signup-input"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Enter Your Email"
        className="signup-input"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter Your Password"
        className="signup-input"
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Your City"
        className="signup-input"
        onChange={(e) => setCity(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Your Hobby"
        className="signup-input"
        onChange={(e) => setHobby(e.target.value)}
      />
      <button className="signup-button" onClick={handelSubmit}>
        Submit
      </button>
      <p className="signin-link">
        Already have an account? <Link to="/singin">Sign In</Link>
      </p>
    </div>
  </div>

  )
}
