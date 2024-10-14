import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

export default function Contact() {
    const navigate = useNavigate();
    const param = useParams();
    let data = "Hetvi"


    const handleBtn =() =>{
        navigate("/")

    }
  return (
    <div>
          <h1>Contact</h1>
          <h1>{param.id}</h1>
          <br />
        <p>This is the Contact page.</p>
        <br />
        <Link to={`/about/${data}`}>About</Link>
 

        <br /><br />
        <button onClick={handleBtn}>Go to Home</button>
    </div>
  )
}
