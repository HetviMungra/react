import React, { useEffect, useRef }from 'react'

export default function Listkey() {
    const arr = ["Apple","Mango","Oreange","Banana"]

    const inputRef = useRef();
    // useEffect(() => {
    //     setTimeout(() => {
    //         inputRef.current.focus();
    //     }, 2000)
    // }, [])
    
      const handleClick = ()=> {
        inputRef.current.focus();
        let p = inputRef.current.value
        alert(`The value is: ${p}`)
      }

  return (
    <div>
        <h1>Key List</h1>
      {
        arr.map((e,i)=>{
            return <p key={i}> {e} </p>
        })
      }
      

      <h1>UseRef</h1>
        <input type="text" ref={inputRef} />
        <button onClick={handleClick}>Click</button>

    </div>
  )
}
