import React from 'react'
import { decrement, increment } from '../assets/Features/CounterSlice'
import { useDispatch, useSelector } from 'react-redux'

export default function ReduxCounter() {
    const count =useSelector((state) => {
        return state.counterKey
    })
    const dispatch =useDispatch();
  return (
   <center>
     <div>
        <h1>Redux Counter</h1>

        <h1>{count.count}</h1>

        <button onClick={() => dispatch(increment())}>+</button> 
        &nbsp;&nbsp;
        <button onClick={() => dispatch(decrement())}>-</button>
    </div> 
   </center>
  )
}
