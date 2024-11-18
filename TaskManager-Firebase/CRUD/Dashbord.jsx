import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { auth, db } from '../../firebaseConfig'
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore'
import { Link, useNavigate } from 'react-router-dom'

export default function DashBord() {

  const [user, setUser] = useState(null)

  const [userName, setUserName] = useState([])

  const [first_name, setFirstName] = useState("")
  const [last_name, setLastName] = useState("")
  const [task, setTask] = useState("")
  const [category, setCategory] = useState("")
  const [status, setStatus] = useState("Pending")

  const [record, setRecord] = useState([])
  const [editIndex, setEditIndex] = useState(null)

  useEffect(() => {
    let subscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser)
      }
    })
  }, [])

  useEffect(() => {
    if (user) {
      fetchUser()
      fetchData()
    }
  }, [user])

  const fetchUser = () => {
    console.log(user.uid)
    getDoc(doc(db, "users", user.uid))

      .then(data => {
        console.log(data.data())
        setUserName(data.data())
      })
  }

  // const fetchData = async () => {
  //   let allData = await getDocs(collection(db, "Todos"))
  //   let newData = allData.docs.map((data) => ({ docId: data.id, ...data.data() }))
  //   console.log(newData)
  //   setRecord(newData)
  // }

  const fetchData = async () => {
    const allData = await getDocs(collection(db, "Todos"))

    const filteredData = allData.docs.map((data) => ({
      docId: data.id, ...data.data()
    })).filter((item) => item.uid === user.uid) 

    console.log(filteredData)
    setRecord(filteredData)
  }


  const handleTask = async (event) => {
    event.preventDefault()

    if (!first_name || !last_name || !task || !category) {
      alert("Please Fill Out all Fields Before Adding a Task.");
      return; 
    }

    let obj = { uid: user.uid, first_name, last_name, task, category, status: status || "Pending" }

    if (editIndex == null) {
      let addData = await addDoc(collection(db, "Todos"), obj)
        .then(data => {
          setRecord([...record, obj])
          fetchData()
        })
    }
    else {
      let updateData = await updateDoc(doc(db, "Todos", editIndex), {
        id: user.uid, first_name, last_name, task, category, status
      })
      fetchData()
    }


    setFirstName("")
    setLastName("")
    setTask("")
    setCategory("")
    setStatus("Pending")
    setEditIndex(null)
  }


  const handleComplete = async (id) => {
    const taskToUpdate = record.find((item) => item.docId === id)
    const newStatus = taskToUpdate.status === "Pending" ? "Completed" : "Pending"

    await updateDoc(doc(db, "Todos", id), { status: newStatus })
    fetchData()
  }


  let handleDelete = async (id) => {
    let deleteData = await deleteDoc(doc(db, "Todos", id))
    fetchData()
  }

  let handleEdit = (id) => {
    console.log(id);

    let singleData = record.find(item => item.docId == id)
    setFirstName(singleData.first_name)
    setLastName(singleData.last_name)
    setTask(singleData.task)
    setCategory(singleData.category)
    setEditIndex(id)
  }

  return (
    <div className='dsbody'>
      <div>
        <Link to={"/singin"} className='fixed_btn'>
          <button>Sign In</button>
        </Link>

        <div className='head_name'>
          <h1>
            Hello,&nbsp;
            <span>
              {
                userName && <span>{userName.name}</span>
              }
            </span>
          </h1>
        </div>

        <div className='form_div'>
          <form action="">
            
            <div className="name_main">
              <div className="first_name">
                <h3>Task Name</h3>
                <input required value={first_name} type="text" placeholder='Enter Task Name' onChange={(e) => setFirstName(e.target.value)} />
              </div>
              <div className="last_name">
                <h3>Due Date</h3>
                <input required value={last_name} type="date"  onChange={(e) => setLastName(e.target.value)} />
              </div>
            </div>

            <div className="select_main">
              <div className="category">
                <h3>Priority</h3>
                <select required value={category} name="" id="" onChange={(e) => setCategory(e.target.value)}>
                  <option value="">Select Appropriate Option</option>
                  <option value="High">🔴 High</option>
                  <option value="Medium">🟡 Medium</option>
                  <option value="Low">🟢 Low</option>
                </select>
              </div>
            

              <div className="task">
                <h3>Status</h3>
                <select required value={task} name="" id="" onChange={(e) => setTask(e.target.value)} >
                  <option value="">Select Status</option>
                  <option value="In Prograss">In Prograss</option>
                  <option value="Stuck">Stuck</option>
                  <option value="Todo">Todo</option>
                 
                </select>
              </div>
            </div>
            <br />

            <center>
              <button type="button" onClick={(e) => handleTask(e)}>
                {editIndex == null ? "Add Task" : "Update Task"}
              </button>
            </center>
          </form>
        </div>

        <br />

        <div className="task_manager" style={{ height: record && record.length > 0 ? '270px' : 'auto' }}>
          {
            record
              ? record.map((e, i) => {

                const BgColor = e.category === "High" ? "rgb(240, 56, 56)"
                  : e.category === "Medium" ? "rgb(255,147,0)"
                    : e.category === "Low" ? "green"
                      : "none";

                const BgOpacity = e.status === "Completed" ? 0.4 : 2;

                return <div className="task_div" key={i} style={{ backgroundColor: BgColor, opacity: BgOpacity }} >
                  <div className='left_div'>
                    <h5>{e.status || "No Status"}</h5>
                  </div>

                  <div className="right_div">
                    <h1>{e.first_name}</h1>
                    <h4>{e.task}</h4>
                    <h3>{e.last_name}</h3>
                    <span>{e.category}</span>
                    <br /><br />
                    <div className="record_btn">
                      <button className='edit_btn' onClick={() => handleEdit(e.docId)}>Edit</button>
                      <button className='delete_btn' onClick={() => handleDelete(e.docId)}>Delete</button>
                      <button className='comp_btn' onClick={() => handleComplete(e.docId)}>{e.status === "Pending" ? "Complete" : "Pending"}</button>
                    </div>
                  </div>
                </div>
              })
              : ""
          }
        </div>
      </div>
    </div>
  )
}