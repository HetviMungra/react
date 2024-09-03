import React, { useEffect } from 'react'

export default function UseEffect() {
    const [count, setCount] = React.useState(0)

    useEffect(() =>{
        console.log("1.component did mount")
    })

    useEffect(() =>{
        console.log ( `2. component did mount first time`)
    },[count])

    useEffect(()=>{
        console.log("3. component did update")
    },[count])

    useEffect(()=>{
        console.log("4. component will unmount")
    },[])

  return (
    <div>
        <h1>UseEffect</h1>
        <h1>{count}</h1>
        <button onClick={() => setCount(count+1)}> Add </button>
    </div>
  )
}
