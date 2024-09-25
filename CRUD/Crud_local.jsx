import React, { useEffect, useState } from 'react'

export default function Crud_local() {
    const [name , setName]= useState("");
    const [age , setAge]= useState("");
    const [city , setCity]= useState("");
    const [record , setRecord]= useState(null);

    useEffect(() =>{
        let data = JSON.parse(localStorage.getItem("Student")) || [];
        setRecord(data)
    },[record])

    const handleAdd =() => {
        let user = {id : Date.now(), name,age,city}
        record.push(user);
        localStorage.setItem("Student",JSON.stringify(record));
    }
  return (

    <div>
        <h1>CRUD with  Local Storage</h1>
        <input type="text" id="name" placeholder="Enter Name" onChange={(e) => setName(e.target.value)}/>
        <input type="text" id="age" placeholder="Enter Age" onChange={(e) => setAge(e.target.value)}/>
        <input type="text" id="city" placeholder="Enter City" onChange={(e) => setCity(e.target.value)}/>


        <button onClick={handleAdd}>Add</button>

    <br /> <br />
        <table width={500} height={60} border={1} >
        <thead>
        <tr>
                <th>
                    ID
                </th>
                <th>
                    Name
                </th>
                <th>
                    Age
                </th>
                <th>
                    City
                </th>
            </tr>
        </thead>
        <tbody>
            {
                record ? record.map((item, index) => {
                    return <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                        <td>{item.city}</td>

                    </tr>
                })
                :
                ""
                
            }
        </tbody>
        </table>
    </div>
  )
}
