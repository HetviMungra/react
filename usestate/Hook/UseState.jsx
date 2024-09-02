import React from 'react'

export default function UseState() {
    const [count, setCount] = React.useState(0)
    const incrementCount = () => {
        setCount(count + 1); 
      };
      const decrementCount = () => {
        setCount(count - 1); 
      };
      const [name ,setName] = React.useState("Hetvi")
      const changeName = () => {
        setName("Hetvi Patel");
        };
        const [arr , setArr] = React.useState([1,2,3,4,5])

        const [obj,SetObj] = React.useState({name : "Hetvi ",subject: "React"})
        const changeObj = () => {   
            SetObj({name : "Hetvi Patel",subject: "React,Nood" })
            }
        const [arrobj,setArrObj]=React .useState([{name:"Hetvi",subject: "React"},{name:"kavya",subject:"Nood"}])

            
  return (
    <div>
        <center>
            <h1>Number :</h1>
        <p>Count: {count}</p>
        <button onClick={incrementCount}>+</button>
        <button onClick={decrementCount}>-</button>
        <hr/>
        <h1>String :</h1>
        <p> Name: {name}</p>
      
        <button onClick={changeName}>Change Name</button>
        <hr/>
        <h1>Array:</h1>
        {
            arr.map((item, index) => {
                return <p key={index}>{item}</p>
            })
        }
        <hr />
        <h1>Object :</h1>
        <p> Name: {obj.name}</p>
        <p> Subject: {obj.subject}</p>
        <button onClick={changeObj}>Change Object</button>
        <hr />
            <h1>Array with Object :</h1>
        {
            arrobj.map((e, i) => {
                return <ul key={i}>
                    <li>{e.name}</li>
                    <li>{e.subject}</li>
                </ul>
            })
        }
    <hr />
</center>


    </div>
  )
}
