import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Update({ data, setData }) {
  const navigate = useNavigate()
  const [editname, setEditName] = useState("")
  const [editsubject, setEditSubject] = useState("")
  const [editindex, setEditIndex] = useState(null)
  const handleEdit = (id) => {
    let Edit_data = data.find((item) => item.id === id)
    if (Edit_data) {
      setEditName(Edit_data.name)
      setEditSubject(Edit_data.subject)
      setEditIndex(id)
    }
  }
  const handleUpdate = () => {
    if(editindex !== null){
      const Update_Data = data.map((item) => 
        item.id === editindex
          ? {...item, name: editname, subject: editsubject}
          : item
      )
      setData(Update_Data)
      setEditIndex(null)
      setEditName("")
      setEditSubject("")
      navigate("/")
    }
  }
  return (
    <div>
      <h1>Update</h1>
      <input value={editname} type="text" placeholder='Enter Your Name...' onChange={(e) => setEditName(e.target.value)} />
      <input value={editsubject} type="text" placeholder='Enter Your Subject...' onChange={(e) => setEditSubject(e.target.value)} />
      <button onClick={handleUpdate}>Update Data</button>
      <br /><br />
      <table border="1" width="500px">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Subject</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            data &&
            data.map((e, i) => {
              return <tr key={i}>
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.subject}</td>
                <td>
                  <button onClick={() => handleEdit(e.id)}>Edit Data</button>
                </td>
              </tr>
            })
          }
        </tbody>
      </table>
    </div>
  )
}