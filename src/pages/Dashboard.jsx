import { signOut } from 'firebase/auth'
import { auth } from '../config/firebaseConfig'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Dashboard() {

  //navigation
  const navigation = useNavigate()

  //signout function
  const signOutFromApp = () => {
    signOut(auth)
      .then(res => { navigation("/") })
      .catch(err => { console.error(err) })
  }
  return (
      <div className='App'>
      <h1>Welcome</h1>
      <button onClick={signOutFromApp}>Logout</button>
    </div>
  )
}
