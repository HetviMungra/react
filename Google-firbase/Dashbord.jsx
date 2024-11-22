import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../FirebaseConfing';

export default function Dashbord() {
  const [account, setAccount] = useState();
  const navigate = useNavigate();
  useEffect(()=>{
    const user = auth.currentUser

    if(user)
    {
      setAccount(user)
    } 
    else{
      navigate("/")
    }

},[navigate])

  return (
    <div className="dashboard">
      <h1>Welcome to Your Google</h1>
      {account ? (
        <div className="user-info">
          <p className='h'>Hello , <span className="username">{account.displayName}</span> !</p>
          <div className="profile-pic">
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}