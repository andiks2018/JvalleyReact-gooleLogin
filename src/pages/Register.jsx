import React from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../config/firebaseConfig'
import { useNavigate } from 'react-router-dom'

export default function Register() {

    //navigation
    const navigation = useNavigate()

    //function register
    const handleRegister = (e) => {
        e.preventDefault()
        let email = e.target.email.value
        let password = e.target.password.value
        let password2 = e.target.password2.value
        
        //validasi ala ala
        if (password !== password2) {
            return alert("password harus sama")
        }
        if (password.length < 6) {
            return alert("Password harus lebih dari 5 character")
        }

        //create user 
        createUserWithEmailAndPassword(auth, email, password)
            .then(res => { navigation("/") })
            .catch(err=>{console.error(err)})
    }
  return (
      <div className='App'>
            <form onSubmit={handleRegister}>
              <div>
                  <label htmlFor="email">email</label>
                  <input type="text" id='email' required />
              </div>
              <div>
                  <label htmlFor="password">password</label>
                  <input type="password" id='password' required />
             </div>
             <div>
                  <label htmlFor="password2">password</label>
                  <input type="password" id='password2' required />
             </div>
              <button type='submit'>Register</button>

          </form>
    </div>
  )
}
