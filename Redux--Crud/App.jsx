import React from 'react'
import './App.css'
 
import { Provider } from 'react-redux'
import ReduxCounter from './Redux/ReduxCounter'
import { store } from './app/Store'

function App() {

  return (
    <>
     <Provider store={store}>
  <ReduxCounter/>

     </Provider>
    </>
  )
}

export default App
