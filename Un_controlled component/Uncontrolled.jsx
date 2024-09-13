import React from 'react'

export default function Uncontrolled() {
    const inputRef = React.useRef();
    const handleClick =() => {
      let value = inputRef.current.value
      alert(`input value is ${value}`) ;
    }
    
  return (
    <div>
        <h1>Uncontrolled component</h1>
        <input type="text"  ref={inputRef}/>
        <button onClick={handleClick}>Click</button>
    </div>
  )
}
