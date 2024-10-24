import React from 'react'
import { Provider } from 'react-redux'
import ReduxApi from './Recux/ReduxApi'
import { store } from './App/Store'
import './App.css'


function App() {

  return (
    <>
     <Provider store={store}>
      <ReduxApi/>
     </Provider>
    </>
  )
}

export default App
