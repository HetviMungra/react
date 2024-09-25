import React from 'react'

export default function Local() {

  localStorage.setItem("name","student")
  localStorage.setItem("name2","student2")

  let data = localStorage.getItem("name")
  console.log(data)

  localStorage.removeItem("name") 

  let obj = {name:"hetvi",subject: "react"}
  localStorage.setItem("myobj",JSON.stringify(obj)) // localStorage may obj ko json  ma convert ka liya stringfy
  let objData = JSON.parse(localStorage.getItem("myobj")) // localStorage may obj ko string  ma convert ka liys parse
  console.log(objData)

  return (
    <div>
      <h1>Local</h1>
    </div>
  )
}

