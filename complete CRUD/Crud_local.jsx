import React, { useEffect, useState } from 'react'

export default function Crud_local() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [city, setCity] = useState("");

    const [record, setRecord] = useState(null);
    const [editIndex, setEditIndex] = useState(null);

    useEffect(() => {
        let data = JSON.parse(localStorage.getItem("Student")) || [];
        setRecord(data)
    }, [])

    const handleAdd = () => {
        let user = { id: Date.now(), name , age, city }
        let oldRecord = JSON.parse(localStorage.getItem("Student")) || []
        if (editIndex) {
            let singleData = record.find((item) => item.id == editIndex);
            singleData.id = editIndex 
            singleData.name = name
            singleData.age = age
            singleData.city = city
            localStorage.setItem("student",JSON.stringify(record))
            setEditIndex(null)


        }
        else
        {
        oldRecord.push(user)
        setRecord(oldRecord)
        localStorage.setItem("Student",JSON.stringify(oldRecord))
        }

        setName("");
        setAge("");
        setCity("");
    }

    const handaleDelete = (id) => {
        let deleltedata = record.filter((item) => item.id != id);
        setRecord(deleltedata)
        localStorage.setItem("Student", JSON.stringify(deleltedata))
    }

    const handleEdite = (id) => {
        let singleData = record.find((item) => item.id == id);
        setName(singleData.name);
        setAge(singleData.age)
        setCity(singleData.city)
        setEditIndex(id)
    }
    return (

        <div>
            <center>
                           <h1>CRUD with  Local Storage</h1>
            <input type="text" value={name} placeholder="Enter Name" onChange={(e) => setName(e.target.value)} />
            <input type="text" value={age} placeholder="Enter Age" onChange={(e) => setAge(e.target.value)} />
            <input type="text" value={city} placeholder="Enter City" onChange={(e) => setCity(e.target.value)} />


            <button onClick={handleAdd} > {editIndex ? "Update" : "Add"}</button>

            <br /> <br />
            <table width={500} height={60} border={2} >
                <thead>
                    <tr>
                        <th> ID </th>
                        <th> Name </th>
                        <th> Age </th>
                        <th> City </th>
                        <th colSpan={2}> </th>

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
                                <td><button onClick={() => handleEdite(item.id)}>Edit</button></td>
                                <td><button onClick={() => handaleDelete(item.id)}>Delete</button></td>

                            </tr>
                        })
                            :
                            ""

                    }
                </tbody>
            </table>
            </center>
 
        </div>
    )
}
