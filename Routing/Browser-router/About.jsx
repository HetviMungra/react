import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

export default function About() {
  const navigate = useNavigate();
  const param = useParams();
  let name ="Full stack"

  const handleBtn = () => {
    navigate('/', { state: { name: "student" } });
  }
  return (
    <div>
        <h1>About</h1>
        <p>This is the about page.</p>
        <h1>{param.id}</h1>
        <button onClick={handleBtn}> Go To home</button>
        <Link to={`/contact/${name}`}>Contact</Link>
        <br />
    </div>
  )
}
