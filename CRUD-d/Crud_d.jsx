import React, { useEffect,useState } from 'react'

export default function Crud_d() {
    const [name, setName] = useState  ("")
    const [sem , setSem] =useState  ("")
    const [subject, setSubject] = useState  ("")

    const [record, setRecord] = useState(null); //data store

    
    useEffect(() => {
        let data = JSON.parse(localStorage.getItem("Child")) || [];
        setRecord(data)
    }, [])


    let handleAdd = () => {
        let user = { roll: Date.now(),name, sem, subject};
        let oldRecord = JSON.parse(localStorage.getItem("Child")) || []
        oldRecord.push(user)
        setRecord(oldRecord)
        localStorage.setItem("Child", JSON.stringify([...oldRecord, user]))
      

        setName("");
        setSem("");
        setSubject("");


    }
    const handaleDelete = (roll) => {
        let deleltedata = record.filter((item) => item.roll != roll);
        setRecord(deleltedata)
        localStorage.setItem("Child", JSON.stringify(deleltedata))
    }
    
  return (
    <div>
        <center>
            <h1>CRUD Operations</h1>

            
            <input type="text" placeholder=' Enter Name' value={name} onChange={(e) => setName(e.target.value) }  />
            <input type="text" placeholder='Enter Semester' value={sem} onChange={(e) => setSem(e.target.value) }/>
            <input type="text" placeholder='Enter Subject' value={subject} onChange={(e) => setSubject(e.target.value) }/>
            <button onClick={handleAdd}>Add Data</button>
            <br /><br />

            <table width={400} height={60} border={2}>
                <thead>
                    <tr>
                        <th>roll no</th>
                        <th>Name</th>
                        <th>Semester</th>
                        <th>Subject</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {
                        record ? record.map((item, index) => {
                            return <tr key={index}>
                                <td>{item.roll}</td>
                                <td>{item.name}</td>
                                <td>{item.sem}</td>
                                <td>{item.subject}</td>
                                <td><button onClick={() => handaleDelete(item.roll)}>Delete</button></td>

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
