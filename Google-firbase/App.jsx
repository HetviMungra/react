import React from 'react'
import './App.css'
import Login from './Login'
import Dashbord from './Dashbord'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {


  return (
    <>
      <BrowserRouter>
     <Routes>
      <Route path='/' Component={Login}></Route>
      <Route path='/dashbord' Component={Dashbord}></Route>
     </Routes>
     </BrowserRouter>

    </>
  )
}

export default App
