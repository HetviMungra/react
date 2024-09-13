import React from 'react'

export default function Controlled() {
    const [count, setCount] = React.useState('');
    const handelChange = (e) =>{
        console.log(e.target.value);
    }
  return (
    <div>
<h1>Controlled component</h1>
<input type="text" placeholder='Enter name' onChange={(e) => handelChange(e)}/>
    </div>
  )
}
