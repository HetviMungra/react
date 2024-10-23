import React from 'react'

import './App.css'
import ReduxApi from './ReduxApi'
import { Provider } from 'react-redux'
import { store } from './app/stor'

function App() {

  return (
    <>
      {/* <ReduxApi/> */}
      <Provider store={store}>
        <ReduxApi/>
      </Provider>

        
    </>
  )
}

export default App
