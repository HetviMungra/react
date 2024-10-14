import React from 'react'
import './App.css'
import { BrowserRouter, Routes ,Route } from 'react-router-dom'
import Home from './assets/Browser-router/Home'
import About from './assets/Browser-router/About'
import Contact from './assets/Browser-router/Contact'

function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/about/:id" element={<About />} />
        <Route path="/contact/:id" element={<Contact />} /> 

      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
