
import React from 'react'
import { Link } from 'react-router-dom'


export default function Home({data}) {
  return (
    <div>
        <h1>Home</h1>
        <Link id='crud' to= {"/create"}>create</Link> &nbsp; &nbsp;
        <Link id='crud' to= {"/delete"}>delete</Link> &nbsp; &nbsp;
        <Link id='crud' to= {"/update"}>update</Link> &nbsp; &nbsp;
        <br />
        <br />
        <table border="2" height="30" width="50%" >
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Subject</th>
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
                    </tr>
                })
            }
        </tbody>
        </table>
    </div>
  )
}
