import React from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function Home() {
   
    let location = useLocation();

     let data = 'abc'
    let name = 'hetvi'
  return (
    <div>
        <h2>Home</h2>
        <p>this is home page</p>
        <h1>{location.state.name}</h1>
        <Link to={`/about/${data}`}>About</Link> 
        
        <br />
        <Link to={`/contact/${name}`}>Contact</Link>

    </div>

  )
}

