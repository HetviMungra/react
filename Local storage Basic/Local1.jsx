import React from 'react'

export default function Local1() {
    localStorage.setItem("fruit","apple")
    localStorage.setItem("veges","tomato")

    let shop = localStorage.getItem ("fruit")
    console.log (shop)

    localStorage.removeItem ("veges")

    let object = {animal : "Tiger" , birds : "Dove"}
    localStorage.setItem ("meobject", JSON.stringify(object))
   let objname = JSON.parse (localStorage.getItem("meobject"))
//    console.log (objname)

  return (
    <div>
        <h1>Local1</h1>
        {/* <p>{shop}</p> */}
        <h6>{objname.animal}</h6>
        
    </div>
  )
}
