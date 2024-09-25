import React from 'react'

export default function Local2() {

    localStorage.setItem("Movie" , "Industry")
    localStorage.setItem("Movie2" , "Industry")

    let mname = localStorage.getItem("Movie")
    console.log (mname)

    localStorage.removeItem("Movie2")

    let dmovie = {name : "Kick" , type_of_Industry : "Bollywood"}
    localStorage.setItem("Movielist" , JSON.stringify(dmovie))
    let Moviedata = JSON.parse(localStorage.getItem("Movielist"))
    console.log(Moviedata)
  return (
    <div>

    </div>
  )
}
