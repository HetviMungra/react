import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SingUp from './CRUD/SingUp'
import SingnIn from './CRUD/SingnIn'
import Dashbord from './CRUD/Dashbord'

function App() {

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' Component={SingUp}></Route>
      <Route path='/singin' Component={SingnIn}></Route>
      <Route path='/dashbord' Component={Dashbord}></Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
